# JAVASCRIPT

## 1. 命名

### 1.1 变量

- 使用小驼峰命名
- **boolean** 类型的变量使用 is 或 has 开头

```js
var loadingModules = {};
var isReady = false;
var hasMoreCommands = false;
```

### 1.2 私有

- 私有属性、变量和方法以下划线 _ 开头

```js
var _privateMethod = {};
```

### 1.3 常量

- 常亮使用全部字母大写，单词间下划线分隔的命名方式

```js
var ADMIN_TYPE = {};
var ACTION_TYPE = 'ADD_CONUT';
```

### 1.4 属性

- 属性命名尽量不使用动词

```js
// good
var orderlist = [];

// bad
var getorder = [];
```

### 1.5 缩写

- **缩写词**根据当前命名法和出现的位置，所有字母的大小写与首字母的大小写保持一致

```js
function XMLParser() {}

function insertHTML(element, html) {}

var httpRequest = new HTTPRequest();
```

### 1.6 方法

- **函数名**使用动宾短语 or 动名词

```js
function getStyle(element) {}
```

- **类名** 使用大驼峰命名

```js
function Father(name) {
  this.name = name;
}
```

## 2. 代码

### 2.1 两元运算符

- && 和 ||
- 二元布尔操作符是可短路的, 只有在必要时才会计算到最后一项

```js
// good
function foo(opt_win) {
  var win = opt_win || window;
  // ...
}

var kid = node && node.kids && node.kids[index];
if (kid) {
  foo(kid);
}



// bad
function foo(opt_win) {
  var win;
  if (opt_win) {
    win = opt_win;
  } else {
    win = window;
  }
  // ...
}

if (node) {
  if (node.kids) {
    if (node.kids[index]) {
      foo(node.kids[index]);
    }
  }
}
```

### 2.2 三元运算符

- 代替if语句

```js
// good
return val ? foo() : bar();

// bad
if (val != 0) {
  return foo();
} else {
  return bar();
}
```

### 2.3 关键字

- `if / else / for / while / function / switch / do / try / catch / finally` 关键字后，必须有一个空格。

```js
// good
if (condition) {
}

while (condition) {
}

(function () {
})();

// bad
if(condition) {
}

while(condition) {
}

(function() {
})();
```

### 2.4 声明 or 创建

- 在对象创建时，属性中的 `:` 之后必须有空格，`:` 之前不允许有空格

```js
// good
var obj = {
    a: 1,
    b: 2,
    c: 3
};

// bad
var obj = {
    a : 1,
    b:2,
    c :3
};
```

- 函数声明、具名函数表达式、函数调用中，函数名和 `(` 之间不允许有空格

```js
// good
function funcName() {
}

var funcName = function funcName() {
};

funcName();

// bad
function funcName () {
}

var funcName = function funcName () {
};

funcName ();
```

- 声明包含元素的数组与对象，只有当内部元素的形式较为简单时，才允许写在一行

- 元素复杂的情况，还是应该换行书写

```js
// good
var arr1 = [];
var arr2 = [1, 2, 3];
var obj1 = {};
var obj2 = {name: 'obj'};
var obj3 = {
    name: 'obj',
    age: 20,
    sex: 1
};

// bad
var arr1 = [ ];
var arr2 = [ 1, 2, 3 ];
var obj1 = { };
var obj2 = { name: 'obj' };
var obj3 = {name: 'obj', age: 20, sex: 1};
```

### 2.5 换行

- 每个独立语句结束后必须换行

- 每行不得超过 `160` 个字符

```js
// good
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // Code
}

var result = number1 + number2 + number3
    + number4 + number5;


// bad
if (user.isAuthenticated() &&
    user.isInRole('admin') &&
    user.hasAuthority('add-admin') ||
    user.hasAuthority('delete-admin')) {
    // Code
}

var result = number1 + number2 + number3 +
    number4 + number5;
```

- 不同行为或逻辑的语句集，使用空行隔开，更易阅读

```js
function setStyle(element, property, value) {
    if (element == null) {
        return;
    }

    element.style[property] = value;
}
```

### 2.6 引号

- 在js文件中所有需要加上引号的地方使用单引号`'` 

```js
// good
var path = require('path');

// bad
var fs = require(fs);
var webpack = require("webpack");
```

### 2.7 判断

- `if` 语句,使用 === 可以避免等于判断中隐式的类型转换

```js
// good
if (age === 30) {
    // ......
}

// bad
if (age == 30) {
    // ......
}
```

-  尽可能使用简洁的表达式

```js
// 字符串为空
// good
if (!name) {
    // ......
}

// bad
if (name === '') {
    // ......
}
```

- 对于相同变量或表达式的多值条件，用 `switch` 代替 `if`

```js
// good
switch (typeof variable) {
    case 'object':
        // ......
        break;
    case 'number':
    case 'boolean':
    case 'string':
        // ......
        break;
}

// bad
var type = typeof variable;
if (type === 'object') {
    // ......
} 
else if (type === 'number' || type === 'boolean' || type === 'string') {
    // ......
}
```

### 2.7 循环

- 数组非特殊原因不得使用`for in`来进行循环

- 对有序集合进行遍历时，缓存 `length`

```js
// good 
for (var i = 0,len = list.length;i < len;i++) { ... } 

// bad
for (var i = 0;i < list.length;i++) { ... } 

for (var i in list) { ... }
```

### 2.8 var

- 不通过 var 定义变量将导致变量污染全局环境

```js
// good
const NAME = 'LiuYang';

// bad
var name = 'liuyang';
```

## 3. 注释

- 只有一行注释使用 `//`
- 多行注释使用 `/*  */`
- 所有的变量 or 函数定义全部使用 [JSDoc 规范进行注释](http://www.shouce.ren/api/view/a/13232)

```js
/**
 * @description 加法计算
 * @param { number } a - 参与运算数字
 * @param { number } b - 参与运算数字
 * @returns { number } 相加后的数
 */
function add(a,b) {
  return a + b;
}
```

:::warning

​	以上代码有些用的是 `var` 声明的变量是代码示例

​	别钻牛角尖！！！

:::