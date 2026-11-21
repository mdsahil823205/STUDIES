// string (part 2) - jo methods reh gaye the woh yaha hai
// part 1 mein 1 se 13 tak ho chuke hai, yaha 14 se start hota hai

let str = "hello, sahil";
let str2 = "  hello, sahil  ";

// 14. at method in string
console.log("14. at method:", str.at(0))   // index se character deta hai, charAt jaisa hi hai
console.log("at method:", str.at(-1))   // charAt negative index pe kaam nahi karta par at karta hai, -1 matlab last character

// 15. lastIndexOf method in string
console.log("15. lastIndexOf method:", str.lastIndexOf("l"))   // indexOf pehla match deta hai, yeh aakhri match ka index deta hai (output 11)

// 16. startsWith AND endsWith method in string
console.log("16. startsWith method:", str.startsWith("hello"))   // check karta hai string is word se shuru hoti hai ki nahi, hoti hai toh true nahi toh false
console.log("endsWith method:", str.endsWith("sahil"))   // check karta hai string is word pe khatam hoti hai ki nahi, hoti hai toh true nahi toh false
console.log("endsWith method:", str.endsWith("khan"))   // yaha false aayega kyunki string sahil pe khatam hoti hai khan pe nahi

// 17. search method in string
console.log("17. search method:", str.search("sahil"))   // indexOf jaisa hi hai par isme regex bhi laga sakte hai, na mile toh -1 deta hai (output 7)

// 18. match method in string
console.log("18. match method:", str.match(/l/g))   // regex se jitne bhi match hote hai unko array main deta hai, g ka matlab saare match chahiye
console.log("match method:", str.match(/xyz/))   // agar kuch bhi match nahi hua toh null deta hai

// 19. matchAll method in string
for (const m of str.matchAll(/l/g)) {
    console.log("19. matchAll method:", m[0], m.index)   // saare match deta hai unke index ke saath, regex main g lagana zaroori hai nahi toh error aayega
}

// 20. replaceAll method in string
console.log("20. replaceAll method:", str.replaceAll("l", "L"))   // replace sirf pehla word badalta hai, yeh saare matching word ko badal deta hai (output heLLo, sahiL)

// 21. repeat method in string
console.log("21. repeat method:", "ab".repeat(3))   // string ko jitni baar bolo utni baar repeat kar deta hai (output ababab)

// 22. padStart AND padEnd method in string
console.log("22. padStart method:", str.padStart(15, "*"))   // string ki length kam ho toh shuru main character bhar ke length poori kar deta hai (15 - 12 = 3 star lagenge)
console.log("padEnd method:", str.padEnd(15, "-"))   // yeh same kaam end main karta hai
console.log("padStart method:", "5".padStart(2, "0"))   // time ya number ko 05 jaise format karne ke liye kaam aata hai

// 23. trimStart AND trimEnd method in string
console.log("23. trimStart method:", str2.trimStart())   // trim start aur end dono ka space hatata hai, yeh sirf start ka space hatata hai
console.log("trimEnd method:", str2.trimEnd())   // yeh sirf end ka space hatata hai

// 24. codePointAt method in string
console.log("24. codePointAt method:", str.codePointAt(0))   // charCodeAt jaisa hi hai par emoji jaise bade character ko bhi sahi se handle karta hai

// 25. String.fromCharCode method in string
console.log("25. fromCharCode method:", String.fromCharCode(104, 105))   // charCodeAt ka ulta hai, code dete ho toh character laake deta hai (output hi), isko String. se call karte hai

// 26. localeCompare method in string
console.log("26. localeCompare method:", "a".localeCompare("b"))   // do string ko alphabet ke hisab se compare karta hai, pehli chhoti ho toh -1
console.log("localeCompare method:", "b".localeCompare("a"))   // pehli badi ho toh 1
console.log("localeCompare method:", "a".localeCompare("a"))   // dono same ho toh 0

// 27. substr method in string
console.log("27. substr method:", str.substr(7, 5))   // substr(start index, length) yeh purana hai deprecated ho chuka hai, isko use mat karo slice use karo

// 28. toString AND valueOf method in string
console.log("28. toString method:", str.toString())   // string object ko normal string main badalta hai
console.log("valueOf method:", str.valueOf())   // yeh bhi same kaam karta hai, roz ke kaam main kam use hota hai

// 29. normalize method in string
console.log("29. normalize method:", "\u0041\u030A".normalize() === "\u00C5")   // unicode character ko standard form main laata hai, accent wale letter compare karne main kaam aata hai (beginner ke liye optional hai)