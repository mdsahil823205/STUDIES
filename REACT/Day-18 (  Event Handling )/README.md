# 🖱️ Event Handling in React — Complete Guide

Event handling matlab user ke actions (click, typing, form submit, hover, key press) ko **sunna aur un par react karna**. Is README mein HTML vs React events, event handler basics, event object, **SyntheticEvent**, arguments pass karna, state ke saath events, `preventDefault`, `stopPropagation` aur common mistakes Hinglish mein hain.

---

## 📚 Table of Contents

1. [HTML vs React Events](#1--html-vs-react-events)
2. [Event Handler Basics](#2--event-handler-basics)
3. [Accessing Event Object](#3--accessing-event-object)
4. [SyntheticEvent](#4--syntheticevent)
5. [Passing Arguments to Handlers](#5--passing-arguments-to-handlers)
6. [Using State with Events](#6--using-state-with-events)
7. [Prevent Default](#7--prevent-default)
8. [Stop Propagation](#8--stop-propagation)
9. [Common Mistakes Table](#9--common-mistakes--fixes)
10. [Interview Questions](#-interview-questions)
11. [Revision Checklist](#-revision-checklist)

---

## ⚡ Quick Summary

| Concept                   | Ek line mein                                           |
| ------------------------- | ------------------------------------------------------ |
| **Naming**                | camelCase: `onClick`, `onChange` (HTML mein `onclick`) |
| **Value**                 | **Function reference** do, string nahi                 |
| **Event object**          | Handler ko `e` milta hai (`e.target.value`)            |
| **SyntheticEvent**        | React ka wrapper, har browser mein same behaviour      |
| **Arguments**             | Arrow function use karo: `onClick={() => fn('Manas')}` |
| **`e.preventDefault()`**  | Default behaviour roko (jaise form reload)             |
| **`e.stopPropagation()`** | Event ko parent tak jaane (bubbling) se roko           |

---

## 1. 🆚 HTML vs React Events

### HTML

```html
<button onclick="alert('Clicked!')">Click Me</button>
```

### React

```jsx
<button onClick={() => alert("Clicked!")}>Click Me</button>
```

### 🔑 Key Differences

|                         | **HTML**                                    | **React**                                                       |
| ----------------------- | ------------------------------------------- | --------------------------------------------------------------- |
| Event naam              | lowercase: `onclick`                        | **camelCase**: `onClick`, `onChange`                            |
| Handler kaise dete hain | **String** mein code: `"alert('Clicked!')"` | **Function reference** `{...}` mein                             |
| Browser compatibility   | Browser par depend                          | **SyntheticEvent** (React ka wrapper) se sab browsers mein same |

> 💡 **Simple samjho:** HTML mein hum code ka **text** dete the. React mein hum **asli function** dete hain.

---

## 2. 🧪 Event Handler Basics

> Click, change aur submit jaise basic events handle karna.

```jsx
function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Steps

1. Component ke andar ek **handler function** banao (`handleClick`).
2. JSX mein event prop par **function ka naam** do: `onClick={handleClick}`.
3. User click kare toh React function ko **khud call** karta hai.

> ⚠️ **Dhyan do:** `onClick={handleClick}` likha hai, `onClick={handleClick()}` nahi. Bracket lagaya toh function render hote hi chal jaayega (Section 5 dekho).

### 📋 Common Events

| Event                                   | Kab chalta hai                | Use                             |
| --------------------------------------- | ----------------------------- | ------------------------------- |
| **`onClick`**                           | Click karne par               | Buttons, links                  |
| **`onChange`**                          | Input ki value badalne par    | Text boxes, select, checkbox    |
| **`onSubmit`**                          | Form submit hone par          | Forms                           |
| **`onMouseEnter`** / **`onMouseLeave`** | Mouse element par aaye / hate | Hover effects                   |
| **`onKeyDown`** / **`onKeyUp`**         | Key dabane / chhodne par      | Keyboard shortcuts, Enter press |

> 📝 Extra events jo kaam aate hain: `onFocus`, `onBlur`, `onDoubleClick`.

### Naming convention

| Cheez                     | Naam                                             |
| ------------------------- | ------------------------------------------------ |
| Event **prop** (JSX mein) | `onClick`, `onChange` (`on` + Event)             |
| Handler **function**      | `handleClick`, `handleChange` (`handle` + Event) |

---

## 3. 📦 Accessing Event Object

Har handler ko React automatically ek **event object (`e`)** deta hai.

```jsx
function InputBox() {
  function handleChange(e) {
    console.log(e.target.value); // input ki value
  }

  return <input type="text" onChange={handleChange} />;
}
```

### Useful event properties

| Property              | Kya deta hai                                |
| --------------------- | ------------------------------------------- |
| `e.target`            | Jis element par event hua (jaise `<input>`) |
| `e.target.value`      | Input ki current value                      |
| `e.target.checked`    | Checkbox checked hai ya nahi                |
| `e.target.name`       | Input ka `name` attribute                   |
| `e.key`               | Kaun si key dabi (`onKeyDown` mein)         |
| `e.type`              | Event ka type (`"click"`, `"change"`)       |
| `e.preventDefault()`  | Default behaviour roko                      |
| `e.stopPropagation()` | Bubbling roko                               |

### Input ki value state mein rakhna (Controlled Input)

```jsx
import { useState } from "react";

function InputBox() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}
```

> 💡 Ye sabse common pattern hai: `onChange` mein `e.target.value` lo aur state mein daal do.

---

## 4. 🎁 SyntheticEvent

> React native browser events ko ek **wrapper (SyntheticEvent)** mein lapet deta hai.

- Event handling React mein standard JavaScript jaisi hi hai, lekin **kuch key differences** ke saath.
- Jab aap button click ya input mein typing jaise events handle karte ho, React **native browser event ko "Synthetic Event" mein wrap** karta hai.
- Ye **cross-browser compatibility** deta hai, yaani Chrome, Firefox, Safari sab mein **same behaviour** milta hai.
- Different elements aur browsers mein **consistent event handling** hoti hai.

```
 Browser ka native event  ──►  React ka SyntheticEvent (wrapper)  ──►  Aapka handler (e)
```

> 💡 **Simple samjho:** Alag-alag company ke charger (browsers) ke liye ek universal adapter (SyntheticEvent). Aapko har browser ke liye alag code nahi likhna padta.

### Native event chahiye toh

```jsx
function handleClick(e) {
  console.log(e.nativeEvent); // asli browser event
}
```

### ⚠️ Event Pooling (purani problem)

Slide mein bataya gaya hai ki pehle React **performance ke liye events ko pool (reuse)** karta tha. Handler chalne ke baad event object ki properties **null** kar di jaati thi.

```jsx
function handleChange(e) {
  setTimeout(() => console.log(e.target.value), 1000); // ❌ purane React mein e.target null
}
```

| Purane React mein                                                    | Solution (purane React)                                        |
| -------------------------------------------------------------------- | -------------------------------------------------------------- |
| Async code (`setTimeout`, promise) mein `e.target` null ho jaata tha | `e.persist()` call karo, ya value pehle variable mein nikal lo |

```jsx
// Safe tarika (har version mein kaam karta hai)
function handleChange(e) {
  const value = e.target.value; // pehle nikal lo
  setTimeout(() => console.log(value), 1000); // ✅
}
```

> 📝 **Slide mein likha hai:** "React 16 and later versions mein ye problem nahi hai."
> **Correction:** Event pooling **React 17** mein hataya gaya tha. Yaani **React 17 aur uske baad** (aur aajkal ke React 18/19 mein) ye problem nahi hoti, aur `e.persist()` ab kuch nahi karta (no-op hai). Isliye table mein "React 16+" ki jagah "React 17+" samajhna sahi hai.
> Interview mein bolo: _"Event pooling React 17 se remove ho gaya hai."_

---

## 5. 🎯 Passing Arguments to Handlers

Handler mein extra value (jaise naam ya id) bhejni ho toh **arrow function** use karo.

```jsx
function App() {
  function handleClick(name) {
    alert(`Hello, ${name}`);
  }

  return <button onClick={() => handleClick("Manas")}>Greet</button>;
}
```

### 🚨 Beginner Mistake

```jsx
// ❌ GALAT: render hote hi chal jaata hai
<button onClick={handleClick('Manas')}>Greet</button>

// ✅ SAHI: click par chalta hai
<button onClick={() => handleClick('Manas')}>Greet</button>
```

| Code                                   | Kya hota hai                                                                                       |
| -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `onClick={handleClick('Manas')}`       | ❌ **Turant (immediately) chal jaata hai**, kyunki `handleClick('Manas')` ek function **call** hai |
| `onClick={() => handleClick('Manas')}` | ✅ Click par hi chalta hai, kyunki arrow function **ek function reference** hai                    |

> 💡 **Kyun?** `onClick` ko ek **function chahiye** jo baad mein chalega. `handleClick('Manas')` likhne par function abhi chal jaata hai aur uska **result** (`undefined`) `onClick` ko mil jaata hai.

### Event object aur argument dono chahiye?

```jsx
<button onClick={(e) => handleClick(e, "Manas")}>Greet</button>
```

### List mein arguments (real use)

```jsx
function List() {
  const users = [
    { id: 1, name: "Manas" },
    { id: 2, name: "Muskan" },
  ];

  function handleDelete(id) {
    console.log("Delete user:", id);
  }

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          {u.name}
          <button onClick={() => handleDelete(u.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

---

## 6. 🔄 Using State with Events

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  return <button onClick={handleIncrement}>Count: {count}</button>;
}
```

### Kya hota hai?

- **React `setState` par re-render karta hai.**
- **Event handlers current state ka snapshot capture karte hain** (jo value us render mein thi).

### ⚠️ Pitfall

> **State updates asynchronous hote hain, isliye turant naye value par depend mat karo.**

```jsx
function handleIncrement() {
  setCount(count + 1);
  console.log(count); // ❗ purana value dikhega, naya nahi
}
```

### ✅ Solutions

| Situation                                       | Kya karo                                                         |
| ----------------------------------------------- | ---------------------------------------------------------------- |
| Naya value purane par depend kare               | **Functional update**: `setCount(prev => prev + 1)`              |
| Updated value par kuch karna ho (API call, log) | `useEffect` use karo jo us state par depend kare                 |
| Bas turant naya value chahiye                   | Pehle variable mein calculate karo: `const newCount = count + 1` |

```jsx
useEffect(() => {
  console.log("Updated count:", count);
}, [count]);
```

> 📌 Detail ke liye **State README** ka "Common Pitfalls" section dekho (snapshot aur batching explain kiya hai).

---

## 7. 🛑 Prevent Default

> Browser ka **default behaviour** roka jata hai, jaise **form submit par page reload**.

```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault(); // form reload roko
    console.log("Form submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
}
```

### Kyun zaroori hai?

HTML form submit hone par **page reload** hota hai (server ko request jaati hai). React single-page app mein hum reload nahi chahte, kyunki **state aur data kho jaata hai**.

|             | `preventDefault()` ke bina   | `preventDefault()` ke saath |
| ----------- | ---------------------------- | --------------------------- |
| Form submit | Page **reload** ho jaata hai | Reload **nahi** hota        |
| State       | Reset ho jaati hai           | Bachi rehti hai             |
| Aapka code  | Shayad poora chale hi na     | Poora chalta hai            |

### Aur kahan use hota hai?

```jsx
// Link ka default navigation roko
<a
  href="/about"
  onClick={(e) => {
    e.preventDefault();
    console.log("clicked");
  }}
>
  About
</a>
```

### Real form example

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email:", email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
```

> 💡 Form ke andar `<button>` ka default type **submit** hota hai. Isliye slide ke example mein sirf `<button>Submit</button>` bhi form submit kar deta hai.

---

## 8. 🚧 Stop Propagation

> Event ko **parent tak jaane (bubbling) se rokta hai.**

### Bubbling kya hota hai?

Child par click hone par event **upar parent ki taraf bhi jaata hai** (bubble up).

```
  <div onClick={handleParent}>            ◄── 2️⃣ Parent bhi trigger hota hai
      <button onClick={handleChild}>      ◄── 1️⃣ Pehle child
  </div>
```

### Code

```jsx
function Parent() {
  function handleParent() {
    alert("Parent clicked");
  }

  function handleChild(e) {
    e.stopPropagation(); // bubbling roko
    alert("Child clicked");
  }

  return (
    <div onClick={handleParent}>
      <button onClick={handleChild}>Click Child</button>
    </div>
  );
}
```

### Kya hoga?

|                   | `stopPropagation()` ke bina             | `stopPropagation()` ke saath |
| ----------------- | --------------------------------------- | ---------------------------- |
| Button click par  | `Child clicked` ➜ phir `Parent clicked` | Sirf `Child clicked`         |
| Parent ka handler | Bhi chalta hai                          | Nahi chalta                  |

> 💡 **Real use:** Card par click se page khulta hai, lekin card ke andar "Delete" button par click se sirf delete ho, page na khule. Wahan delete button ke handler mein `e.stopPropagation()` lagate hain.

### 🆚 preventDefault vs stopPropagation

|                                | `preventDefault()`             | `stopPropagation()`           |
| ------------------------------ | ------------------------------ | ----------------------------- |
| Kya rokta hai                  | Browser ka **default action**  | Event ka **parent tak jaana** |
| Example                        | Form reload, link navigation   | Parent ka click handler       |
| Dono saath use kar sakte hain? | ✅ Haan, dono independent hain |                               |

---

## 9. 🧾 Common Mistakes & Fixes

| #   | Mistake                                                              | Kyun hota hai                                  | Fix                                                            |
| --- | -------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------- |
| 1   | Handler **turant chal jaata hai**                                    | `onClick={fn()}` likha                         | Arrow function use karo: `onClick={() => fn()}`                |
| 2   | **Event object lost** ho jaata hai (async code mein `e.target` null) | Purane React mein SyntheticEvent pool hota tha | **React 17+** use karo (ya value pehle variable mein nikal lo) |
| 3   | **Form reload** ho jaata hai                                         | `e.preventDefault()` bhool gaye                | Handler ke andar `e.preventDefault()` call karo                |
| 4   | `setState` ke turant baad **purana state** dikhta hai                | State update async hota hai                    | **Callback (functional update)** ya `useEffect` use karo       |
| 5   | **Parent aur child dono trigger** ho jaate hain                      | Event bubbling                                 | `e.stopPropagation()` use karo                                 |

> 📝 Slide ke table mein mistake 2 ka fix "Use React 16 or 16+" likha hai. Sahi version **React 17+** hai (Section 4 mein explain kiya hai).

### Aur kuch common galtiyan

| ❌ Galat                                   | ✅ Sahi                 | Kyun?                                     |
| ------------------------------------------ | ----------------------- | ----------------------------------------- |
| `onclick={...}`                            | `onClick={...}`         | camelCase zaroori                         |
| `onClick="handleClick()"`                  | `onClick={handleClick}` | String nahi, function reference           |
| `onClick={handleClick()}`                  | `onClick={handleClick}` | Bracket se turant call                    |
| `onChange` mein `e.value`                  | `e.target.value`        | Value `target` ke andar hoti hai          |
| `<input value={text} />` (bina `onChange`) | `onChange` bhi do       | Warna input type nahi hoga (read-only)    |
| `return false` se roko (HTML jaisa)        | `e.preventDefault()`    | React mein `return false` kaam nahi karta |

---

## 🎯 Interview Questions

### Q1. What are the differences between HTML and React event handling?

**✅ Answer**

- React uses **camelCase** event names (`onClick`) while HTML uses lowercase (`onclick`).
- In React, you pass a **function reference**, not a string.
- React events are **SyntheticEvents**, giving consistent behaviour across browsers.
- In React, you use `e.preventDefault()` instead of `return false` to stop default behaviour.

**🗣️ Hinglish Explanation**
HTML mein event ka naam lowercase hota hai aur code string mein dete hain. React mein naam camelCase hota hai (`onClick`) aur string ki jagah asli function dete hain. Saath mein React apna wrapper (SyntheticEvent) use karta hai, jisse har browser mein same behaviour milta hai.

---

### Q2. What is a SyntheticEvent in React?

**✅ Answer**

- It is **React's wrapper around the native browser event**.
- It provides **cross-browser consistency** with the same interface (`target`, `preventDefault`, `stopPropagation`).
- The original browser event is available via `e.nativeEvent`.

**🗣️ Hinglish Explanation**
Jab hum click ya typing handle karte hain, React asli browser event ko ek wrapper mein lapet ke handler ko deta hai. Isse Chrome, Firefox, Safari mein behaviour same rehta hai aur humein browser-specific code nahi likhna padta.

---

### Q3. Why does `onClick={handleClick()}` run immediately?

**✅ Answer**

- `handleClick()` is a **function call**, so it executes **during render**.
- Its **return value** (not the function) gets assigned to `onClick`.
- Fix: pass a reference `onClick={handleClick}` or wrap it: `onClick={() => handleClick()}`.

**🗣️ Hinglish Explanation**
Bracket `()` lagane ka matlab hai "function ko abhi chalao". Isliye render hote hi wo chal jaata hai aur `onClick` ko function ke bajaye uska result mil jaata hai. Click par chalana hai toh ya toh bina bracket ke naam do, ya arrow function mein lapet do.

---

### Q4. How do you pass arguments to an event handler?

**✅ Answer**

- Wrap the handler call in an **arrow function**: `onClick={() => handleClick('Manas')}`.
- If the event object is also needed: `onClick={(e) => handleClick(e, id)}`.

**🗣️ Hinglish Explanation**
`onClick` ko ek function chahiye jo click par chale. Isliye hum ek arrow function dete hain, aur uske andar apna handler argument ke saath call karte hain. Isse click par hi `handleClick('Manas')` chalta hai.

---

### Q5. What is the difference between `preventDefault()` and `stopPropagation()`?

**✅ Answer**

- `preventDefault()` **stops the browser's default action** (e.g., form reload, link navigation).
- `stopPropagation()` **stops the event from bubbling up** to parent elements.
- They are independent and can be used together.

**🗣️ Hinglish Explanation**
`preventDefault` browser ka apna kaam roka hai, jaise form submit par page reload. `stopPropagation` event ko parent tak jaane se roka hai, jaise child click par parent ka handler na chale. Dono alag cheezein hain.

---

### Q6. Why do we call `e.preventDefault()` in a form's `onSubmit`?

**✅ Answer**

- By default, a form submit **reloads the page**.
- In a React SPA, a reload would **reset the state** and interrupt the JavaScript logic.
- `e.preventDefault()` stops the reload so we can **handle the data in JavaScript**.

**🗣️ Hinglish Explanation**
HTML form submit hone par page reload karta hai. React app mein reload se state udd jaati hai aur humara code poora nahi chalta. Isliye `onSubmit` handler mein `e.preventDefault()` likhte hain, taaki page reload na ho aur hum data JavaScript mein sambhal sakein.

---

### Q7. What is event pooling and is it still relevant?

**✅ Answer**

- In older React (before 17), SyntheticEvents were **pooled (reused)** for performance, and their properties were **nullified after the handler** finished.
- Accessing `e.target` in async code (`setTimeout`) returned `null`; `e.persist()` was the fix.
- **React 17 removed event pooling**, so this is no longer an issue. `e.persist()` is now a no-op.

**🗣️ Hinglish Explanation**
Purane React mein performance ke liye event object dobara use hota tha, toh handler ke baad uski properties null ho jaati thi aur `setTimeout` mein `e.target` kaam nahi karta tha. React 17 se ye pooling hata di gayi, isliye ab ye problem nahi hoti. Interview mein ye batana ki ye ab purani baat hai, achha impression deta hai.

---

## ✅ Revision Checklist

- [ ] HTML vs React events ke 3 differences yaad hain
- [ ] `onClick`, `onChange`, `onSubmit` jaise common events pata hain
- [ ] Handler basic syntax (`onClick={handleClick}`) aata hai
- [ ] Event object (`e.target.value`) use karna aata hai
- [ ] SyntheticEvent kya hai, samajh aaya
- [ ] Event pooling ki purani problem aur React 17 mein removal pata hai
- [ ] Arguments pass karne ke liye arrow function use karna aata hai
- [ ] `onClick={fn()}` kyun galat hai, bata sakte ho
- [ ] State ke saath events (aur async state ka pitfall) samajh aaya
- [ ] `preventDefault()` aur `stopPropagation()` ka fark clear hai
- [ ] Common mistakes table ke 5 points yaad hain

---

⭐ Happy Coding!
