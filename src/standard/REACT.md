# REACT

## 1. 文件组织

### 1.1 同名

- 同一目录下不得拥有同名的`.js`和`.jsx`文件

- 在使用模块导入时，倾向于不添加后缀
- 如果存在同名但不同后缀的文件，构建工具将无法决定哪一个是需要引入的模块

```jsx
// good
import { Loading } from "./components/Loading";

// bad
import { Loading } from "./components/Loading/index.js";
import { Loading } from "./components/Loading/index.jsx";
```



### 1.2 统一

- 组件文件使用一致的`.js`或 `.jsx`后缀。

- 所有组件文件的后缀名从`.js`或`.jsx`中任选其一。

- 不应在项目中出现部分组件为`.js`文件，部分为`.jsx`的情况。

```cpp
// good
└─ components 
  └─ Loading
  	└─ index.jsx
  
// bad
└─ components 
  └─ Loading
    └─ index.js
    └─ index.jsx
```

### 1.3 组件导出 

- 每一个文件以`export default`的形式暴露一个组件

- 允许一个文件中存在多个不同的组件，但仅允许通过`export default`暴露一个组件，其它组件均定义为内部组件

- 每个存放组件的目录使用一个`index.js`以命名导出的形式暴露所有组件

  同目录内的组件相互引用使用`import Foo from './Foo';`进行

  引用其它目录的组件使用`import Foo from '../component';`进行

## 2. 命名规则

### 2.1 组件名

- 使用大驼峰命名
- 名称均为PascalCase
- 组件名称与文件名称保持相同
- 使用`withXxx`或`xxxable`形式的词作为高阶组件的名称，**高阶组件**并不是一个组件

```cpp
// good
└─ components 
    └─ RadioGroup
    		└─ index.jsx
  
// bad
└─ components 
    └─ radiogroup
    		└─ RadioGroup.jsx
```

### 2.2 事件

- 使用`onXxx`形式作为`props`中用于回调的属性名称                                                                                                                                                                                                                                                                                                                                                                                                                                     

- 使用统一的命名规则用以区分`props`中回调和非回调部分的属性
- 在JSX上可以清晰地看到一个组件向上和向下的逻辑交互

- 对于不用于回调的函数类型的属性，使用动词作为属性名称。

```jsx
// onClick作为回调以on开头，renderText非回调函数则使用动词
let Label = ({onClick, renderText}) => <span onClick={onClick}>{renderText()}</span>;
```

- 作为组件方法的事件处理函数以具备业务含义的词作为名称，不使用`onXxx`形式命名

```jsx
  class Form {     
    @autobind
    collectAndSubmitData() {   
      let data = {          
        name: this.state.name, 
        age: this.state.age  
      };       
      this.props.onSubmit(data);  
    } 
    @autobind
    syncName() {   
      // ...   
    }    
    @autobind
    syncAge() {   
      // ...   
    }
    render() {   
      return (    
        <div>       
          <label>姓名：<input type="text" onChange={this.syncName} /></label>                  				<label>年龄：<input type="number" onChange={this.syncAge} /></label>                  				 <button type="button" onClick={this.collectAndSubmit}>提交</button>              				</div>
      );     
    } 
  }
```

## 3. JSX

### 3.1 标签

- 没有子节点的非DOM组件使用自闭合语法

- 对于DOM节点，按照HTML编码规范相关规则进行闭合，**其中void element使用自闭合语法**。

```jsx
  // good
  <Loading />
  // bad 
  <Loading></Loading>
```

- 保持起始和结束标签在同一层缩进。

- 对于标签前面有其它语句（如`return`的情况，使用括号进行换行和缩进）。

```jsx
// good 
class Message {   
  render() {      
  	return (      
 		  <div>          
			  <span>Hello World</span>    
		  </div>
 	 );    
  } 
}

// bad
class Message {  
  render() {       
	  return <div>   
		<span>Hello World</span>  
		</div>;     
  }
}
```

- 对于直接`return`的函数组件，可以直接使用括号而省去大括号和`return`关键字

```jsx
let Message = () => (<div><span>Hello World</span></div>);
```

- 以字符串字面量作为值的属性使用双引号（`"`），在其它类型表达式中的字符串使用单引号（`'`）

```jsx
// good
<Foo bar="bar" /> 
<Foo style={{width: '20px'}} />

// bad  
<Foo bar='bar' /> 
<Foo style={{width: "20px"}} />
```

- 对于值为`true`的属性，省去值部分

```jsx
// good 
<Foo visible />

// bad
<Foo visible={true} /> 
```

### 3.2 循环

- 对于需要使用`key`的场合，提供一个唯一标识作为`key`属性的值，禁止使用可能会变化的属性（如索引）
- `key`属性是React在进行列表更新时的重要属性，如该属性会发生变化，渲染的性能和**正确性**都无法得到保证
- 如果列表没有**唯一值**，那么才可以使用index

```jsx
// good 
{ list.map(item => <Foo key={item.id} {...item} />) }
           
// bad 
{ list.map((item, index) => <Foo key={index} {...item} />) } 
```

- 将JSX的层级控制在3层以内

- JSX提供了基于组件的便携的复用形式，因此可以通过将结构中的一部分封装为一个函数组件来很好地拆分大型复杂的结构。
- 层次过深的结构会带来过多缩进、可读性下降等缺点。
- 如同控制函数内代码行数和分支层级一样，对JSX的层级进行控制可以有效提升代码的可维护性

```jsx
// good  
let Header = ({title, subtitle}) => (   
  <header>      
    <h3>{title}</h3>
    <span>{subtitle}</span>  
  </header>
); 
let Content = ({content}) => <section>{content}</section>;  
let Footer = ({author, postTime}) => (  
  <footer>       
    <span>{author}</span>@<time>{postTime}</time>  
  </footer>
); 
let Item = item => (
  <div>       
    <Header {...item} />    
    <Content {...item} />       
    <Footer {...item} />   
  </div>
); 
let List = ({items}) => ( 
  <ul>       
    {items.map(Item)}  
  </ul>
);

// Bad 
let List = ({items}) => (
  <ul>
    { 
      items.map(item => (   
        <li>                
          <header>          
            <h3>{item.title}</h3>   
            <span>{item.subtitle}</span>  
          </header>                   
          <section>{item.content}</section>    
          <footer>                      
            <span>{item.author}</span>@<time>{item.postTime}</time>      
          </footer>              
        </li>       
      ))       
    }    
  </ul> 
 );
```