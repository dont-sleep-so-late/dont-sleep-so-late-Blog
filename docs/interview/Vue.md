
## Vue 的设计模式

### 介绍一下 MVVM 模式，和 MVC 模式有什么区别？

MVVM 即 Model-View-ViewModel 的简写，即模型-视图-视图模型。模型（Model）指的是后端传递的数据。视图（View）指的是所看到的页面。视图模型（ViewModel）是 MVVM 模式的核心，它是连接 View 和 Model 的桥梁。
视图模型有两个方向的作用：
1.将模型（Model）转化成视图（View），即将后端传递的数据转化成所看到的页面，实现的方式是：数据绑定。
2.将视图（View）转化成模型（Model），即将所看到的页面转化成后端的数据，实现的方式是：DOM 事件监听。当这两个方向的数据转换都实现时，我们称之为数据的双向绑定。

**MVVM模型图解：**

![](https://pic.leetcode.cn/1677830973-gNoWGQ-image.png)

MVC 是 Model-View-Controller 的简写，即模型-视图-控制器。M 和 V 指的意思和 MVVM 中的 M 和 V 意思一样。C 即 Controller 指的是页面业务逻辑。使用 MVC 的目的就是将 M 和 V 的代码分离。MVC 是单向通信，也就是 View 跟 Model ，必须通过 Controller 来承上启下。

**MVC模型图解：**

![](https://pic.leetcode.cn/1677830876-FXzrYJ-image.png)

MVVM 与 MVC 最大的区别就是：MVVM 实现了 View 和 Model 的自动同步，也就是当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素来改变 View 的显示，而是改变属性后该属性对应 View 层显示会自动改变（双向绑定）。

------

## 生命周期

### Vue2 的生命周期有哪些

生命周期可以理解为三部分，第一部分为初始化 Vue 实例的过程，第二部分为数据渲染，更新 Dom 的过程，第三部分为销毁实例的过程，每一个部分都有对应的钩子函数来完成对应的部分过程。

初始化阶段的钩子函数：

```js
beforeCreate()//实例创建前：模板和数据均未获取到
created()//实例创建后：最早可以获得data数据，但模板还未获取到
beforfeMount()//数据挂载前：模板已经获取到，但是数据未挂载到模板上
mounted()//数据挂载后：数据已挂载到模板中
```

更新阶段的钩子函数：

```KS
beforeUpdate()//模板更新前：data改变后，更新数据模板前调用 
updated()//模板更新后：将data渲染到数据模板中
```

销毁阶段的钩子函数：

```JS
beforeDestroy() //实例销毁前 
destroyed() //实例销毁后
```

![](https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/images/20240307234024.png)



### keep-alive 中的生命周期有哪些

keep-alive 是 Vue 提供的一个内置组件，用来对组件进行缓存，在组件切换过程中将状态保留在内存中，防止重复渲染 DOM。 如果为一个组件包裹了 keep-alive，那么它会多出两个生命周期：deactivated、activated。同时，beforeDestroy 和 destroyed 就不会再被触发了，因为组件不会被真正销毁。 当组件被换掉时，会被缓存到内存中、触发 deactivated 生命周期； 当组件被切回来时，再去缓存里找这个组件、触发 activated 钩子函数。



### 父子组件生命周期执行顺序

#### 1.挂载阶段

该过程主要涉及 beforeCreate、created、beforeMount、mounted 4 个钩子函数。执行顺序为：
父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

一定得等子组件挂载完毕后，父组件才能挂在完毕，所以父组件的 mounted 在最后。

#### 2.更新阶段

该过程主要涉及 beforeUpdate、updated 2 个钩子函数。注意，当父子组件有数据传递时，才有这个更新阶段执行顺序的比较。执行顺序为：

父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

#### 3.销毁阶段

该过程主要涉及beforeDestroy、destroyed 2 个钩子函数。执行顺序为：
父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

#### 总结：

1.当父组件执行完 beforeMount 挂载开始后，会依次执行子组件中的钩子，直到全部子组件 mounted 挂载到实例上，父组件才会进入 mounted 钩子

2.子级触发事件，会先触发父级 beforeUpdate 钩子，再去触发子级 beforeUpdate 钩子，下面又是先执行子级 updated 钩子，后执行父级 updated 钩子



### 平时发送异步请求在哪个生命周期，并解释原因

我们可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：能更快获取到服务端数据，减少页面加载时间，用户体验更好；SSR 不支持 beforeMount 、mounted 钩子函数，放在 created 中有助于一致性。



#### 【延伸问答】created 和 mouted 区别

created 生命周期钩子函数会在组件实例被创建之后立即调用，但是此时组件的模板还没有被渲染成 HTML，因此在这个时候不能访问组件中的 DOM 元素。

mounted 生命周期钩子函数则会在组件的模板被渲染成 HTML 之后调用，这个时候可以访问组件中的 DOM 元素。通常在这个钩子函数中进行异步请求数据、初始化插件、订阅事件等操作。

总之，created 钩子函数适用于组件初始化时需要进行一些操作，而 mounted 钩子函数适用于需要操作组件的 DOM 元素时。

