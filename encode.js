/*
* Script to encode the provided data
*/

const bencode = require('../pixmob/lib');

const digit = bencode.encode(42);
console.log('Encode Digit 42 -->', digit);

const string = bencode.encode('Hello Test');
console.log("Encode String Hello Test -->", string);

const list = bencode.encode(['spam',42]);
console.log("Encode List ['spam',42] -->", list);

const dictionary = bencode.encode({"bar": "spam", "foo": 42});
console.log("Encode Dictionary {bar: spam, foo: 42} --> ", dictionary);