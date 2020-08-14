  /* Encode the provided digit, string, list or Dictionary Data */
  const encode = input => {
    // Could use if else loop, but switch looks clean to use
    switch (true) {
    case (typeof input === 'string'):
      return encodeString(input);
    case (typeof input === 'number'):
      return encodeInteger(Math.floor(input));
    case (Array.isArray(input)):
      return encodeList(input);
    default:
      return encodeDictionary(input);
    }
  };

  const encodeString = input => `${input.length}:${input}`;

  const encodeInteger = input => `i${input}e`;
  
  const encodeList = (array) => {
    let object, acc = [];
    const encodedContents = () => {
      for (let $i = 0; $i < array.length; $i++) {
        object = array[$i];
        acc.push(encode(object));
      }
    }
    encodedContents();
    return `l${acc.join('')}e`;
  };

  const encodeDictionary = (object) => {
    const keys = [], contents = [];
    let key;
    const getKeys = () => {
      for (key in object) {
        keys.push(key);
      }
    }
    getKeys();
    const encodedContents = () => {
      for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        contents.push(`${encode(key)}${encode(object[key])}`);
      }
      return `d${contents.join('')}e`;
    }
    return encodedContents();
  };

  module.exports = encode;
