// data types of javascript
// string   " "
// integer  12345
// boolean  true / false
// float    2.34 
// more.......

// llegal variable:
// numbers are only allowed in between.
// only $ and _ are allowed in start and in between.
var number;
var _number;
var $number;
var num23ber;
var num_ber;
var num$ber;

// illegal variable 
// no special character allowed in between or start except $ and _.
// number not allowed in begining.
// var -number;
// var 23number; 
// var num-ber;
// var num&ber;

// camel-case 
var myName; // 1st word 1st letter small. 2nd word 1st letter capital.

// variable for string;

var myName;  // variable declaration
console.log("myName===>", myName) // undefined

myName = "Binish Farooq" // assigning the value to variable
console.log("after assigning value","myName===>" ,  myName)

myName = "Mrs.Farhan" // modifiying variable
console.log("after modification value","myName===>" ,  myName)


// variable for number;
var num = 10
console.log("num ==>", num)

var sum = num + 20 // we add 20 in num and store in new variable called sum.
console.log("sum : num + 20===>", sum) // 30

num += 20 // we add 20 in num and concatenate in same variable. the num variable will update here
console.log("modified num: num+=20 ===>", num) // 30

num *= 2
console.log("num*=2===>", num) // 60


console.log("myName" +" " + typeof(myName))
console.log("num" +" " + typeof(num))
console.log("boolean" +" " + typeof(boolean))

var num1 = +prompt('enter value 1 ', 20) // data type string // convert to number
var num2 = +prompt('enter value 2' , 30)
var sum = num1 + num2 // data type string + concatenate 
console.log("🚀 ~ file: varibales.js:62 ~ sum:", sum)
var modulus = num1 % num2
console.log("🚀 ~ file: varibales.js:64 ~ modulus:", modulus)
