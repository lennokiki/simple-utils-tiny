export function typeIsEqual(a, b) {
  if (a === b) return true;
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
    }
  })
}())

export { typeIs }
