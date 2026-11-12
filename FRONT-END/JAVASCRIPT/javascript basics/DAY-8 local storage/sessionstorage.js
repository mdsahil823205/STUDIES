// 2. sessionStorage---> yeh sessionStoage data ko store karta hai browser main par yeh data permanent nahi hota hai jaise sirf or sirf temporary data ko rakhta hai jaise ki browser tab ko hataiyenge toh data hatt jaaayega automatically ya phir isme hum 5mb ka store store kar skte hai 
// isme hum 4 task perform karte hai 1.add data , 2. read/nikalna(fetch) data , 3. delete data 4.update data
// jaise hum local storage main data 4 task perform karte hai waise sessionstorage main karte hai
//1. add data to sessionStorage with setItem()
sessionStorage.setItem("city", "kolkata");
sessionStorage.setItem("state", "west-bengal");

//2.read data to sessionStorage with getItem()
let val = sessionStorage.getItem("city");
console.log(val); //kolkata

//3. remove data to sessionStorage with removeItem()
sessionStorage.removeItem("state");
console.log(sessionStorage); // state key delete ho gaya

//4 update with to sessionStorage setItem()
sessionStorage.setItem("city", "pune");
console.log(sessionStorage)
sessionStorage.setItem("state", "maharashtra");
