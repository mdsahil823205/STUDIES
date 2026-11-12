// high order function
function runtwice(fnc) {
  fnc();
  fnc();
  fnc();
}
runtwice(() => {
  console.log("hello");
});

// pure function woh hota hai jo bahar ki bahar ko kuch nakhi karta hai woh woh sirf apna hi value main task perform karta aur khud ka bhi value ko change nahi karta  hai jaise ki yaha a or b ka jo value hai woh wahi ka wahi rahega
function pure(a, b) {
  return a + b;
}
console.log(pure(1, 3));

// impure function impure function woh hota hai jo bahar ki value ko change kar deta hai jaise ki yaha global ka vlaue change hua
let global = 0;
function impure(a) {
  global++;
  console.log(global + a);
}
impure(2);
impure(2);

// object destructre main hum object ka key ko variable de dete hai jaise ki yaha pe argument main hum object pass kiye hi aur hum chahte hai ki jo argument main object ka key hai usko hum ek variable main store karle toh yaha hum object destrucure ka use karenge
function destructre({ name, age }) {
  let string = `{"name":"${name}","age":${age}}`;
  console.log(typeof string);
  object = JSON.parse(string);
  console.log(object, "iska type hai:", typeof object);
}
destructre({ name: "sahil", age: 20 });

// difference between this with arrow function and this with normal fuction arrow main main window ka value badal jaata hai kyu ki woh apna parent ka use karta hai aur function main window ka value wahi rehta hai
let obj = {
  name: "sahil",
  fnc: function () {
    console.log(this); // humko yeh object main milega kyu ki teh ek normal function hai
  },
  fnc2: () => {
    console.log(this); // arrow function humesha apna parents ka scope use kartma hai jo ke iss code main parent obj hai
  },
};
obj.fnc();
obj.fnc2();

// closure hai yeh kyu ki yaha main pe outer function ke andar variable ko use kiye hai inner function main isliye yeh closure fucntion hai
function outer(a, b) {
  console.log(a + b);
  return function inner(a, b) {
    console.log(a + b);
  };
}
let inner = outer(20, 40);
inner(10, 20);
