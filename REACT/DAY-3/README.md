# ⚛️ Basics & Features of React

React ke **7 core concepts** aur uske **6 main features**, simple Hinglish mein, examples ke saath.

---

## 📚 Table of Contents

1. [JSX](#1--jsx-javascript-xml)
2. [Components](#2--components)
3. [Props](#3--props-properties)
4. [State](#4--state)
5. [Data Flow](#5--data-flow)
6. [Hooks](#6--hooks)
7. [Virtual DOM](#7--virtual-dom)
8. [Features of React JS](#-features-of-react-js)
9. [Important Advice](#-important-advice)

---

## ⚡ Quick Summary

| Concept | Ek line mein |
|---------|--------------|
| **JSX** | HTML jaisa dikhta hai, lekin JavaScript ki tarah kaam karta hai |
| **Components** | UI ka reusable tukda |
| **Props** | Component ko data bhejne ka tarika (read-only) |
| **State** | Component ka apna local data |
| **Data Flow** | Data parent se child ki taraf jaata hai (one-way) |
| **Hooks** | Function components mein state, lifecycle, refs, context use karne ke liye |
| **Virtual DOM** | Sirf changed cheezein Real DOM mein update hoti hain |

---

## 1. 🧩 JSX (JavaScript XML)

- **HTML inside JavaScript.**
- **JavaScript inside HTML.**
- React **HTML jaisa dikhta hai, lekin JavaScript ki tarah behave karta hai.**

```jsx
function Welcome() {
  const name = "Sahil";

  return (
    <div>
      <h1>Hello, {name}!</h1>        {/* {} ke andar JavaScript likh sakte ho */}
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}
```

> 💡 **Hinglish mein samjho:** Normally JS mein HTML likhna mushkil hota hai. JSX ki wajah se hum JS file ke andar hi HTML jaisa code likh sakte hain, aur `{ }` ke andar koi bhi JS expression daal sakte hain.

⚠️ **Dhyan rakho:** JSX mein `class` ki jagah `className` likhte hain.

---

## 2. 🧱 Components

- Component ek **reusable piece of UI** hai.
- **Ek component ke andar dusre components aa sakte hain.**

### 🛒 Real-life Example: Flipkart / Myntra

Flipkart ya Myntra par product listing dekho. Har product ka card **same design** ka hota hai, bas data (naam, price, image) alag hota hai. Isliye ek `ProductCard` component banao aur use baar-baar reuse karo.

```
App
 ├── Navbar
 ├── Filters (Sidebar)
 └── ProductList
      ├── ProductCard   ← Samsung Galaxy F05
      ├── ProductCard   ← Motorola g05
      └── ProductCard   ← POCO C71
```

```jsx
function ProductCard() {
  return (
    <div className="card">
      <h3>Product Name</h3>
      <p>Price</p>
    </div>
  );
}

function ProductList() {
  return (
    <div>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
```

> 💡 **Simple samjho:** Component = LEGO block. Ek baar banao, jahan chaaho laga do. Chhote blocks mila ke bada UI banta hai.

---

## 3. 📨 Props (Properties)

- Props = **"properties"**
- Component ko **data bhejne** ke liye use hota hai.
- **Read Only** hota hai (child component props ko change nahi kar sakta).
- **Function parameter** jaisa hota hai.

```jsx
// Child component: props receive karta hai
function ProductCard({ name, price }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>₹{price}</p>
    </div>
  );
}

// Parent component: props bhejta hai
function ProductList() {
  return (
    <div>
      <ProductCard name="Samsung Galaxy F05" price={6499} />
      <ProductCard name="Motorola g05" price={7299} />
      <ProductCard name="POCO C71" price={6999} />
    </div>
  );
}
```

> 💡 **Function se compare karo:**
> ```js
> function add(a, b) { return a + b; }   // a, b = parameters
> add(2, 3);                              // 2, 3 = arguments
> ```
> Bilkul waise hi, `name` aur `price` props hain.

---

## 4. 🔄 State

- State = **component ka local data.**
- **State change hoti hai toh UI update hota hai**, "React will React" 😄

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);   // count = state, setCount = update karne ka function

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

> 💡 **Hinglish mein samjho:** Button dabane par `setCount` se state change hui, aur React apne aap UI ko naye count ke saath dobara dikha deta hai. Tumhe DOM manually update nahi karna padta.

### ⚖️ Props vs State

| | Props | State |
|---|-------|-------|
| Kaun deta hai? | Parent component | Component khud |
| Change kar sakte hain? | ❌ Nahi (Read Only) | ✅ Haan (setter function se) |
| Use kahan? | Data bhejne ke liye | Component ka apna data rakhne ke liye |

---

## 5. 🌊 Data Flow

- React **one-way data flow** use karta hai.
- Data **parent se child ki taraf** jaata hai, **props ke through.**
- **State component ke liye local** hoti hai.

```
        ┌──────────┐
        │  Parent  │   ← state yahan hai
        └────┬─────┘
             │  props ↓ (data neeche jaata hai)
        ┌────▼─────┐
        │  Child   │   ← sirf padh sakta hai
        └──────────┘
```

> 💡 **Simple samjho:** Paani hamesha upar se neeche behta hai. Waise hi data parent se child ko jaata hai, child se parent ko seedha nahi.

---

## 6. 🪝 Hooks

- Hooks se function components mein **state, lifecycle, refs aur context** use kar sakte ho.
- **Hooks sirf React functions ke andar hi call karo.**

| Hook | Kaam |
|------|------|
| `useState` | State manage karna |
| `useEffect` | Lifecycle (side effects, API calls) |
| `useRef` | DOM elements ya values ka reference rakhna |
| `useContext` | Context ka data use karna |

```jsx
// ✅ Sahi: Component ke andar, top level par
function MyComponent() {
  const [name, setName] = useState("");
  return <h1>{name}</h1>;
}

// ❌ Galat: Normal function ke andar hook
function normalFunction() {
  const [name, setName] = useState("");   // Error!
}
```

> ⚠️ **Extra rule:** Hooks ko loops, conditions (`if`) ya nested functions ke andar bhi call mat karo. Hamesha component ke **top level** par likho.

---

## 7. 🌳 Virtual DOM

React ka sabse powerful concept.

```
   Virtual DOM                         Real DOM
       ●                                  ●
      / \          ── Patch ──►          / \
     🔴  ●                              🟢  ●
    / \   \                            / \   \
   🔴  ●   ●                          🟢  ●   ●

  (changes yahan detect hote hain)    (sirf changed nodes update hote hain)
```

### Kaise kaam karta hai?

1. Jab state change hoti hai, React ek **naya Virtual DOM** banata hai.
2. Naye aur purane Virtual DOM ko **compare** karta hai (isko *diffing* kehte hain).
3. Jo cheezein **change hui hain**, sirf unhe **Real DOM mein patch** karta hai.

> 💡 **Hinglish mein samjho:** Maan lo ek bade page par sirf ek button ka text badalna hai. Poora page dobara banane ke bajaye React sirf wahi button update karta hai. Isliye React **fast** hai.

---

## 🌟 Features of React JS

| # | Feature | Matlab |
|---|---------|--------|
| 1 | **JSX** | JS ke andar HTML jaisa code likhna |
| 2 | **Components** | Reusable UI blocks |
| 3 | **One-Way Data Binding** | Data ek hi direction mein behta hai (parent → child) |
| 4 | **Virtual DOM** | Sirf changed parts update hote hain |
| 5 | **Simplicity** | Seekhna aur use karna aasaan |
| 6 | **Performance** | Fast rendering Virtual DOM ki wajah se |

---

## 🎯 Important Advice

> ### ⚠️ React sirf JavaScript master karne ke **BAAD** seekho!

React JavaScript par based hai. Agar JS ke basics kamzor hain toh React mushkil lagega.

**Pehle ye JS topics clear karo:**
- Variables, Operators, Functions
- Array, Object, String methods
- DOM Manipulation
- Promises & APIs (`fetch`, `async/await`)
- Destructuring, Spread operator
- Modules (`import` / `export`)

---

## ✅ Revision Checklist

- [ ] JSX kya hai, aur `className` / `{}` ka use samajh aaya
- [ ] Component kya hota hai aur reuse kaise karte hain
- [ ] Props se data kaise bhejte hain
- [ ] State aur `useState` samajh aaya
- [ ] Props vs State ka fark clear hai
- [ ] One-way data flow samajh aaya
- [ ] Hooks ke rules yaad hain
- [ ] Virtual DOM ka kaam samajh aaya

---

⭐ Happy Learning & Happy Coding!