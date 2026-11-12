//1.localstorage--> yeh localstorge data ko store karta hai par isme yeh khasiyat hai ki agar hum kuch bhi karle data nhi hategaga chahe browser ko band karde ya hata de yah system shutdown karde waise as it is rahega yeh khasiyat hai localstorage ka isme hum 5mb ka data store kar skte hai 
// isme hum 5 task perform karte hai 1.add data , 2. read data , 3. delete data 4.update data , 5.clear
//1. add data to localstorage with .setItem method  par yeh yaad rakhna jitna bhi data add hora hai sab string ke form main hora hai aur localStorage set karte waqt usko kisi variable main store nahi kar skte hai
localStorage.setItem("name", "sahil"); // no variable use aur haa sirf 2 hi value use ho skta hai pehle wala key ban jaaiyega(name) aur dusra wala value banjaiyega(sahil)
console.log(localStorage); //Storage {name: 'sahil',length: 1}
localStorage.setItem("age", 20); //pehle wala key ban jaaiyega(age) aur dusra wala value banjaiyega(20) aur yeh return object ke form main karta hai --> Storage {name: 'sahil', age: '20', length: 2}
console.log(localStorage); // Storage {name: 'sahil', age: '20', length: 2}

//2. read/nikalna data from localstorage with .getItem method agar humein localstorage ka koi bhi key ka value chahiye toh pehle dekhenge kon konsa key main konsa value hai localStorage console main direct likhenge toh show ho jaaiyega uske baad ek variable main storge kar skte hai key ka value ko
let val = localStorage.getItem("name"); // jaise ki yaha pe maine ek val naam ka variable main localstorage ka data ko nikal ke varible main dhaal diye aur name naam ka key hai uske value aa jaaiyega val naam ke ander main
console.log(val); //sahil
let age = localStorage.getItem("age");
console.log(typeof age); // 20 as a string

//3. delete/remove data with .removeItem methods isse hum local storge main jo data hai usko hata skte hai kyu ki localstorage ka data kabhi bhi khud se nahi hatt tha hai uske manualy hatana parta hai isliye hum log use karte hai localStorage.removeItem() isme key ka name dhaalenge aur key ke saath saath value bhi remove ho jaiyega permenately
localStorage.removeItem("name"); // name naam ka key remove ho gaya hai ab sirf bacha hai toh age naam ka key value
console.log(localStorage); // Storage {age: '20', length: 1}

//4. update data with .setItem method update  karne ke liye koi alag se method nahi hota hai setItem se ho update hota hai agar koi key data exist karta hai toh usme upadte hota hai agar exist nahi karya hai toh naya let data bana dena hai loacalStorage.setItem() se
localStorage.setItem("age", 25); // yaha pe age update ho gaya jo ke pehle 20 tha ab 25 ho gaya hai
console.log(localStorage);
localStorage.setItem("name", "mohammed"); // yaha pe ek naya key data ban gaya hai name key
console.log(localStorage); //Storage {name: 'mohammed', age: '25', length: 2}

//.5 clear data with .clear() method agar humko pura local storage ek saath hatana ho toh hum localStorage.clear se sab hata sakte hai ek hi baar main
localStorage.clear();
console.log(localStorage); // Storage {length: 0} sab delete ho gaya kuch bhi nhi bacha 
