# CSS

## 1. Class 和 ID

- 所有的样式全部编写到Class中

```css
/* good */
.page-index {
  margin: 0;
}

/* bad */
#page-index {
  margin: 0;
}
```

- 使用语义化、通用的命名方式
- 使用连字符 - 作为 ID、Class 名称界定符，不要驼峰命名法和下划线
- 避免选择器和 Class、ID 叠加使用

```css
/* good */
#nav {}
.box-video {}
#username input {}
#example {}

/* bad */
.red {}
.box_green {}
.page .header .login #username input {}
ul#example {}
```

## 2. 风格

### 2.1 空格

- 选择器分组时，保持独立的选择器占用一行；
- 声明块的左括号 `{` 前添加一个空格；
- 声明块的右括号 `}` 应单独成行；
- 声明语句中的 `:` 后应添加一个空格；
- 声明语句应以分号 `;` 结尾；
- 一般以逗号分隔的属性值，每个逗号后应添加一个空格；
- `rgb()`、`rgba()`、`hsl()`、`hsla()` 或 `rect()` 括号内的值，逗号分隔，但逗号后不添加一个空格；
- 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，`.5` 代替 `0.5`；`-.5px` 代替`-0.5px`）；
- 十六进制值应该全部小写和尽量简写，例如，`#fff` 代替 `#ffffff`；
- 避免为 0 值指定单位，例如，用 `margin: 0;` 代替 `margin: 0px;`

```css
/* good */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}

/* bad */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}
```

### 2.2 顺序

- 相关属性应为一组，推荐的样式编写顺序，按照外部到内部的顺序

1. Positioning
2. Box model
3. Font
4. Other

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box model */
  display: block;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  overflow: hidden;
  opacity: .8;

  /* Font */
  text-align: center;
  font: normal 13px "Helvetica Neue", sans-serif;
  color: #fff;
  
  /* Other */
  cursor: pointer;
}
```

### 2.3 引号

- `url()` 、属性选择符、属性值使用双引号

```css
/* good */
@import url("//www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}

.selector[type="text"] {

}

/* bad */
@import url(//www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}
```

### 2.4 媒体查询

- 将媒体查询放在尽可能相关规则的附近，要不然忘记了咋办

```css
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (max-width: 768px) {
  .element { ... }
  .element-avatar { ... }
  .element-selected { ... }
}
```

### 2.5 `@import`

- 非特殊情况不得使用 `@import`
- `<link>` 相比，`@import` 要慢很多，不光增加额外的请求数，还会导致不可预料的问题

## 2. 命名规则

### 2.1 组件

- 从 `Components` 的角度思考，将网站的模块都作为一个独立的 `Components`

### 2.2 组件命名

`Components` **最少以两个单词命名**，通过 `-` 分离，例如：

- 点赞按钮 (`.like-button`)
- 搜索框 (`.search-form`)
- 文章卡片 (`.article-card`)

### 2.3 元素

- `Elements` 是 `Components` 中的元素

### 2.4 元素命名

- `Elements` 的类名应尽可能仅有一个单词。

```css
.search-form {
  > .field { /* ... */ }
  > .action { /* ... */ }
}
```

### 2.5 避免标签选择器

- 任何时候尽可能使用 `classnames`。标签选择器在使用上没有问题，但是其性能上稍弱，并且表意不明确

```css
/* good */
.title { ... }

/* bad */
h1 { ... }
```

### 2.6 变体

- `Components` 和 `Elements` 可能都会拥有 `Variants`

### 2.7 变体命名

`Variants` 的 `classname` 应带有前缀中划线 `-`

```css
.like-button {
  &.-wide { ... }
  &.-short { ... }
  &.-disabled { ... }
}
```

### 2.8 在父元素中设置定位

- 倘若你需要为组件设置定位，应将在组件的上下文（父元素）中进行处理

### 2.9 顾虑

- **中划线`-`是一坨糟糕的玩意**：其实你可以选择性的使用，只要将 `Components, Elements, Variants`记在心上即可。
- **我有时候想不出两个单词唉**：有些组件的确使用一个单词就能表意，比如 `aleter` 。但其实你可以使用后缀，使其意识更加明确。

比如块级元素：

- .aleter-box
- .aleter-card
- .aleter-block

或行内级元素

- .link-button
- .link-span

## 3. Less or Scss

### 3.1 顺序

- 代码按一下顺序组织：

1. @import
2. 变量声明
3. 样式声明

```less
@import "mixins/size.less";

@default-text-color: #333;

.page {
  width: 960px;
  margin: 0 auto;
}
```

### 3.2 @import

- @import 语句引用的文需要写在一对引号内，.less 后缀不得省略
- 引号使用`"`

```less
/* good */
@import "mixins/size.less";
@import "mixins/grid.less";

/* bad */
@import "mixins/size";
@import 'mixins/grid.less';
```

### 3.3 混入

- 在定义 `mixin` 时，如果 `mixin` 名称不是一个需要使用的 className，必须加上括号，否则即使不被调用也会输出到 CSS 中
- 如果混入的是本身不输出内容的 mixin，需要在 mixin 后添加括号（即使不传参数），以区分这是否是一个 className

```less
/* good */
.big-text() {
  font-size: 2em;
}

h3 {
  .big-text(); /* 1 */
  .clearfix(); /* 2 */
}

/* bad */
.big-text {
  font-size: 2em;
}

h3 {
  .big-text;
  .clearfix;
}
```

## 4. 性能优化

### 4.1 display

display 属性会影响页面的渲染，请合理使用。

- display: inline后不应该再使用 width、height、margin、padding 以及 float；
- display: inline-block 后不应该再使用 float；
- display: block 后不应该再使用 vertical-align；
- display: table-* 后不应该再使用 margin 或者 float

### 4.2 变换与动画

- 使用 `transition` 时应指定 `transition-property`

```css
/* good */
.box {
  transition: color 1s, border-color 1s;
}

/* bad */
.box {
  transition: all 1s;
}
```

- 尽可能在浏览器能高效实现的属性上添加过渡和动画

- 例如可以使用 translate 来代替 left 作为动画属性

```css
/* good */
.box {
  transition: transform 1s;
}
.box:hover {
  transform: translate(20px); /* move right for 20px */
}

/* bad */
.box {
  left: 0;
  transition: left 1s;
}
.box:hover {
  left: 20px; /* move right for 20px */
}
```

### 4.3 提升 CSS 选择器性能

CSS 选择器对性能的影响源于浏览器匹配选择器和文档元素时所消耗的时间，所以优化选择器的原则是应尽量避免使用消耗更多匹配时间的选择器。而在这之前我们需要了解 CSS 选择器匹配的机制， 如子选择器规则：

```less
#header > a {
  font-weight:blod;
}
```

我们中的大多数人都是从左到右的阅读习惯，会习惯性的设定浏览器也是从左到右的方式进行匹配规则，推测这条规则的开销并不高。

我们会假设浏览器以这样的方式工作：寻找 id 为 header 的元素，然后将样式规则应用到直系子元素中的 a 元素上。我们知道文档中只有一个 id 为 header 的元素，并且它只有几个 a 元素的子节点，所以这个 CSS 选择器应该相当高效。

事实上，却恰恰相反，CSS 选择器是从右到左进行规则匹配。了解这个机制后，例子中看似高效的选择器在实际中的匹配开销是很高的，浏览器必须遍历页面中所有的 a 元素并且确定其父元素的 id 是否为 header 。

如果把例子的子选择器改为后代选择器则会开销更多，在遍历页面中所有 a 元素后还需向其上级遍历直到根节点。

```less
#header a { 
  font-weight:blod; 
}
```

理解了CSS选择器从右到左匹配的机制后，明白只要当前选择符的左边还有其他选择符，样式系统就会继续向左移动，直到找到和规则匹配的选择符，或者因为不匹配而退出。我们把最右边选择符称之为**关键选择器**。——[更多详情](http://www.jianshu.com/p/268c7f3dd7a6)

#### 4.2.1 避免使用通用选择器

```less
/* bad */
.content * {
  color: red;
}
```

浏览器匹配文档中所有的元素后分别向上逐级匹配 class 为 content 的元素，直到文档的根节点。因此其匹配开销是非常大的，所以应避免使用关键选择器是通配选择器的情况。

#### 4.2.2 避免使用标签或 class 选择器限制 id 选择器

```less
/* good */
#menu-icon { ... }

/* bad */
button#back-button { ... }
```

#### 4.2.3 避免使用标签限制 class 选择器

```less
/* good */
.treecell-indented { ... }

/* bad */
treecell.indented { ... }
```

#### 4.2.4 避免使用多层标签选择器。使用 class 选择器替换，减少css查找

```less
/* good */
.treecell-mailfolder { ... }

/* bad */
treeitem[mailfolder="true"] > treerow > treecell { ... }
```

#### 4.2.5 避免使用子选择器

```less
/* good */
treehead > treerow > treecell { ... }

/* bad */
treehead treerow treecell { ... }
```

#### 4.2.6 使用继承

```less
/* good */
#bookmarkMenuItem { list-style-image: url(blah) }

/* bad */
#bookmarkMenuItem > .menu-left { list-style-image: url(blah) }
```

## 5. 注释

- 统一使用多行注释

```css
/* 文章标题样式 */
.title {
  font-size: 18px;
  color: #333;
}
```

