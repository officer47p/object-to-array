# JSON TO ARRAY (version: 0.0.1)
A function that turns your short json objects( each key has one value) into an array with keys and values.
# PLEASE REMEMBER :
You can't have keys that have multi values, I mean:<br/>
var myobj = { fullName: ["jack", "Ericson"]}   // Will not work
# Example Code :

var ota = require("object-to-array");

var myobj = {
  "name": "Jack",
  "lastname": "Ericson",
  "Phone": 12345678,
  "happy": true
}

var keyvalues = ota(myobj);

console.log(keyvalues); <br/>
// [ ['name',  'lastname',  'Phone',  'happy'],  ['Jack',  'Ericson',  12345678,  true] ]