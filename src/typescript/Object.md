# Object

## $l.getOwnKeys

<CodeBlocks>$l.getOwnKeys(origin)</CodeBlocks>

**对象Key值获取**

目标对象的自身属性键组成的数组,不包括原型对象

**源码**

```tsx
/**
 * @description 目标对象的自身属性键组成的数组,不包括原型对象
 * @param {object | any[]} origin - 源对象
 * @return {PropertyKey[]} 源对象可枚举的数组
 */
export function getOwnKeys(origin: object | any[]): PropertyKey[] {
  if (typeOf(origin) !== 'object' || typeOf(origin) !== 'array') {
    throw new TypeError(`想要获取object与array类型的参数却获得：${typeOf(origin)}类型的参数`);
  }
  return Reflect.ownKeys(origin);
}
```

**示例**

```js
const obj = {a:1,b:2,c:3},
      arr = [];

$l.getOwnKeys(obj);
// => [a,b,c]

$l.getOwnKeys(arr);
// => [length]
```
