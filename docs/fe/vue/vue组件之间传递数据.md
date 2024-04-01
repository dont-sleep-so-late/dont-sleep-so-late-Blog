---
title: vue 组件之间传递数据
date: 2023-09-08 01:30:15
tags: [Vue,Vue组件间通信]
categories: 前端开发
---



# vue组件间通信

组件是 vue.js 最强大的功能之一，而组件实例的作用域是相互独立的，这就意味着不同组件之间的数据无法相互引用。如何传递数据也成了组件的重要知识点之一。

## 组件

组件与组件之间，还存在着不同的关系。父子关系与兄弟关系（不是父子的都暂称为兄弟吧）。

### 父子组件

父子关系即是组件 A 在它的模板中使用了组件 B，那么组件 A 就是父组件，组件 B 就是子组件。

```js
// 注册一个子组件
Vue.component('child', {
    data: function(){
        return {
            text: '我是father的子组件！'
        }
    },
    template: '<span>{{ text }}</span>'
})
// 注册一个父组件
Vue.component('father', {
    template: '<div><child></child></div>'  // 在模板中使用了child组件
})
```

直接使用 father 组件的时候：

```js
<div id="app">
    <father></father>
</div>
```

页面中就会渲染出 ：我是father的子组件！

father 组件在模板中使用了 child 组件，所以它就是父组件，child 组件被使用，所以 child 组件就是子组件。

### 兄弟组件

两个组件互不引用，则为兄弟组件。

```js
Vue.component('brother1', {
    template: '<div>我是大哥</div>'
})
Vue.component('brother2', {
    template: '<div>我是小弟</div>'
})
```

使用组件的时候：

```js
<div id="app">
    <brother1></brother1>
    <brother2></brother2>
</div>
```

页面中就会渲染出 ：

我是大哥

我是小弟

## Prop(父传子)

子组件想要使用父组件的数据，我们需要通过子组件的 props 选项来获得父组件传过来的数据。以下我使用在 .vue 文件中的格式来写例子。

### 如何传递数据

在父组件 father.vue 中引用子组件 child.vue，把 name 的值传给 child 组件。

```vue
<template>
    <div class="app">
        // message 定义在子组件的 props 中
        <child :message="name"></child>
    </div>
</template>
<script>
    import child from './child.vue';
    export default {
        components: {
            child
        },
        data() {
            return {
                name: 'linxin'
            }
        }
    }
</script>
```

在子组件 child.vue 中的 props 选项中声明它期待获得的数据

```vue
<template>
    <span>Hello {{message}}</span>
</template>
<script>
    export default {
        // 在 props 中声明获取父组件的数据通过 message 传过来
        props: ['message']
    }
</script>
```

那么页面中就会渲染出：Hello linxin

### 单向数据流

当父组件的 name 发生改变，子组件也会自动地更新视图。但是在子组件中，我们不要去修改 prop。如果你必须要修改到这些数据，你可以使用以下方法：

方法一：把 prop 赋值给一个局部变量，然后需要修改的话就修改这个局部变量，而不影响 prop

```js
export default {
    data(){
        return {
            newMessage: null
        } 
    },
    props: ['message'],
    created(){
        this.newMessage = this.message;
    }
}
```

方法二：在计算属性中对 prop 进行处理

```js
export default {
    props: ['message'],
    computed: {
        newMessage(){
            return this.newMessage + ' 哈哈哈';
        }
    }
}
```

## 自定义事件$emit(子传父)

prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。修改子组件的 prop 值，是不会传回给父组件去更新视图的。那么子组件要如何去与父组件通讯呢？

那就是自定义事件。通过在父组件 $on(eventName) 监听自定义事件，当子组件里 $emit(eventName) 触发该自定义事件的时候，父组件执行相应的操作。

- $emit 绑定一个自定义事件，当这个事件被执行的时候就会将参数传递给父组件，而父组件通过v-on监听并接收参数

比如在父组件中控制一个弹框子组件的显示，在子组件中按下关闭之后，告诉父组件去隐藏它，然后父组件就执行操作隐藏弹框。

父组件

```vue
<template>
    <div class="app">
        // hide 为自定义事件，名字可以自己随便起，不能有大写字母，可以使用短横线
        // @hide 监听子组件触发 hide 事件，则会执行 hideDialog 方法
        <dialog :is-show="show" @hide="hideDialog"></dialog>
        <button @click="showDialog">显示弹框</button>
    </div>
</template>
<script>
    import dialog from './dialog.vue';
    export default {
        components: { dialog },
        data() {
            return {
                show: false
            }
        },
        methods: {
            showDialog() {
                this.show = true;
            },
            hideDialog() {
                this.show = false;
            }
        }
    }
</script>
```

在子组件 dialog.vue 中：

```vue
<template>
    <div class="dialog" v-show="isShow">
        <p>这里是弹框子组件</p>
        <button @click="toHide">关闭弹框</button>
    </div>
</template>
<script>
    export default {
        // 驼峰式命名的 prop 需要转换为相对应的短横线隔开式 is-show
        props: ['isShow'],
        methods: {
            toHide(){
                // $emit 方法触发父组件的监听事件
                this.$emit('hideDialog');
            }
        }
    }
</script>
```

这样就实现了父子组件之间的相互通讯。

## ref / $refs

这种方式也是实现父子组件之间的通信

ref：这个属性用在子组件上，它的用用就指向了子组件的实例，可以通过实例来访问组件的数据和方法

**用法：**

在子组件中：

```js
export default {
  data () {
    return {
      name: 'JavaScript'
    }
  },
  methods: {
    sayHello () {
      console.log('hello')
    }
  }
}

```

**在父组件中：**

```js
<template>
  <child ref="child"></component-a>
</template>
<script>
  import child from './child.vue'
  export default {
    components: { child },
    mounted () {
      console.log(this.$refs.child.name);  // JavaScript
      this.$refs.child.sayHello();  // hello
    }
  }
</script>

```



## Event Bus（$emit / $on）

**一种可以在任意组件间通信的方式**，本质上就是一个对象，它必须满足以下条件

1. 所有的组件对象都必须能看见他 
2. 这个对象必须能够使用 **$on** **$emit** **$off** 方法去绑定、触发和解绑事件

eventBus 事件总线适用于**父子组件、非父子组件**等之间的通信，使用步骤如下：

使用步骤

1. 定义全局事件总线

```js
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})
```

1. 使用事件总线 
2. a.接收数据：A组件想接收数据，则在A组件中给 **$bus** 绑定自定义事件，事件的回调留在A组件自身

```js
	export default{
		methods(){
			demo(data){...}
			}
			...
		mounted(){
			this.$bus.$on('xxx',this.demo) //子组件
		}
	}

```

​		b. 提供数据：this.$bus.$emit('事件名',返回的数据) //父组件

```js
		methods: {
			sendStudentName(){
				this.$bus.$emit('hello',data)
			}
		},
```

​			最好在 **beforeDestroy** 钩子中，用 $off('事件名') 去解绑当前组件所用到的事件

```js
		beforeDestroy() {
			this.$bus.$off('hello')
		},
```



## Vuex

- state：用于数据的存储，是store中的唯一数据源

- getters：如vue中的计算属性一样，基于state数据的二次包装，常用于数据的筛选和多个数据的相关性计算

- mutations：类似函数，改变state数据的唯一途径，且不能用于处理异步事件

- actions：类似于mutation，用于提交mutation来改变状态，而不直接变更状态，可以包含任意异步操作

- modules：类似于命名空间，用于项目中将各个模块的状态分开定义和操作，便于维护

- ### **Vuex使用步骤：**

  #### **（1）这里我们先新建 store文件夹， 对Vuex进行一些封装处理**

  在 store 文件夹下添加 index.js 文件(src/store/index.js)

  ```javascript
  // index.js
   
  //引入Vue核心库
  import Vue from 'vue'
  //引入Vuex
  import Vuex from 'vuex'
  //应用Vuex插件
  Vue.use(Vuex)
  //准备actions对象——响应组件中用户的动作
  const actions = {}
  //准备mutations对象——修改state中的数据
  const mutations = {}
  //准备state对象——保存具体的数据
  const state = {}
  //创建并暴露store
  export default new Vuex.Store({
      actions,
      mutations,
      state
  })
  ```
  
  #### **（2）在 store 文件夹下添加 `module` 文件夹，在module文件夹再新建 `user.js` 文件**
  
  ​	初始化数据、配置actions、配置mutations，操作文件store.js
1. 组件中读取vuex中的数据：$store.state.sum

2. 组件中修改vuex中的数据：$store.dispatch('action中的方法名',数据)或 $store.commit('mutations中的方法名',数据)

3. 备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接编写commit

  

  #### **(3) 在main.js中创建vm时传入store配置项 **

  ```js
  //引入store
  import store from './store'
  ......
  //创建vm
  new Vue({
      el: '#app',
      render: h => h(App),
      store
  })
  ```

  #### 注意：

  **commit  是操作  mutations**

  **dispatch  是操作  actions**

  

  #### **例子：**

  **（1）src/store/index.js**

  ```js
  //该文件用于创建Vuex中最为核心的store
  import Vue from 'vue'
  //引入Vuex
  import Vuex from 'vuex'
  //应用Vuex插件
  Vue.use(Vuex)
  //准备actions——用于响应组件中的动作
  const actions = {
      /* jia(context,value){
          console.log('actions中的jia被调用了')
          context.commit('JIA',value)
      },
      jian(context,value){
          console.log('actions中的jian被调用了') 
          context.commit('JIAN',value)
    }, */
      jiaOdd(context,value){
        console.log('actions中的jiaOdd被调用了')
          if(context.state.sum % 2){
              context.commit('JIA',value)
          }
      },
      jiaWait(context,value){
          console.log('actions中的jiaWait被调用了')
          setTimeout(()=>{
              context.commit('JIA',value)
          },500)
      }
  }
  //准备mutations——用于操作数据（state）
  const mutations = {
      JIA(state,value){
        console.log('mutations中的JIA被调用了')
          state.sum += value
    },
      JIAN(state,value){
          console.log('mutations中的JIAN被调用了')
          state.sum -= value
      }
  }
  //准备state——用于存储数据
  const state = {
      sum:0 //当前的和
  }
  //创建并暴露store
  export default new Vuex.Store({
      actions,
      mutations,
      state,
  })
  ```

  **（2）Count.vue**

  ```js
  
  <template>
      <div>
          <h1>当前求和为：{{$store.state.sum}}</h1>
          <select v-model.number="n">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
          <button @click="incrementOdd">当前求和为奇数再加</button>
          <button @click="incrementWait">等一等再加</button>
      </div>
  </template>
  <script>
      export default {
          name:'Count',
          data() {
              return {
                  n:1, //用户选择的数字
              }
          },
          methods: {
              increment(){
                  // commit 是操作 mutations
                  this.$store.commit('JIA',this.n)
              },
              decrement(){
                  // commit 是操作 mutations
                  this.$store.commit('JIAN',this.n)
              },
              incrementOdd(){
                  // dispatch 是操作 actions
                  this.$store.dispatch('jiaOdd',this.n)
              },
              incrementWait(){
                  // dispatch 是操作 actions
                  this.$store.dispatch('jiaWait',this.n)
              },
          },
          mounted() {
              console.log('Count',this)
          },
      }
  </script>
  <style lang="css">
      button{
          margin-left: 5px;
      }
  </style>
  
  ```

  

## localStorage / sessionStorage

这种通信比较简单,缺点是数据和状态比较混乱,不太容易维护。

- 通过`window.localStorage.getItem(key)`获取数据
- 通过`window.localStorage.setItem(key,value)`存储数据

**注意用`JSON.parse()` / `JSON.stringify()` 做数据格式转换， localStorage / sessionStorage可以结合vuex, 实现`数据的持久保存`,同时使用vuex解决数据和状态混乱问题.**



## 自己实现简单的 Store 模式

对于小型的项目，通信十分简单，这时使用 Vuex 反而会显得冗余和繁琐，这种情况最好不要使用 Vuex，可以自己在项目中实现简单的 Store。

```js
// store.js
const store = {
  debug: true,
  state: {
    author: 'yushihu!'
  },
  setAuthorAction (newValue) {
    if (this.debug) console.log('setAuthorAction triggered with', newValue)
    this.state.author = newValue
  },
  deleteAuthorAction () {
    if (this.debug) console.log('deleteAuthorAction triggered')
    this.state.author = ''
  }
}
export default store
```

