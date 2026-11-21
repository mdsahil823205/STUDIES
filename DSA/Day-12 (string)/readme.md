# JavaScript String Methods (Hinglish Guide)

Yeh repo/file JavaScript ke **string methods** ko simple Hinglish mein samjhata hai. Har method ke saath syntax, example aur output diya hai, taaki koi bhi beginner padh ke samajh jaye ki kaun sa method kya kaam karta hai.

> **Note:** Strings JavaScript mein **immutable** hoti hain. Matlab koi bhi method original string ko change nahi karta, hamesha ek **nayi string/value return** karta hai.

Sab examples mein yeh string use hui hai:

```javascript
let str = "hello, sahil";
```

Index ka hisaab (0 se start hota hai):

| h | e | l | l | o | , | (space) | s | a | h | i | l |
|---|---|---|---|---|---|---------|---|---|---|---|---|
| 0 | 1 | 2 | 3 | 4 | 5 | 6       | 7 | 8 | 9 | 10| 11|

---

## Part 1: Code mein use hue methods

### 1. `length` (property hai, method nahi)
String mein kitne characters hain (space aur comma bhi count hote hain).

```javascript
console.log(str.length); // 12
```

### 2. `slice(start, end)`
String ka ek hissa kaat ke deta hai. `start` include hota hai, `end` **include nahi** hota. **Negative index** bhi chalta hai (peeche se ginti shuru).

```javascript
console.log(str.slice(0, 5));   // "hello"
console.log(str.slice(-8, -1)); // "o, sahi"
```

### 3. `substring(start, end)`
`slice` jaisa hi hai, par 2 fark hain:
- **Negative value** ko `0` maan leta hai.
- Agar `start > end` ho, toh dono ko **swap** kar deta hai.

```javascript
console.log(str.substring(5, 2)); // "llo"  (swap hoke substring(2, 5) ban gaya)
console.log(str.substring(-8));   // "hello, sahil"  (-8 ko 0 maana)
```

### 4. `toUpperCase()` / `toLocaleUpperCase()`
Poori string ko **CAPITAL** letters mein badalta hai. `toLocale...` wala language/region ke rules follow karta hai (Turkish jaisi languages mein fark dikhta hai), normal English mein result same hai.

```javascript
console.log(str.toUpperCase());       // "HELLO, SAHIL"
console.log(str.toLocaleUpperCase()); // "HELLO, SAHIL"
```

### 5. `toLowerCase()` / `toLocaleLowerCase()`
Poori string ko **small** letters mein badalta hai.

```javascript
console.log(str.toLowerCase());       // "hello, sahil"
console.log(str.toLocaleLowerCase()); // "hello, sahil"
```

### 6. `concat(str1, str2, ...)`
2 ya usse zyada strings ko jod deta hai. Beech mein space apne aap nahi lagta.

```javascript
console.log(str.concat("khan"));         // "hello, sahilkhan"
console.log(str.concat("ALI", "khan"));  // "hello, sahilALIkhan"
```

### 7. `trim()`
String ke **start aur end** ke faltu spaces hatata hai. Beech ke spaces nahi hatata.

```javascript
let str2 = "  hello, sahil  ";
console.log(str2.trim()); // "hello, sahil"
```

### 8. `indexOf(char/word)`
Character ya word ka **pehla index** batata hai. Na mile toh `-1` deta hai.

```javascript
console.log(str.indexOf("l")); // 2
console.log(str.indexOf("e")); // 1
console.log(str.indexOf("z")); // -1
```

### 9. `includes(text)`
Check karta hai ki text string ke andar hai ya nahi. Hai toh `true`, nahi toh `false`. (Case-sensitive hai.)

```javascript
console.log(str.includes("hello"));  // true
console.log(str.includes("haider")); // false
```

### 10. `split(separator)`
String ko separator ke hisaab se todta hai aur **array** return karta hai.

```javascript
console.log(str.split(" ")); // ["hello,", "sahil"]
console.log(str.split(""));  // ["h","e","l","l","o",",", " ","s","a","h","i","l"]
```

### 11. `charAt(index)`
Diye hue index par jo character hai woh deta hai.

```javascript
console.log(str.charAt(2)); // "l"
```

### 12. `replace(old, new)`
Pehla match mila hua word dusre word se badal deta hai (sirf **pehla** match).

```javascript
console.log(str.replace("hello", "how are you ")); // "how are you , sahil"
```

### 13. `charCodeAt(index)`
Character ka **UTF-16 code** deta hai (English letters ke liye ASCII jaisa hi). Index na do toh default `0` maanta hai.

```javascript
console.log(str.charCodeAt());  // 104  ("h" ka code)
console.log(str.charCodeAt(1)); // 101  ("e" ka code)
```

---

## Part 2: Baaki important string methods (jo code mein nahi the)

### 14. `at(index)`
`charAt` jaisa, par **negative index** support karta hai. Last character nikalne ke liye best hai.

```javascript
console.log(str.at(0));  // "h"
console.log(str.at(-1)); // "l"
```

### 15. `lastIndexOf(text)`
`indexOf` ka ulta: **aakhri match** ka index deta hai.

```javascript
console.log(str.lastIndexOf("l")); // 11
```

### 16. `startsWith(text)` / `endsWith(text)`
Check karta hai string us text se **shuru** ya **khatam** hoti hai ya nahi.

```javascript
console.log(str.startsWith("hello")); // true
console.log(str.endsWith("sahil"));   // true
console.log(str.endsWith("khan"));    // false
```

### 17. `search(regex/text)`
Pehle match ka index deta hai (`indexOf` jaisa), par **regex** bhi chalta hai. Na mile toh `-1`.

```javascript
console.log(str.search("sahil")); // 7
console.log(str.search(/[0-9]/)); // -1  (koi number nahi hai)
```

### 18. `match(regex)`
Regex se match hui values ko **array** mein deta hai. `g` flag lagao toh saare matches milte hain.

```javascript
console.log(str.match(/l/g)); // ["l", "l", "l"]
console.log(str.match(/xyz/)); // null
```

### 19. `matchAll(regex)`
Saare matches ka **iterator** deta hai, har match ke index ke saath. Regex mein `g` flag zaroori hai.

```javascript
for (const m of str.matchAll(/l/g)) {
  console.log(m[0], m.index); // "l" 2, "l" 3, "l" 11
}
```

### 20. `replaceAll(old, new)`
`replace` sirf pehla badalta hai, yeh **saare matches** badalta hai.

```javascript
console.log(str.replaceAll("l", "L")); // "heLLo, sahiL"
```

### 21. `repeat(count)`
String ko diye hue count tak repeat karta hai.

```javascript
console.log("ab".repeat(3)); // "ababab"
```

### 22. `padStart(length, char)` / `padEnd(length, char)`
String ki length kam ho toh shuru (`padStart`) ya end (`padEnd`) mein character bhar ke poori length bana deta hai. Time, ID, number format karne mein kaam aata hai.

```javascript
console.log(str.padStart(15, "*")); // "***hello, sahil"
console.log(str.padEnd(15, "-"));   // "hello, sahil---"
console.log("5".padStart(2, "0"));  // "05"
```

### 23. `trimStart()` / `trimEnd()`
`trim()` ka half version: sirf **shuru** ya sirf **end** ke spaces hatata hai.

```javascript
console.log(str2.trimStart()); // "hello, sahil  "
console.log(str2.trimEnd());   // "  hello, sahil"
```

### 24. `codePointAt(index)`
`charCodeAt` jaisa, par emoji jaise bade characters ko bhi sahi handle karta hai.

```javascript
console.log(str.codePointAt(0)); // 104
```

### 25. `String.fromCharCode(code, ...)`
`charCodeAt` ka ulta: code se character banata hai. Yeh **static method** hai, isliye `String.` se call hota hai.

```javascript
console.log(String.fromCharCode(104, 105)); // "hi"
```

### 26. `localeCompare(otherStr)`
Do strings ko alphabetically compare karta hai. Result: `-1` (pehli chhoti), `0` (barabar), `1` (pehli badi). Sorting mein kaam aata hai.

```javascript
console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); // 1
console.log("a".localeCompare("a")); // 0
```

### 27. `substr(start, length)` (deprecated)
Start index se diye hue length tak characters deta hai. **Purana hai, naye code mein use mat karo**, `slice` use karo.

```javascript
console.log(str.substr(7, 5)); // "sahil"
```

### 28. `toString()` / `valueOf()`
String object ko primitive string mein badalte hain. Roz ke kaam mein kam use hote hain.

```javascript
console.log(str.toString()); // "hello, sahil"
console.log(str.valueOf());  // "hello, sahil"
```

### 29. `normalize()`
Unicode characters ko standard form mein laata hai (accented letters compare karte waqt kaam aata hai). Beginners ke liye optional.

```javascript
console.log("\u0041\u030A".normalize() === "\u00C5"); // true
```

---

## Quick Cheat Sheet

| Kaam | Method |
|------|--------|
| Length nikalna | `length` |
| Hissa kaatna | `slice`, `substring`, `substr` |
| Capital / small | `toUpperCase`, `toLowerCase` |
| Jodna | `concat`, `+`, template literals |
| Space hatana | `trim`, `trimStart`, `trimEnd` |
| Dhundhna (index) | `indexOf`, `lastIndexOf`, `search` |
| Check karna (true/false) | `includes`, `startsWith`, `endsWith` |
| Todna (array) | `split` |
| Character nikalna | `charAt`, `at` |
| Badalna | `replace`, `replaceAll` |
| Character code | `charCodeAt`, `codePointAt`, `String.fromCharCode` |
| Regex matching | `match`, `matchAll`, `search` |
| Repeat / padding | `repeat`, `padStart`, `padEnd` |
| Compare | `localeCompare` |

---

## Common galtiyan (dhyan rakho)

1. `str.trim()` tab hi kaam dikhayega jab string ke start/end mein space ho. Isiliye example mein `str2` use hua hai.
2. `concat("khan")` beech mein space nahi daalta. Space chahiye toh `concat(" khan")` likho.
3. `substring(5, 2)` error nahi deta, chup-chaap swap kar deta hai. Yeh confusing ho sakta hai.
4. `replace("l", "L")` sirf pehla `l` badlega. Saare badalne hain toh `replaceAll`.
5. `includes` aur `indexOf` **case-sensitive** hain: `"Hello"` aur `"hello"` alag maane jaate hain.
6. Koi bhi method original string ko change nahi karta. Result ko variable mein save karna padta hai.

---

## Code kaise run karein

```bash
node index.js
```

Ya browser console mein paste karke chala sakte ho.

---

**Author:** Sahil