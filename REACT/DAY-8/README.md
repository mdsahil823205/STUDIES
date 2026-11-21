# 🧱 Components in React — Complete Guide

Components React ki **jaan** hain. Is README mein components ke types, props, state, composition, lifecycle, advanced patterns, best practices aur "Component vs Function" ka fark simple Hinglish mein samjhaya gaya hai.

---

## 📚 Table of Contents

1. [Component kya hai?](#1--component-kya-hai)
2. [Types of Components](#2--types-of-components)
3. [Functional Component](#3--functional-component)
4. [Class Component](#4--class-component)
5. [Props](#5--props-component-inputs)
6. [State](#6--state-component-memory)
7. [Component Composition](#7--component-composition)
8. [Component Lifecycle](#8--component-lifecycle-class-vs-hooks)
9. [Advanced Component Patterns](#9--advanced-component-patterns)
10. [Best Practices](#10--best-practices)
11. [Component vs Function](#11--component-vs-functions)
12. [Why Components?](#12--why-components)
13. [Summary](#13--summary)

---

## 1. 🤔 Component kya hai?

- A component is a **reusable piece of UI**.
- Har React app ke **building blocks**.
- Chhote components ko **combine karke complex interfaces** banate hain.

### 🛒 Real-life Example: Myntra / Flipkart

Slides mein Myntra aur Flipkart ke screenshots dikhaye gaye hain. Dhyan se dekho toh poora page chhote-chhote reusable tukdon se bana hai:

```
Page
 ├── Navbar          (MEN, WOMEN, KIDS, Search, Profile, Wishlist)
 ├── Sidebar Filters (Categories, Brand, Price, Color)
 └── Product Grid
      ├── ProductCard
      ├── ProductCard
      ├── ProductCard
      └── ... (same design, alag data)
```

> 💡 **Simple samjho:** Component = LEGO block. Ek baar banao, jahan chaaho lagao. Slide ke diagram mein bhi yahi hai: 4 alag blocks (1, 2, 3, 4) mil ke ek poora screen banate hain.

---

## 2. 🗂️ Types of Components

| # | Type | Status |
|---|------|--------|
| 1 | **Functional Components** | ✅ Preferred, modern way |
| 2 | **Class Components** | 📜 Older, historically important |

---

## 3. ⚙️ Functional Component

```jsx
function Card() {
  return <h1>This is my card!</h1>;
}

export default Card;
```

- Ye ek **function** hai jo **JSX return** karta hai.
- **`this` ki zaroorat nahi**, isliye simpler aur cleaner hai.
- **Hooks** aane ke baad functional components ne **zyadatar class components ko replace** kar diya.

> 💡 Ye aajkal ka **standard** tarika hai. Naye project mein hamesha isi ko use karo.

---

## 4. 🏛️ Class Component

```jsx
import { Component } from "react";

class Card extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Card;
```

- **Older style**, Hooks se pehle ka.
- **`render()` method** use karta hai.
- Abhi bhi **legacy codebases** mein dikhta hai.

> 💡 **Kyun seekhein?** Naya code functional likhte hain, lekin job mein purane projects mein class components milte hain, aur interviews mein bhi puchhe jaate hain.

### ⚖️ Functional vs Class — Quick Comparison

| | Functional | Class |
|---|-----------|-------|
| Syntax | Simple function | `class ... extends Component` |
| JSX kaise return hota hai | Seedha `return` | `render()` method ke andar |
| `this` | ❌ Nahi chahiye | ✅ Use hota hai |
| State / Lifecycle | Hooks (`useState`, `useEffect`) | `this.state`, lifecycle methods |
| Status | ✅ Modern, preferred | 📜 Legacy |

---

## 5. 📨 Props (Component Inputs)

```jsx
function WelcomeCard(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<WelcomeCard name="Manas" />
```

- Props = **Properties**
- **Parent se child** ko pass hote hain.
- **Read-only** hote hain (child ke andar change nahi kar sakte).
- Props components ko **dynamic aur reusable** banate hain.

### ✨ Destructuring ke saath (cleaner tarika)

```jsx
function WelcomeCard({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

### Reuse ka example

```jsx
<WelcomeCard name="Manas" />
<WelcomeCard name="Muskan" />
<WelcomeCard name="Mehek" />
```

> 💡 **Ek hi component, alag-alag data.** Props ka yahi kamaal hai. Function ke parameter ki tarah samjho.

---

## 6. 🧠 State (Component Memory)

- State = **wo data jo component ke andar change hota hai.**
- Functional components mein **`useState`** se manage hota hai.
- **Props = external input, State = internal memory.**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

### Kaise kaam karta hai?

| Part | Matlab |
|------|--------|
| `count` | Current state value |
| `setCount` | State update karne ka function |
| `useState(0)` | Initial value `0` |
| `<> </>` | Fragment (extra div nahi banta) |

> 💡 Button dabane par `setCount` state badalta hai, aur React automatically UI ko naye count ke saath update kar deta hai.

### ⚖️ Props vs State

| | Props | State |
|---|-------|-------|
| Source | Bahar se (parent) | Andar se (component khud) |
| Change kar sakte hain? | ❌ Read-only | ✅ Haan (setter se) |
| Analogy | Input | Memory |

---

## 7. 🧩 Component Composition

- **Components ko dusre components ke andar nest karna.**
- UI ko **modular** banata hai.
- **Chhote components combine hoke complex UI** banate hain.

```jsx
function Navbar() {
  return <nav>Navbar</nav>;
}

function ProductCard() {
  return <div>Product</div>;
}

function ProductList() {
  return (
    <div>
      <ProductCard />
      <ProductCard />
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
}
```

### Component Tree

```
App
 ├── Navbar
 └── ProductList
      ├── ProductCard
      └── ProductCard
```

---

## 8. 🔄 Component Lifecycle (Class vs Hooks)

Har component ki life ke **3 phases** hote hain:

```
Mounting  ──►  Updating  ──►  Unmounting
 (screen par    (state/props     (screen se
  aaya)          change hue)      hata)
```

| Phase | Class Component | Functional Component |
|-------|-----------------|----------------------|
| Mounting | `componentDidMount` | `useEffect` |
| Updating | `componentDidUpdate` | `useEffect` |
| Unmounting | `componentWillUnmount` | `useEffect` (cleanup function) |

### Functional component mein `useEffect`

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Component Mounted");

  return () => console.log("Component Unmounted");
}, []);
```

### Code samjho

| Part | Kaam |
|------|------|
| Function body | Component **mount** hone par chalta hai |
| `return () => ...` | **Cleanup function**, component **unmount** hone par chalta hai |
| `[]` (empty dependency array) | Effect sirf **ek baar** chalega (mount par) |

> 💡 **Ek hi hook (`useEffect`) teeno class methods ka kaam kar deta hai**, isliye functional components zyada simple hain.

> 📝 **Dev mode note:** React 18+ mein `StrictMode` ke andar development mein effect do baar chal sakta hai (sirf testing ke liye). Production mein ek hi baar chalta hai, ghabrana mat.

---

## 9. 🚀 Advanced Component Patterns

Ye patterns **bade apps scale karne** aur **complex UI manage karne** mein kaam aate hain.

| Pattern | Ek line mein |
|---------|--------------|
| **Controlled vs Uncontrolled Components** | Form input ki value React state se control hoti hai (controlled) ya DOM khud sambhalta hai (uncontrolled) |
| **Higher-Order Components (HOC)** | Ek function jo component leta hai aur ek naya enhanced component return karta hai |
| **Render Props** | Component ko ek function as prop dena, jo batata hai kya render karna hai |
| **Compound Components** | Aise components jo ek group ki tarah saath kaam karte hain (jaise `<Tabs>`, `<Tab>`) |
| **Custom Hooks** | Apna khud ka hook banana taaki logic reuse ho sake |

### Chhote examples

```jsx
// Controlled: value state se aati hai
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />

// Uncontrolled: value DOM sambhalta hai (ref se padhte hain)
const inputRef = useRef();
<input ref={inputRef} />
```

```jsx
// Custom Hook: logic reuse
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(count + 1);
  return { count, increment };
}
```

> 📝 Ye sab advanced topics hain. Abhi bas naam aur idea yaad rakho, detail mein baad mein seekhenge.

---

## 10. ✅ Best Practices

- ✅ **Components ko chhota aur focused rakho** (ek component, ek kaam)
- ✅ **Component ke naam PascalCase mein** rakho (`UserCard`, `ProductList`)
- ✅ **Logic reuse ke liye custom hooks** use karo, duplicate mat karo
- ✅ **UI (presentational) ko business logic (container components) se alag rakho**

### Presentational vs Container

| | Presentational | Container |
|---|---------------|-----------|
| Kaam | Sirf UI dikhana | Data aur logic sambhalna |
| Data kahan se? | Props se | API / state se |
| Example | `ProductCard` | `ProductListContainer` (data fetch karke cards ko deta hai) |

---

## 11. 🆚 Component vs Functions

| Aspect | JavaScript Function | React Component |
|--------|--------------------|-----------------|
| **Definition** | Code ka block jo ek specific task karta hai aur value return karta hai | Ek special function (ya class) jo UI describe karne ke liye JSX return karta hai |
| **Return Value** | Primitive values, objects, arrays, ya dusre functions | **JSX (React elements)** ya `null` return karna hota hai |
| **Naming Convention** | Lowercase ya uppercase (`sum`, `addNumbers`) | **PascalCase** zaroori (`Greeting`, `UserCard`) |
| **Input** | Parameters / arguments | **Props** |
| **Usage** | Seedha call hota hai: `sum(2, 3)` | HTML tag ki tarah: `<Greeting name="Manas" />` |
| **State Handling** | Built-in memory/state nahi hoti | `useState`, `useReducer` etc. se state manage kar sakta hai |
| **Reusability** | Reusable logic, lekin UI se tied nahi | Reusable **UI + logic** building blocks ki tarah |
| **Lifecycle** | Lifecycle nahi hota | Lifecycle hota hai (mount, update, unmount) |

### Code se samjho

```jsx
// Normal function
function sum(a, b) {
  return a + b;
}
sum(2, 3);               // seedha call

// React component
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
<Greeting name="Manas" />   // tag ki tarah use
```

> ⚠️ **PascalCase kyun zaroori hai?** JSX mein lowercase tag (`<card />`) ko React **HTML element** samajhta hai, aur capital tag (`<Card />`) ko **component**. Isliye component ka naam hamesha bade letter se shuru karo.

---

## 12. 💡 Why Components?

| Benefit | Matlab |
|---------|--------|
| **Reusability** | Ek baar likho, kahin bhi use karo |
| **Maintainability** | Code manage karna aasaan |
| **Readability** | UI logical parts mein baant jaata hai |
| **Scalability** | Bade apps manageable ban jaate hain |

---

## 13. 📝 Summary

- 🧱 Components = **React ke building blocks**
- ⚙️ **Functional components** standard hain
- 📨 **Props = input, State = memory**
- 🧩 **Composition** se apps scalable bante hain
- 🔄 **Lifecycle Hooks** (`useEffect`) se manage hoti hai
- 🚀 **Advanced patterns** → reusable, maintainable apps

---

## ✅ Revision Checklist

- [ ] Component kya hota hai aur kyun use karte hain
- [ ] Functional vs Class component ka fark clear hai
- [ ] Props read-only kyun hote hain, samajh aaya
- [ ] `useState` se state manage karna aata hai
- [ ] Props vs State ka fark clear hai
- [ ] Component composition (nesting) samajh aaya
- [ ] Lifecycle ke 3 phases aur `useEffect` ka mapping yaad hai
- [ ] Advanced patterns ke naam yaad hain
- [ ] Best practices (PascalCase, small components) yaad hain
- [ ] Component vs Function ka fark bata sakte ho

---

⭐ Happy Coding!