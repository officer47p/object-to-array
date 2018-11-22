## object-to-array-converter
A function that turns your simple objects(each key has one value) into an array with keys and values.
# PLEASE REMEMBER :
You can't have keys that have objects or arrays as values, I mean:<br/>
```js
var myobj = { fullName: ["jack", "Ericson"]}   // Will not work
var myobj = { fullName: {name: "jack",lastname: "Ericson"}}   // Will not work too
```
# Installation :
You can use the function inside the index.js file for using in browsers or download the package by npm :
```
npm install object-to-array-converter --save
```
# Example Code :
```js
var obarr = require("object-to-array-converter");

var myobj = {
  "name": "Jack",
  "lastname": "Ericson",
  "Phone": 12345678,
  "happy": true
}

var keyvalues = obarr(myobj);

console.log(keyvalues);
// [ ['name',  'lastname',  'Phone',  'happy'],  ['Jack',  'Ericson',  12345678,  true] ]
```