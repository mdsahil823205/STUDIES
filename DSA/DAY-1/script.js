// swap the number a ka value b main aur b ka value a
let a = 5;
let b = 10;
console.log(`a=${a},b=${b}`);
let temp = a; // yaha pe temp ka value ab 5 hai
a = b; // yaha pe ab a ka value 10 hai jo ke pehle b ka vaulue tha ab a main aa gaya
b = temp; // yaha pe jo hum temp main a ka value diye the woh ab b main de diye ab b ka value 5 ho gaya jo pehle a ka value tha
console.log(a, b, temp);
