# object-to-array-converter
A function that turns your Objects(or Json) into an Array with keys and values.
# Installation :
You can use the function inside the index.js file for using in browsers or download the package by npm :
```
npm install object-to-array-converter --save
```
# Example Code :
```js
var ota = require("object-to-array-converter");

var myobj = {
  name: "Jack",
  lastName: "Ericson",
  phone: 12345678,
  happy: true,
  favFoods: ["Pizza", "Burger", "Omlet"]
}

var keyvalues = ota(myobj);

console.log(keyvalues);
// [ ['name',  'lastName',  'phone',  'happy',  'favFoods'],  ['Jack',  'Ericson',  12345678,  true,   ['Pizza', 'Burger', 'Omlet']] ]
```
# Working with http requests :
You can even turn your req.body objects (if you working with http requests) into an Array of keys and values.<br/>
Just put it in as the function parameter, Example :
```js
app.post("/", function(req, res){
  var body = ota(req.body);
})
```