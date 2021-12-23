//modules - encaspulated code
//common js - every file in node is module (by default)
const names = require("./4-names");
const sayName = require("./3-utils");
const altFlavor = require("./5-alt-flavor"); //used different syntax for module.export
require("./6-mindgrenade"); //for functions without export statement
console.log(names);

sayName("Nitish");
sayName(names.jeet);
sayName(names.abhishek);
