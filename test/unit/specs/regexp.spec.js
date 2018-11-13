import { rgIsInteger, rgIsFloat } from '../../../files/regexp.js'
var expect = require('chai').expect;

describe('测试rgIsInteger方法，判断目标是否是整数', function() {
  it('5 应该是 true', function() {
    var tar1 = 5;
    expect(rgIsInteger(5)).to.be.true;
  });
  it('name 应该是false', function() {
    var tar1 = "name";
    expect(rgIsInteger(name)).to.be.false;
  })
  it('0.3 应该是false', function() {
    var tar1 = 0.3;
    expect(rgIsInteger(tar1)).to.be.false;
  })
});