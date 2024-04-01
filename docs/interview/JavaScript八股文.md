---
title: JavaScript八股文
date: 2024-03-07 23:31:36
tags: [Vue,八股文]
categories: 前端开发
---

# JavaScript 变量

## var、let、const 的差异？

### 相同点

`var`、`let`、`const` 三者都可以声明变量。变量可以看作盒子，变量名就是盒子名称，值是放在盒子里的东西。

```js
// var 声明变量，初始值可选
var name;
var name = "Lucy";

// let 声明变量，初始值可选
let age;
let age = 12;

// const 声明常量，必须要赋初始值
const city = "Beijing";
// 如果给常量重新赋值会报错
const city = "Shanghai"; // Uncaught SyntaxError: Identifier 'city' has alre ady been declared

// 如果常量的值是对象（数组），不可以修改常量指向的引用，但是可以修改引用的值
const cities = ["Beijing"];
cities[0] = ["Shanghai"]; // "Shanghai"

```



### 差异

`var`、`let`、`const` 三者的差异：

|       | 定义                 | 作用域               | 暂时性死区 | 重复声明变量 | 全局属性 |
| ----- | -------------------- | -------------------- | ---------- | ------------ | -------- |
| const | 声明常量             | 块级作用域           | ✅          | ❎            | ❎        |
| let   | 声明变量（ES6 新增） | 块级作用域           | ✅          | ❎            | ❎        |
| var   | 声明变量             | 函数作用域（函数内） | ❎          | ✅            | ✅        |

注：

暂时性死区：Temporal dead zone（TDZ）

全局属性：是否会被添加到 `window` 或 `globalThis` 等对象中

### 暂时性死区

从一个代码块的开始直到代码执行到声明变量的行之前，`let` 或 `const` 声明的变量都处于“暂时性死区中。简单理解：`let` 或 `const` 只能先声明再访问。如下面的代码：

```js
// 访问 person 变量
// 变量 person 使用 let 声明，声明不会提升，因此此处访问会报错
console.log(person);  // ReferenceError: person is not defined

// 声明 person 
let person = {
    name: "Lucy"
};

```

同理，使用 `const` 声明变量，如果在声明前使用，表现与 `let` 一致。`var` 声明的全局变量会进行变量提升：

```js
console.log(person); // undefined

var person = {
    name: "Lucy"
}; 
```

### 全局属性

`var` 声明的变量会被添加到全局对象中，可以使用 `window `和 `globalThis` 访问，`let` 和 `const` 声明的全局变量则不会添加到全局对象中。

```js
var name = "Lucy";
console.log(window.name); // "Lucy"
console.log(globalThis.name); // "Lucy"

const age = 12;
console.log(window.age); // undefined
console.log(globalThis.age); // undefined

let gender = "female";
console.log(window.gender); // undefined
console.log(globalThis.gender); // undefined
```

### 小练习

以下代码输出结果是什么？

```js
const obj = { prop: 0 };
obj.prop = obj.prop + 1;

console.log(obj.prop); // 1. 打印结果是什么？
obj = {}; // 2. 执行结果是什么？
```





答案：1 处输出 1， 2 处报错： “Uncaught TypeError: Assignment to constant variable”。这与 `const` 的特性有关，`const` 仅仅意味着**变量名和值的绑定是不可变的**，但是它的值可以是可变的，如 1 处 的值 `{ prop: 0 }` 就可以更改。因此，我们可以得出结论：1 处 `obj` 的值是对象，可以改变 `obj` 的属性，然而不能重新给 `obj` 赋新的值（2 处）。

------

## 谈谈作用域?

### 作用域

> 作用域是当前的执行上下文，值和表达式在其中“可见”或可被访问。

### 静态作用域和动态作用域

作用域分为静态作用域（又称为词法作用域）和动态作用域：

- 静态意味着它与代码的位置有关，与执行代码时的环境无关。JavaScript 采用的是静态作用域。
- 动态即运行时，代码执行时确定的。

### JavaScript 作用域

JavaScript 的作用域可以分为以下四种：

- 全局作用域：脚本模式运行所有代码的默认作用域
- 函数作用域：由函数创建的作用域

- 块级作用域：用一对花括号（一个代码块）创建出来的作用域
- 模块作用域：模块模式中运行代码的作用域

接下来，我们分析一下各种作用域的特点。

### 全局作用域

JavaScript 变量作用域是嵌套的，它们形成树：

- 最外面的作用域是树的根部，也叫全局作用域。

- 被最外层作用域包含的作用域是根的子孙，如各种嵌套的代码块形成的作用域。

全局作用域中的变量称为**全局变量**，可以在任何作用域内访问。有两种全局变量：

- **全局声明变量**（declarative variables）是普通变量，在最顶级由 `const`、`let` 和 `class` 声明的变量。

- **全局对象**（object variables）是存储在全局对象中的属性：
  - 在最顶级由 `var` 和 `function` 声明后创建的变量
  - 全局对象可以通过 `globalThis` 和 `window` 访问，它可以对全局对象变量进行增删改查

全局属性 `globalThis` 包含全局的 `this` 值，类似于全局对象。`globalThis` 提供了一个标准的方式来获取不同环境下的全局 `this` 对象（也就是全局对象自身），它可以在任何环境下使用。

下面的代码可以帮助我们更好理解 `globalThis` 和两种全局变量：

```js
<script>
const declarativeVariable = 'd';
var objectVariable = 'o';
</script>

<script>
// 所有脚本共享同样的顶级作用域
console.log(declarativeVariable); // 'd'
console.log(objectVariable); // 'o'

// 不是所有变量都会创建为全局对象的属性
// 此处最顶层 const 创建的是全局声明变量，不是全局对象，因此 window 对象下访问为 undefined
console.log(window.declarativeVariable); // undefined
console.log(window.objectVariable); // 'o'
// globalThis 同 window 表现一致
console.log(globalThis.declarativeVariable); // undefined  
console.log(globalThis.objectVariable); // 'o'
</script>
```

观察以上的代码，就能明白为什么最顶层 `const` 创建的变量，使用 `window` 访问依然是 `undefined`。

### 函数作用域

函数内声明的变量，只能在函数作用域范围内访问。

```js
function scope() {
	var address = "Beijing";
}

console.log(address); // Uncaught ReferenceError: address is not defined 
```

### 块级作用域

作用域对变量来说，可以简单理解为程序能够访问到变量的范围，超过作用域的就无法访问。

#### `let` 和 `const`

`let`、`const` 支持块级作用域。如果在代码块 `{...}` 中使用 `let` 或 `const` 声明一个变量，那么这个变量只在该代码块中可见。

```js
{ 
    // 作用域 A，可以访问变量 x
    const x = 0; 
    console.log(x); // 0
    {
        // 作用域 B，可以访问 x、y
        const y  = 1;
        console.log(x); // 0
        console.log(y); // 1
    }
}
// 作用域 A 外，不能访问 x、y
console.log(x); // 报错：Uncaught ReferenceError: x is not defined
```

我们分析一下上面的代码：

- 作用域 A 是变量 `x` 的作用域
- 作用域 B 是作用域 A 的内部作用域
- 作用域 A 是作用域 B 外部作用域

每个变量可访问的范围是它所在的作用域以及该作用域所嵌套的外部作用域。`let` 和 `const` 声明的变量是块级的，因此它们作用域始终在块中。同一作用域内，不允许声明同名变量。如下示例代码用 `const` 声明同名变量：

```js
{
 	const x = 1;
    const x = 2; // 报错：Uncaught SyntaxError: Identifier 'x' has already been declared
}
```

不同作用域下可以使用同名变量：

```js
{
    const x = 1;
    {
        const x = 2; 
    }
}
```

#### `class`

`class` 声明的类也支持块级作用域。如下面代码，在全局作用域中声明了 `Animal`：

```js
class Animal {}

console.log(Animal); // class Animal {}
```

如果在代码块 `{...}` 中创建 `Animal`，此时在代码块外部就无法访问 `Animal`了。

```
{
	class Animal {}
	console.log(Animal) // class Animal {}
}

console.log(Animal); // Uncaught ReferenceError: Animal is not defined 

```

### 模块作用域

每个 ECMAScript 模块（ES6 Modules）都有自己的作用域，因此，在顶级模块中声明的变量不是全局的。如下图所示：

![](https://pic.leetcode.cn/1675243681-ITEQCA-image.png#id=Usa3j&originHeight=485&originWidth=815&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

### 总结

作用域是值或者表达式的可访问范围。分为静态作用域（词法作用域）和动态作用域，JavaScript 采用的是静态作用域。其中，分为四种不同的作用域：全局作用域、函数作用域、块级作用域以及模块作用域。

除此之外，文中还提到了各种声明与作用域的关系，下面总结一下各种声明的异同。我们从以下四个方面来看各种声明的异同：

- 作用域
- 暂时性死区：变量何时可以访问？一些变量在进入作用域后可尽快被访问，但有的必须等到代码执行到它们声明时才可以访问。通俗说法是，这个变量是否可以先访问再声明。暂时性死区（TDZ， Temporal Dead Zone） 就是变量在进入作用域和执行声明前的一段时间。在这段时间内，访问变量会报错。
- 重复：变量是否可以重复声明（同级作用域下）
- 全局属性：声明的变量是否会被添加到全局对象中



|          | 定义                 | 作用域               | 暂时性死区 | 重复声明变量 | 全局属性 |
| -------- | -------------------- | -------------------- | ---------- | ------------ | -------- |
| const    | 声明常量             | 块级作用域           | ✅          | ❎            | ❎        |
| let      | 声明变量（ES6 新增） | 块级作用域           | ✅          | ❎            | ❎        |
| function | 声明常量             | 块级作用域           | ❎          | ✅            | ✅        |
| class    |                      | 块级作用域           | ✅          | ❎            | ❎        |
| var      | 声明变量             | 函数作用域（函数内） | ❎          | ✅            | ✅        |

------



## 什么是变量提升？

变量提升和上文提到触发时间有关。我们知道，`var` 和 `function` 声明的变量可以在声明前访问，这就是因为变量提升的缘故。

当 JavaScript 引擎执行代码时，创建了全局执行上下文，它有两个阶段：

- 创建（准备工作）
- 执行

在创建阶段，JavaScript 引擎将 `var` 和 `function` 声明移到了顶层，这就是 JavaScript 的变量提升。

### `var` 关键字

我们先看一段代码：

```js
console.log(counter); // undefined
var counter = 1;
```

在这段代码中，我们在声明前访问 `counter` 变量，并未报错。这是变量提升的缘故。

### `function` 提升

和 `var` 一样，函数声明也会提升：

```js
let x = 20,
	y = 10;

let result = add(x, y);
console.log(result); // 30

function add(a, b) {
	return a + b;
}
```

除此之外，`let` 关键字、函数表达式、箭头函数等均不会变量提升。

### 处理相同的变量名或者函数名

代码中出现相同的变量或者函数怎么办？我们知道 `var` 声明的同名变量，后者会覆盖前者，如果是函数呢？先看下面的例子：

```js
let x = 20,
	y = 10;

function add(a, b) {
	return a + b;
}

let result = add(x, y);
console.log("result " + result); // "result 60"

function add(a) {
	return a + 40;
}

let result1 = add(x);
console.log("result1 " + result); // "result1 60"

```

从上面的结果可以看到，两个同名函数 `add`，定义在后面的函数覆盖了前面的函数，因此 `result` 和 `result1` 的结果都是执行后面的函数后返回的结果。

因此，代码中出现同名的变量名或者函数名，都是后者覆盖前者。

### 小练习

下面的代码输出的结果是什么？

```js
let x = 20,
	y = 10;

let result = add(x);
console.log("result1 " + result); // "result1 60"

var add = function(a, b) {
	return a + b;
}

function add(a) {
	return a + 40;
}
```

这里考察的是同名变量和函数的提升，后面的会覆盖前面的，因此执行的是最后一个函数 `add`。

------



# JavaScript 数据类型

## JavaScript 数据类型有哪些？

面试高频指数：★★★★★

JavaScript 中有八种基本的数据类型（前七种为基本数据类型，也称为原始数据类型，后一种 `Object` 为复杂数据类型，也称为非原始数据类型或引用类型）。

- 其中原始数据类型：
  - `number` 用于任何类型的数字：整数或浮点数，在 `±(2(^53)-1)` 范围内的整数。
  - `bigint` 用于任意长度的整数。
  - `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的字符类型。
  - `boolean` 用于 `true` 和 `false`。
  - `null` 用于未知的值 —— 只有一个 `null` 值的独立类型。
  - `undefined` 用于未定义的值 —— 只有一个 `undefined` 值的独立类型。
  - `symbol` 用于唯一的标识符。
- 以及一种非原始数据类型：
  - `Object` 用于更复杂的数据结构。以下类型都是对象：
    - `Function`（函数）
    - `Array`（数组）
    - `Date`（日期）
    - `RegExp`（正则表达式）

## 原始数据类型和引用数据类型的区别？

面试高频指数：★★★★☆


JavaScript 包含两种不同类型的值：

- 原始数据类型（Primitive values）

- 引用数据类型（Reference values）

### 栈内存和堆内存

当定义一个变量的时候，JavaScript 引擎会为变量分配两种内存：栈内存和堆内存。

静态值在编译阶段有固定的大小，静态值有：

- 原始值：`Null`、`Undefined`、`Boolean`、`Number`、`String`、`Symbol`、`BigInt`
- 引用值：是对象的引用。

静态值有固定的大小，不能改变。JavaScript 引擎为它们分配一片固定的内存，并存储在栈上。例如：

```js
let name = "John";
let age = 25;
```

因为 `name` 和 `age` 都是原始值类型，JavaScript 引擎将它们存储在栈上，如下图所示：

![](https://pic.leetcode.cn/1675246723-ulSguk-image.png)

JavaScript 将对象（`Object`) 存储在堆（heap）上。

```js
let person = {
    name: "John",
    age: 25
};
```

内存如下图：

![](https://pic.leetcode.cn/1675246788-HjXqny-image.png)

JavaScript 引擎在堆内存上创建了一个新的对象，同时它和栈内存上的 `person` 变量连接。因此，我们说 `person` 变量是对象的引用。

### 动态属性

一个引用值允许我们添加、修改和删除属性，例如：

```js
let person = {
    name: "John",
    age: 25
};

// 添加属性 ssn 
person.ssn = "123-45";

// 修改 name
person.name = "John Doe";

// 删除属性 age 
delete person.age;

console.log(person); // {name: 'John Doe', ssn: '123-45'}
```

JavaScript 也允许在原始值上添加属性，但这个属性不会起作用。

```js
let name = "John";
name.alias = "Knight";
console.log(name.alias); // undefined
```

### 复制值

#### 原始值

**对于原始值来说，JavaScript 引擎创建一个值的副本，并将值赋给新的变量。**

```js
let age = 25;
let newAge = age; 
console.log(age, newAge); // 25 25
```

过程如下：

- 首先，声明一个变量 `age`，并将 25 赋值给它。

- 其次，声明另一个新的变量 `newAge`，将 `age` 赋值给 `newAge`，JavaScript 引擎将 25 复制了一份，给了新变量。

如下图：

![](https://pic.leetcode.cn/1675247356-DMFMSb-image.png)

因此，对两个变量的操作不会互相影响。

```js
let age = 25;
let newAge = age;

newAge = newAge + 1;
console.log(age, newAge); // 25 26
```

如下图：

![](https://pic.leetcode.cn/1675247413-GScWMN-image.png)

### 引用值

**对于引用值来说，复制的值指向的是同一个对象，因此操作的是也是同一个对象。**

当我们将一个引用值从一个变量赋值给另一个变量，JavaScript 引擎创建一个引用，因此两个变量都是指向堆内存中的同一个对象。意味着，你修改其中一个，另一个也会被修改。

```js
let person = {
    name: "John",
    age: 25
}

let member = person;
member.age = 26;

console.log(person); // {name: 'John', age: 26}
console.log(member); // {name: 'John', age: 26}
```

如下图所示：

修改前：

![](https://pic.leetcode.cn/1675247510-JurGlA-image.png)

修改后：

![image.png](https://pic.leetcode.cn/1675247526-qFUHsM-image.png)

### 总结

- JavaScript 有两种类型的值：原始值和引用值
- 引用类型的值可以对它的属性做增删改查，原始值不行

- 从一个变量复制原始值到另一个变量，会创建一个独立的值的备份，意味着修改一个变量不会影响到另一个变量

- 从一个变量复制引用值到另一个变量，两个变量会指向同一个对象，意味着通过一个变量修改对象将会影响到另一个对象。

### 小练习

下面代码的输出结果是什么？

```js
let person = {
    name: "John",
    age: 25
}

function increaseAge(obj) {
    obj.age += 1;
    obj = {name: "Jame", age: 22}
    console.log(obj); // 1
}

increaseAge(person);
console.log(person); // 2
```

答案：1 处是：`{ name: "Jame", age: 22 }`， 2 处是 `{ name: 'John', age: 26 }`。两个变量的内存示意图如下：

![image.png](https://pic.leetcode.cn/1675247879-Inlzhw-image.png)

实际上，`obj = {name: "Jame", age: 22}` 使得 `obj` 重新指向了一个新的引用的，对象在堆内存中重新分配一块内存，并让 `obj` 指向它。 因此 `console.log(person)` 的结果是 `{ name: "Jame", age: 22 }`。

原始类型和引用类型在内存中的分配与函数参数传递有联系。函数传参都是值传递，只不过根据值的类型不同有所区别。

由上可知：

- JavaScript 实参都是传值
- 函数实参会在函数中创建新的局部变量。



------

## 为什么 0.1 + 0.2 !== 0.3 ?

面试高频指数：★★★★☆

这是一道经典的面试题：

```js
0.1 + 0.2 === 0.3; // false
```

这里涉及到 JavaScript 中的数字类型。下面是 `Number` 的定义：

MDN 中对 `Number` 的定义如下：

> 根据语言规范，JavaScript 采用“遵循 IEEE 754 标准的双精度 64 位格式”（"double-precision 64-bit format IEEE 754 values"）表示数字。
>

### 为什么会这样？

简单地说，0.1 和 0.2 的二进制表示形式是不准确的，所以它们相加时，结果不是精确的 0.3， 而是非常接近的值：0.30000000000000004。

这是和 JavaScript 采用“遵循 IEEE 754 标准的双精度 64 位格式”有关。

- sign bit（符号）： 用来表示正负号
- exponent（指数）： 用来表示次方数
- mantissa（尾数）：用来表示精确度

![image.png](https://pic.leetcode.cn/1675248285-kMFmze-image.png)

在这个标准下：

- 1 位存储符号（Sign），0 表示正数， 1 表示负数。

- 用 11 位存储指数，指数必须是“有符号”的值，这里使用了偏差指数，即存储 E + bias 的值。对于 11 位来说，bias 的值是 2^(11-1) - 1，也就是 1023。11 位无符号整数的值的范围是 0 到 2^11（2047），由于全 0 和 全 1 的指数值是为特殊数字保留的，所以可用的指数是从 1 到 2046。减去指数偏差值 1023， 就能得到指数的实际范围，即从 -1022 到 +1023。


- ```js
  1 - 1023 = -1022
  2046 - 1023 = +1023
  ```

- 用 52 位存储 Fraction。

此时，我们再来看 0.1 + 0.2 的转换过程，举个例子，拿 0.1 来看：
0.1 对应的二进制是 1 * 2^-4 * 1.1001100110011……
符号位：0
E + bais： -4 + 1023 = 1019
Fraction： 1001100110011……
对应的 64 位完整表示如下图：

![image.png](https://pic.leetcode.cn/1675248450-nFKGop-image.png)

同理，0.2 的完整表示是：

![image.png](https://pic.leetcode.cn/1675248480-DpROri-image.png)

所以，**当 0.1 存下来的时候，就发生了精度丢失，当我们用浮点数进行运算的时候，使用的其实是精度丢失后的数。**

当我们对两个数字求和时，它们的“精度损失”会叠加起来。这就是为什么 0.1 + 0.2 不等于 0.3。

### 如何解决？

**方法一：`toFixed(n)`**

我们可以借助方法 `toFixed(n)` 对结果进行舍入。

```
let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // 0.30
```

注意：`toFixed `总是返回一个字符串。我们可以使用一元加号将其强制转换为一个数字：

```js
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // "0.30"
```

**方法二：将数字临时乘以 100（或更大的数字），将其转换为整数，进行数学运算，然后再除回。**

```
alert( (0.1 * 100 + 0.2 * 100) / 100 ); // 0.3
```

**方法三：使用 Number.EPSILON。如果两个数的精度损失在允许范围内，则可以认为两个数是相等的。**

`Number.EPSILON` 属性表示 1 与 `Number` 可表示的大于 1 的最小的浮点数之间的差值。

```js
function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON;
}

let a = 0.1 + 0.2;
let b = 0.3;

numbersCloseEnoughToEqual(a, b); // true
numbersCloseEnoughToEqual(0.0000001, 0.0000002); // false
```

### 小练习

下面代码的打印结果是什么？

```js
console.log(9999999999999999); // 16位
```

答案：输出结果 10000000000000000（17位）。

这也是因为精度损失。有 64 位来表示该数字，其中 52 位可用于存储数字，但这还不够。所以最不重要的数字就消失了。

JavaScript 不会在此类事件中触发 error。它会尽最大努力使数字符合所需的格式，但不幸的是，这种格式不够大到满足需求。

> 【参考资料】
> [双精度浮点数](https://leetcode.cn/link/?target=https://zh.m.wikipedia.org/zh-cn/雙精度浮點數)
> [Double (IEEE754 Double precision 64-bit)](https://leetcode.cn/link/?target=https://www.binaryconvert.com/result_double.html?decimal=048046049)
> [数字类型](https://leetcode.cn/link/?target=https://zh.javascript.info/number)



------

## 谈谈 undefined 和 null ？

面试高频指数：★★★★☆

`undefined` 和 `null` 都是基本数据类型。它们的定义是：

- `undefined` 意味着变量已经声明了但是没有赋值。

- `null` 是空值，可以作为对象的初始值。

### undefined 不是 undeclared

- `undeclared` 是指变量从未在代码中出现.使用未声明的变量就会报错：”ReferenceError: cat is not defined“。

- `undefined` 则是声明了但是值是 `undefined` 或者值并不存在。

### 如何获取安全的 undefined 值？

因为 `undefined` 是一个标识符，所以可以被当作变量来使用和赋值，但是这样会影响 `undefined` 的正常判断。

可以使用 `void 0` 获得安全的值。

```
console.log(void 0); // undefined
```

### `??` 和 `??=`

### 空值合并运算符（`??`）

空值合并运算符（`??`）是一个逻辑运算符，判断左边的值是否是 `null` 或 `undefined`。如代码 `a ?? b`，如果 `a` 是 `null` 或 `undefined`，返回 `b`， 反之，返回 `a`。

`a ?? b` 可以理解为: `a !== undefined && a !== null ? a : b`

我们可以给值为 `null` 或 `undefined` 的变量一个默认值。如下面的代码所示：

```js
let firstName = null, lastName = 'Sun';
let fullName = firstName ?? lastName
console.log(fullName); // Sun
```

### `??` vs `||`

`??` 和 `||` 的相同点：都可以为值为 `null` 或 `undefined` 的变量赋默认值。如下面代码：

```js
let firstName = null, lastName = 'Sun';
let fullName = firstName ?? lastName
console.log(fullName); // Sun

fullName = firstName || lastName;
console.log(fullName); // Sun
```

不同点在于：

- `??` 只判断值 `null` 和 `undefined`

- `||` 是任何假值（`0`， `''`， `NaN`， `null`， `undefined`）都不会被返回。这导致如果你使用 `0`，`''` 或 `NaN` 作为有效值，就会出现不可预料的后果。

如下面代码，判断值是 `''` 时两者的不同表现：

```js
let firstName = '', lastName = 'Sun';
let fullName = firstName ?? lastName
console.log(fullName); // ''

fullName = firstName || lastName;
console.log(fullName); // Sun
```

### 逻辑空赋值运算符 `??=`

逻辑空赋值运算符（`x ??= y`）仅在 `x` 是空值（`null` 或 `undefined`）时对其赋值。

`a ??= b` 可以理解为: `a ?? (a = b) `。

如下面的代码：

```js
let firstName = null;
firstName ??= 'yangyang'
console.log(firstName); // 'yangyang'
```

> 【参考资料】
> [空值合并运算符（??） - JavaScript | MDN](https://leetcode.cn/link/?target=https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
> [逻辑空赋值（??=） - JavaScript | MDN](https://leetcode.cn/link/?target=https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)

## typeof null 的结果是什么？

面试高频指数：★★★★☆

JavaScript 中，`typeof null` 是 `object`，这是不对的，因为 `null` 是基本数据类型，不是对象。这是个 bug，但是因为修复这个 bug 会影响现存的代码，所以就一直没改。

这个 bug 是 JavaScript 第一版的遗留物，这个版本中，值都是 32 位存储单元，由类型标签（1-3位）和实际的值组成。类型标签存在单元的低位里，有下面五种：

- 000： 对象，数据是对象类型
- 1：整数，存储的数据是一个 31 位的有符号整数。
- 010：浮点数，存的数据是双精度浮点数
- 100： 字符串，存的数据是字符串
- 110：布尔，存的数据是布尔

低位如果是 1 位，类型标签就是 1 位长度（如整数类型），如果是 0，类型标签是 3 位长度，提供两个额外的位，如其余的四个类型。

### 小练习

`typeof NaN` 返回什么？

答案：`typeof NaN` 返回 `'number'`。`NaN` 表示不是一个数字，它是 `Number` 的特殊值。

> 【参考资料】
> [The history of “typeof null”](https://leetcode.cn/link/?target=https://2ality.com/2013/10/typeof-null.html)