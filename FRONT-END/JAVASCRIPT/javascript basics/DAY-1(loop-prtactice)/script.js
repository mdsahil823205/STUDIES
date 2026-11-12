//level-1 pure beginner practice
//1.print number from 1 to 10
// loop form 1 t0 10 print each number
// answer----->

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // 2. print only even number form 1 to 20 use a loop and condition to print only even ones
// // answer----->
// for(let i=1;i<=20;i++){
//   if(i%2==0) console.log(`${i} is even`)
// }

//3.print number from 10 to 1
// loop form 10 t0 1 print each number
// // answer----->

// for(let i=10;i>=1;i--){
//   console.log(i)
// }

// 4. print the word "yes" 5 times repeat using a loops
// // answer----->

// for(let i=1;i<=5;i++){
//   console.log("yes")
// }

// // 5. print  even and odd number form 1 to 20 use a loop and condition to print  even and odd ones
// // answer----->

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) console.log(`${i} ---> even`);
//   else console.log(`${i} ---> odd`);
// }


//6 ask user for a number and say if its positive or negative
//answer------->

let user = prompt("enter a number");
user = Number(user);
if (isNaN(user)) console.log("please enter a number");
if (user < 0) console.log(`${user} is negative`);
else console.log(`${user} is positive`);