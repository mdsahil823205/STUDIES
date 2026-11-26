# 🔘 Handle Radio Buttons in React — Complete Guide

Radio buttons tab use hote hain jab user ko **options mein se sirf ek** chunna ho (gender, payment method, language, delivery type). Is README mein radio button kya hai, basic controlled radio, `.map()` se dynamic group, concept table, slide ke **payment options wale practice question ka solution**, aur common mistakes aur interview questions Hinglish mein hain.

---

## 📚 Table of Contents

1. [What is a Radio Button?](#1--what-is-a-radio-button)
2. [Basic Radio Button](#2--basic-radio-button)
3. [Grouping Radio Buttons (Dynamic)](#3--grouping-radio-buttons-dynamic-with-map)
4. [Concepts Table](#4--concepts-table)
5. [Practice Question: Payment Options](#5--practice-question-payment-options)
6. [Radio Buttons Inside a Form](#6--radio-buttons-inside-a-form)
7. [Uncontrolled Radio Buttons](#7--uncontrolled-radio-buttons)
8. [Radio vs Checkbox vs Select](#8--radio-vs-checkbox-vs-select)
9. [Common Mistakes](#-common-mistakes)
10. [Interview Questions](#-interview-questions)
11. [Revision Checklist](#-revision-checklist)

---

## ⚡ Quick Summary

| Concept | Ek line mein |
|---------|--------------|
| **Radio button** | Group mein se **sirf ek** option select karne dena |
| **`type="radio"`** | Input ka type |
| **`name`** | Ek group ke **saare radios ka same `name`** |
| **`value`** | Har option ki **apni alag value** |
| **`checked`** | `checked={state === value}`, kaun selected hai |
| **`onChange`** | State update (`e.target.value`) |
| **State** | Selected option ki **ek value** (string) |

---

## 1. 🤔 What is a Radio Button?

- Radio buttons user ko **group mein se sirf ek option** select karne dete hain.
- Ek hi group ke **saare radio buttons ka `name` attribute same** hota hai.
- React mein **kaun sa select hai, ye state se manage** karte hain.

```
Gender:   ( ) Male    (•) Female    ( ) Other
                         ▲
              sirf ek select ho sakta hai
```

> 💡 **Simple samjho:** Purane radio ke station-selector ki tarah: ek station dabate ho toh pehla wala apne aap chhoot jaata hai. Isi se naam "radio button" pada.

---

## 2. 🎯 Basic Radio Button

```jsx
import { useState } from "react";

function GenderPicker() {
  const [gender, setGender] = useState("");

  return (
    <label>
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      />
      Male
    </label>
  );
}
```

### 📝 Slide ke code mein ek galti

Slide mein handler is tarah likha hai:

```jsx
onChange={() => setGender(e.target.value)}    // ❌ `e` parameter nahi liya
```

Yahan `e` kahin define hi nahi hua, toh click par **`ReferenceError: e is not defined`** aayega. Sahi tarika:

```jsx
onChange={(e) => setGender(e.target.value)}   // ✅ e parameter lo
```

### Har part ka matlab

| Part | Kaam |
|------|------|
| **`type="radio"`** | Ye radio button hai |
| **`name="gender"`** | Is group ka naam (group ke saare radios mein same) |
| **`value="Male"`** | Is option ki value |
| **`checked={gender === "Male"}`** | Agar state `"Male"` hai toh **ye radio selected** dikhega |
| **`onChange`** | Click par state ko is option ki value de do |
| **`useState("")`** | Shuru mein **koi option selected nahi** |

### Flow

```
User "Male" radio par click karta hai
      │
      ▼
onChange chalta hai  →  e.target.value = "Male"
      │
      ▼
setGender("Male")  →  state update  →  re-render
      │
      ▼
checked={gender === "Male"} = true   →  ✅ "Male" select dikhta hai
```

> 💡 **Yaad rakho:** Checkbox mein **boolean** state hoti hai (`checked`), radio mein **string/value** state hoti hai, aur `checked` ek **comparison** (`state === value`) se nikalta hai.

### Poora group (Male / Female / Other)

```jsx
function GenderPicker() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <label>
        <input type="radio" name="gender" value="Male"
               checked={gender === "Male"}
               onChange={(e) => setGender(e.target.value)} />
        Male
      </label>

      <label>
        <input type="radio" name="gender" value="Female"
               checked={gender === "Female"}
               onChange={(e) => setGender(e.target.value)} />
        Female
      </label>

      <label>
        <input type="radio" name="gender" value="Other"
               checked={gender === "Other"}
               onChange={(e) => setGender(e.target.value)} />
        Other
      </label>

      <p>Selected: {gender || "None"}</p>
    </div>
  );
}
```

> ⚠️ Ye **repetitive** hai (har option ke liye same code). Isi ka solution agla section hai.

---

## 3. 🔁 Grouping Radio Buttons (Dynamic with `.map()`)

> Agar options zyada hain, toh code repeat karne ki jagah unhe **dynamically map** karo.

```jsx
function LanguagePicker() {
  const [selectedLang, setSelectedLang] = useState("");
  const languages = ["JavaScript", "Python", "C++", "Java"];

  return (
    <div>
      {languages.map(lang => (
        <label key={lang} style={{ display: "block" }}>
          <input
            type="radio"
            name="language"
            value={lang}
            checked={selectedLang === lang}
            onChange={e => setSelectedLang(e.target.value)}
          />
          {lang}
        </label>
      ))}

      <p>You selected: {selectedLang || "nothing yet"}</p>
    </div>
  );
}
```

### Kaise kaam karta hai?

| Part | Kaam |
|------|------|
| **`languages` array** | Saare options ek jagah |
| **`.map(lang => ...)`** | Har option ke liye ek radio + label |
| **`key={lang}`** | List rendering ke liye unique key |
| **`name="language"`** | Saare radios ka **same name** (ek group) |
| **`value={lang}`** | Har radio ki apni value |
| **`checked={selectedLang === lang}`** | Jo state ke barabar ho wahi selected |
| **`style={{ display: "block" }}`** | Har option alag line mein |

### ✅ Fayde

| Fayda | Matlab |
|-------|--------|
| **Naya option add karna aasaan** | Bas array mein ek item daalo |
| **Code repeat nahi hota** | Ek template, sab ke liye |
| **API se options aa sakte hain** | Data dynamic ho toh bhi chalega |

### Options objects ki array ho toh

```jsx
const options = [
  { id: 1, label: "Standard Delivery", value: "standard" },
  { id: 2, label: "Express Delivery", value: "express" },
];

{options.map(opt => (
  <label key={opt.id}>
    <input
      type="radio"
      name="delivery"
      value={opt.value}
      checked={selected === opt.value}
      onChange={e => setSelected(e.target.value)}
    />
    {opt.label}
  </label>
))}
```

> 💡 **Label vs value alag rakho:** User ko `label` dikhta hai ("Express Delivery"), aur state/API mein `value` ("express") jaati hai.

---

## 4. 📊 Concepts Table

| Concept | Description | Example |
|---------|-------------|---------|
| **`name`** | Radios ko **group** karta hai | Saare radios ka same `name` |
| **`value`** | **Option ko define** karta hai | `value="Male"` |
| **`checked`** | **Selected** kaun hai ye tay karta hai | `checked={gender === "Male"}` |
| **`onChange`** | **State update** karta hai | `setGender(e.target.value)` |
| **`useState`** | Selection ko **control** karta hai | `const [gender, setGender] = useState("")` |

> 💡 **Ek line mein poora flow:** `useState` mein selection rakho → har radio mein `value` do → `checked` mein state se compare karo → `onChange` mein state update karo → `name` same rakho.

---

## 5. 🧠 Practice Question: Payment Options

> **Q. Imagine you have a list of payment options and want to display details for the selected one.**

Slide mein ye sirf question tha. Neeche iska poora solution hai.

### Kya karna hai?

1. Payment options ki **list** banao (UPI, Card, Net Banking, COD).
2. Unhe **radio buttons** ki tarah dikhao (`.map()` se).
3. Jo option select ho, uski **details neeche dikhao**.

### ✅ Solution

```jsx
import { useState } from "react";

const paymentOptions = [
  {
    id: "upi",
    label: "UPI",
    details: "Apna UPI ID daalo aur app mein payment approve karo. Instant confirmation milta hai.",
  },
  {
    id: "card",
    label: "Credit / Debit Card",
    details: "Card number, expiry aur CVV daalo. Saare major cards accepted hain.",
  },
  {
    id: "netbanking",
    label: "Net Banking",
    details: "Apne bank ko chuno aur bank ki secure site par payment complete karo.",
  },
  {
    id: "cod",
    label: "Cash on Delivery",
    details: "Delivery ke waqt cash ya UPI se payment karo. ₹40 extra COD charge lag sakta hai.",
  },
];

function PaymentSelector() {
  const [selectedId, setSelectedId] = useState("upi");     // default: UPI

  const selectedOption = paymentOptions.find(opt => opt.id === selectedId);

  return (
    <div>
      <h3>Choose Payment Method</h3>

      {paymentOptions.map(opt => (
        <label key={opt.id} style={{ display: "block" }}>
          <input
            type="radio"
            name="payment"
            value={opt.id}
            checked={selectedId === opt.id}
            onChange={e => setSelectedId(e.target.value)}
          />
          {opt.label}
        </label>
      ))}

      {selectedOption && (
        <div style={{ marginTop: "12px", padding: "10px", border: "1px solid #ccc" }}>
          <h4>{selectedOption.label} Details</h4>
          <p>{selectedOption.details}</p>
        </div>
      )}
    </div>
  );
}

export default PaymentSelector;
```

### Is solution mein kya-kya use hua?

| Concept | Kahan |
|---------|-------|
| **Array of objects** | `paymentOptions` (data ek jagah) |
| **`.map()` + `key`** | Radios dynamically render |
| **Controlled radio** | `checked={selectedId === opt.id}` + `onChange` |
| **`name="payment"`** | Saare radios ek group mein |
| **`.find()`** | Selected option ka poora object nikala |
| **Conditional rendering (`&&`)** | Details tabhi dikhao jab option mile |
| **Default selection** | `useState("upi")` |

### Kaise kaam karta hai?

```
selectedId = "upi"
      │
      ├── radios render: UPI ✅ selected, baaki ❌
      │
      └── selectedOption = paymentOptions.find(opt => opt.id === "upi")
                │
                ▼
          Neeche "UPI Details" box dikhta hai

User "Card" par click karta hai
      │
      ▼
setSelectedId("card") → re-render → Card selected, "Card Details" box dikhta hai
```

### 🎁 Variation: Alag-alag UI har option ke liye (Component mapping)

Jab har option ki **details ek alag component/form** ho (UPI ke liye input, Card ke liye 3 inputs):

```jsx
function UpiDetails()  { return <input placeholder="Enter UPI ID" />; }
function CardDetails() { return (<><input placeholder="Card number" /><input placeholder="CVV" /></>); }
function CodDetails()  { return <p>Pay on delivery</p>; }

const detailsMap = {
  upi: <UpiDetails />,
  card: <CardDetails />,
  cod: <CodDetails />,
};

// Neeche dikhane ke liye:
{detailsMap[selectedId]}
```

> 📌 Ye "object mapping" wala pattern Conditional Rendering README ke Section 11 se aaya hai.

---

## 6. 📝 Radio Buttons Inside a Form

Jab form mein text inputs aur radio dono ho, toh **ek hi state object** use karo.

```jsx
function RegisterForm() {
  const initialState = { name: "", gender: "", plan: "free" };
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", formData);
    setFormData(initialState);                // reset
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />

      <label>
        <input type="radio" name="gender" value="Male"
               checked={formData.gender === "Male"} onChange={handleChange} />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="Female"
               checked={formData.gender === "Female"} onChange={handleChange} />
        Female
      </label>

      <label>
        <input type="radio" name="plan" value="free"
               checked={formData.plan === "free"} onChange={handleChange} />
        Free
      </label>
      <label>
        <input type="radio" name="plan" value="pro"
               checked={formData.plan === "pro"} onChange={handleChange} />
        Pro
      </label>

      <button type="submit">Register</button>
    </form>
  );
}
```

### 🔑 Dhyan do

| Baat | Matlab |
|------|--------|
| **Ek `handleChange`** | Text inputs aur radios, dono ke liye same |
| **`name` = state key** | `name="gender"` → `formData.gender` |
| **Alag group = alag `name`** | `gender` aur `plan` do alag groups |
| **Checkbox se fark** | Yahan `type === "checkbox"` check nahi chahiye, radio bhi `e.target.value` se kaam karta hai |

---

## 7. 🎯 Uncontrolled Radio Buttons

State ke bina, `defaultChecked` aur form data se:

```jsx
function UncontrolledRadio() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    alert("Selected: " + data.get("size"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label><input type="radio" name="size" value="S" /> S</label>
      <label><input type="radio" name="size" value="M" defaultChecked /> M</label>
      <label><input type="radio" name="size" value="L" /> L</label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

| | Controlled | Uncontrolled |
|---|------------|---------------|
| Selection kaun rakhta hai | **React state** | **DOM** |
| Initial selection | `useState("M")` | `defaultChecked` |
| Value padhna | State variable | `FormData` / `ref` |
| Live UI update (details dikhana) | ✅ Aasan | ❌ Mushkil |
| `name` | Zaroori (grouping ke liye) | **Zaroori** (browser isse hi single-select karta hai) |

> 💡 Controlled radio zyadatar cases mein better hai, jaise payment example mein live details dikhane ke liye.

---

## 8. ⚖️ Radio vs Checkbox vs Select

| | **Radio** | **Checkbox** | **Select (dropdown)** |
|---|-----------|--------------|------------------------|
| Kitne select | **Sirf ek** | **Ek ya zyada** | Ek (ya `multiple`) |
| State type | **String** (selected value) | **Boolean / array** | **String** |
| Checked prop | `checked={state === value}` | `checked={state}` | `value={state}` (select par) |
| Event se value | `e.target.value` | `e.target.checked` | `e.target.value` |
| Sab options dikhte hain? | ✅ Haan | ✅ Haan | ❌ Click karne par |
| Kab use karein | **2 se 5 options**, sab dikhane ho | Multiple choices | Bahut saare options |

> 💡 **Rule of thumb:** Options kam hain aur user ko **sab ek saath dikhne chahiye** → radio. Bahut zyada options (jaise 30 cities) → select.

---

## ⚠️ Common Mistakes

| ❌ Galat | ✅ Sahi | Kyun? |
|---------|--------|-------|
| `onChange={() => setGender(e.target.value)}` | `onChange={(e) => setGender(e.target.value)}` | `e` parameter lena zaroori, warna `ReferenceError` |
| Radios ka `name` alag-alag | Group ke saare radios ka **same `name`** | Same `name` se ek group banta hai |
| `value` na dena | Har radio ko `value` do | Warna `e.target.value` `"on"` aayega |
| `checked={gender}` (boolean samajhna) | `checked={gender === "Male"}` | Radio mein state value hoti hai, boolean nahi |
| `checked` bina `onChange` | `onChange` bhi do | Warna radio **read-only** (click par kuch nahi) |
| `useState()` bina initial value | `useState("")` ya default option | `undefined` se warning aati hai |
| Number value compare karna (`value={1}`) | State aur value dono string ya `Number(e.target.value)` | `e.target.value` hamesha **string** hoti hai |
| Do alag groups ka same `name` | Har group ka alag `name` | Warna dono groups mil jaayenge |
| `key` na dena (map mein) | `key={opt.id}` | List rendering ka rule |
| Radio ko click karke unselect karna chahna | Alag "Clear" button do (`setValue("")`) | Radio ek baar select hone par dobara click se unselect nahi hota |
| `checked` aur `defaultChecked` dono dena | Ek hi use karo | Controlled ya uncontrolled, dono nahi |

### ⚠️ Number value ka gotcha

```jsx
const [rating, setRating] = useState(3);

<input type="radio" value={5} checked={rating === 5}
       onChange={e => setRating(e.target.value)} />
// Click ke baad rating = "5" (string), aur rating === 5 false ho jaata hai ❌

// ✅ Fix 1: number mein convert karo
onChange={e => setRating(Number(e.target.value))}

// ✅ Fix 2: compare karte waqt string banao
checked={String(rating) === "5"}
```

### Radio ko deselect karna (agar zaroori ho)

```jsx
<button type="button" onClick={() => setGender("")}>Clear</button>
```

---

## 🎯 Interview Questions

### Q1. How do you handle radio buttons in React?

**✅ Answer**
- Store the **selected value in state** (usually a string).
- Give all radios in a group the **same `name`** and each a unique **`value`**.
- Set **`checked={state === value}`** and update the state in **`onChange`** with **`e.target.value`**.

**🗣️ Hinglish Explanation**
Selected option ki value ko state mein rakhte hain. Group ke saare radios ka `name` same hota hai aur har ek ki apni `value`. `checked` mein state ko us radio ki value se compare karte hain, aur `onChange` mein `setState(e.target.value)` likhte hain. Isse sirf ek option selected rehta hai.

---

### Q2. Why do all radio buttons in a group share the same `name`?

**✅ Answer**
- The shared `name` **groups** the radios so that **only one** can be selected at a time.
- It also helps with **keyboard navigation** (arrow keys), **accessibility** and **form submission** (one name → one value).

**🗣️ Hinglish Explanation**
Same `name` se browser samajhta hai ki ye radios ek group hain, toh ek select karne par baaki apne aap unselect ho jaate hain. Keyboard se arrow keys se options badalna aur form submit par ek value jaana bhi isi `name` ki wajah se hota hai.

---

### Q3. What is the difference between handling a radio button and a checkbox?

**✅ Answer**
- **Radio:** only **one** option from a group; state is a **single value** (string); `checked={state === value}`; read with `e.target.value`.
- **Checkbox:** **multiple** selections allowed; state is a **boolean** (or an array); `checked={state}`; read with `e.target.checked`.

**🗣️ Hinglish Explanation**
Radio mein group mein se sirf ek select hota hai, aur state mein selected value (string) rakhte hain. Checkbox mein ek ya zyada select ho sakte hain, state boolean ya array hoti hai, aur `e.target.checked` se status padhte hain.

---

### Q4. How do you render a large number of radio options dynamically?

**✅ Answer**
- Keep options in an **array** (strings or objects).
- Use **`.map()`** to render each radio with a **`key`**, the same `name`, `value={option}` and `checked={selected === option}`.

**🗣️ Hinglish Explanation**
Options ko ek array mein rakho aur `.map()` se har ek ke liye radio + label banao. Har item par `key`, same `name`, `value` aur `checked={selected === option}` lagao. Naya option chahiye toh bas array mein add karo.

---

### Q5. A radio's `value` is a number, but `checked` never becomes true after clicking. Why?

**✅ Answer**
- `e.target.value` is **always a string**, so state becomes `"5"` while the comparison uses `5` (`"5" === 5` is false).
- Fix: convert with **`Number(e.target.value)`**, or compare as strings.

**🗣️ Hinglish Explanation**
Input se jo value aati hai (`e.target.value`) wo hamesha string hoti hai. State mein `"5"` ban jaata hai, lekin hum `rating === 5` se compare kar rahe hote hain, jo false hota hai. Fix: `Number(e.target.value)` se number banao.

---

### Q6. How would you show details of the selected payment option?

**✅ Answer**
- Store options in an **array of objects** and the **selected id in state**.
- Render radios with `.map()`.
- Use **`.find()`** (or an **object map**) to get the selected option and **conditionally render** its details.

**🗣️ Hinglish Explanation**
Payment options ko objects ki array mein rakho aur selected option ki `id` state mein. `.map()` se radios dikhao, aur `.find()` se selected option ka object nikalke neeche uski details dikha do. Agar har option ka alag UI ho toh object mapping (`detailsMap[selectedId]`) use karo.

---

## ✅ Revision Checklist

- [ ] Radio button kya hai aur kab use karte hain, pata hai
- [ ] Basic controlled radio (`name`, `value`, `checked`, `onChange`, state) likh sakte ho
- [ ] `onChange={(e) => ...}` mein `e` parameter lena yaad hai
- [ ] Same `name` se grouping ka reason pata hai
- [ ] `checked={state === value}` ka matlab samajh aaya
- [ ] `.map()` se dynamic radio group bana sakte ho
- [ ] Payment options wala practice question solve kar sakte ho (`find` + conditional render)
- [ ] Form ke andar radio + text inputs ek state object se handle kar sakte ho
- [ ] Uncontrolled radio (`defaultChecked`, `FormData`) samajh aaya
- [ ] Radio vs Checkbox vs Select ka fark pata hai
- [ ] Number value wale radio ka string gotcha pata hai

---

⭐ Happy Coding!