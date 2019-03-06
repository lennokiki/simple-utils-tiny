import { rgIsInteger, rgIsFloat, rgIsPhone, rgIsTelOrMobile, rgIsTel, rgIsChinese, rgIsEmail, rgIsID,
  rgIsUrl, rgIsPC, rgThousandMark, rgBrowserType, rgAllowInteger, rgAllowFloat } from '@/regexp.js'
var expect = require('chai').expect;

describe('测试rgIsInteger方法，判断目标是否是整数', function() {
  it('测试rgIsInteger方法', function() {
    expect(rgIsInteger(5)).to.be.true;
    expect(rgIsInteger('name')).to.be.false;
    expect(rgIsInteger(0.3)).to.be.false;
    expect(rgIsInteger(-4, '+')).to.be.false;
    expect(rgIsInteger(-4, '-')).to.be.true;
  });
});

describe('测试rgIsFloat方法，判断目标是否是浮点数', function() {
  it('测试rgIsFloat方法', function() {
    expect(rgIsFloat(5)).to.be.false;
    expect(rgIsFloat('name')).to.be.false;
    expect(rgIsFloat(0.3)).to.be.true;
    expect(rgIsFloat(-4, '+')).to.be.false;
    expect(rgIsFloat(4.2, '+')).to.be.true;
    expect(rgIsFloat(-4, '-')).to.be.false;
    expect(rgIsFloat(-4.2, '-')).to.be.true;
  });
});

describe('测试rgIsPhone方法，判断目标是否是手机号码', function() {
  it('测试rgIsPhone方法', function() {
    expect(rgIsPhone('18515076543')).to.be.true;
    expect(rgIsPhone('185150765432')).to.be.false;
    expect(rgIsPhone('1x8515076543')).to.be.false;
  });
});

describe('测试rgIsTel方法，判断目标是否是固话号码', function() {
  it('测试rgIsTel方法', function() {
    expect(rgIsTel('010-7837635')).to.be.true;
    expect(rgIsTel('0318-7318537-123')).to.be.true;
    expect(rgIsTel('03187318537123')).to.be.true;
    expect(rgIsTel('7318537')).to.be.true;
    expect(rgIsTel('01-9876789')).to.be.false;
    expect(rgIsTel('1-9876789')).to.be.false;
  });
});

describe('测试rgIsTelOrMobile方法，判断目标是否是有效联系方式', function() {
  it('测试rgIsTelOrMobile方法', function() {
    expect(rgIsTelOrMobile('010-7837635')).to.be.true;
    expect(rgIsTelOrMobile('18515047540')).to.be.true;
    expect(rgIsTelOrMobile('0318-7318537-123')).to.be.true;
    expect(rgIsTelOrMobile('03187318537123')).to.be.true;
    expect(rgIsTelOrMobile('7318537')).to.be.true;
    expect(rgIsTelOrMobile('01-9876789')).to.be.false;
    expect(rgIsTelOrMobile('1-9876789')).to.be.false;
  });
});

describe('测试rgIsChinese方法，判断目标是否是中文', function() {
  it('测试rgIsChinese方法', function() {
    expect(rgIsChinese('你好')).to.be.true;
    expect(rgIsChinese('')).to.be.false;
    expect(rgIsChinese('0318-7318537-123')).to.be.false;
    expect(rgIsChinese('hello world')).to.be.false;
  });
});

describe('测试rgIsEmail方法，判断目标是否是邮箱', function() {
  it('测试rgIsEmail方法', function() {
    expect(rgIsEmail('abc@163.com')).to.be.true;
    expect(rgIsEmail('1232323@qq.com')).to.be.true;
    expect(rgIsEmail('dsad_dd-23wwW@fox.com')).to.be.true;
    expect(rgIsEmail('hello world')).to.be.false;
  });
});

describe('测试rgIsID方法，判断目标是否是身份证', function() {
  it('测试rgIsID方法', function() {
    expect(rgIsID('131124198909141415')).to.be.true;
    expect(rgIsID('131124198909141')).to.be.true;
    expect(rgIsID('13112419890914141X')).to.be.true;
    expect(rgIsID('13112419890914141x')).to.be.true;
    expect(rgIsID('13112419x90914141x')).to.be.false;
    expect(rgIsID('1311241989091414187')).to.be.false;
    expect(rgIsID('131124198909')).to.be.false;
  });
});

describe('测试rgIsUrl方法，判断目标是否是有效网址', function() {
  it('测试rgIsUrl方法', function() {
    expect(rgIsUrl('http://www.baidu.com')).to.be.true;
    expect(rgIsUrl('preetyname.com')).to.be.true;
    expect(rgIsUrl('//preetyname.com')).to.be.true;
    expect(rgIsUrl('https:///preetyname.com')).to.be.false;
    expect(rgIsUrl('www.sina.com')).to.be.true;
    expect(rgIsUrl('sina.org')).to.be.true;
    expect(rgIsUrl('zzzz')).to.be.false;
    expect(rgIsUrl('1311241989091414187')).to.be.false;
  });
});

describe('测试rgIsPC方法，判断目标是否是PC设备', function() {
  it('测试rgIsPC方法', function() {
    expect(rgIsPC()).to.be.true;
  });
});

describe('测试rgThousandMark方法，添加千分符或者删掉', function() {
  it('测试rgThousandMark方法', function() {
    expect(rgThousandMark(300000)).to.be.equal('300,000');
    expect(rgThousandMark(300000.345)).to.be.equal('300,000.345');
    expect(rgThousandMark(300)).to.be.equal('300');
    expect(rgThousandMark('300,000,000', '-')).to.be.equal('300000000');
  });
});

describe('测试rgBrowserType方法，返回浏览器类型', function() {
  it('测试rgBrowserType方法', function() {
    expect(rgBrowserType()).to.be.equal('Chrome');
  });
});

describe('测试rgAllowInteger方法，替换非整数部分', function() {
  it('测试rgAllowInteger方法', function() {
    expect(rgAllowInteger('300000')).to.be.equal('300000');
    expect(rgAllowInteger('yuu222&*@&#(_!(+_)1')).to.be.equal('2221');
    expect(rgAllowInteger(300.789)).to.be.equal('300789');
    expect(rgAllowInteger('1234567890123')).to.be.equal('1234567890123');
    expect(rgAllowInteger('1234567890123', 4)).to.be.equal('1234');
    expect(rgAllowInteger('-1234567890123', 4)).to.be.equal('-1234');
    expect(rgAllowInteger('-1234567890123', 4, '-')).to.be.equal('-1234');
    expect(rgAllowInteger('-1234567890123', 6, '+')).to.be.equal('123456');
  });
});

describe('测试rgAllowFloat方法，替换非有限的数字部分', function() {
  it('测试rgAllowFloat方法', function() {
    expect(rgAllowFloat('300000')).to.be.equal('300000');
    expect(rgAllowFloat('yuu222&*@&#(_!(+_)1')).to.be.equal('2221');
    expect(rgAllowFloat(300.789)).to.be.equal('300.78');
    expect(rgAllowFloat(300.789, 3)).to.be.equal('300.789');
    expect(rgAllowFloat('1234567890123')).to.be.equal('1234567890123');
    expect(rgAllowFloat('1234567890123', 4, 'all', 4)).to.be.equal('1234');
    expect(rgAllowFloat('-1234567890123', 4, '+', 4)).to.be.equal('1234');
    expect(rgAllowFloat('-1234567890123', 4, '-', 3)).to.be.equal('-123');
    expect(rgAllowFloat('-123x4567890123.789', 1)).to.be.equal('-1234567890123.7');
  });
});
