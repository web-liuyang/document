# Common

## $l.typeOf

<CodeBlocks>$l.typeOf(origin)</CodeBlocks>

**类型检查**

浅判断类型

**源码**

```tsx
type Type = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'symbol' | 'function' | 'null' | 'undefined' | 'regexp' | 'date' | 'window' | 'set' | 'map';

/**
 * @description 浅判断类型
 * @param {*} origin - 判断的变量
 * @return {Type}
 */
export function typeOf(origin?: any): Type & string {
  return Object.prototype.toString.call(origin).slice(8, -1).toLowerCase() as Type & string;
}
```

**示例**

```js
const origin1 = {};
$l.typeOf(origin1);
// => object;

const origin2 = [];
$l.typeOf(origin2);
// => array;

const origin3 = function(){};
$l.typeOf(origin3);
// => function;
```



## $l.isEmpty

<CodeBlocks>$l.isEmpty(origin)</CodeBlocks>

**判断是否为空**

判断某个值是否为空

**源码**

```tsx
/**
 * @description 判断某个值是否为空
 * @param {*} origin - 判断的值
 * @return {boolean} 空为true 非空为false
 */
export function isEmpty(origin?: any): boolean {
  switch (typeOf(origin)) {
    case 'string':
      return !!origin;
    case 'number':
      return !!origin;
    case 'boolean':
      return origin;
    case 'object':
      for (const key in origin) return !key;
      return true;
    case 'array':
      return origin.length === 0;
    case 'null':
      return true;
    case 'undefined':
      return true;
    default:
      return false;
  }
}
```

**示例**

```tsx
const origin1 = [];
$l.isEmpty(origin1);
// => true

const origin2 = [1];
$l.isEmpty(origin2);
// => false

const origin3 = {};
$l.isEmpty(origin3);
// => true

const origin4 = {name:'liuyang'};
$l.isEmpty(origin4);
// => false
```



## $l.straightDistance

<CodeBlocks>$l.straightDistance(origin,target)</CodeBlocks>

**直线距离计算**

根据两端经纬度进行距离计算，单位米

注：根据实际情况使用

**源码**

```tsx
/**
 * @description 直线距离计算
 * @param {string} origin - 当前经纬度。 经度在前，纬度在后，经度和纬度用","分割，经纬度小数点后不得超过6位
 * @param {string} target - 目标经纬度。 经度在前，纬度在后，经度和纬度用","分割，经纬度小数点后不得超过6位
 * @returns {number} 返回两端之间的距离,单位米
 */
export function straightDistance(origin: string, target: string): number {
  if (typeOf(origin) !== 'string' || typeOf(target) !== 'string') {
    throw new TypeError(`想要的到string类型的参数但是却得到：${typeOf(origin)}与${typeOf(target)}类型的参数`);
  }
  const { PI, asin, sqrt, pow, sin, cos, round } = Math;
  // 获取经纬度
  const [lon1, lat1] = origin.split(',');
  const [lon2, lat2] = target.split(',');
  const EARTH_RADIUS = 6378137.0; // 地球半径

  // 获取弧度
  function getRad(d: string) {
    return (((d as unknown) as number) * PI) / 180.0;
  }

  const radLat1 = getRad(lat1);
  const radLat2 = getRad(lat2);
  const a = radLat1 - radLat2;
  const b = getRad(lon1) - getRad(lon2);

  let s = 2 * asin(sqrt(pow(sin(a / 2), 2) + cos(radLat1) * cos(radLat2) * pow(sin(b / 2), 2)));
  s = s * EARTH_RADIUS;
  s = round(round(s * 10000) / 10000.0);
  return s;
}
```

**示例**

```tsx
const origin1 = '104.061388,30.505552';
const target1 = '103.923298,30.636125';

$l.straightDistance(origin1,target1);
// => 19658
```



## $l.deepClone

<CodeBlocks>$l.deepClone(origin)</CodeBlocks>

**深拷贝**

不影响源对象使用的引用值类型的赋值

**源码**

```tsx
/**
 * @description 深拷贝
 * @template T
 * @param {T} origin - 拷贝的源对象
 * @return {T} 拷贝后的对象
 */
export function deepClone<T = {} | any[]>(origin: T): T {
  let clone = (typeOf(origin) === 'array' ? [] : {}) as T;
  if (typeOf(origin) === 'object' || typeOf(origin) === 'array') {
    for (const key in origin) {
      if (typeOf(origin[key]) === 'object' || typeOf(origin[key]) === 'array') {
        clone[key] = deepClone(origin[key]);
      } else {
        clone[key] = origin[key];
      }
    }
  }
  return clone;
}
```

**示例**

```tsx
const origin = {a:1,b:2};

$l.deepClone(origin);
// => {a:1,b:2}
```

