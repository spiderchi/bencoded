/*  Decode the encoded data */  
  
  const decode = (str) => {
    let current, encodedDigit, keyLength, key, value, valueLength;
    switch (str[0]) {
    case 'i': // To decode number type
      encodedDigit = str.match(/^i-?\d+e/)[0];
      return [ encodedDigit.length, +encodedDigit.slice(1, -1) ];
    // If found between 0 - 9
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      let strLength = str.match(/^\d+/)[0];
      // startPos = strLength.length + 1;
      const initialPosition = 2;
      const decodedOther = str.slice(0, initialPosition + +strLength);
      return [ decodedOther.length, decodedOther.slice(initialPosition) ];
    case 'l': // To decode list type
      current = 1;
      let decodedList = [];
      const listDecoded = () => {
        let length, data, listArr;
        // To check if its not end of string
        while (str[current] !== 'e') {
          listArr = decode(str.slice(current));
          // Destruct array to get length and data
          [length, data] = listArr;
          // get pointer to the other part of list
          current += length;
          decodedList.push(data);
        }
        return decodedList;
      };
      listDecoded();
      return [ current + 1, decodedList ];
    case 'd': // To decode object data type
      current = 1;
      let decodedObj = {}, keyData, valueData;
      while (str[current] !== 'e') {
        // Get key and length
        keyData = decode(str.slice(current));
        // Destruct array to get length and key
        [keyLength, key] = keyData;
        // Get value and length
        valueData = decode(str.slice(current + keyLength));
        // Destruct array to get length and value
        [valueLength, value] = valueData;

        current += keyLength + valueLength;
        decodedObj[key] = value;
      }
      return [ current + 1, decodedObj ];
    default:
      normalString = str;
      return [ normalString.length, normalString ];
    }
  };
  module.exports = (str) => {
    return decode(str)[1];
  };
