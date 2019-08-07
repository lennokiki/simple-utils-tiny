var _gLetters = {
  lower: null,
  upper: null
}

export function stringTrim(str, type) {
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

export function stringTransCase(str, type) {
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

export function stringColor(useRgb) {
  var color = '#' + ('000000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
  return useRgb ? stringColor16ToRgb(color) : color;
}

export function stringColor16ToRgb(color) {
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
    var colorAry = []
    for (var j = 1; j <= 6; j += 2) {
      var res = parseInt('0x' + lowerColor.substr(j, 2));
      colorAry.push(res);
    }
    return 'RGB(' + colorAry.join(',') + ')';
  }
  return color;
}

export function stringColorRgbTo16(color) {
  var reg = '(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{1}[0-9])';
  var regRgb = new RegExp(`^(RGB|rgb)\\((?:${reg}\\,){2}${reg}\\)$`);
  if (color && regRgb.test(color)) {
    var colorAry = color.replace(/(?:(RGB|rgb)\()|(?:\))/g, '').split(',');
    return colorAry.reduce((bef, next) => {
      var str = Number(next).toString(16);
      str = str.length !== 2 ? '0' + str : str;
      return bef + str;
    }, '#')
  }
  return color;
}

export function stringNumToLetter(num, type) {
  if (typeof num === 'number' && !isNaN(num) && num >= 0) {
    var defaultType = type || 'upper';
    var letters = _gLetters[defaultType];
    if (!letters) {
      var range = type === 'lower' ? 97 : 65;
      var ary = new Array(26);
      for (var i = 0; i < 26; i++) {
        ary[i] = String.fromCharCode(i + range);
      }
      letters = _gLetters[defaultType] = ary
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
    }

    return formatter(num);
  }
  return num;
}
