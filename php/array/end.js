function end (arr) {
  //  discuss at: http://phpjs.org/functions/end/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Legaev Andrey
  //  revised by: J A R
  //  revised by: Brett Zamir (http://brett-zamir.me)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //        note: Uses global: php_js to store the array pointer
  //   example 1: end({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
  //   returns 1: 'Zonneveld'
  //   example 2: end(['Kevin', 'van', 'Zonneveld']);
  //   returns 2: 'Zonneveld'

  this.php_js = this.php_js || {}
  this.php_js.pointers = this.php_js.pointers || []
  var indexOf = function (value) {
    for (var i = 0, length = this.length; i < length; i++) {
      if (this[i] === value) {
        return i
      }
    }
    return -1
  }
  // END REDUNDANT
  var pointers = this.php_js.pointers
  if (!pointers.indexOf) {
    pointers.indexOf = indexOf
  }
  if (pointers.indexOf(arr) === -1) {
    pointers.push(arr, 0)
  }
  var arrpos = pointers.indexOf(arr)
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    var ct = 0
    var val
    for (var k in arr) {
      ct++
      val = arr[k]
    }
    if (ct === 0) {
      // Empty
      return false
    }
    pointers[arrpos + 1] = ct - 1
    return val
  }
  if (arr.length === 0) {
    return false
  }
  pointers[arrpos + 1] = arr.length - 1
  return arr[pointers[arrpos + 1]]
}
