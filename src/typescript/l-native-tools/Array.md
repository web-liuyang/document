# array

## flatten

<CodeBlocks>flatten(origin, target)</CodeBlocks>

**数组扁平化**

将多维数组合为新的一维数组

**源码**

```tsx
/**
 * @description 数组扁平化
 * @param {any[]} origin - 源数组
 * @param {any[]} [target=[]] - 目标数组
 * @return {any[]} 扁平化后的数据
 */
function flatten(origin: any[], target: any[] = []): any[] {
  for (const item of origin) {
    if (typeOf(item) === 'array') {
      flatten(item, target);
    } else {
      target.push(item);
    }
  }
  return target;
}
```

**示例**

```js
const origin = [1,2,3,[4,5,6],[7,[8,[9]]]];

flatten(origin);
// => [1,2,3,4,5,6,7,8,9];
```



## unique

<CodeBlocks>unique(origin)</CodeBlocks>

**数组去重**

把源数组中相同的元素去除掉

**源码**

```tsx
/**
 * @description 数组去重
 * @param {any[]} origin - 源数组
 * @return {any[]} 去重后的数组
 */
export function unique(origin: any[]): any[] {
  if (typeOf(origin) !== 'array') {
    throw new TypeError(`想要得到array类型的参数但是却得到：${typeOf(origin)}}类型的参数`);
  }
  return [...new Set(origin)];
}
```

**示例**

```tsx
const origin = [1,1,2,2,3,3,3];

unique(origin);
// => [1,2,3];
```

