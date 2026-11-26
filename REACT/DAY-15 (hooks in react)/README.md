# 🪝 Hooks in React — Complete Guide

Hooks React ke sabse powerful features mein se ek hain. Is README mein hooks kya hain, kyun aaye, unke **rules**, commonly used built-in hooks, aur **`useEffect`** (side effects) detail mein Hinglish mein samjhaya gaya hai.

---

## 📚 Table of Contents

1. [Hooks kyun aaye?](#1--hooks-kyun-aaye)
2. [What is a Hook?](#2--what-is-a-hook)
3. [Rules of Hooks](#3--rules-of-hooks)
4. [Commonly Used Built-in Hooks](#4--commonly-used-built-in-hooks)
5. [useEffect Hook](#5--useeffect-hook)
6. [Dependency Array](#6--dependency-array-useeffect-kab-chalega)
7. [Cleanup Function](#7--cleanup-function)
8. [Real Examples](#8--real-examples)
9. [Common Mistakes](#-common-mistakes)
10. [Interview Questions](#-interview-questions)
11. [Revision Checklist](#-revision-checklist)

---

## ⚡ Quick Summary

| Concept         | Ek line mein                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Hook**        | React ka special function jo functional components mein state, lifecycle, refs, context jaise features deta hai |
| **Naam**        | Hamesha `use` se shuru hota hai                                                                                 |
| **Rule 1**      | Sirf **top level** par call karo (loop/condition ke andar nahi)                                                 |
| **Rule 2**      | Sirf **React function components** ya **custom hooks** mein call karo                                           |
| **`useState`**  | State manage karne ke liye                                                                                      |
| **`useEffect`** | **Side effects** manage karne ke liye                                                                           |

---

## 1. 🤔 Hooks kyun aaye?

- Hooks React ke **sabse powerful features** mein se ek hain.
- Ye **React 16.8** mein introduce hue.
- Maksad: **functional components mein state aur lifecycle methods** use karna, **bina class likhe**.

### 🕰️ Hooks se pehle vs baad

|                           | **Before Hooks**                             | **After Hooks**                     |
| ------------------------- | -------------------------------------------- | ----------------------------------- |
| Functional components     | **Stateless** the (sirf UI dikhate the)      | State manage kar sakte hain         |
| State & lifecycle ke liye | **Class components** use karte the           | Functional components hi kaafi hain |
| Side effects              | Lifecycle methods (`componentDidMount` etc.) | `useEffect`                         |
| Logic reuse               | Mushkil (HOC, render props)                  | Aasaan (custom hooks)               |

```jsx
// ❌ Pehle: state ke liye class chahiye thi
class Counter extends Component {
  state = { count: 0 };
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}

// ✅ Ab: functional component + hook
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

> 💡 **Simple samjho:** Pehle functional component ek "sirf dikhane wala" banda tha. Hooks ne use "yaaddasht (state)" aur "kaam karne ki taqat (effects)" de di.

---

## 2. 📖 What is a Hook?

- Hook React ka ek **special function** hai.
- Ye aapko React ke features mein **"hook into"** karne deta hai: **state, lifecycle, context, refs** etc.
- Hooks ka naam **`use`** se shuru hona chahiye (jaise `useState`, `useEffect`).

> 💡 **"Hook into" ka matlab:** Aapka component React ki internal machinery se "jud" jaata hai, jaise ek hook (kunda) se cheez latkate hain.

---

## 3. 📏 Rules of Hooks

### Rule 1: Sirf top level par call karo

Hooks ko **loops, conditions ya nested functions ke andar call nahi karte.** Hamesha component ke **top level** par likho.

```jsx
// ✅ SAHI
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    /* ... */
  }, []);
  return <p>{count}</p>;
}

// ❌ GALAT: condition ke andar hook
function App({ isLoggedIn }) {
  if (isLoggedIn) {
    const [user, setUser] = useState(null); // ❌
  }
}

// ❌ GALAT: loop ke andar hook
for (let i = 0; i < 3; i++) {
  const [x, setX] = useState(0); // ❌
}
```

### ❓ Ye rule kyun hai?

React hooks ko unke **call hone ke order** se yaad rakhta hai (pehla `useState`, doosra `useState`...). Agar kisi render mein condition ki wajah se koi hook skip ho gaya, toh **order bigad jaata hai** aur React confuse ho jaata hai, state galat hooks se mil jaati hai.

```
Render 1:  useState → useEffect → useState     (order fixed ✅)
Render 2:  useState → (skip!) → useState       (order bigda ❌)
```

> 💡 **Condition chahiye toh?** Hook ke **andar** condition lagao, hook ko condition ke andar mat daalo.
>
> ```jsx
> useEffect(() => {
>   if (isLoggedIn) {
>     fetchUser();
>   } // ✅ condition hook ke andar
> }, [isLoggedIn]);
> ```

### Rule 2: Sirf yahin se call karo

| ✅ Kahan allowed                  | ❌ Kahan nahi                                               |
| --------------------------------- | ----------------------------------------------------------- |
| **React function components**     | Normal JS functions                                         |
| **Custom hooks** (`useSomething`) | Class components                                            |
|                                   | Event handlers ke andar (jaise `onClick` function ke andar) |

```jsx
// ❌ GALAT: normal function mein hook
function calculate() {
  const [x, setX] = useState(0); // ❌
}

// ✅ SAHI: custom hook (naam `use` se shuru)
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, increment: () => setCount(count + 1) };
}
```

---

## 4. 🧰 Commonly Used Built-in Hooks

| #   | Hook                  | Kaam                                                                    |
| --- | --------------------- | ----------------------------------------------------------------------- |
| 1   | **`useState`**        | Component mein **state** banana aur manage karna                        |
| 2   | **`useEffect`**       | **Side effects** (API call, timers, event listeners)                    |
| 3   | **`useRef`**          | DOM element ya aisi value ka **reference** jo re-render trigger na kare |
| 4   | **`useReducer`**      | Complex state logic (`useState` ka advanced alternative)                |
| 5   | **`useMemo`**         | Mehengi calculation ka result **yaad (memoize)** rakhna                 |
| 6   | **`useCallback`**     | Function ko **yaad (memoize)** rakhna taaki baar-baar naya na bane      |
| 7   | **`useLayoutEffect`** | `useEffect` jaisa, lekin **browser paint se pehle** chalta hai          |
| 8   | **`useContext`**      | **Context** ka data use karna (prop drilling se bachna)                 |

> 📝 Slide mein aakhri hook ka naam `useContex` likha tha (typo), sahi naam **`useContext`** hai.

> 💡 Abhi in sab ko ratna zaroori nahi. Is README mein **`useEffect`** detail mein hai, baaki hooks ke alag topics aayenge (roadmap ke Phase 6 mein).

---

## 5. ⚡ useEffect Hook

> **Agar `useState` state manage karne ke liye hai, toh `useEffect` side effects manage karne ke liye hai.**

### Side effect kya hota hai?

> Aisa koi bhi code jo **React ke render cycle ke bahar ki cheez ko affect** karta hai.

Normally React components ko sirf **UI return** karna chahiye. Lekin side effects humein **bahar ki duniya se interact** karne dete hain.

### 📋 Side effects ke examples

| Example                                     | Kya hai                               |
| ------------------------------------------- | ------------------------------------- |
| 🌐 **API se data fetch karna**              | Server se data mangna                 |
| 👂 **Event listeners lagana**               | `resize`, `scroll` jaise events sunna |
| ⏱️ **Timers**                               | `setInterval`, `setTimeout`           |
| 📄 **Browser DOM / title manually badalna** | `document.title = "..."`              |

### 📝 `useEffect` kya hai?

> `useEffect` ek React hook hai jo functional components mein **side effects perform** karne deta hai.

### Syntax

```jsx
useEffect(() => {
  // side effect code here

  return () => {
    // cleanup code (optional)
  };
}, [dependencies]);
```

| Part                                | Kaam                                                | Zaroori?                           |
| ----------------------------------- | --------------------------------------------------- | ---------------------------------- |
| **Callback function** `() => {...}` | Side effect ka code yahan                           | ✅ Haan                            |
| **`return () => {...}`**            | **Cleanup code** (effect hatne se pehle chalta hai) | ❌ Optional                        |
| **`[dependencies]`**                | Effect **kab dobara chalega**, ye batata hai        | ⚠️ Optional, lekin bahut important |

### Import

```jsx
import { useEffect } from "react";
```

### Class lifecycle se mapping

| Class Component        | Functional (Hooks)                                |
| ---------------------- | ------------------------------------------------- |
| `componentDidMount`    | `useEffect(() => {...}, [])`                      |
| `componentDidUpdate`   | `useEffect(() => {...}, [dep])`                   |
| `componentWillUnmount` | `useEffect` ka **cleanup** (`return () => {...}`) |

> 💡 **Ek hi hook teeno lifecycle methods ka kaam kar deta hai.**

---

## 6. 📦 Dependency Array: `useEffect` kab chalega?

Second argument (dependency array) decide karta hai ki effect **kab chalega**.

| Syntax                                          | Effect kab chalta hai                      |
| ----------------------------------------------- | ------------------------------------------ |
| `useEffect(() => {...})` (array **nahi**)       | **Har render** ke baad                     |
| `useEffect(() => {...}, [])` (**khaali** array) | Sirf **ek baar**, component mount hone par |
| `useEffect(() => {...}, [count])`               | Mount par, aur jab bhi **`count` badle**   |

### 1️⃣ Har render par (array nahi)

```jsx
useEffect(() => {
  console.log("Har render ke baad chalega");
});
```

### 2️⃣ Sirf ek baar (khaali array `[]`)

```jsx
useEffect(() => {
  console.log("Sirf mount par chalega");
}, []);
```

> Aksar API call, event listener ek baar lagane ke liye yahi use hota hai.

### 3️⃣ Jab dependency badle (`[count]`)

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

> `count` badlega tabhi title update hoga.

### 💡 Dependency array ka rule

Effect ke andar jo bhi **state, props ya variable** aap use karte ho, use dependency array mein likho. Warna effect purani (stale) value dekhega.

---

## 7. 🧹 Cleanup Function

`return () => {...}` wala hissa **cleanup** hai. Ye tab chalta hai jab:

1. Component **screen se hat (unmount)** raha ho, ya
2. Effect **dobara chalne se pehle** (dependency badalne par) purana effect saaf karna ho.

### Kyun zaroori hai?

Agar timer ya event listener ko hatayenge nahi, toh wo **chalta rahega** (memory leak, bugs).

```jsx
useEffect(() => {
  console.log("Component Mounted");

  return () => console.log("Component Unmounted"); // cleanup
}, []);
```

### Cleanup ke saath timer

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id); // ✅ timer band karo
}, []);
```

### Cleanup ke saath event listener

```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize); // ✅ hata do
}, []);
```

> 💡 **Rule:** Jo cheez effect mein **shuru** karo (timer, listener, subscription), use cleanup mein **band** karo.

---

## 8. 🧪 Real Examples

Slide ke 4 side effects ke examples:

### 8.1 🌐 API se data fetch karna

```jsx
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // sirf ek baar

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

**Flow:** Component pehli baar render hota hai (khaali list) → `useEffect` chalta hai, API call hoti hai → data aate hi `setUsers` se state badli → component dobara render hota hai aur list dikhti hai.

### 8.2 👂 Event listener (window resize)

```jsx
function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Width: {width}px</p>;
}
```

### 8.3 ⏱️ Timer (seconds counter)

```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1); // functional update
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h2>Seconds: {seconds}</h2>;
}
```

> 💡 Yahan `setSeconds(prev => prev + 1)` use kiya hai (state wale README ka functional update), taaki purani value par na atke.

### 8.4 📄 Browser title manually badalna

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Click me</button>;
}
```

Har click par browser tab ka title badal jaata hai.

---

## ⚠️ Common Mistakes

| ❌ Galat                                                | ✅ Sahi                                         | Kyun?                                                                              |
| ------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| `if (x) { useState(...) }`                              | Hook hamesha top level par                      | Hooks ka order fixed rehna chahiye                                                 |
| Normal function ke andar hook                           | Component ya custom hook (`useXyz`) mein        | Hooks sirf React functions mein chalte hain                                        |
| `useEffect(() => { setCount(count + 1) })` (array nahi) | `[]` ya sahi dependencies do                    | **Infinite loop**: state badli → render → effect → state badli...                  |
| `useEffect(async () => {...})`                          | Andar alag `async` function banao aur call karo | Effect callback `undefined` ya cleanup function return karna chahiye, Promise nahi |
| Dependency array mein variable bhoolna                  | Jo use ho wo sab likho                          | Purani (stale) value milti hai                                                     |
| Timer/listener ka cleanup na karna                      | `return () => clearInterval(id)`                | Memory leak aur bugs                                                               |
| Hook ka naam `use` ke bina                              | `useCounter`, `useFetch`                        | Convention + lint rules ke liye zaroori                                            |
| Event handler (`onClick`) ke andar hook                 | Hook ko component ke top level par rakho        | Hooks handlers mein call nahi hote                                                 |

### Async function ka sahi tarika

```jsx
useEffect(() => {
  async function loadData() {
    const res = await fetch("/api/data");
    const data = await res.json();
    setData(data);
  }
  loadData();
}, []);
```

> 📝 **Dev mode note:** React 18+ mein `StrictMode` ke andar development mein effect (mount → cleanup → mount) **do baar** chal sakta hai. Ye sirf bugs pakadne ke liye hai, production mein ek hi baar chalta hai.

---

## 🎯 Interview Questions

### Q1. What are Hooks in React and why were they introduced?

**✅ Answer**

- Hooks are **special functions** provided by React that let you use **state, lifecycle, context, refs** inside **functional components**.
- They were introduced in **React 16.8**.
- Before hooks, functional components were **stateless**, and class components were needed for state and lifecycle.
- Hooks make logic **simpler and reusable** without writing classes.

**🗣️ Hinglish Explanation**
Hooks React ke special functions hain jinse functional component mein bhi state aur lifecycle jaise features mil jaate hain. React 16.8 se pehle state ke liye class component likhna padta tha. Hooks ke baad class ki zaroorat kam ho gayi, code chhota aur reuse karna aasaan ho gaya.

---

### Q2. What are the Rules of Hooks?

**✅ Answer**

- Call hooks **only at the top level** of a component (not inside loops, conditions or nested functions).
- Call hooks **only from React function components or custom hooks**.
- Hook names should **start with `use`**.
- Reason: React relies on the **order of hook calls** between renders.

**🗣️ Hinglish Explanation**
Do rules hain: hooks ko sirf top level par likho (loop ya if ke andar nahi), aur sirf React components ya custom hooks mein call karo. React hooks ko unke call hone ke order se pehchanta hai, isliye order har render mein same rehna chahiye.

---

### Q3. What is a side effect? Give examples.

**✅ Answer**

- A side effect is **any code that affects something outside React's render cycle**.
- Examples: **fetching data from an API**, **adding event listeners** (resize, scroll), **timers** (`setInterval`, `setTimeout`), **manually updating the DOM or document title**.

**🗣️ Hinglish Explanation**
Component ka asli kaam UI return karna hai. Jo bhi kaam us UI ke bahar ki duniya se judta hai, jaise API call, timer, event listener ya title badalna, wo side effect hai, aur uske liye `useEffect` use karte hain.

---

### Q4. What does the dependency array do in `useEffect`?

**✅ Answer**

- **No array** → effect runs after **every render**.
- **`[]`** → effect runs **only once** (on mount).
- **`[a, b]`** → effect runs on mount and **whenever `a` or `b` changes**.

**🗣️ Hinglish Explanation**
Dependency array batata hai ki effect kab dobara chalega. Array nahi diya toh har render par chalega, khaali `[]` diya toh sirf ek baar (mount par), aur `[count]` diya toh jab `count` badlega tab. Effect ke andar jo state/props use ho, unhe array mein daalna chahiye.

---

### Q5. What is the cleanup function in `useEffect`?

**✅ Answer**

- It is the **function returned** from the effect.
- It runs **before the component unmounts** and **before the effect re-runs** (when dependencies change).
- Used to **clean up** timers, event listeners and subscriptions to avoid **memory leaks**.

**🗣️ Hinglish Explanation**
Effect se jo function return karte hain wo cleanup hai. Component hatne par ya effect dobara chalne se pehle ye chalta hai. Isme hum timer band karte hain, event listener hatate hain, taaki purana kaam chalta na rahe aur memory leak na ho.

---

### Q6. Why can't we use hooks inside conditions or loops?

**✅ Answer**

- React identifies each hook by **the order in which it is called**.
- If a hook is skipped or called a different number of times in a render, the **order breaks** and React maps state to the **wrong hooks**.
- To run something conditionally, put the **condition inside** the hook.

**🗣️ Hinglish Explanation**
React ko hooks ke naam nahi, unka order pata hota hai (pehla useState, doosra useState...). Agar kisi render mein condition ki wajah se koi hook skip ho jaaye toh order bigad jaata hai aur state galat jagah chali jaati hai. Isliye condition hook ke andar likhte hain, hook condition ke andar nahi.

---

## ✅ Revision Checklist

- [ ] Hooks kya hain aur React 16.8 mein kyun aaye, pata hai
- [ ] Hooks se pehle aur baad ka fark clear hai
- [ ] Rules of Hooks (top level + sirf React functions/custom hooks) yaad hain
- [ ] Rule ke peeche ka reason (call order) samajh aaya
- [ ] 8 built-in hooks ke naam aur ek line ka kaam pata hai
- [ ] Side effect kya hota hai, 4 examples yaad hain
- [ ] `useEffect` ka syntax (callback, cleanup, dependencies) aata hai
- [ ] Dependency array ke 3 cases (nahi / `[]` / `[dep]`) clear hain
- [ ] Cleanup function kab aur kyun chalta hai, pata hai
- [ ] `useEffect` mein async function ka sahi tarika aata hai
- [ ] Infinite loop wali galti pehchan sakte ho

---

⭐ Happy Coding!
