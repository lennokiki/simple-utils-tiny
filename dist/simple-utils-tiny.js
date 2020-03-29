(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.sUtils = {}));
}(this, function (exports) { 'use strict';

  function typeIsEqual(a, b) {
    if (a === b) { return true; }
    var isObjectA = a !== null && typeof a === 'object';
    var isObjectB = b !== null && typeof b === 'object';
    if (isObjectA && isObjectB) {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      try {
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function(v, k) { return typeIsEqual(v, b[k]) })
        } else if (!isArrayA && !isArrayB) {
          var keys = Object.keys(a);
          return a.length === b.length && keys.every(function(v) { return typeIsEqual(a[v], b[v]) })
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  var typeIs = {};

  (function() {
    var typesAry = ['String', 'Number', 'Function', 'Boolean', 'Object', 'Array', 'RegExp', 'Arguments', 'Date', 'Symbol', 'Error', 'Promise', 'Set'];
    typesAry.forEach(function(key) {
      typeIs['is' + key] = function(target) {
        var res = Object.prototype.toString.call(target).slice(8, -1);
        return key === res;
      };
    });
  }());

  var _gLetters = {
    lower: null,
    upper: null
  };

  function stringTrim(str, type) {
    var regList = {
      all: /\s/g,
      left: /^\s+/,
      right: /\s+$/,
      around: /(^\s+|\s+$)/g,
      middle: /[^\s].*[^\s]/g
    };
    var type2 = type || 'all';
    var reg = regList[type2];
    if (type2 === 'middle') {
      return String(str).replace(reg, function(word) {
        return word.replace(regList.all, '');
      });
    }
    return String(str).replace(reg, '');
  }

  function stringTransCase(str, type) {
    var type2 = type || 'capitalize';
    var str2 = String(str);
    switch (type2) {
      case 'upper':
        return str2.toUpperCase();
      case 'lower':
        return str2.toLowerCase();
      case 'capitalize':
        return str2.replace(/\b\w+\b/g, function(word) {
          return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
        });
      default:
        return str2;
    }
  }

  function stringColor(useRgb) {
    var color = '#' + ('000000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
    return useRgb ? stringColor16ToRgb(color) : color;
  }

  function stringColor16ToRgb(color) {
    var reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    var lowerColor = color.toLowerCase();
    if (lowerColor && reg.test(lowerColor)) {
      if (lowerColor.length === 4) {
        var colorNew = '#';
        for (var i = 1; i <= 3; i++) {
          colorNew += (lowerColor.substr(i, 1)).concat(lowerColor.substr(i, 1));
        }
        lowerColor = colorNew;
      }
      var colorAry = [];
      for (var j = 1; j <= 6; j += 2) {
        var res = parseInt('0x' + lowerColor.substr(j, 2));
        colorAry.push(res);
      }
      return 'RGB(' + colorAry.join(',') + ')';
    }
    return color;
  }

  function stringColorRgbTo16(color) {
    var reg = '(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{1}[0-9])';
    var regRgb = new RegExp(("^(RGB|rgb)\\((?:" + reg + "\\,){2}" + reg + "\\)$"));
    if (color && regRgb.test(color)) {
      var colorAry = color.replace(/(?:(RGB|rgb)\()|(?:\))/g, '').split(',');
      return colorAry.reduce(function (bef, next) {
        var str = Number(next).toString(16);
        str = str.length !== 2 ? '0' + str : str;
        return bef + str;
      }, '#')
    }
    return color;
  }

  function stringNumToLetter(num, type) {
    if (typeof num === 'number' && !isNaN(num) && num >= 0) {
      var defaultType = type || 'upper';
      var letters = _gLetters[defaultType];
      if (!letters) {
        var range = type === 'lower' ? 97 : 65;
        var ary = new Array(26);
        for (var i = 0; i < 26; i++) {
          ary[i] = String.fromCharCode(i + range);
        }
        letters = _gLetters[defaultType] = ary;
      }

      var formatter = function (val) {
        var delivery = Math.floor(val) % 26;
        var lastLetter = letters[delivery];
        var next = Math.floor(val / 26) - 1;
        var nextVal = '';
        if (next >= 0) {
          nextVal = formatter(next);
        }
        return nextVal + lastLetter;
      };

      return formatter(num);
    }
    return num;
  }

  function rgIsInteger(num, type) {
    var isNum = typeof num === 'number';
    if (!isNum || (isNum && isNaN(num))) { return false; }
    var isInt = +num === Math.floor(num);
    type = type || 'all';
    switch (type) {
      case 'all':
        return isInt;
      case '+':
        return isInt && num >= 0;
      case '-':
        return isInt && num < 0;
      default:
        return false;
    }
  }

  function rgIsFloat(num, type) {
    var isNum = typeof num === 'number';
    if (!isNum || (isNum && isNaN(num))) { return false; }
    var isFlo = String(num).indexOf('.') > -1;
    type = type || 'all';
    switch (type) {
      case 'all':
        return isFlo;
      case '+':
        return isFlo && num >= 0;
      case '-':
        return isFlo && num < 0;
      default:
        return false;
    }
  }

  function rgIsPhone(str) {
    var reg = /^1[3456789]\d{9}$/;
    return reg.test(str);
  }

  function rgIsTel(str) {
    var reg = /^(0\d{2,3}-?)?\d{7,8}(-?\d{1,4})?$/;
    return reg.test(str);
  }

  function rgIsTelOrMobile(str) {
    var reg = /^((0\d{2,3}-?)?\d{7,8}(-?\d{1,4})?|1[3456789]\d{9})$/;
    return reg.test(str);
  }

  function rgIsChinese(str) {
    var reg = /^[\u4E00-\u9FA5]+$/;
    return reg.test(str);
  }

  function rgIsEmail(str) {
    var reg = /^[\w-.]+@\w+(\.\w+)+$/;
    return reg.test(str);
  }

  function rgIsID(str) {
    var reg = /^(\d{15}|\d{17}[\dXx])$/;
    return reg.test(str);
  }

  function rgIsUrl(str) {
    var reg = /^((https?:\/\/|ftp:\/\/)?|(\/\/)?)\w+\..*$/;
    return reg.test(str);
  }

  function rgIsPC() {
    var ua = navigator.userAgent.toLowerCase();
    var platforms = ['android', 'iphone', 'windows phone', 'ipod', 'ipad'];
    var flag = true;
    var len = platforms.length;
    var i = 0;
    for (; i < len; i++) {
      if (ua.indexOf(platforms[i]) > -1) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  function rgThousandMark(str, type) {
    type = type || '+';
    switch (type) {
      case '+':
        if (str == null) { return str + ''; }
        return String(str).replace(/\d(?=(?:\d{3})+(?!\d+))(?<!\.\d+)/g, '$&,');
      case '-':
        return String(str).replace(/,/g, '');
      default:
        return str;
    }
  }

  function rgBrowserType(test360) {
    var ua = navigator.userAgent.toLowerCase();
    var isIE = ua.indexOf('trident') > -1;
    var isEdge = ua.indexOf('edge') > -1;
    var isFF = ua.indexOf('firefox') > -1;
    var isOpera = ua.indexOf('opera') > -1 || ua.indexOf('opr') > -1;
    var isSafari = ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1;
    var isChrome = ua.indexOf('chrome') > -1 && ua.indexOf('safari') > -1;
    var isQQ = ua.indexOf('qqbrowser') > -1;
    var isWechat = ua.indexOf('micromessenger') > -1;
    var isUC = ua.indexOf('ubrowser') > -1;
    var isMaxthon = ua.indexOf('maxthon') > -1;
    var isLB = ua.indexOf('lbbrowser') > -1;
    var isSougou = ua.indexOf('metasr') > -1;
    var isBaidu = ua.indexOf('bidubrowser') > -1;
    var is360 = function() {
      var mimeType = navigator.mimeTypes;
      var val = 'application/360softmgrplugin';
      var flag = false;
      for (var key in mimeType) {
        if (mimeType[key]['type'] === val) {
          flag = true;
          break;
        }
      }
      return flag;
    };
    if (isIE) {
      if (ua.indexOf('rv:11') > -1) {
        return 'IE11';
      }
      var reg = /msie\s+(\d+)\.0/;
      var version = reg.exec(ua)[1];
      return 'IE' + version;
    }
    if (isEdge) { return 'Edge'; }
    if (isFF) { return 'FF'; }
    if (isWechat) { return 'Wechat'; }
    if (isQQ) { return 'QQ'; }
    if (isMaxthon) { return 'Maxthon'; }
    if (isLB) { return 'LB'; }
    if (isBaidu) { return 'Baidu'; }
    if (isSafari) { return 'Safari'; }
    if (isUC) { return 'UC'; }
    if (isOpera) { return 'Opera'; }
    if (isSougou) { return 'Sougou'; }
    if (isChrome) {
      if (test360 && is360()) {
        return '360';
      }
      return 'Chrome';
    }
  }

  function rgAllowInteger(str, len, type) {
    var reg1, reg2, endVal;
    str = String(str);
    len = +len;
    type = type || 'all';
    switch (type) {
      case 'all':
        reg1 = /^(\D+)/;
        reg2 = /^-?0(.+)|^-?[1-9](?:\d+)?(\D+)/;
        endVal = str.replace(reg1, function(w, s1) {
          return s1.indexOf('-') > -1 ? w.replace(s1, '-') : w.replace(s1, '');
        });
        endVal = endVal.replace(reg2, function(w, s1, s2) {
          var rp = s2 || s1;
          return rp === '-' ? w.slice(0, -1) : w.replace(rp, '');
        });
        if (len) {
          len = endVal.indexOf('-') > -1 ? len + 1 : len;
          return endVal.slice(0, len)
        }
        return endVal;
      case '+':
        reg1 = /\D+/g;
        reg2 = /^0(\d+)/;
        endVal = str.replace(reg1, '');
        endVal = endVal.replace(reg2, function(w, s1) {
          return w.replace(s1, '');
        });
        return len ? endVal.slice(0, len) : endVal;
      case '-':
        reg1 = /^[^-]+/;
        reg2 = /^-(?:(\D+)|\d+(\D+)|0(\d+))/;
        endVal = str.replace(reg1, '');
        endVal = endVal.replace(reg2, function(w, s1, s2, s3) {
          var rp = s1 || s2 || s3;
          return rp === '-' ? w.slice(0, -1) : w.replace(rp, '');
        });
        if (len) {
          len = endVal.indexOf('-') > -1 ? len + 1 : len;
          return endVal.slice(0, len)
        }
        return endVal;
      default:
        return str;
    }
  }

  function rgAllowFloat(str, floatLen, type, integerLen) {
    var reg1, reg2, reg3, endVal, splitAry;
    str = String(str);
    type = type || 'all';
    integerLen = +integerLen;
    floatLen = floatLen || 2;
    switch (type) {
      case 'all':
        reg1 = /^\D+/;
        reg2 = /^-?[1-9](?:\d+)?\.(?:\d+)?(\D+)|^-?0\.(?:\d+)?(\D+)|^-?[1-9](?:\d+)?(\D+)/;
        reg3 = /^-?0([^.]+)/;
        endVal = str.replace(reg1, function(w) {
          return w.indexOf('-') > -1 ? '-' : '';
        });
        endVal = endVal.replace(reg2, function(w, s1, s2, s3) {
          var s = s1 || s2 || s3;
          var be, af;
          if (s.indexOf('.') > -1) {
            var index = w.indexOf('.');
            be = w.slice(1, index).replace(/\D+/, '') + '.';
            af = w.slice(index + 1);
            return w.slice(0, 1) + be + af.replace(/\D+/, '');
          } else if (s.indexOf('-') > -1 && w.charAt(0) === '-') {
            be = w.slice(0, 1);
            af = w.slice(1);
            return be + af.replace(/-+/, '');
          }
          return w.replace(s, '');
        });
        endVal = endVal.replace(reg3, function(w, s1) {
          if (s1.indexOf('-') > -1 && w.charAt(0) === '-') {
            var be = w.slice(0, 1);
            var af = w.slice(1);
            return be + af.replace(/-+/, '');
          }
          return w.replace(s1, '');
        });
        splitAry = endVal.split('.');
        if (splitAry.length === 1) {
          if (integerLen) {
            endVal = splitAry[0].indexOf('-') > -1 ? splitAry[0].substring(0, integerLen + 1) : splitAry[0].substring(0, integerLen);
          } else {
            endVal = splitAry[0];
          }
        } else {
          var afVal = '.' + splitAry[1].substring(0, floatLen);
          if (integerLen) {
            endVal = splitAry[0].indexOf('-') > -1 ? splitAry[0].substring(0, integerLen + 1) + afVal : splitAry[0].substring(0, integerLen) + afVal;
          } else {
            endVal = splitAry[0] + afVal;
          }
        }
        return endVal;
      case '+':
        reg1 = /^\D+/;
        reg2 = /^0([^.]+)|^[1-9](?:\d+)?([^.]+)/;
        reg3 = /^0\.(?:\d+)?(\D+)|^[1-9](?:\d+)?\.(?:\d+)?(\D+)/;
        endVal = str.replace(reg1, '');
        endVal = endVal.replace(reg2, function(w, s1, s2) {
          var rp = s1 || s2;
          if (s2 || s2 === '0' || s2 === 0) {
            if (/\d/.test(s2)) {
              var ary = w.split('.');
              return ary[0].replace(/\D/g, '') + ((ary[1] || ary[1] === '0' || ary[1] === 0) ? '.' + ary[1] : '');
            } else if (s2.indexOf('.') > -1) {
              return w.replace(s2, '.');
            }
          }
          return w.replace(rp, '');
        });
        endVal = endVal.replace(reg3, function(w, s1, s2) {
          var rp = s2 || s1;
          return rp === '.' ? w.slice(0, -1) : w.replace(rp, '');
        });
        splitAry = endVal.split('.');
        if (splitAry.length === 1) {
          endVal = integerLen ? splitAry[0].substring(0, integerLen) : splitAry[0];
        } else {
          endVal = integerLen ? splitAry[0].substring(0, integerLen) + '.' + splitAry[1].substring(0, floatLen) : splitAry[0] + '.' + splitAry[1].substring(0, floatLen);
        }
        return endVal;
      case '-':
        reg1 = /^-(\D+)|^[^-]+/;
        reg2 = /^-[1-9](?:\d+)?\.(?:\d+)?(\D+)|^-0\.(?:\d+)?(\D+)|^-[1-9](?:\d+)?(\D+)/;
        reg3 = /^-0([^.]+)/;
        endVal = str.replace(reg1, function(w, s1) {
          return s1 ? w.replace(s1, '') : '';
        });
        endVal = endVal.replace(reg2, function(w, s1, s2, s3) {
          var s = s1 || s2 || s3;
          var be, af;
          if (s.indexOf('.') > -1) {
            var index = w.indexOf('.');
            be = w.slice(1, index).replace(/\D+/, '') + '.';
            af = w.slice(index + 1);
            return w.slice(0, 1) + be + af.replace(/\D+/, '');
          } else if (s.indexOf('-') > -1 && w.charAt(0) === '-') {
            be = w.slice(0, 1);
            af = w.slice(1);
            return be + af.replace(/-+/, '');
          }
          return w.replace(s, '');
        });
        endVal = endVal.replace(reg3, function(w, s1) {
          if (s1.indexOf('-') > -1 && w.charAt(0) === '-') {
            var be = w.slice(0, 1);
            var af = w.slice(1);
            return be + af.replace(/-+/, '');
          }
          return w.replace(s1, '');
        });
        splitAry = endVal.split('.');
        if (splitAry.length === 1) {
          endVal = integerLen ? splitAry[0].substring(0, integerLen + 1) : splitAry[0];
        } else {
          var afVal2 = '.' + splitAry[1].substring(0, floatLen);
          endVal = integerLen ? splitAry[0].substring(0, integerLen + 1) + afVal2 : splitAry[0] + afVal2;
        }
        return endVal;
      default:
        return str;
    }
  }

  var sUtils = {
    typeIsEqual: typeIsEqual,
    typeIs: typeIs,
    stringTrim: stringTrim,
    stringTransCase: stringTransCase,
    rgIsInteger: rgIsInteger,
    rgIsFloat: rgIsFloat,
    rgIsPhone: rgIsPhone,
    rgIsTel: rgIsTel,
    rgIsChinese: rgIsChinese,
    rgIsTelOrMobile: rgIsTelOrMobile,
    rgIsEmail: rgIsEmail,
    rgIsID: rgIsID,
    rgIsUrl: rgIsUrl,
    rgIsPC: rgIsPC,
    rgThousandMark: rgThousandMark,
    rgBrowserType: rgBrowserType,
    rgAllowInteger: rgAllowInteger,
    rgAllowFloat: rgAllowFloat,
    stringColor: stringColor,
    stringColor16ToRgb: stringColor16ToRgb,
    stringColorRgbTo16: stringColorRgbTo16,
    stringNumToLetter: stringNumToLetter
  };

  exports.typeIsEqual = typeIsEqual;
  exports.typeIs = typeIs;
  exports.stringTrim = stringTrim;
  exports.stringTransCase = stringTransCase;
  exports.stringColor = stringColor;
  exports.stringColor16ToRgb = stringColor16ToRgb;
  exports.stringColorRgbTo16 = stringColorRgbTo16;
  exports.rgIsInteger = rgIsInteger;
  exports.rgIsFloat = rgIsFloat;
  exports.rgIsPhone = rgIsPhone;
  exports.rgIsTel = rgIsTel;
  exports.rgIsChinese = rgIsChinese;
  exports.rgIsEmail = rgIsEmail;
  exports.rgIsID = rgIsID;
  exports.rgIsUrl = rgIsUrl;
  exports.rgIsPC = rgIsPC;
  exports.rgThousandMark = rgThousandMark;
  exports.rgBrowserType = rgBrowserType;
  exports.rgAllowInteger = rgAllowInteger;
  exports.rgAllowFloat = rgAllowFloat;
  exports.rgIsTelOrMobile = rgIsTelOrMobile;
  exports.stringNumToLetter = stringNumToLetter;
  exports.default = sUtils;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
