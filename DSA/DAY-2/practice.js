let prompt = require("prompt-sync")();
let p = prompt("enter a principle amount:");
let r = prompt("enter a rate:");
let t = prompt("enter a time:");
let ci = p * Math.pow(1 + r / 100, t) - p;
console.log(ci.toFixed(2));
