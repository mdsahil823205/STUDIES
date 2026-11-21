// function sumEvenOddInRange(start, end) {
//     // Write your logic here
//     let even = 0;
//     let odd = 0;
//     if (start > end) {
//         let temp = start
//         start = end
//         end = temp
//     }
//     for (start; start <= end; start++) {
//         if (start % 2 == 0) even = even + start;
//         else odd += start;
//     }
//     return [even, odd];

// }
// console.log(sumEvenOddInRange(1, 5));

// let count = 0; 
// for (i = 2; i <= 20; i += 3) {
//   count++;
// }
// console.log(count);

// function isPrime(n) {
//     if (n <= 1) return "Not Prime";
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return "Not Prime"; 
//     }
//     return "Prime";
// };
// console.log(isPrime(7)); // prime
// console.log(isPrime(9)); // not prime


function isPrime(n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++
        }
    }
    if(count==2) return "Prime"
    else return "Not Prime" 
}
console.log(isPrime(7)); // prime
console.log(isPrime(9)); // not prime
let a=20