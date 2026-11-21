const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number you want to a revesrse"));
// function sumOfDigits(n) {
//     // Write your logic here
//     let temp = num  // 123
//     sum = 0
//     while (temp > 0) {
//         let digit = temp % 10 // 3   
//         sum += digit //0+3=3
//         temp = Math.floor(temp / 10) // 123 / 10=12
//     }
//     console.log(sum)

// }
// sumOfDigits(num)


function isAutomorphic(n) {
    // Write your logic here
    let square = n * n    /// 625
    let temp = n   // 25
    while (temp > 0) {  //25>0 =yes ,  2>0=yes  , 0>0=no
        let last_digit = temp % 10  //5 , 2
        let last_square = square % 10  //5 , 2
        if (last_digit !== last_square) return 'No' // 5 !== 5 no , 2!==2
        temp = Math.floor(temp / 10)  //25/10=2.5  // 2/10=0
        square = Math.floor(square / 10) //625/10=62.5  // 62/10==6.2
    }
    return 'Yes'

}
console.log(isAutomorphic(num))