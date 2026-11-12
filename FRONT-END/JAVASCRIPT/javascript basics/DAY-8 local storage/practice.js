// humein yaha localstorage main array value dhaalna hai par localstorage main hum sirf string hi dhaal skte hai uske ilawa kuch bhi nhi par ek tricek hai jisse hum dhaal skte hai
localStorage.setItem(
  "name",
  JSON.stringify(["sahil", "haider", "mohammed", "ali"])
); // yaha pe hum JSON.stringyfy se jo bhi data dhaale hai woh automatically string main ban gaya hai
console.log(localStorage);
let data = localStorage.getItem("name"); // jab hum getitem karenge toh humein string main milega value main
console.log(data); //'["sahil","haider","mohammed","ali"]' bilkul mera data aise milega par yeh string hai

let arr = JSON.parse(data); // aur jaise hi data ko JSON.parse karenge JSON.parse kiya karta hai string ko hata deta hai ab jaise hi string hatega toh array milega
console.log(arr); //  ['sahil', 'haider', 'mohammed', 'ali'] bilkul aise yeh ek array hai

// hum log tab karte hai jab data ko nikalna ho as an array
localStorage.clear();
