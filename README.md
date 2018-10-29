# simle-utils-tiny

Some useful utils function for javascript

## Features

- String
- Type
- RegExp

## Installing

Using npm:

```bash
$ npm i simple-utils-tiny -S
```

## Quickly Start

Using ESModule to import 

```js
// to import part api
import { stringTrim, rgAllowFloat } from 'simple-utils-tiny'
const res = stringTrim(' abc  dd ef g', 'around') // 'abc  dd ef g'

// to import whole api
import SUtils from 'simple-utils-tiny'
const res = SUtils.stringTrim(' abc  dd ef g', 'middle') // ' abcddefg'
```

## simple-utils-tiny API

Here are the simple-utils-tiny whole API

### String

##### stringTrim(string[, type])

```js
// Whitespace in filter string. return string
const str = ' abc  dd ef g'
const res1 = stringTrim(str) // default 'all'
const res2 = stringTrim(str, 'left') // filter left whitespace
const res3 = stringTrim(str, 'right') // filter right whitespace
const res4 = stringTrim(str, 'around') // filter around whitespace
const res5 = stringTrim(str, 'middle') // filter middle whitespace
```

##### stringTransCase(string, type)

```js
// Conversion letter size. return string
const str = 'hi, hello world'
const re1 = stringTransCase(str, 'upper') // conversion letter to uppercase
const re2 = stringTransCase(str, 'lower') // conversion letter to lowercase
const re3 = stringTransCase(str, 'capitalize') // conversion letter to capitalize
```

### Type

##### typeIsEqual(obj1, obj2)

```js
// Judge whether the two objects are equal in value. return boolean
const obj1 = { a: '1', b: [1, 2, 3]}
const obj2 = { a: '1', b: [1, 2, 3]}
const res = typeIsEqual(obj1, obj2) // true
```

##### typeIs(target)

```js
// Judge target whether is a string type
const res = typeIs.isString(target)  

// Judge target whether is a number type
const res = typeIs.isNumber(target)

// Judge target whether is a function type
const res = typeIs.isFunction(target)

// Judge target whether is a boolean type
const res = typeIs.isBoolean(target)

// Judge target whether is a object type
const res = typeIs.isObject(target)

// Judge target whether is a array type
const res = typeIs.isArray(target)

// Judge target whether is a regexp type
const res = typeIs.isRegExp(target)

// Judge target whether is a arguments type
const res = typeIs.isArguments(target)

// Judge target whether is a date type
const res = typeIs.isDate(target)

// Judge target whether is a symbol type
const res = typeIs.isSymbol(target)

// Judge target whether is a error type
const res = typeIs.isError(target)

// Judge target whether is a promise type
const res = typeIs.isPromise(target)

// Judge target whether is a set type
const res = typeIs.isSet(target)
```

### RegExp

##### rgIsInteger(str[, type])

```js
// Judge target whether is a integer. type default 'all'
rgIsInteger(123) // true
rgIsInteger(-123) // true

// Judge target whether is a positive integer.
rgIsInteger(123, '+') // true
rgIsInteger(-123, '+') // false

// Judge target whther is a negative integer.
rgIsInteger(123, '-') // false
rgIsInteger(-123, '-') // true
```

##### rgIsFloat(str[, type])

```js
// Judge target whether is a integer. type default 'all'
rgIsFloat(123.24) // true
rgIsFloat(-123.24) // true

// Judge target whether is a positive integer.
rgIsFloat(123.24, '+') // true
rgIsFloat(-123.24, '+') // false

// Judge target whther is a negative integer.
rgIsFloat(123.24, '-') // false
rgIsFloat(-123.24, '-') // true
```

##### rgAllowInteger(str[, type, len])

type defaul 'all', len default 9

```js
// Only integer input is allowed, and positive and negative 
// integers are independently judged.

// Allow positive and negative integer, and max length 9
const res = rgAllowInteger(yourInputValue) 

// Only positive integer, and max length 5
const res = rgAllowInteger(yourInputValue, '+', 5)

// Only negative integer, and max length 9
const res = rgAllowInteger(yoruInputValue, '-')
```

##### rgAllowFloat(str[, type, integerLen, floatLen])

type defaul 'all', integerLen default 9, floatLen default 2

```js
// Only float input is allowed, and positive and negative 
// float are independently judged.

// Allow positive and negative float and max integer length 9
// max float length 2
const res = rgAllowFloat(yourInputValue) 

// Only positive float and max integer length 9 
// max float length 4
const res = rgAllowFloat(yourInputValue, '+', 5, 4)

// Only negative float and max integer length 7 
// max float length 1
const res = rgAllowFloat(yoruInputValue, '-', 7, 1)
```


##### rgIsPhone(str)

```js
// Judge target whether is a mobile phone number
const res = rgIsPhone(phoneNum) 
```

##### rgIsTel(str)

```js
// Judge target whether is a telphone number
const res = rgIsTel(telNum) 
```

##### rgIsChinese(str)

```js
// Judge target whether is only contains chinese
const res = rgIsChinese(str) 
```

##### rgIsEmail(str)

```js
// Judge target whether is an email 
const res = rgIsEmail(str) 
```

##### rgIsID(str)

```js
// Judge target whether is a ID card number 
const res = rgIsID(str) 
```

##### rgIsUrl(str)

```js
// Judge target whether is a url
const res = rgIsUrl(str) 
```

##### rgIsPC

```js
// Judge the environment whether is a pc browser
const res = rgIsPC() 
```

##### rgThousandMark(str[, type])

```js
// Add or delete number thousand mark. default '+' add
const res = rgThousandMark(12345.34) // 12,345.34
const res = rgThousandMark('12,345.34', '-') // 12345.34
```

##### rgBrowserType(isTest360: boolean)

```js
// Returns the current browser type and parameters to determine 
// whether to return to the 360 browser environment. 

// Judge result contains (Edge, FF, Wechat, QQ, Maxthon, LB, Baidu
// Safari, UC, Opear, Sougou, 360, Chrome
const res = rgBrowserType()
```