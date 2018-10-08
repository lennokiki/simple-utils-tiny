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
import { String_trim, RegExp_allowFloat } from 'simple-utils-tiny'
const res = String_trim(' abc  dd ef g', 'around') // 'abc  dd ef g'

// to import whole api
import SUtils from 'simple-utils-tiny'
const res = SUtils.String_trim(' abc  dd ef g', 'middle') // ' abcddefg'
```

## simple-utils-tiny API

Here are the simple-utils-tiny whole API

### String

##### String_trim(string[, type])

```js
// Whitespace in filter string. return string
const str = ' abc  dd ef g'
const res1 = String_trim(str) // default 'all'
const res2 = String_trim(str, 'left') // filter left whitespace
const res3 = String_trim(str, 'right') // filter right whitespace
const res4 = String_trim(str, 'around') // filter around whitespace
const res5 = String_trim(str, 'middle') // filter middle whitespace
```

##### String_transCase(string, type)

```js
// Conversion letter size. return string
const str = 'hi, hello world'
const re1 = String_transCase(str, 'upper') // conversion letter to uppercase
const re2 = String_transCase(str, 'lower') // conversion letter to lowercase
const re3 = String_transCase(str, 'capitalize') // conversion letter to capitalize
```

### Type

##### Type_isEqual(obj1, obj2)

```js
// Judge whether the two objects are equal in value. return boolean
const obj1 = { a: '1', b: [1, 2, 3]}
const obj2 = { a: '1', b: [1, 2, 3]}
const res = Type_isEqual(obj1, obj2) // true
```

##### Type_is(target)

```js
// Judge target whether is a string type
const res = Type_is.isString(target)  

// Judge target whether is a number type
const res = Type_is.isNumber(target)

// Judge target whether is a function type
const res = Type_is.isFunction(target)

// Judge target whether is a boolean type
const res = Type_is.isBoolean(target)

// Judge target whether is a object type
const res = Type_is.isObject(target)

// Judge target whether is a array type
const res = Type_is.isArray(target)

// Judge target whether is a regexp type
const res = Type_is.isRegExp(target)

// Judge target whether is a arguments type
const res = Type_is.isArguments(target)

// Judge target whether is a date type
const res = Type_is.isDate(target)

// Judge target whether is a symbol type
const res = Type_is.isSymbol(target)

// Judge target whether is a error type
const res = Type_is.isError(target)

// Judge target whether is a promise type
const res = Type_is.isPromise(target)

// Judge target whether is a set type
const res = Type_is.isSet(target)
```

### RegExp

##### RegExp_isInteger(str[, type])

```js
// Judge target whether is a integer. type default 'all'
RegExp_isInteger(123) // true
RexExp_isInteger(-123) // true

// Judge target whether is a positive integer.
RegExp_isInteger(123, '+') // true
RegExp_isInteger(-123, '+') // false

// Judge target whther is a negative integer.
RegExp_isInteger(123, '-') // false
RegExp_isInteger(-123, '-') // true
```

##### RegExp_isFloat(str[, type])

```js
// Judge target whether is a integer. type default 'all'
RegExp_isFloat(123.24) // true
RegExp_isFloat(-123.24) // true

// Judge target whether is a positive integer.
RegExp_isFloat(123.24, '+') // true
RegExp_isFloat(-123.24, '+') // false

// Judge target whther is a negative integer.
RegExp_isFloat(123.24, '-') // false
RegExp_isFloat(-123.24, '-') // true
```

##### RegExp_allowInteger(str[, type, len])

type defaul 'all', len default 9

```js
// Only integer input is allowed, and positive and negative 
// integers are independently judged.

// Allow positive and negative integer, and max length 9
const res = RegExp_allowInteger(yourInputValue) 

// Only positive integer, and max length 5
const res = RegExp_allowInteger(yourInputValue, '+', 5)

// Only negative integer, and max length 9
const res = RegExp_allowInteger(yoruInputValue, '-')
```

##### RegExp_allowFloat(str[, type, integerLen, floatLen])

type defaul 'all', integerLen default 9, floatLen default 2

```js
// Only float input is allowed, and positive and negative 
// float are independently judged.

// Allow positive and negative float and max integer length 9
// max float length 2
const res = RegExp_allowFloat(yourInputValue) 

// Only positive float and max integer length 9 
// max float length 4
const res = RegExp_allowFloat(yourInputValue, '+', 5, 4)

// Only negative float and max integer length 7 
// max float length 1
const res = RegExp_allowFloat(yoruInputValue, '-', 7, 1)
```


##### RegExp_isPhone(str)

```js
// Judge target whether is a mobile phone number
const res = RegExp_isPhone(phoneNum) 
```

##### RegExp_isPhone(str)

```js
// Judge target whether is a telphone number
const res = RegExp_isTel(telNum) 
```

##### RegExp_isChinese(str)

```js
// Judge target whether is only contains chinese
const res = RegExp_isChinese(str) 
```

##### RegExp_isEmail(str)

```js
// Judge target whether is an email 
const res = RegExp_isEmail(str) 
```

##### RegExp_isID(str)

```js
// Judge target whether is a ID card number 
const res = RegExp_isID(str) 
```

##### RegExp_isUrl(str)

```js
// Judge target whether is a url
const res = RegExp_isUrl(str) 
```

##### RegExp_isPC

```js
// Judge the environment whether is a pc browser
const res = RegExp_isUrl() 
```

##### RegExp_thousandMark(str[, type])

```js
// Add or delete number thousand mark. default '+' add
const res = RegExp_thousandMark(12345.34) // 12,345.34
const res = RegExp_thousandMark('12,345.34', '-') // 12345.34
```

##### RegExp_browserType(isTest360: boolean)

```js
// Returns the current browser type and parameters to determine 
// whether to return to the 360 browser environment. 

// Judge result contains (Edge, FF, Wechat, QQ, Maxthon, LB, Baidu
// Safari, UC, Opear, Sougou, 360, Chrome
const res = RegExp_browserType()
```