# Umi 框架动态路由

编写此问题时 Umi版本为3.x

在Umi中目前没有找到可以动态配置路由的功能。

官方给出的答案是在 `app.tsx` 中暴露出来的 `patchRoutes` 方法中进行修改。

是在已进入页面的时候配合 `render`方法进行动态请求并替换路由。

```ts
let extraRoutes; // 路由

export function patchRoutes({ routes }) {
  // 合并路由
  merge(routes, extraRoutes);
}

export function render(oldRender) {
  // 请求路由
  fetch('/api/routes').then(res=>res.json()).then((res) => { 
    // 保存路由
    extraRoutes = res.routes;
    // 渲染
    oldRender();
  })
}
```

虽然这种方法能够实现动态路由但是我们的需求常常是在 **登录后判断该账号的权限进行动态路由的显示**。

显然这种方法就不能够实现。

想要解决这种情况，我的思路是这样的：

- 因为是需要动态更换路由，那么在登录后就要重新 `render` 不然的话就会出现只有路由添加上去，页面没有刷新的情况。

  

- 通过 `app.tsx` 中的 `rootContainer` 函数进行重写渲染。

- 在 `rootContainer` 函数里面的 **根组件** 进行监听你的数据变化。

- 数据变化后进行路由的处理以及你想要的其他处理。

- 处理完成以后重新触发 `render` 进行动态路由的渲染。

解决步骤如下：

1. 在 `app.tsx` 中添加 `rootContainer` 函数。

```tsx
// app.tsx
// 页面创建
export function rootContainer(
  container: FC
): React.FunctionComponentElement<Record<string, never>> {
  // RootNode 是根渲染组件
  return React.createElement(RootNode, null, container);
}
```

2. 在 `RootNode` 中监听数据的修改。

```tsx
// RootNode.tsx

// 根页面配置
const RootNode: FC = (props) => {
  return (
    <Router history={history}>
      <Content routes={props.children.props.routes} />
    </Router>
  );
};
```

```tsx
// Content.tex

// 渲染路由
import { renderRoutes } from '@umijs/renderer-react';

// 页面内容
const Content: FC = props => {
  // 路由信息
  const [routes, setRoutes] = useState<Routes>([])
  
  /** 监听你的路由数据, 这里的监听随便你用什么都可以比如redux, mobx, recoil 之类的 */
	subscribe(routes => {
    // 其他处理...
    // 数据处理...
    // 设置路由数据
 	  setRoutes(routes);
	});
  
  /** 新路由 */
  const renderRoutesProps = { routes };
  
	// 触发重新渲染
  return <>{renderRoutes(renderRoutesProps)}</>;
};
```

处理到现在就差不多完成了。

在登录成功后你根据你用的 **状态管理库/数据存储库** 来触发 `Content.tsx` 中的 `subscribe`函数。

进行数据处理后重新渲染。

如果操作没问题的话，应该就解决了。

