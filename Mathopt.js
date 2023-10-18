// unfamiliar operator

//num++ (post increment)
//num-- (post decrement)
//++num (pre increament)
//--num(pre decreament)

//num++
// num++ means num + 1 (first time value same rehti hai)
var x = 2
var res = x++ - x++ + x++    
        console.log("🚀 ~ file: Mathopt.js:12 ~ res:", res)
        // 2  - 3  + 4
        // - 1 + 4
        // 3

// num--
// var y = 5
// var res1 = y-- + y-- - y--
//         //  5  +  4  - 3
//         // 6  
// console.log("🚀 ~ file: Mathopt.js:20 ~ res1:", res1)

// // ++num and --num
// var a = 4
// var b = 5
// var z = ++a + --b + ++b - ++a - --a
//     //  5   +  4  +  5   - 6  -  5
//     // 3 
// console.log("🚀 ~ file: Mathopt.js:28 ~ z:", z)

var a = 5 , b = 6 , c = 10
var opt = a++ + b-- + ++c - --b + --c - ++a  + --a
        // 5  +  6  +  11 -  4  +  10 -  7   +  6
        // 27
console.log("🚀 ~ file: Mathopt.js:34 ~ opt:", opt)