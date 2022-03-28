// measures how much memory a key and its value takes up in a collection of objects
(function expensiveKeysInit(root) {
  function stringSize(str) {
    // JavaScript strings are unicode UTF-16 up to 2 bytes per character
    return str.length * 2;
  }

  function objectSize(obj) {
    return stringSize(JSON.stringify(obj));
  }

  var value = function value(key) {
    return function (object) {
      return object[key];
    };
  };

  var pickValue = function (key, items) {
    return items.map(value(key));
  };

  function keySize(items, key) {
    return stringSize(key) * items.length + objectSize(pickValue(key, items));
  }

  function zip(keys, values) {
    var result = {};
    keys.forEach(function (key, index) {
      result[key] = values[index];
    });
    return result;
  }

  function toMB(bytes) {
    return bytes / 1024 / 1024;
  }

  function toSizeMB(size) {
    return toMB(size).toFixed(2) + " MB";
  }

  function valuesInMB(obj) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
      var val = obj[key];
      if (typeof val === "number") {
        result[key] = toSizeMB(obj[key]);
      }
    });
    return result;
  }

  function propertySizes(object) {
    if (!object || typeof object !== "object" || Array.isArray(object)) {
      return console.error("propertySizes expects a javascript object");
    }

    var keys = Object.keys(object);
    const sizes = keys.map(keySize.bind(null, [object]));
    const result = zip(keys, sizes);
    result.mb = valuesInMB.bind(null, result);
    return result;
  }

  root.expensiveKeys = propertySizes;
  console.info("try expensiveKeys(<object>);");
  console.log("you can call .mb() method on the returned object e.g expensiveKey({key: 'value'}).mb()");
})(this);

console.info('Example: expensiveKeys({key: "value"})');
console.table(expensiveKeys({'testNum': 10, 'testStr': 'longtext'}).mb());
