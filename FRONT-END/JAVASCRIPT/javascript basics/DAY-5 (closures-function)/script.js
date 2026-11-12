// // closure function example 1
function outer(name) {
  let count = 0;
  console.log(count, "---->", name);

  return function inner(name) {
    count++;
    console.log(count, "---->", name);
    let day = 10;

    return function lower(name) {
      day++;
      console.log(count, "---->", name);
    };
  };
}
let innercounter = outer("outer");
outer("outer");
outer("outer");

innercounter("inner");
innercounter("inner");
innercounter("inner");
innercounter("inner");
innercounter("inner");

let lower = outer("outer");
lower("lower");
lower("lower");
lower("lower");

// closure example 2 with bank rule
function bankAccount() {
  let amount = 1000; // yaha ope jo amount hai woh private hai clousre main jo bhi outer function ka variable lete hai woh private hota hai

  function deposit(balance) {
    balance += amount;
    console.log(balance);
  }
  return deposit;
}
let deposit = bankAccount();
deposit(300);
