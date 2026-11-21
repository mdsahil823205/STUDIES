// 1. maths.abs()
// math.absoulte kehte hai ise aur iska kaam hai koi bhi agar negatiive value hai toh usko positive main comnvert karta hai
console.log("Math.abs=", Math.abs(-39393)); // 39393 kyu ki isme negative value tha usko positive kiya

//2.Math.ceil()
// Math.ceiling kehte hai isse iska kaam hai ki agar kisi value ke aage decimal lag jaata hai usi ko use barha deta hai jaise ki agar 10.4 hai toh usko 11 kar dega decimal main nahi rakhega usko barha deta isliye ceiling kehte hai kyu ki value ko upar leh jaata hai
console.log("Math.ceil=", Math.ceil(14.3332)); // 15 pehle wala 14.3 upar leh gaya
console.log("Math.ceil=", Math.ceil(99.72424242)); //100

//3. Math.floor()
// ise Math.floor hi kehte hai aur iska kaam hota hai kisi bhi value ke aage decimal hai usi ko ghata deta hai agar value 22.6 toh usko 22 kar dega decimal main nahi rakhega usko gira deta hai isliye toh isko floor kete hai kyu ki value ko niche leh jaata hai
console.log("Math.floor=", Math.floor(84.9424242)); // 84
console.log("Math.floor=", Math.floor(4.343434)); // 4

// 4. math.round()
// ise math.round kehte hai iska kaam hota hai agar .5 ya .5 se upar agar kisi value ka decimal toh usko uthaa dega agar .5 se niche agar kisi value ka decimal hai toh use gira dega
console.log("Math.round=", Math.round(5.5)); // 6
console.log("Math.round=", Math.round(7.6)); // 8
console.log("Math.round=", Math.round(5.4)); // 5

// 5. Math.trunc()
// ise Math.trunc hi kehet hai yeh sirf decimal ko hatata hai nahi ke upar niche karta hai samjho loh math.floor ke simiar hai agar kisi bhi value main decimal hai toh usko hata dega
console.log("Math.trunc=", Math.trunc(84.2727)); // 84
console.log("Math.trunc=", Math.trunc(4.2727)); // 4

// 5. math.pow()
// math.power kehte hai isme hum 2 value pass karte hai pehle main kisme power charan hai aur dusra main kitne power charana hai (10,3)->10*10*10=1000 (20,5)->20*20*20*20*20=3200000 ise exponontial bhi keh skte hai
console.log("Math.pow=", Math.pow(10, 3)); // 1000
console.log("Math.pow=", Math.pow(20, 5)); // 3200000

// 6. math.max()
// isme math.maximum bhi kehte hai kyu ki isme multiple value ka jo bhi sabse bara number hoga usko dega jaise ki mere pass 2,32,43,54,43 ab isme se hummko maiximum toh hum nikal skte hai jaise ki isme maximum 54 hai
console.log("Math.max=", Math.max(2, 32, 43, 54, 43)); // 54 is maximum
console.log("Math.max=", Math.max(1, 2, 3, 4, 5, 6, 6, 7, 8)); // 8 is maximum

// 7. math.min()
//  isme math.minimum bhi kehte hai kyu ki isme multiple value ka jo bhi sabse chota number hoga usko dega jaise ki mere pass 2,32,43,54,43 ab isme se hummko minimum toh hum nikal skte hai jaise ki isme maximum 2 hai
console.log("Math.min=", Math.min(2, 32, 43, 54, 43)); // 2 is minimum
console.log("Math.min=", Math.min(1, 2, 3, 4, 5, 6, 6, 7, 8)); // 1 is minimum

// 9. math.random()
// ise math.random hi kehte hai iska kaam hota hai ki 0 se 1 ke bich main koi bhi number de skta hai jo iska mann kare yeh computer decice karta hai
console.log("Math.random=", Math.random()); // 0 se 1 ka bich ka number dega
console.log("Math.random=", Math.random() * 10); // 0 se 1 ka bich ka number dega par usme hum 10 multiply kar denge agar ab humko 1 se 10 ke bich ka number milega

// .tofixed
// tofixed kehte hai iska kaam hota hai agar humein decimal chahiye kisi bhi value ka toh isko lagake leh skte hai par yeh option deta hai kitna decimal lene ka jaise ki humko number ka baad ka 2 decimal chahiye 12.32 toh leh skte hai
let number = 123.23232323232;
console.log("toFixed=", number.toFixed()); //123
console.log("toFixed=", number.toFixed(2)); //123.23
console.log("toFixed=", number.toFixed(3)); //123.232

// console.log(Math.trunc(112121 % 100));
