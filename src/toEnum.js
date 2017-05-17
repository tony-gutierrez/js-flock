const deepFreeze = require('./deepFreeze');

// Private

const fromArray = function(arr) {
  const obj = {};
  arr.forEach((key) => {
    if (typeof key !== 'string') {
      throw TypeError('Only strings are allowed in array notation');
    }
    obj[key] = key;
  });

  return obj;
};

// Public

module.exports = function(arg) {
  const obj = Array.isArray(arg) ? fromArray(arg) : arg;

  if (!obj || typeof obj !== 'object') {
    throw TypeError('Provided argument need to be object or array');
  }

  // Append enum helpers

  const keys = Object.freeze(Object.keys(obj));
  const values = Object.freeze(keys.map((key) => obj[key]));

  obj.values = () => values;
  obj.keys = () => keys;
  obj.exists = (value) => values.some((v) => v === value);
  obj.haveKey = (key) => keys.some((v) => v === key);

  deepFreeze(obj);

  return obj;
};
