# HTML

## 1. 标签

### 1.1 书写

- 能闭合标签的尽量闭合，减少标签代码量


```html
<!-- good -->
<img src="..." />
<input name="username" type="text" />

<!-- bad -->
<img src="..."></img>
<input name="username" type="text"></input>
```

### 1.2 语义化

- 标签的使用应该遵循标签的语义


```html
<!-- good -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JAVASCRIPT</li>
</ul>

<!-- bad -->
<div>
  <div>HTML</div>
  <div>CSS</div>
  <div>JAVASCRIPT</div>
</div>
```

::: tip

 p - 段落

 h1,h2,h3,h4,h5,h6 - 层级标题

 strong,em - 强调

 ins - 插入

 del - 删除

 abbr - 缩写

 code - 代码标识

 cite - 引述来源作品的标题

 q - 引用

 blockquote - 一段或长篇引用

 ul - 无序列表

 ol - 有序列表

 dl,dt,dd - 定义列表

:::

## 2. Class与Id

### 2.1 命名

- `class` 应以功能或内容命名，不以表现形式命名

```html
<!-- good -->
<div class="sidebar"></div>

<!-- bad -->
<div class="left"></div>
```

### 2.2 多个单词

-  `class`  与 `id` 单词字母小写，多个单词组成时，采用中划线`-`分隔

```html
<!-- good -->
<div class="banner-list">
  <div class="banner-item">
  	<img class="banner-img" src="..." />
  </div>
</div>

<!-- bad -->
<div class="imgList">
  <div class="imgs">
    <img class="img" src="..." />
  </div>
</div>
```

### 2.3 功能

-  **id不能用来写样式**  可以用来做为JavaScript Hook并且页面当中仅有一个

## 3. 属性

### 3.1 属性名/值

- 必须使用小写字母
- 必须用双引号包围
- 布尔类型的属性，建议不添加属性值

```html
<!-- good -->
<table cellspacing="0">...</table>
<!-- bad -->
<table cellSpacing="0">...</table>

<!-- good -->
<script src="esl.js"></script>
<!-- bad -->
<script src='esl.js'></script>
<script src=esl.js></script>

<!-- good -->
<input type="text" disabled />
<!-- bad -->
<input type="text" disabled="true" />
```

### 3.2 自定义属性

- 建议以 `data-xxx` 为前缀
- 使用前缀有助于区分自定义属性和标准定义的属性

```html
<!-- good -->
<div data-type="html">HTML</div>

<!-- bad -->
<div type="html">HTML</div>
```

## 4. 嵌套

### 4.1 语义嵌套

- `<li>` 用于 `<ul>` 或 `<ol>` 下；
- `<dd>`, `<dt>` 用于 `<dl>` 下；
- `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<td>` 用于 `<table>`

```html
<!-- good -->
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JAVASCRIPT</li>
</ol>

<!-- bad -->
<ol>
  <p>HTML</p>
  <p>CSS</p>
  <p>JAVASCRIPT</p>
</ol>
```

### 4.2 严格嵌套

-  `block`  ->  `inline-block`  -> `inline`

```html
<!-- good -->
  <div>
    <ul>
      <li>
        <span>HTML</span>
      </li>
      <li>
        <span>CSS</span>
      </li>
      <li>
        <span>JAVASCRIPT</span>
      </li>
    </ul>
  </div>
  
  <!-- bad -->
  <span>
    <p>HTML</p>
    <h1>CSS</h1>
    <div>JAVASCRIPT</div>
  </span>  
```

## 5. 结构

  ### 5.1 DOCTYPE

- 使用 `HTML5` 的 `doctype` 来启用标准模式，建议使用大写的 `DOCTYPE` 

``````html
<!DOCTYPE html>
``````

### 5.2 启用 IE Edge 模式

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```

### 5.3 语言

- 设置正确的语言，有助于提高页面的可访问性

```html
<html lang="zh-CN">
```

### 5.4 编码

- 页面必须使用精简形式，明确指定字符编码
- 指定字符编码的 `meta` 必须是 `head` 的第一个直接子元素。

```html
<html>
    <head>
        <meta charset="UTF-8">
        ......
    </head>
    <body>
        ......
    </body>
</html>
```

## 6. 资源引入

### 6.1 CSS

- 引入 `CSS` 时必须指明 `rel="stylesheet"`
- 在 `head` 中引入页面需要的所有 `CSS` 资源

```html
<html>
  <head>
     ...
  	 <link rel="stylesheet" src="public.css">
     ...
  </head>
</html>
```

### 6.2 JAVASCRIPT

-  `JavaScript` 应当放在页面末尾，或采用异步加载 `async`

```html
<body>
    <!-- a lot of elements -->
    <script src="public.js"></script>
</body>
```

### 6.3 内嵌式

- 非特殊情况不得在页面中编写 `CSS` 与 `JAVASCRIPT`

## 7. 注释

- 从DOM结构的上一行开始
- 从DOM结构的下一行结束
- S代表Start
- E代表End

```html
<!-- good -->
<div>
  <!-- S Language -->
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JAVASCRIPT</li>
  </ul>
  <!-- E Language -->
  ...
</div>

<!-- bad -->
<div>
  <!-- language -->
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JAVASCRIPT</li>
  </ul>
  ...
</div>
```

