// 1️⃣ Create a function that takes a name and a callback.
// greetUser(name, callback) → callback ko call kare aur message print kare:
// "Hello Sahil!" (example)

function greetuser(name, callback) {
  callback(name);
}
greetuser("sahil", function (data) {
  console.log("hello", data);
});

// 2️⃣ Ek function banao jo 2 numbers lega aur unka result callback ko dega.
// calculate(a, b, callback)
// Example callback: result ko print karna.

function calculate(a, b, callback) {
  callback(a, b);
}
calculate(4, 3, function (a, b) {
  let add = a + b;
  let sub = a - b;
  console.log(`add is ${add}, sub is ${sub}`);
});

// 3️⃣ setTimeout ka use karke callback run karna.
// Ek function banao jo 2 seconds ke baad callback ko call kar de.

function delaymessage(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 2000);
}
delaymessage("sahil", function (data) {
  console.log("kiya haal hai", data);
});

// 4️⃣ Ek array lo aur usme har element ko callback ke through print karo.
// Example array: [1, 2, 3, 4]
function passingArray(callback) {
  callback([1, 2, 3, 4, 5, 6]);
}
passingArray(function (elem) {
  console.log(elem);
});

// 5️⃣ Ek function banao jo password check kare.

// Agar password "admin123" hai → success callback
// Nahi toh → failure callback
function chekpassword(password, success, failure) {
  if (password === "admin123") success();
  else failure();
}
chekpassword(
  "admin123",
  function () {
    console.log("sahi hai");
  },
  function () {
    console.log("galat hai");
  }
);

// 6️⃣ Ek function banao jo age verify kare.

// Agar age ≥ 18 → eligibleCallback()
// warna → notEligibleCallback()
function checkAge(age, Eligible, notEligible) {
  if (age >= 18) Eligible(age);
  else notEligible(age);
}
checkAge(
  20,
  function (age) {
    console.log("you are eligible", age);
  },
  function (age) {
    console.log("you are not eligible", age);
  }
);

// 7️⃣ Ek function likho jo ek message ko uppercase kare callback ke through.
// Example: "hello world" → callback → "HELLO WORLD"
function lowertouppercase(message, callback) {
  callback(message.toUpperCase());
}
lowertouppercase("hello world", (response) => console.log(response));

// 8️⃣ Ek function banao jo 3 callback functions ko order mein call kare.
// Example:
// Step 1 → “Cooking started”
// Step 2 → “Cooking halfway”
// Step 3 → “Cooking finished”

function ordercalling(started, halfway, finished) {
  setTimeout(() => {
    started();

    setTimeout(() => {
      halfway();

      setTimeout(() => {
        finished();
      }, 1000);
    }, 1000);
  }, 1000);
}
ordercalling(
  function () {
    console.log("cooking started.........");
  },
  function () {
    console.log("cooking halfway.........");
  },
  function () {
    console.log("cooking finished........");
  }
);
// 9️⃣ Ek function likho jo array ke even numbers ko filter kare callback se.
// Example input: [1,2,3,4,5,6]
// Callback → sirf even numbers print kare.

function arrayfilter(arr, callback) {
  callback(arr.filter((elem) => elem % 2 === 0));
}
arrayfilter([1, 2, 3, 4, 5, 6, 7, 8], function (filterarray) {
  console.log(filterarray);
});

// 🔟 Ek fake API call simulate karo setTimeout + callback se.
// 3 seconds ke baad callback ko {"status": "success", "data": "User loaded"} return karna hai.

function fakeAPI(callback) {
  console.log("data is fetching......");
  setTimeout(function () {
    callback({ status: "success", data: "User loaded" });
  }, 3000);
}

fakeAPI((data) => console.log(data));
