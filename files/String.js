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
