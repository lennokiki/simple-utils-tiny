export function Type_isEqual(a, b) {
  if (a === b) return true;
  var isObjectA = a !== null && typeof a === 'object';
  var isObjectB = b !== null && typeof b === 'object';

  if (isObjectA && isObjectB) {
    var isArrayA = method.isArray(a);
    var isArrayB = method.isArray(b);

    try {
      if (isArrayA && isArrayB) {
        return a.length == b.length && a.every(function(v, k) { return method.isEqual(v, b[k])})
      } else if (!isArrayA && !isArrayB) {
        var keys = Object.keys(a);
        return a.length == b.length && keys.every(function(v) { return method.isEqual(a[v], b[v])})
      } else {
        return false;
      }
    } catch(err) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}



var Type_is = {};

(function(){
  var typesAry = ['String', 'Number', 'Function', 'Boolean', 'Object', 'Array', 'RegExp', 'Arguments', 'Date', 'Symbol', 'Error', 'Promise', 'Set'];
  typesAry.forEach(function(key) {
    Type_is['is' + key] = function(target) {
      var res = Object.prototype.toString.call(target).slice(8, -1);
      return key === res;
    }
  })
}())

export { Type_is }
