/*
* Script to decode the encoded data
*/

// Get decode script 
const bencode = require('../pixmob/bencode');
// Decode provided encoded format
const digit = bencode.decode('i56672e');
console.log("Digit decoded i56672e --> ", digit);
// Decode provided encoded list format
const list = bencode.decode('l4:spami42ee');
console.log("List decoded l4:spami42ee --> ", list);
//Decode provided encoded dictionary format
const dictionary = bencode.decode('d3:bar4:spam3:fooi42ee');
console.log("Dictionary data decoded d3:bar4:spam3:fooi42ee --> ", dictionary);
