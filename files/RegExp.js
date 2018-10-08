export function RegExp_isInteger(num, type) {
  var isNum = typeof(num) === 'number'; 
  if (!isNum || (isNum && isNaN(num))) return false;
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

export function RegExp_isFloat(num, type) {
  var isNum = typeof(num) === 'number'; 
  if (!isNum || (isNum && isNaN(num))) return false;
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

export function RegExp_isPhone(str) {
  var reg = /^1[3456789]\d{9}$/;
  return reg.test(str);
}

export function RegExp_isTel(str) {
  var reg = /^0\d{2,3}-?\d{7,8}(-\d{1,4})?$/;
  return reg.test(str);
}

export function RegExp_isChinese(str) {
  var reg = /^[\u4E00-\u9FA5]+$/; 
  return reg.test(str);
}

export function RegExp_isEmail(str) {
  var reg = /^[\w-.]+@\w+\.\w+$/;
  return reg.test(str);
}

export function RegExp_isID(str) {
  var reg = /^(\d{15}|\d{17}[\dXx])$/;
  return reg.test(str);
}

export function RegExp_isUrl(str) {
  var reg = /^(https?:|ftp:)?\/\/\w+\..*$/;
  return reg.test(str);
}

export function RegExp_isPC() {
  var ua = navigator.userAgent.toLowerCase(),
      platforms = ['android', 'iphone', 'windows phone', 'ipod', 'ipad'],
      flag = true,
      len = platforms.length,
      i = 0;
  for (; i < len; i++) {
    if (ua.indexOf(platforms[i]) > -1) {
      flag = false;
      break;
    }
  }

  return flag;
}

/* 添加千分符 */
export function RegExp_thousandMark(str, type) {
  type = type || '+';
  
  switch (type) {
    case '+':
      if (str == null || isNaN(+str)) return str;
      var strList = String(str).split('.');
      return strList[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,') + (strList[1] ? '.' + strList[1] : '')
    case '-':
      return String(str).replace(/,/g, '');
    default:
      return str;
  }
  
}

/* 返回浏览器类型 */
export function RegExp_browserType(test360) {
  var ua = navigator.userAgent.toLowerCase();
  var isIE = ua.indexOf('trident') > -1;
  var isEdge = ua.indexOf('edge') > -1;
  var isFF = ua.indexOf('firefox') > -1;
  var isOpera = ua.indexOf('opera') > -1 || ua.indexOf('opr') > -1;
  var isSafari = ua.indexOf('Safari') > -1 && ua.indexOf('chrome') == -1;
  var isChrome = ua.indexOf('chrome') > -1 && ua.indexOf('safari') > -1;
  var isQQ = ua.indexOf('qqbrowser') > -1;
  var isWechat = ua.indexOf('micromessenger') > -1;
  var isUC = ua.indexOf('ubrowser') > -1;
  var isMaxthon = ua.indexOf('maxthon') > -1; //遨游
  var isLB = ua.indexOf('lbbrowser') > -1; //猎豹
  var isSougou = ua.indexOf('metasr') > -1 //搜狗
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
  }

  if (isIE) {
    if (ua.indexOf('rv:11') > -1) {
      return 'IE11';
    }
    var reg = /msie\s+(\d+)\.0/;
    var version = reg.exec(ua)[1];
    return 'IE' + version;
  }
  if (isEdge) return 'Edge';
  if (isFF) return 'FF';
  if (isWechat) return 'Wechat';
  if (isQQ) return 'QQ';
  if (isMaxthon) return 'Maxthon';
  if (isLB) return 'LB';
  if (isBaidu) return 'Baidu';
  if (isSafari) return 'Safari';
  if (isUC) return 'UC';
  if (isOpera) return 'Opera';
  if (isSougou) return 'Sougou';
  if (isChrome) {
    if (test360 && is360()) {
      return '360';
    }
    return 'Chrome';
  }
}

export function RegExp_allowInteger(str, type, len) {
  str = String(str);
  len = len || 9;
  type = type || 'all';

  switch (type) {
    case 'all':
      var reg1 = /^(\D+)/;
      var reg2 = /^-?0(.+)|^-?[1-9](?:\d+)?(\D+)/;

      var endVal = str.replace(reg1, function(w, s1) {
        return s1.indexOf('-') > -1 ? w.replace(s1, '-') : w.replace(s1, '');
      });
      endVal = endVal.replace(reg2, function(w, s1, s2) {
        var rp = s2 || s1;
        return rp === '-' ? w.slice(0, -1) : w.replace(rp, '');
      })
      len = endVal.indexOf('-') > -1 ? len + 1 : len;
      return endVal.slice(0, len);

    case '+':
      var reg1 = /\D+/g;
      var reg2 = /^0(\d+)/;
      var endVal = str.replace(reg1, '');
      endVal = endVal.replace(reg2, function(w, s1) {
        return w.replace(s1, '');
      })
      return endVal.slice(0, len);

    case '-':
      var reg1 = /^[^-]+/;
      var reg2 = /^-(?:(\D+)|\d+(\D+)|0(\d+))/;
      var endVal = str.replace(reg1, '');
      endVal = endVal.replace(reg2, function(w, s1, s2, s3) {
        var rp = s1 || s2 || s3;
        return rp === '-' ? w.slice(0, -1) : w.replace(rp, '');
      })

      return  endVal.slice(0, len+1);
    
    default:
      return str;
  }
}

export function RegExp_allowFloat(str, type, integerLen, floatLen) {
  str = String(str);
  type = type || 'all';
  integerLen = integerLen || 9;
  floatLen = floatLen || 2;

  switch (type) {
    case 'all':
      var reg1 = /^\D+/;
      var reg2 = /^-?[1-9](?:\d+)?\.(?:\d+)?(\D+)|^-?0\.(?:\d+)?(\D+)|^-?[1-9](?:\d+)?(\D+)/;
      var reg3 = /^-?0([^\.]+)/;
      
      var endVal = str.replace(reg1, function(w) {
        return w.indexOf('-') > -1 ? '-' : '';
      })
      
      endVal = endVal.replace(reg2, function(w, s1, s2, s3) {
        var s = s1 || s2 || s3;
        if (s.indexOf('.') > -1) {
          var index = w.indexOf('.');
          var be = w.slice(1, index).replace(/\D+/, '') + '.';
          var af = w.slice(index+1);
          return w.slice(0, 1) + be + af.replace(/\D+/, '');
        } else if (s.indexOf('-') > -1 && w.charAt(0) === '-') {
          var be = w.slice(0, 1);
          var af = w.slice(1);
          return be + af.replace(/-+/, '');
        }
        return  w.replace(s, '');
      });

      endVal = endVal.replace(reg3, function(w, s1) {
        if (s1.indexOf('-') > -1 && w.charAt(0) === '-') {
          var be = w.slice(0, 1);
          var af = w.slice(1);
          return be + af.replace(/-+/, '');
        }
        return w.replace(s1, '');
      })

      var splitAry = endVal.split('.');
      if (splitAry.length === 1) {
        endVal = splitAry[0].indexOf('-') > -1 ? splitAry[0].substring(0, integerLen + 1) : splitAry[0].substring(0, integerLen);
      } else {
        var afVal = '.' + splitAry[1].substring(0, floatLen);
        endVal = splitAry[0].indexOf('-') > -1 ? splitAry[0].substring(0, integerLen + 1) + afVal : splitAry[0].substring(0, integerLen) + afVal;
      }
      return endVal;
    
    case '+':
      var reg1  = /^\D+/;
      var reg2 = /^0([^\.]+)|^[1-9](?:\d+)?([^\.]+)/
      var reg3 = /^0\.(?:\d+)?(\D+)|^[1-9](?:\d+)?\.(?:\d+)?(\D+)/;
      var endVal = str.replace(reg1, '');
      endVal = endVal.replace(reg2, function(w, s1, s2) {
        var rp = s1 || s2;
        if (s2 || s2 == '0') {
          if (/\d/.test(s2)) {
            var ary = w.split('.');
            return ary[0].replace(/\D/g, '') + ((ary[1] || ary[1] == '0') ? '.' + ary[1] : '');
          } else if (s2.indexOf('.') > -1) {
            return w.replace(s2, '.');
          }
        }
        return w.replace(rp, '');
      });
      
      endVal = endVal.replace(reg3, function(w, s1, s2) {
        var rp = s2 || s1;
        return rp === '.' ? w.slice(0, -1) : w.replace(rp, '');
      })

      var splitAry = endVal.split('.');
      if (splitAry.length === 1) {
        endVal = splitAry[0].substring(0, integerLen);
      } else {
        endVal = splitAry[0].substring(0, integerLen) + '.' + splitAry[1].substring(0, floatLen);
      }
      return endVal;
    
    case '-':
      var reg1 = /^-(\D+)|^[^-]+/;
      var reg2 = /^-[1-9](?:\d+)?\.(?:\d+)?(\D+)|^-0\.(?:\d+)?(\D+)|^-[1-9](?:\d+)?(\D+)/;
      var reg3 = /^-0([^\.]+)/;
      
      var endVal = str.replace(reg1, function(w, s1) {
        return s1 ? w.replace(s1, '') : '';
      })
      
      endVal = endVal.replace(reg2, function(w, s1, s2, s3) {
        var s = s1 || s2 || s3;
        if (s.indexOf('.') > -1) {
          var index = w.indexOf('.');
          var be = w.slice(1, index).replace(/\D+/, '') + '.';
          var af = w.slice(index+1);
          return w.slice(0, 1) + be + af.replace(/\D+/, '');
        } else if (s.indexOf('-') > -1 && w.charAt(0) === '-') {
          var be = w.slice(0, 1);
          var af = w.slice(1);
          return be + af.replace(/-+/, '');
        }
        return  w.replace(s, '');
      });

      endVal = endVal.replace(reg3, function(w, s1) {
        if (s1.indexOf('-') > -1 && w.charAt(0) === '-') {
          var be = w.slice(0, 1);
          var af = w.slice(1);
          return be + af.replace(/-+/, '');
        }
        return w.replace(s1, '');
      })
      var splitAry = endVal.split('.');
      if (splitAry.length === 1) {
        endVal = splitAry[0].indexOf('-') > -1 ? splitAry[0].substring(0, integerLen + 1) : splitAry[0].substring(0, integerLen);
      } else {
        var afVal = '.' + splitAry[1].substring(0, floatLen);
        endVal = splitAry[0].indexOf('-') > -1 ? splitAry[0].substring(0, integerLen + 1) + afVal : splitAry[0].substring(0, integerLen) + afVal;
      }
      return endVal;
    
    default:
      return str;
  }
}
