export function String_trim(str, type) {
  var regList = {
    all: /\s/g,
    left: /^\s+/,
    right: /\s+$/,
    around: /(^\s+|\s+$)/g,
    middle: /[^\s].*[^\s]/g
  };
  type = type || 'all';
  var reg = regList[type];
  if (type === 'middle') {
    return String(str).replace(reg, function(word) {
      return word.replace(regList['all'], '');
    })
  }
  return String(str).replace(reg, '');
}

export function String_transCase(str, type) {
  type = type || 'capitalize';
  str = String(str);
  
  switch (type) {
    case 'upper':
      return str.toUpperCase();
    case 'lower':
      return str.toLowerCase();
    case 'capitalize':
      return str.replace(/\b\w+\b/g, function(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
      }); 
    default:
      return str;
  }
}
