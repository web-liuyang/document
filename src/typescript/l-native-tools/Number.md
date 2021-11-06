# Number

## currency

<CodeBlocks>currency(method, args)</CodeBlocks>

**金额运算**

此计算不是特别的精准，建议适用于精度要求不是特别高的计算

注：金融类项目建议使用专用的金额运算库

**源码**

```tsx
/**
 * @description 金额运算
 * @param {'+' | '-' | '*' | '/'} method - 计算方法
 * @param {number[]} args 需要参与计算的数值或字符串
 * @return {number} 计算后的值
 */
export function currency(method: '+' | '-' | '*' | '/', numberArr: number[]): number {
  const arr = numberArr.map((item) => Math.round((item *= 100)));
  let num = 0;
  switch (method) {
    case '+':
      num = arr.reduce((total, item) => total + item) / 100;
      break;
    case '-':
      num = arr.reduce((total, item) => total - item) / 100;
      break;
    case '*':
      num = arr.reduce((total, item) => (total * item) / 100, 1);
      break;
    case '/':
      num = arr.reduce((total, item) => (total * 100) / item) / 100;
      break;
  }
  return num;
}
```

**示例**

```js
const a = 5,
      b = 5;

currency('+',[a,b]);
// => 10

currency('-',[a,b]);
// => 0

currency('*',[a,b]);
// => 25

currency('/',[a,b]);
// => 1
```



## random

<CodeBlocks>random(min,max)</CodeBlocks>

**获取两个数值之间的整数**

获取两个数值之间的整数，包含最大值与最小值

**源码**

```tsx
/**
 * @description 获取两个数值之间的整数，包含最大值与最小值
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @return {number}
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```

**示例**

```js
const min = 0,
      max = 10;

random(min,max);
// => 0

random(min,max);
// => 5

random(min,max);
// => 10
```

