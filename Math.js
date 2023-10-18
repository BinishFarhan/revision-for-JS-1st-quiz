// familiar operator
// +,-,/,*,%

var num = 20
var num2 = 50
var sum = num2 + num
var diff = num2 - 40
var product = num2 * num
var division = num2 / 2
var modulus = num2 % num
console.log(sum);
console.log(diff);
console.log(product);
console.log(division);
console.log(modulus);

var res = 40 + (50 - 25) / 5 * 5 // it will solve using bodmas rule
// 40 + 25 / 5 * 5 // bracket solve
// 40 + 5 * 5 // division
// 40 + 25 // multiplication
// 65 // addition
console.log("🚀 ~ file: Math.js:18 ~ res:", res)

// to do some operation forcefully we use brackets 
var add = 6 + 10 * 5 // in this line it will do multiplication first. but if we want to add first use bracket. 
console.log("🚀 ~ file: Math.js:26 ~ add:", add)
var add = (6 + 10) * 5 // use paranthesis to add first. 
console.log("🚀 ~ file: Math.js:28 ~ add:", add)
