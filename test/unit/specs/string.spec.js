import { stringTrim, stringTransCase } from '@/string.js'
var expect = require('chai').expect;

describe('测试stringTrim方法，过滤指定位置的空格', function() {
  var tar = '  aa bb cc d   e ';
  it('过滤全部空格', function() {
    expect(stringTrim(tar)).to.be.equal('aabbccde');
  });
  it('过滤左侧空格', function() {
    expect(stringTrim(tar, 'left')).to.be.equal('aa bb cc d   e ');
  });
  it('过滤右侧空格', function() {
    expect(stringTrim(tar, 'right')).to.be.equal('  aa bb cc d   e');
  });
  it('过滤两端空格', function() {
    expect(stringTrim(tar, 'around')).to.be.equal('aa bb cc d   e');
  });
  it('过滤中部空格', function() {
    expect(stringTrim(tar, 'middle')).to.be.equal('  aabbccde ');
  });
});

describe('测试stringTransCase方法， 转换大小写', function() {
  var tar = 'Hellow WoRld, How Are YOU';
  it('全部大写', function() {
    expect(stringTransCase(tar, 'upper')).to.be.equal('HELLOW WORLD, HOW ARE YOU');
  });
  it('全部小写', function() {
    expect(stringTransCase(tar, 'lower')).to.be.equal('hellow world, how are you');
  });
  it('首字母大写', function() {
    expect(stringTransCase(tar, 'capitalize')).to.be.equal('Hellow World, How Are You');
  });
});
