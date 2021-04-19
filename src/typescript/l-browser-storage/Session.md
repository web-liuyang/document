# Session

`sessionStorage` 本地存储

## set(key, value, options)

设置存储

**参数说明**

| 属性值  |  类型  |    描述     | 必填 | 默认值 |
| :-----: | :----: | :---------: | :--: | :----: |
|   key   | string |  设置的key  |  是  |   -    |
|  value  |  any   | 设置的value |  是  |   -    |
| options | object | 额外的选项  |  否  |   -    |

**options** 

额外选项的参数

|  属性值  |  类型   |   描述   | 必填 | 默认值 |
| :------: | :-----: | :------: | :--: | :----: |
|  encode  | boolean | 是否加密 |  否  |   -    |
| duration | number  | 有效时间 |  否  |   -    |

**return**

返回值

| 属性值 |  类型  |    描述    |
| :----: | :----: | :--------: |
|  code  | number |   状态码   |
|  data  |  any   | 设置的数据 |

**example**

示例

```tsx
import { session } from "l-browser-storage";

session.set(
  'userinfo',
  {name: 'LiuYang', age: 21 },
  {encode:true ,duration: 60000}
);
```

## get(key, options)

获取存储

**参数说明**

| 属性值  |  类型  |    描述    | 必填 | 默认值 |
| :-----: | :----: | :--------: | :--: | :----: |
|   key   | string | 设置的key  |  是  |   -    |
| options | object | 额外的选项 |  否  |   -    |

**options** 

额外选项的参数

| 属性值 |  类型   |   描述   | 必填 | 默认值 |
| :----: | :-----: | :------: | :--: | :----: |
| decode | boolean | 是否解析 |  -   |   -    |

**return**

返回值

| 属性值 |  类型  |    描述    |
| :----: | :----: | :--------: |
|  code  | number |   状态码   |
|  data  |  any   | 返回的数据 |

**example**

示例

```tsx
import { session } from "l-browser-storage";

session.get('userinfo', {decode:true });
```

## remove(key)

删除存储

**参数说明**

| 属性值 |  类型  |   描述    | 必填 | 默认值 |
| :----: | :----: | :-------: | :--: | :----: |
|  key   | string | 设置的key |  是  |   -    |

**return**

返回值

| 属性值 |  类型  |    描述    |
| :----: | :----: | :--------: |
|  code  | number |   状态码   |
|  data  |  any   | 删除的数据 |

**example**

示例

```tsx
import { session } from "l-browser-storage";

session.remove('userinfo');
```

## clear()

清空存储

**example**

示例

```tsx
import { session } from "l-browser-storage";

session.clear();
```

