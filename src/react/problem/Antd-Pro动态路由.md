# Antd-Pro 动态路由

由于 Antd-Pro 是基于 Umi 进行搭建的，所以不了解 Umi 的可以先去了解，本文章需要结合 [Umi 框架动态路由](/react/problem/Umi框架动态路由.html) 一起阅读。

首先 Antd-Pro 使用的路由是自动根据 配置文件中 **routes** 自动生成的，生成的路由可以在 `.umi/core/routes.ts中查看`。

umi 自动生成的路由还不能直接给 Antd-Pro 使用，因为在 app.ts 中导出了 layout 配置，所以 layout 自动加载的路由以及菜单是已经处理好的数据。

antd-pro 通过 [getMenuData](https://procomponents.ant.design/components/layout/#getmenudata) 来生成的菜单，那么我们在处理的时候，最终也要转换成 [getMenuData](https://procomponents.ant.design/components/layout/#getmenudata) 方法返回的菜单数据才可以

解决的思路与[Umi 框架动态路由](/react/problem/Umi框架动态路由.html) 差不多，只不过需要中途进行菜单的转换操作，所以建议先看 [Umi 框架动态路由](/react/problem/Umi框架动态路由.html) 再看本文章。

解决步骤如下：

1. 在 `app.tsx` 中导出 `getInitialState` 函数，并且在 `initialState` 中 存储菜单信息，本文章用 `menuinfo` 字段表示，这是一个树形的数组。

```tsx
// Menuinfo 类型是后端接口返回的菜单类型，在后续操作中会重组菜单数据，转换成antd-pro需要的数据
export async function getInitialState(): Promise<{ menuinfo: Menuinfo[] }> {
  // 省略其他代码
  const menuinfo = getMenuinfo();

  return {
    menuinfo,
  };
}
```

2. 创建一个处理路由菜单的方法 `dynamicRoutesToUsableRoutes.ts`用来处理路由信息

```tsx
import * as icons from "@ant-design/icons";
import { createElement } from "react";
import { dynamic } from "umi";

const Component = {
  /** 欢迎页面 */
  Welcome: dynamic(() => import("@/pages/Welcome")),
};

function dynamicRoutesToUsableRoutes(routes: MenuDataItem[]): MenuDataItem[] {
  return routes.map(route => {
    // route 是后端返回的数据
    // item 是最终antd-pro需要数据
    const item: MenuDataItem = {
      ...route,
      exact: false,
    };

    // icon 匹配
    if (route?.icon) {
      item.icon = createElement(icons[route.icon]);
    }

    // 组件匹配, 因为后端菜单配置的时候只会返回当前菜单对应的组件标识，所以通过组件标识来匹配组件
    if (route?.name) {
      item.component = Component[route.name || ""];
      item.exact = true;
    }

    // 子路由 处理
    if (route.routes && route.routes.length > 0) {
      item.routes = [
        // 如果有子路由那么肯定是要进行重定向的，重定向为第一个组件
        { path: item.path, redirect: route.routes[0].path, exact: true },
        ...dynamicRoutesToUsableRoutes(route.routes),
      ];
      item.children = [
        { path: item.path, redirect: route.routes[0].path, exact: true },
        ...dynamicRoutesToUsableRoutes(route.routes),
      ];
    }

    return item;
  });
}
```

3. 在 `app.tsx` 中导出 `rootContainer` 函数。

```tsx
// app.tsx
import type { ReactNode } from "react";
import { createElement } from "react";
import RootNode from "@/RootNode";

// 页面创建
export function rootContainer(container: ReactNode) {
  return createElement(RootNode, null, container);
}
```

4. 在 `RootNode` 中监听数据的修改, 并且处理路由

```tsx
// RootNode.tsx
import type { IRoute } from "umi";
import type { MenuDataItem } from "@ant-design/pro-layout";
import { renderRoutes } from "@umijs/renderer-react";
import dynamicRoutesToUsableRoutes from "@utils/dynamicRoutesToUsableRoutes";

interface RootNodePorps {
  routes: MenuDataItem[];
}

const RootNode: FC<RootNodePorps> = props => {

  // @ts-ignore
  const plugin = props.children.props.plugin; // 这里是获取 renderRoutes 中所需要的plugin参数

  // 获取保存的用户信息
  const { initialState } = useModel("@@initialState");

  // renderRoutes 中的routes参数
  const [routes, setRoutes] = useState<IRoute[]>([]);

  useEffect(() => {
    // 获取后端的菜单
    const menuinfo = initialState?.menuinfo;

    if (menuinfo) {
      // 获取当前的菜单，这是配置文件中的routes生成的，
      const routes = props.routes;
      // 获取通过menuino生成的路由信息
      const menuData = getMenuData(initialState.menuinfo).menuData as (Menuinfo & MenuDataItem)[];

      // 替换原来的路由信息， 因为目前为止还没有匹配组件，所以必须要把对应的组件匹配上去，页面才能渲染
      routes[0].routes = dynamicRoutesToUsableRoutes(menuData);
      routes[0].children = dynamicRoutesToUsableRoutes(menuData);
      // 路由重定向
      if (routes[0].routes.length > 0) {
        routes[0].routes.push({
          path: "/",
          redirect: routes[0].routes[0].path,
          exact: true,
        });

        routes[0].children.push({
          path: "/",
          redirect: routes[0].routes[0].path,
          exact: true,
        });
      }
			// 设置最终的路由
      setRoutes(routes);
    }
  }, [initialState?.menuinfo]);

  return (
    <Provider store={store}>
      <Router history={history}>
        {renderRoutes({ routes, plugin})}
      </Router>
    </Provider>
  );
};
```

目前说明一下有几个奇怪的地方

1. 路由信息中有 `routes` 与 `children`，按道理说只需要一个就可以，但是 antd-pro 是这样的，那我也只能处理成它这样

2. 如果 `initialState.menuinfo` 变化那么就会重新渲染路由这是正常的，需要用户主动去触发

到这里操作就已经完成了。
