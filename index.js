
const cowsay = require("cowsay");
const information=require("./information.js")

console.log(`Hello i'm ${information.name}  from ${information.campus}`);

console.log(cowsay.say({
    text : `Hello i'm ${information.name}  from ${information.campus}` ,
    e : "oO",
    T : "U "
}));
