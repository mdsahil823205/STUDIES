// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”
// answer------>>>>

// let age = prompt("enter your age");

// if (age === null) {
//   console.error("You pressed cancel button");
// } else if (age.trim() === "") {
//   console.error("You entered a blank value or space");
// } else {
//   age = Number(age);
// }
// if (isNaN(age)) {
//   console.error("Please enter a valid number");
// } else if (age >= 18 && age <= 100) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not eligible to vote");
// }

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.
// answer------>>>>
// let user = 5
// for (let i = 1; i <= 10; i++) {
//   let mul = user * i;
//   console.log(`${user}x ${i}= ${mul}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// answer------>>>>
// let count = 0;
// for(let i=0;i<=15;i++){
//     if(i>8){
//         count++
//     }
// }
// console.log(`total number between 1 to 15 are greater than 8 = total ${count}`)

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input
// answer------>>>>
// let user = prompt("enter your password");
// let password =
//   user === "khulja sim sim"
//     ? alert("acces granted")
//     : user === null
//     ? console.error("you cancelled")
//     : console.log("access denies");

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
// answer------>>>>
// let attempt = 0;
// while (true) {
//   let pass = prompt("enter a passowrd");
//   if (pass != "sahil") {
//     console.log("please reattempt");
//     attempt++;
//   }
//   if (pass === "sahil") {
//     console.log("access granted");
//     break;
//   } else if (attempt === 3) {
//     console.log("account lockesd")
//     break;
//   }
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
// answer------>>>>
// let count = 0;
// while (true) {
//   let user = prompt("enter a string");
//   if (user === "yes") {
//     count++;
//   }
//   if (user === "stop") {
//     break;
//   } else if (user !== "yes") {
//     alert("only type yes or stop ");
//   }
// }
// console.log(`user type ${count} time of yes`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// answer------>>>>
// for (let i = 1; i <= 50; i++) {
//   if (i % 7 == 0) console.log(`${i} is divisible by 7`);
// }

// 14.Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 == 1) {
//     console.log(`${i} is odd number`);
//     sum = sum + i;
//   }
// }
// console.log(`sum of total odd number is ${+sum}`);

// 15.Keep asking number until user enters an even number
// Use while loop. Stop only if input is even
// answer------>>>>

// while (true) {
//   let user = +prompt("enter a  even numner");
//   if (user % 2 == 0) {
//     alert(`your number ${user} is even`);
//     break;
//   } else alert(`your number ${user} is not even please try again`);
// }

//16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// answer------>>>>

// let user1 = 20;
// let user2 = 20;
// if(user1<user2){
//     console.log(`user 2= ${user2} is greater than user1=${user1}`)
//     for(user1;user1<=user2;user1++){
//         console.log(user1)
//     }
// }
// if(user2<user1){
//     console.log(`user-1 = ${user1} is greater than user-2 = ${user2}`)
//     for(user2;user2<=user1;user2++){
//         console.log(user2)
//     }
// }
// else console.log("value is same")

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// answer------>>>>

// let count = 0;
// for (let i = 0; i <= 20; i++) {
//   i % 2 === 1 ? (console.log(i, "is odd"), count++) : null;
//   if (count === 3) break;
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// answer------>>>>

// let count_positive = 0;
// let count_negative = 0;
// for (let i = 1; i <= 5; i++) {
//   let user_value = prompt("enter a number");
//   if (user_value < 0) {
//     console.log(`${i} = ${user_value} is negative number `);
//     count_negative++;
//   } else {
//     console.log(`${i} = ${user_value} is positive numnber `);
//     count_positive++;
//   }
// }
// console.log("total number are positive", count_positive);
// console.log("total number are negative", count_negative);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let withdrawal = 0;
// let balance = 1000;
// for (let i = 1; i <= 3; i++) {
//   let user_amount = prompt("enter tou amount you want withdrwawl");
//   if (user_amount <= balance) {
//     balance = balance - user_amount;
//     console.log("your remaining balace is", balance);
//     withdrawal++;
//   }
//   if (balance === 0) {
//     console.log("insufficient balance");
//     console.log("your balance is", balance);
//     break;
//   }
// }

let total_balance = 1000;
let i = 1;

while (i <= 3) {
  let user_input = prompt(
    "Press 1 to Add Amount\nPress 2 to Withdraw\nPress 3 to Check Balance\nPress 4 to Exit"
  );

  // cancel handling
  if (user_input === null) {
    console.error("You cancelled the program");
    break;
  }

  // trim and validate
  user_input = user_input.trim();
  if (user_input === "") {
    console.error("You entered blank value or space");
    continue;
  }

  // convert to number
  user_input = Number(user_input);
  if (isNaN(user_input)) {
    console.error("Please enter a valid number");
    continue;
  }

  // main options
  if (user_input === 1) {
    let add_amount = +prompt("Enter amount to add:");
    total_balance += add_amount;
    console.log(`Amount added. New balance = ₹${total_balance}`);
  } else if (user_input === 2) {
    let withdrawal = +prompt("Enter amount to withdraw:");
    if (withdrawal <= total_balance && withdrawal > 0) {
      total_balance -= withdrawal;
      console.log(
        `Withdrawal successful. Remaining balance = ₹${total_balance}`
      );
    } else {
      console.error("Insufficient balance!");
    }
  } else if (user_input === 3) {
    alert(`Your current balance is ₹${total_balance}`);
  } else if (user_input === 4) {
    console.log("Thank you for visiting!");
    break;
  } else {
    console.error("Invalid option! Please choose between 1-4.");
  }

  i++;
}
