// let n = 7;
// let isprime = true;
// if (n <= 1) console.log("not prime");
// else if (n === 2) console.log("prime");
// else if (n % 2 == 0) console.log("not prime");
// else {
//     for (let i = 3; i <= Math.floor(Math.sqrt(n)); i + 2) {
//         if (n % i == 0) {
//             isprime = false;
//             break;
//         }
//     }
//     console.log(isprime ? "prime" : "not prime")
// }

// function calculatePower(a, b) {
//     // Write your logic here
//     let c = a ** b
//     return c

// }

// console.log(calculatePower(5, 0))

// console.log(145 / 10)


// function isStrongNumber(num) {
//     // Write your logic here\
//     let temp = num  // 145
//     let sum = 0
//     for (; temp > 0;) {  // 145 kiya bara hai 0 se ---- haa bara    // kiya 14 bara hai 0 se ---- ha bara hai /// kiya 1 bara hai 0 se ---- ha bara hai 

//         let digit = temp % 10 // 145%5=5        // 14%10=4 /// 1%10=0
//         let f = 1
//         for (let i = 1; i <= digit; i++) {
//             f = f * i  //1*1=1*2=2*3=6*4=24*5=120      / 1*1=1*2=2*3=6*4=24
//         }
//         sum = sum + f // sum=0+120  // sum=120+24=144
//         temp = Math.floor(temp / 10) /// 145/10=14.5 but ih has come to 14   ///14/10=1.4 but it has been 1 /// 1/10 = 0
//     }
//     if (sum === num) {
//         return 'strong number'
//     }
//     else {
//         return "not strong"

//     }
// }

// console.log(isStrongNumber(145))

let i = 1
for (; ;) {
    console.log(i)
    i++
    if (i > 3) break
}

