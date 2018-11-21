# JSON TO ARRAY (version: 0.0.1)
A function that turns your short json objects( each key has one value) into an array with keys and values.
# PLEASE REMEMBER :
You can't extract objects that have arrays in it.
Your keys must be in quotations, otherwise it will not work, but the values don't need this stuff. <br/>Example: <br/>
var myobj = { name: "Jack"} // will not be extracted <br/>
var myobj = { "name": "Jack"} // will be extracted
*******
# Example Code :

var jta = require("jsontoarray");

var myobj = {
  "name": "Jack",
  "lastname": "Ericson",
  "Phone": 12345678,
  "happy": true
}

var keyvalues = jta(myobj);

console.log(keyvalues); <br/>
// [ ['name',  'lastname',  'Phone',  'happy'],  ['Jack',  'Ericson',  12345678,  true] ]