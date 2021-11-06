# String

## firstUpperCase

<CodeBlocks>firstUpperCase(str)</CodeBlocks>

**将第一个字母转换成大写**

将第首字母转换成大写并返回

**源码**

```tsx
/**
 * @description 将第一个字母转换成大写
 * @param {string} str - 需要转换的字符串
 * @return {string} 转换后的字符串
 */
export function firstUpperCase(str: string): string {
  return str.replace(str[0], str[0].toUpperCase());
}

```

**示例**

```js
const str = ""

getOwnKeys(obj);
// => [a,b,c]

getOwnKeys(arr);
// => [length]
```
