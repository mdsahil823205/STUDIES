// // // // const prompt = require('prompt-sync')();
// // // // // const input = prompt("enter a number")
// // // // let n= Number(10)
// // // //  for (let i=n;i>=1;i--){
// // // //     process.stdout.write(i + " ")
// // // //  }

// // // // let n = 5
// // // // let sum = 1
// // // // for (let i = 1; i <= n; i++) {
// // // //    sum *= i

// // // // }
// // // // console.log(sum)

// // // // let x = 5;
// // // // while (x) {
// // // //    console.log(x)
// // // //    x -= 1
// // // // }

// // // // // prime or not prime
// // // // let number = 17

// // // // let isprime = true
// // // // if (number <= 1) console.log("not prime")
// // // // else if (number == 2) console.log("prime")
// // // // else if (number % 2 == 0) console.log("not prime")
// // // // else {
// // // //    for (let i = 3; i <= Math.floor(Math.sqrt(number)); i += 2) {
// // // //       if (number % i == 0) {
// // // //          isprime = false
// // // //          break
// // // //       }
// // // //    }
// // // //    console.log(isprime ? "prime" : "not prime")
// // // // }

// // // // // sum of digits
// // // // let n = 1234
// // // // while (n > 0) {

// // // // }

// // // // count number of digit

// // // let num = 12345678994867234698569692;
// // // let copy = num
// // // let count = 0;
// // // console.log(num.toString())


// // // // reverse a number

// // // let n = 1234
// // // let rev = 0

// // // while (n > 0) {
// // //    rev = n % 10  // yeh kiya karega last ka 1 number dega jaise ki 1234 toh humko 4 dega 
// // //    console.log(rev)
// // //    n = Math.floor(n / 10)  // yeh kiya karega last ka ek number hata dega 1234 toh 4 hatake 123 karega 
// // // }
// // // console.log(rev)

// // // let prompt = require("prompt-sync")()
// // // let user, attempt = 0
// // // let computer = +Math.floor((Math.random() * 10) + 1)
// // // do {
// // //    attempt++
// // //    user = +prompt(`enter a numer between 1 to 100 :`)
// // //    if (user > computer) console.log("to large")
// // //    else if (user < computer) console.log("to small")
// // //    else if (user === computer) console.log("to win the attempt is:",attempt)
// // //    else console.log("invalid")
// // // } while (user != computer)



// // // harshad number
// // // let harshad = 18


// // // let sum = 0
// // // let copy = harshad
// // // while (harshad > 0) {
// // //    sum = sum + harshad % 10 //0+8=8 , 8+1=9
// // //    harshad = Math.floor(harshad / 10)
// // // }
// // // temp = copy % sum
// // // console.log(temp===0?"harshad number":"not harshad")



// // // anundant number
// // let n = 12
// // let sum = 0
// // for (let i = 1; i <= n / 2; i++) {
// //    if (n % i == 0) {
// //       sum = sum + i
// //    }
// // }
// // console.log(sum > n ? "yes" : "no")


// // let val1 = 10
// // let val2 = 20

// // function addsum(num1, num2) {
// //    let total = num1 + num2
// //    return total
// // }
// // let result = addsum(val1, val2)
// // let result2 = addsum(100, 200)

// // // callback function
// // function one() {
// //    console.log("one")
// // }
// // function two() {
// //    console.log("two")
// // }
// // function three() {
// //    console.log("three")
// // }
// // one()
// // two()
// // three()


// // print factor number
// let prompt = require("prompt-sync")()
// let n = prompt("enter a number:")
// let result = []
// if (n <= 1) console.log("not prime")
// for (let i = 2; n > 1;) {
//    if (n % i == 0) {
//       n = n / i
//       result.push(i)
//    }
//    else { i++ }
// }
// console.log(result.join(" "))


