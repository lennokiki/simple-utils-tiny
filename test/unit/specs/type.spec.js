import { typeIsEqual, typeIs } from '@/type.js'
var expect = require('chai').expect;

describe("typeIsEqual判断两个对象值是否相等", function() {
  it("两个数组值相等是true", function() {
    expect(typeIsEqual([1, 2, 3], [1, 2, 3])).to.be.true;
  })
  it("两个数组长度不等是false", function() {
    expect(typeIsEqual([1, 2, 3], [1, 2])).to.be.false;
  })
  it("两个对象值相等是true", function() {
    expect(typeIsEqual({name: 123}, {name: 123})).to.be.true;
  })
  it("两个对象值不相等是false", function() {
    expect(typeIsEqual({name: 123}, {name: 456})).to.be.false;
  })
})

describe("typeIs 判断各种类型", function() {
  it("typeIs.isString 判断是否是字符串类型", function() {
    expect(typeIs.isString("123")).to.be.true;
    expect(typeIs.isString(123)).to.be.false;
    expect(typeIs.isString()).to.be.false;
    expect(typeIs.isString("")).to.be.true;
    expect(typeIs.isString(null)).to.be.false;
    expect(typeIs.isString([])).to.be.false;
    expect(typeIs.isString(true)).to.be.false;
    expect(typeIs.isString(function(){})).to.be.false;
  })
  it("typeIs.isNumber 判断是否是数字类型", function() {
    expect(typeIs.isNumber(123)).to.be.true;
    expect(typeIs.isNumber(12.23)).to.be.true;
    expect(typeIs.isNumber(-12.23)).to.be.true;
    expect(typeIs.isNumber("123")).to.be.false;
    expect(typeIs.isNumber()).to.be.false;
    expect(typeIs.isNumber("")).to.be.false;
    expect(typeIs.isNumber(null)).to.be.false;
    expect(typeIs.isNumber([])).to.be.false;
    expect(typeIs.isString(true)).to.be.false;
    expect(typeIs.isNumber(function(){})).to.be.false;
  })
  it("typeIs.isFunction 判断是否是函数", function() {
    expect(typeIs.isFunction(function() {})).to.be.true;
    expect(typeIs.isFunction(123)).to.be.false;
    expect(typeIs.isFunction("name")).to.be.false;
    expect(typeIs.isFunction(null)).to.be.false;
    expect(typeIs.isFunction()).to.be.false;
    expect(typeIs.isFunction([])).to.be.false;
    expect(typeIs.isString(true)).to.be.false;
    expect(typeIs.isFunction({})).to.be.false;
  })
  it("typeIs.isBoolean 判断是否是布尔类型", function() {
    expect(typeIs.isBoolean(true)).to.be.true;
    expect(typeIs.isBoolean(false)).to.be.true;
    expect(typeIs.isBoolean(function() {})).to.be.false;
    expect(typeIs.isBoolean(123)).to.be.false;
    expect(typeIs.isBoolean("name")).to.be.false;
    expect(typeIs.isBoolean(null)).to.be.false;
    expect(typeIs.isBoolean()).to.be.false;
    expect(typeIs.isBoolean([])).to.be.false;
    expect(typeIs.isBoolean({})).to.be.false;
  })
  it("typeIs.isObject 判断是否是纯对象", function() {
    expect(typeIs.isObject({})).to.be.true;
    expect(typeIs.isObject(false)).to.be.false;
    expect(typeIs.isObject(function() {})).to.be.false;
    expect(typeIs.isObject(123)).to.be.false;
    expect(typeIs.isObject("name")).to.be.false;
    expect(typeIs.isObject(null)).to.be.false;
    expect(typeIs.isObject()).to.be.false;
    expect(typeIs.isObject([])).to.be.false;
  })
  it("typeIs.isArray 判断是否是数组", function() {
    expect(typeIs.isArray([])).to.be.true;
    expect(typeIs.isArray({})).to.be.false;
    expect(typeIs.isArray(false)).to.be.false;
    expect(typeIs.isArray(function() {})).to.be.false;
    expect(typeIs.isArray(123)).to.be.false;
    expect(typeIs.isArray("name")).to.be.false;
    expect(typeIs.isArray(null)).to.be.false;
    expect(typeIs.isArray()).to.be.false;
  })
  it("typeIs.isRegExp 判断是否是正则", function() {
    expect(typeIs.isRegExp(/\d/)).to.be.true;
    expect(typeIs.isRegExp([])).to.be.false;
    expect(typeIs.isRegExp({})).to.be.false;
    expect(typeIs.isRegExp(false)).to.be.false;
    expect(typeIs.isRegExp(function() {})).to.be.false;
    expect(typeIs.isRegExp(123)).to.be.false;
    expect(typeIs.isRegExp("name")).to.be.false;
    expect(typeIs.isRegExp(null)).to.be.false;
    expect(typeIs.isRegExp()).to.be.false;
  })
  it("typeIs.isArguments 判断是否是Arguments", function() {
    expect(typeIs.isArguments(arguments)).to.be.true;
    expect(typeIs.isArguments([])).to.be.false;
    expect(typeIs.isArguments({})).to.be.false;
    expect(typeIs.isArguments(false)).to.be.false;
    expect(typeIs.isArguments(function() {})).to.be.false;
    expect(typeIs.isArguments(123)).to.be.false;
    expect(typeIs.isArguments("name")).to.be.false;
    expect(typeIs.isArguments(null)).to.be.false;
    expect(typeIs.isArguments()).to.be.false;
  })
  it("typeIs.isDate 判断是否是Date", function() {
    expect(typeIs.isDate(new Date)).to.be.true;
    expect(typeIs.isDate([])).to.be.false;
    expect(typeIs.isDate({})).to.be.false;
    expect(typeIs.isDate(false)).to.be.false;
    expect(typeIs.isDate(function() {})).to.be.false;
    expect(typeIs.isDate(123)).to.be.false;
    expect(typeIs.isDate("name")).to.be.false;
    expect(typeIs.isDate(null)).to.be.false;
    expect(typeIs.isDate()).to.be.false;
  })
  it("typeIs.isSymbol 判断是否是Symbol", function() {
    expect(typeIs.isSymbol(Symbol("zz"))).to.be.true;
    expect(typeIs.isSymbol([])).to.be.false;
    expect(typeIs.isSymbol({})).to.be.false;
    expect(typeIs.isSymbol(false)).to.be.false;
    expect(typeIs.isSymbol(function() {})).to.be.false;
    expect(typeIs.isSymbol(123)).to.be.false;
    expect(typeIs.isSymbol("name")).to.be.false;
    expect(typeIs.isSymbol(null)).to.be.false;
    expect(typeIs.isSymbol()).to.be.false;
  })
  it("typeIs.isError 判断是否是Error", function() {
    expect(typeIs.isError(new Error)).to.be.true;
    expect(typeIs.isError([])).to.be.false;
    expect(typeIs.isError({})).to.be.false;
    expect(typeIs.isError(false)).to.be.false;
    expect(typeIs.isError(function() {})).to.be.false;
    expect(typeIs.isError(123)).to.be.false;
    expect(typeIs.isError("name")).to.be.false;
    expect(typeIs.isError(null)).to.be.false;
    expect(typeIs.isError()).to.be.false;
  })
  it("typeIs.isPromise 判断是否是Promise", function() {
    expect(typeIs.isPromise(new Promise(function(resolve, reject) {}))).to.be.true;
    expect(typeIs.isPromise([])).to.be.false;
    expect(typeIs.isPromise({})).to.be.false;
    expect(typeIs.isPromise(false)).to.be.false;
    expect(typeIs.isPromise(function() {})).to.be.false;
    expect(typeIs.isPromise(123)).to.be.false;
    expect(typeIs.isPromise("name")).to.be.false;
    expect(typeIs.isPromise(null)).to.be.false;
    expect(typeIs.isPromise()).to.be.false;
  })
  it("typeIs.isSet 判断是否是Set", function() {
    expect(typeIs.isSet(new Set())).to.be.true;
    expect(typeIs.isSet([])).to.be.false;
    expect(typeIs.isSet({})).to.be.false;
    expect(typeIs.isSet(false)).to.be.false;
    expect(typeIs.isSet(function() {})).to.be.false;
    expect(typeIs.isSet(123)).to.be.false;
    expect(typeIs.isSet("name")).to.be.false;
    expect(typeIs.isSet(null)).to.be.false;
    expect(typeIs.isSet()).to.be.false;
  })
})
