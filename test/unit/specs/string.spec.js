import { stringTrim, stringTransCase, stringColor, stringColor16ToRgb, stringColorRgbTo16 } from '@/string.js'
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

describe('测试随即色值', function() {
  var reg16 = /^#[0-9a-f]{6}$/;
  var reg = '(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{1}[0-9])';
  var regRgb = new RegExp(`^(RGB|rgb)\\((?:${reg}\\,){2}${reg}\\)$`);
  it('16进制色值长度为7', function() {
    expect(stringColor()).to.have.lengthOf(7);
  });
  it('16进制色值满足正则', function() {
    for (var i = 0; i < 100000; i++) {
      expect(stringColor()).to.match(reg16);
    }
  });
  it('rgb色值满足正则', function() {
    for (var i = 0; i < 100000; i++) {
      expect(stringColor(true)).to.match(regRgb);
    }
  });
})

describe('测试16进制色值转换', function() {
  it('16进制色值转换为rgb', function() {
    expect(stringColor16ToRgb('#000')).to.be.equal('RGB(0,0,0)');
    expect(stringColor16ToRgb('#000000')).to.be.equal('RGB(0,0,0)');
    expect(stringColor16ToRgb('#fff')).to.be.equal('RGB(255,255,255)');
    expect(stringColor16ToRgb('#666')).to.be.equal('RGB(102,102,102)');
    expect(stringColor16ToRgb('#ed987e')).to.be.equal('RGB(237,152,126)');
    expect(stringColor16ToRgb('#a0981a')).to.be.equal('RGB(160,152,26)');
    expect(stringColor16ToRgb('#aw981a')).to.be.equal('#aw981a');
  })
})

describe('测试rgb转换16进制', function() {
  it('rgba转换16进制色值', function() {
    expect(stringColorRgbTo16('rgb(0,0,0)')).to.be.equal('#000000');
    expect(stringColorRgbTo16('rgb(255,255,255)')).to.be.equal('#ffffff');
    expect(stringColorRgbTo16('rgb(102,102,102)')).to.be.equal('#666666');
    expect(stringColorRgbTo16('rgb(237,152,126)')).to.be.equal('#ed987e');
    expect(stringColorRgbTo16('rgb(160,152,26)')).to.be.equal('#a0981a');
    expect(stringColorRgbTo16('rgb(0,298,0)')).to.be.equal('rgb(0,298,0)');
  })
})
