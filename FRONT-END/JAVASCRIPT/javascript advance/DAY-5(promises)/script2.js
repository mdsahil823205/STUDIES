// promises chaining
//1.restaurant pe jaao
//2.jaake gate kholo
//3.phir khaana order karo
//4. khana khaao accha se
//5. khaake haath dholo
//6. bill payment karo
// 7. ab ghar wapis aajao

// yaha pe yeh hum promises chaining banaiyenge jisme new promise main resolve aur reject karenge aur response aur reject dekhne ke liye hum .then aur .catch ka use karenge jo case resolve hoga woh .then main lenge aur jo reject hoga usko hum .catch main lenge

let case1 = new Promise((resolve, reject) => {
  return resolve("restauarant pe jaao ");
});
let case2 = case1.then((data1) => {
  console.log(data1);
  return new Promise((resolve, reject) => {
    return resolve("jaake gate kholo");
  });
});
let case3 = case2.then((data2) => {
  console.log(data2);
  return new Promise((resolve, reject) => {
    return resolve("phir khaana order karo");
  });
});
let case4 = case3.then((data3) => {
  console.log(data3);
  return new Promise((resolve, reject) => {
    return resolve("khana khaao accha se");
  });
});
let case5 = case4.then((data4) => {
  console.log(data4);
  return new Promise((resolve, reject) => {
    return resolve("khaake haath dholo");
  });
});
let case6 = case5.then((data5) => {
  console.log(data5);
  return new Promise((resolve, reject) => {
    return resolve("bill payment karo");
  });
});
let case7 = case6.then((data6) => {
  console.log(data6);
  return new Promise((resolve, reject) => {
    return resolve("ab ghar wapis aajao");
  });
});
case7
  .then((data7) => {
    console.log(data7);
  })
  .catch((error7) => {
    console.error("galti ho gaya bhaiya main rasta bhul gaya");
  });
