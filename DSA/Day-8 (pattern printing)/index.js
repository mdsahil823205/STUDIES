// pattern printing
// -----------------------------------------1-----------------------------------------------------
// let prompt = require("prompt-sync")()
// let n = prompt("enter a number:")
// for (let i = 1; i <= n; i++) {
//    for (let j = i; j <= n; j++) {
//       process.stdout.write("* ")
//    }
//    console.log()
// }
// // output
// // * * * * * 
// // * * * * 
// // * * * 
// // * * 
// // * 

// ------------------------------------------2-----------------------------------------------------
// let prompt = require("prompt-sync")();
// let n = prompt("enter a number:");
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j));
//   }
//   console.log("");
// }
// output: 
// A
// AB
// ABC
// ABCD
// ABCDE
// ABCDEF
// ABCDEFG
// ABCDEFGH
// ABCDEFGHI
// ABCDEFGHIJ
// ------------------------------------------3-----------------------------------------------------
// let prompt = require("prompt-sync")();
// let n = prompt("enter a number:");
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log(" ")
// }
// output
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

// ------------------------------------------4-----------------------------------------------------
// let prompt = require("prompt-sync")();
// let n = prompt("enter a number:");
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write("  ")
//     }
//     for (let k = 1; k <= i; k++) {
//         process.stdout.write("* ")
//     }
//     console.log(" ")
// }

// // output
// //         *  
// //       * *  
// //     * * *  
// //   * * * *  
// // * * * * *  

// ------------------------------------------6-----------------------------------------------------

// let prompt = require("prompt-sync")();
// let n = prompt("enter a number:");
// for (let i = 1; i <= n; i++) {
//     for (j = 1; j <= n * 2; j++) {
//         if (i == j || i + j == n * 2) {
//             process.stdout.write("*")
//         }
//         else process.stdout.write(" ")
//     }
//     console.log(" ")
// }
// // output
// *       *  
//  *     *   
//   *   *    
//    * *     
//     *  

// ------------------------------------------7-----------------------------------------------------
// let prompt = require("prompt-sync")();
// let n = prompt("enter a number:");

// for (let i = 1; i <= n; i++) {
//     for(let j=1;j<=n;j++){
//         if(i==j || i+j==n+1){
//             process.stdout.write("*")
//         }
//         else process.stdout.write(" ")
//     }
//     console.log(" ")

// }
// output
// *   *
//  * * 
//   *  
//  * * 
// *   *