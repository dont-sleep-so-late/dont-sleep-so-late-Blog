
本文将介绍如何使用Vue3来封装一些比较有用的组合API，主要包括背景、实现思路以及一些思考。

就我自己的感觉而言，`Hook`与`Composition API`概念是很类似的，事实上在React大部分可用的Hook都可以使用Vue3再实现一遍。

为了拼写方便，下文内容均使用Hook代替`Composition API`。

## useRequest

### 背景

使用hook来封装一组数据的操作是很容易的，例如下面的`useBook`

```javascript
import {ref, onMounted} from 'vue'

function fetchBookList() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 1000)
    })
}

export function useBook() {
    const list = ref([])
    const loading = ref(false)
    const getList = async () => {
        loading.value = true
        const data = await fetchBookList({page: 1})
        loading.value = false
        list.value = data
    }

    onMounted(() => {
        getList()
    })

    return {
        list,
        loading,
        getList
    }
}
```



其中封装了获取资源、处理加载状态等逻辑，看起来貌似能满足我们的需求了

缺点在于对应另外一个资源而言，我们貌似还需要写类似的模板代码，因此可以将这一堆代码进行抽象，封装成`useApi`方法

### 实现

```javascript
function useApi(api) {
    const loading = ref(false)
    const result = ref(null)
    const error = ref(null)

    const fetchResource = (params) => {
        loading.value = true
        return api(params).then(data => {
            // 按照约定，api返回的结果直接复制给result
            result.value = data
        }).catch(e => {
            error.value = e
        }).finally(() => {
            loading.value = false
        })
    }
    return {
        loading,
        error,
        result,
        fetchResource
    }
}
```



然后修改上面的`useBook`方法

```javascript
function useBook2() {
    const {loading, error, result, fetchResource,} = useApi(fetchBookList)

    onMounted(() => {
        fetchResource({page: 1})
    })

    return {
        loading,
        error,
        list: result
    }
}
```



注意这是一个非常通用的方法，假设现在需求封装其他的请求，处理起来也是非常方便的，不需要再一遍遍地处理loading和error等标志量

```javascript
function fetchUserList() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const payload = {
                code: 200,
                data: [11, 22, 33],
                msg: 'success'
            }
            resolve(payload)
        }, 1000)
    })
}

function useUser() {
    const {loading, error, result, fetchResource,} = useApi((params) => {
        // 封装请求返回值
        return fetchUserList(params).then(res => {
            console.log(res)
            if (res.code === 200) {
                return res.data
            }
            return []
        })
    })
    // ...
}
```



### 思考

处理网络请求是前端工作中十分常见的问题，处理上面列举到的加载、错误处理等，还可以包含去抖、节流、轮询等各种情况，还有离开页面时取消未完成的请求等，都是可以在`useRequest`中进一步封装的

## useEventBus

EventBus在多个组件之间进行事件通知的场景下还是比较有用的，通过监听事件和触发事件，可以在订阅者和发布者之间解耦，实现一个常规的eventBus也比较简单

```javascript
class EventBus {
    constructor() {
        this.eventMap = new Map()
    }

    on(key, cb) {
        let handlers = this.eventMap.get(key)
        if (!handlers) {
            handlers = []
        }
        handlers.push(cb)
        this.eventMap.set(key, handlers)
    }

    off(key, cb) {
        const handlers = this.eventMap.get(key)
        if (!handlers) return
        if (cb) {
            const idx = handlers.indexOf(cb)
            idx > -1 && handlers.splice(idx, 1)
            this.eventMap.set(key, handlers)
        } else {
            this.eventMap.delete(key)
        }
    }

    once(key, cb) {
        const handlers = [(payload) => {
            cb(payload)
            this.off(key)
        }]
        this.eventMap.set(key, handlers)
    }

    emit(key, payload) {
        const handlers = this.eventMap.get(key)
        if (!Array.isArray(handlers)) return
        handlers.forEach(handler => {
            handler(payload)
        })
    }
}
```



我们在组件初始化时监听事件，在交互时触发事件，这些是很容易理解的；但很容易被遗忘的是，我们还需要在组件卸载时取消事件注册，释放相关的资源。

因此可以封装一个`useEventBus`接口，统一处理这些逻辑

### 实现

既然要在组件卸载时取消注册的相关事件，简单的实现思路是：只要在注册时(`on`和`once`)收集相关的事件和处理函数，然后在`onUnmounted`的时候取消(`off`)收集到的这些事件即可

因此我们可以劫持事件注册的方法，同时额外创建一个`eventMap`用于收集使用当前接口注册的事件

```javascript
// 事件总线，全局单例
const bus = new EventBus()

export default function useEventBus() {
    let instance = {
        eventMap: new Map(),
        // 复用eventBus事件收集相关逻辑
        on: bus.on,
        once: bus.once,
        // 清空eventMap
        clear() {
            this.eventMap.forEach((list, key) => {
                list.forEach(cb => {
                    bus.off(key, cb)
                })
            })
            eventMap.clear()
        }
    }
    let eventMap = new Map()
    // 劫持两个监听方法，收集当前组件对应的事件
    const on = (key, cb) => {
        instance.on(key, cb)
        bus.on(key, cb)
    }
    const once = (key, cb) => {
        instance.once(key, cb)
        bus.once(key, cb)
    }

    // 组件卸载时取消相关的事件
    onUnmounted(() => {
        instance.clear()
    })
    return {
        on,
        once,
        off: bus.off.bind(bus),
        emit: bus.emit.bind(bus)
    }
}
```



这样，当组价卸载时也会通过`instance.clear`移除该组件注册的相关事件，比起手动在每个组件`onUnmounted`时手动取消要方便很多。

### 思考

这个思路可以运用在很多需要在组件卸载时执行清理操作的逻辑，比如：

- DOM事件注册`addEventListener`和`removeEventListener`
- 计时器`setTimeout`和`clearTimeout`
- 网络请求`request`和`abort`

从这个封装也可以看见组合API一个非常明显的优势：尽可能地抽象公共逻辑，而无需关注每个组件具体的细节

## useModel

### 背景

当掌握了Hook（或者Composition API）之后，感觉万物皆可hook，总是想把数据和操作这堆数据的方法封装在一起，比如下面的计数器

```javascript
function useCounter() {
    const count = ref(0)
    const decrement = () => {
        count.value--
    }
    const increment = () => {
        count.value++
    }
    return {
        count,
        decrement,
        increment
    }
}
```



这个`useCounter`暴露了获取当前数值count、增加数值decrement和减少数值increment等数据和方法，然后就可以在各个组件中愉快地实现计数器了

在某些场景下我们希望多个组件可以共享同一个计数器，而不是每个组件自己独立的计数器。

一种情况是使用诸如vuex等全局状态管理工具，然后修改`useCounter`的实现

```javascript
import {createStore} from 'vuex'


const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        setCount(state, payload) {
            state.count = payload
        }
    }
})
```



然后重新实现`useCounter`

```javascript
export function useCounter2() {
    const count = computed(() => {
        return store.state.count
    })
    const decrement = () => {
        store.commit('setCount', count.value + 1)
    }
    const increment = () => {
        store.commit('setCount', count.value + 1)
    }
    return {
        count,
        decrement,
        increment
    }
}
```



很显然，现在的`useCounter2`仅仅只是store的`state`与`mutations`的封装，直接在组件中使用store也可以达到相同的效果，封装就变得意义不大；此外，如果单单只是为了这个功能就为项目增加了vuex依赖，显得十分笨重。

基于这些问题，我们可以使用一个`useModel`来实现复用某个钩子状态的需求

### 实现

整个思路也比较简单，使用一个Map来保存某个hook的状态

```javascript
const map = new WeakMap()
export default function useModel(hook) {
    if (!map.get(hook)) {
        let ans = hook()
        map.set(hook, ans)
    }
    return map.get(hook)
}
```



然后包装一下`useCounter`

```javascript
export function useCounter3() {
    return useModel(useCounter)
}

// 在多个组件调用
const {count, decrement, increment} = useCounter3()
// ...
const {count, decrement, increment} = useCounter3()
```



这样，在每次调用`useCounter3`时，都返回的是同一个状态，也就实现了多个组件之间的hook状态共享。

### 思考

`userModel`提供了一种除`vuex`和`provide()/inject()`之外共享数据状态的思路，并且可以很灵活的管理数据与操作数据的方案，而无需将所有state放在一起或者模块下面。

缺点在于，当不使用`useModel`包装时，`useCounter`就是一个普通的hook，后期维护而言，我们很难判断某个状态到底是全局共享的数据还是局部的数据。

因此在使用`useModel`处理hook的共享状态时，还要要慎重考虑一下到底合不合适。

## useReducer

redux的思想可以简单概括为

- store维护全局的state数据状态，
- 各个组件可以按需使用state中的数据，并监听state的变化
- `reducer`接收action并返回新的state，组件可以通过`dispatch`传递action触发reducer
- state更新后，通知相关依赖更新数据

我们甚至可以将redux的使用hook化，类似于

```javascript
function reducer(state, action){
    // 根据action进行处理
    // 返回新的state
}
const initialState = {}
const {state, dispatch} = useReducer(reducer, initialState);
```



### 实现

借助于Vue的数据响应系统，我们甚至不需要实现任何发布和订阅逻辑

```javascript
import {ref} from 'vue'

export default function useReducer(reducer, initialState = {}) {
    const state = ref(initialState)
     // 约定action格式为 {type:string, payload: any}
    const dispatch = (action) => {
        state.value = reducer(state.value, action)
    }
    return {
        state,
        dispatch
    }
}
```



然后实现一个`useRedux`负责传递`reducer`和`action`

```javascript
import useReducer from './index'

function reducer(state, action) {
    switch (action.type) {
        case "reset":
            return initialState;
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
    }
}

function useStore() {
    return useReducer(reducer, initialState);
}
```



我们希望是维护一个全局的store，因此可以使用上面的`useModel`

```javascript
export function useRedux() {
    return useModel(useStore);
}
```



然后就可以在组件中使用了

```javascript
<template>
<div>
  <button @click="dispatch({type:'decrement'})">-</button>
  <span>{{ state.count }}</span>
  <button @click="dispatch({type:'increment'})">+</button>
</div>
</template>

<script>
export default {
  name: "useReducer",
  setup() {
    const {state, dispatch} = useStore()
    return {
      state,
      dispatch
    }
  }
}
</script>
```



看起来跟我们上面`useModel`的例子并没有什么区别，主要是暴露了通用的`dispatch`方法，在reducer处维护状态变化的逻辑，而不是在每个useCounter中自己维护修改数据的逻辑

### 思考

当然这个redux是非常简陋的，包括中间件、`combineReducers`、`connect`等方法均为实现，但也为我们展示了一个最基本的redux数据流转过程。

## useDebounce与useThrottle

### 背景

前端很多业务场景下都需要处理节流或去抖的场景，节流函数和去抖函数本身没有减少事件的触发次数，而是控制事件处理函数的执行来减少实际逻辑处理过程，从而提高浏览器性能。

一个去抖的场景是：在搜索框中根据用户输入的文本搜索关联的内容并下拉展示，由于input是一个触发频率很高的事件，一般需要等到用户停止输出文本一段时间后才开始请求接口查询数据。

先来实现最原始的业务逻辑

```javascript
import {ref, watch} from 'vue'

function debounce(cb, delay = 100) {
    let timer
    return function () {
        clearTimeout(timer)
        let args = arguments,
            context = this
        timer = setTimeout(() => {
            cb.apply(context, args)
        }, delay)
    }
}
export function useAssociateSearch() {
    const keyword = ref('')

    const search = () => {
        console.log('search...', keyword.value)
        // mock 请求接口获取数据
    }

    // watch(keyword, search) // 原始逻辑，每次变化都请求
    watch(keyword, debounce(search, 1000)) // 去抖，停止操作1秒后再请求

    return {
        keyword
    }
}
```



然后在视图中引入

```html
<template>
  <div>
    <input type="text" v-model="keyword">
  </div>
</template>

<script>
import {useAssociateSearch} from "../useDebounce";

export default {
  name: "useDebounce",
  setup() {
    const {keyword} = useAssociateSearch()
    return {
      keyword
    }

  }
}
</script>
```



与`useApi`同理，我们可以将这个debounce的逻辑抽象出来，，封装成一个通用的`useDebounce`

### 实现useDebounce

貌似不需要我们再额外编写任何代码，直接将`debounce`方法重命名为`useDebounce`即可，为了凑字数，我们还是改装一下，同时增加cancel方法

```javascript
export function useDebounce(cb, delay = 100) {
    const timer = ref(null)

    let handler = function () {
        clearTimeout(timer.value)
        let args = arguments,
            context = this
        timer.value = setTimeout(() => {
            cb.apply(context, args)
        }, delay)
    }

    const cancel = () => {
        clearTimeout(timer)
        timer.value = null
    }
    
    return {
        handler,
        cancel
    }
}
```



### 实现useThrottle

节流与去抖的封装方式基本相同，只要知道`throttle`的实现就可以了。

```javascript
export function useThrottle(cb, duration = 100) {
    let start = +new Date()
    return function () {
        let args = arguments
        let context = this
        let now = +new Date()
        if (now - start >= duration) {
            cb.apply(context, args)
            start = now
        }
    }
}
```



### 思考

从去抖/节流的形式可以看出，某些hook与我们之前的工具函数并没有十分明显的边界。是将所有代码统一hook化，还是保留原来引入工具函数的风格，这是一个需要思考和实践的问题

## 小结

本文主要展示了几种Hook的封装思路和简单实现

- `useRequest`用于统一管理网络请求相关状态，而无需在每次网络请求中重复处理loading、error等逻辑
- `useEventBus`实现了在组件卸载时自动取消当前组件监听的事件，无需重复编写`onUnmounted`代码，这个思路也可以用于DOM事件、定时器、网络请求等注册和取消
- `useModel`实现了在多个组件共享同一个hook状态，展示了一种除vuex、`provide/inject`函数之外跨组件共享数据的方案
- `useReducer`利用hook实现了一个简易版的`redux`，并且利用`useModel`实现了全局的store
- `useDebounce`与`useThrottle`，实现了去抖和节流，并思考了hook化的代码风格与常规的util代码风格，以及是否有必要将所有的东西都hook化