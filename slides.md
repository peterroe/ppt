---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# 前后端是如何交互的？

How does the front and back end interact?

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/peterroe/ppt" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# 前端的编码职责

Front end responsibilities：

<v-clicks>

- 🎨 **页面布局** - 利用HTML、CSS进行页面的布局，对不同的屏幕大小进行适配



- 💻 **数据展示** - 将数据嵌入HTML中，展示给用户
<img src="https://img-blog.csdnimg.cn/4af497de2aef44b0aa32cc8c84e41e17.png" style="width:50%"/>



- 🛠 **响应操作** - 编写Js，响应用户的操作，例如淘宝上用户的添加到购物车以及支付操作

</v-clicks>


<!-- - 🧑‍ **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage -->

<br/>
<br/>

<v-click>

但是数据来自于哪里？

</v-click>


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

---
clicks: 9
---

# 可能的情况


### 常见前端存储的几种方案


|  方式   | 特点  |  大小 |
| --- | --- | --- |
| <kbd v-click="1">Cookie</kbd> |  <div v-click="2"> cookie也可以设置过期的时间，当时间到期自动销毁 </div> | <div v-click="2">4KB </div> | 
| <kbd v-click="3">sessionStorage</kbd> |  <div v-click="4"> 以键值对(Key-Value)的方式存储， 在关闭页面后即被清空 </div> | <div v-click="4">5M </div> | 
| <kbd v-click="5">localStorage</kbd> |  <div v-click="6"> 同上类似，但永不失效，除非手动删除 </div> | <div v-click="6">5M-10M </div> | 
| <kbd v-click="7">indexedDB</kbd> |  <div v-click="8">IndexedDB 允许储存大量数据，提供查找接口，还能建立索引 </div> | <div v-click="8">不少于250MB，甚至没有上限 </div> | 

<br>
<br>
<br>
<br>

<div v-click="9" class="end">📈需要"动态"的数据</div>


<style>
.end {
	color: #00b4d8
}
</style>



---
layout: two-cols
clicks: 5
---


# 🏬共享的数据源


<br>
<br>
<br>
<br>


<img src="https://img-blog.csdnimg.cn/0a3a4e2cd5974168815baa0b7419f959.webp" />


::right::

<div v-click="1">

* 我们希望有一个共享的数据源，里面存储了大量的数据，每个用户都能访问

</div>


<br>

<div v-click="2">

**解决的问题：**

</div>

<div v-click="3">

1. 可以存储庞大的数据量，甚至无上限，储存的大小取决硬盘容量

</div>
	
<div v-click="4">

2. 数据共享，连接用户，互联网的本质就是共享的。
</div>

<br>
<br>
<br>

<div v-click="5">
<img src="https://img-blog.csdnimg.cn/3cb64b233fe44b3c9c97cba49c9d2174.webp"/>
</div>

<!-- Use code snippets and get the highlighting directly![^1]

```ts {all|2|1-6|9|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: User) {
  const user = getUser(id)
  const newUser = {...user, ...update}  
  saveUser(id, newUser)
}
```

<arrow v-click="3" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" />

[^1]: [Learn More](https://sli.dev/guide/syntax.html#line-highlighting)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style> -->

---


# Web数据交互方式--ajax

<div grid="~ cols-2 gap-4">
<div>

<div v-click="1">

[AJAX](https://baike.baidu.com/item/ajax/8425)即“Asynchronous Javascript And XML”，是指一种创建交互式网页应用的网页开发技术

</div>

<div v-click="2">

AJAX 的优点：

</div>

<v-clicks>

* 不刷新页面更新网页
* 在页面加载后从服务器请求、接收数据

</v-clicks>

<div v-click="5">

AJAX核心对象 - **XHRHttpRequest**

```js
let xhr = new XMLHttpRequest() //用js直接实例化
```

</div>

<div v-click="6">

推荐文章：

[Ajax原理一篇就够了](https://juejin.cn/post/6844903618764603399)

</div>

</div>
<div>

<div v-click="7">

Get请求实现方式：

```js
let xhr = new XHRHttpRequest()

xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {  //readyState为4代表接收到了服务端的数据
		console.log(xhr.responeText)   //响应数据会挂载到responeText属性上
	}
}

xhr.open('GET','http://www.baidu.com', true)  //准备请求
xhr.send() //发送请求
```

</div>

<div v-click="8">

原生Ajax的问题：

</div>

<v-clicks>

* 代码过于复杂，却仅仅发送一了个请求。而且如果需要做兼容处理，还需要编写更多的代码
* 不符合[关注点分离](https://baike.baidu.com/item/%E5%85%B3%E6%B3%A8%E7%82%B9%E5%88%86%E7%A6%BB/7515217?fr=aladdin)的原则

</v-clicks>

</div>
</div>

---
class: px-20
clicks: 5
---

# 最流行的AJAX框架--axios

<div v-click>

[Axios](http://www.axios-js.com/zh-cn/docs/) 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
</div>

<div grid="~ cols-2 gap-2" m="-t-2">

<div v-click>

axios优点：

* 从浏览器中创建 XMLHttpRequests
* 支持 Promise API
* 拦截请求和响应
* 转换请求数据和响应数据
* 自动转换 JSON 数据
</div>

<div v-click>

```js
//最简单的方式：
axios.get('http://www.baidu.com').then(value => {
	console.log(value.data)  //value.data是接收并转换后的数据
})

//利用async/await和解构语法：
(async () => {
	let { data } = await axios.get('https://baike.baidu.com/item/ajax/8425');
	console.log(data)
})()
```
</div>

<div v-click>

浏览器使用方式：
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
	//...
</script>
```

</div>

<div v-click>

NodeJs使用方式：

```js
//利用npm全局安装：
//npm install -g axios


let axios = require('axios') //引入
```

</div>

</div>

---
preload: false
---

# 实战

<div
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 500, duration: 1000 } }">
	
前端JavaScript + 后端NodeJs

</div>

<div class="w-40 justify-between" style="position: fixed;right: 30px;top: 40px;display:flex;justify-content:ceter">
<logos-javascript class="text-6xl" v-motion
	  :initial="{ x: 100, y: 400, scale: 1.5, rotate: -50 }"
	  :enter="final"/> 
<logos-nodejs class="text-6xl" v-motion
	  :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
	  :enter="final"/>

</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 30,
    mass: 2
  }
}

</script>

<!-- <div grid="~ cols-2 gap-2" m="-t-2"> -->
<div v-click>

```shell
# 安装express模块 搭建服务端
npm install express
```

```js
//app.js
let express = require('express')
let app = express()

app.get('/list', (req,res) => {
	//查询数据库
	const data = ['apple','banana','pear']
	res.send(data)
})

app.listen(3000,() => {
	console.log('3000端口监听中')
})
```
```shell
# 启动
node app.js
```

<!-- [express](https://www.expressjs.com.cn/starter/hello-world.html -->

</div>
<!-- </div> -->

---
preload: false
---

## 浏览器端

发送利用axios请求数据

```html
<button>发送请求</button>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
	const getBtn = document.querySelector('button')
	
	getBtn.onclick = function() {
		axios.get('http://49.123.0.27:3000/list').then(value => {
			console.log(value.data)
			//展示获取到的数据
		})
	}
</script>
``` 

<list />

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">



</div>

---

## 梳理发送流程

<div grid="~ cols-2 gap-2" m="-t-2">

<div>

![](https://img-blog.csdnimg.cn/fd49d995415145e39f537028d5f09208.png)

</div>

<div>

1. 通过编写Js，发送远程请求，可以携带部分数据

2. 请求路径格式为 协议名 + 主机名 + 端口名 + 路径名
	* 例如： http://49.123.0.27:3000/list
	* 例如： https://www.baidu.com

3. 服务端分析请求的信息，查询数据库，并返回相应的数据

4. 浏览器收到返回的数据，通过编写js展示数据
</div>
</div>


---
layout: center
class: text-center
---

# Learn More


