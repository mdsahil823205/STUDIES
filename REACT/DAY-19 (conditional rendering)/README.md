# 🔀 Conditional Rendering in React — Complete Guide

Conditional rendering matlab **condition ke hisaab se UI dikhana ya chhupana**. Is README mein `if/else`, ternary, `&&`, variables, `null` return, conditional className, state ke saath toggle, conditional components, `switch` aur object mapping, saath mein common mistakes aur best practices Hinglish mein samjhaye gaye hain.

---

## 📚 Table of Contents

1. [Conditional Rendering kya hai?](#1--conditional-rendering-kya-hai)
2. [Using if/else](#2--using-ifelse)
3. [Ternary Operator](#3--ternary-operator-inline-rendering)
4. [Logical AND (&&)](#4--logical-and--operator)
5. [With Variables](#5--conditional-rendering-with-variables)
6. [Conditional CSS / className](#6--conditional-css-or-classname)
7. [With State](#7--conditional-rendering-with-state)
8. [Returning null](#8--returning-null-hide-completely)
9. [Conditional Components](#9--advanced-conditional-components)
10. [switch Statement](#10--using-switch-statement)
11. [Object Mapping](#11--using-mapping-object-lookup)
12. [Common Mistakes](#12--common-mistakes)
13. [Best Practices](#13--best-practices)
14. [Interview Questions](#-interview-questions)
15. [Revision Checklist](#-revision-checklist)

---

## ⚡ Quick Summary: Kab kya use karein?

| Situation                              | Best tarika                           |
| -------------------------------------- | ------------------------------------- |
| **2 options** (A ya B)                 | **Ternary** `condition ? A : B`       |
| **Sirf show/hide** (ek cheez)          | **`&&`** `condition && <A />`         |
| **Poora component hide**               | **`return null`**                     |
| **Logic complex, return clean rakhna** | **Variable** mein JSX store karo      |
| **Early exit** (loading, error)        | **`if` + `return`** component ke upar |
| **3+ conditions**                      | **`switch`** ya **object mapping**    |
| **Style badalni hai**                  | **Conditional `className`**           |

---

## 1. 🤔 Conditional Rendering kya hai?

- React mein **JSX ke andar `if/else` statements nahi** chalte.
- Isliye hum **conditional rendering** use karte hain ye decide karne ke liye ki **kya dikhana hai**.
- Conditional rendering matlab: **kuch conditions ya state ke basis par UI elements dikhana.**

```
isLoggedIn = true   ──►  "Welcome back!" dikhao
isLoggedIn = false  ──►  "Please log in" dikhao
```

> 💡 **Simple samjho:** Jaise ATM: card dalo toh menu aata hai, na dalo toh "Please insert card". Same component, condition ke hisaab se alag screen.

### ❓ JSX mein `if` kyun nahi chalta?

JSX ke `{ }` ke andar sirf **expressions** (jo value return karein) jaate hain, **statements** (`if`, `for`) nahi.

```jsx
// ❌ GALAT
<div>
  { if (isLoggedIn) { <h1>Hi</h1> } }
</div>
```

---

## 2. 🔧 Using if/else

```jsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please log in</h1>;
}
```

- **React components alag-alag JSX return kar sakte hain** logic ke hisaab se.
- `if` ko **component function ke andar (return se pehle)** likhte hain, JSX ke andar nahi.

> ⚠️ **Note (slide se):** `if` ko JSX tags ke **andar** use karne ki koshish mat karo, ye allowed nahi hai.

### ✅ Kab use karein?

| Use case                     | Example                                            |
| ---------------------------- | -------------------------------------------------- |
| **Early return**             | Loading ya error par pehle hi alag UI return karna |
| Bade blocks jo alag-alag hon | Poora alag screen                                  |

```jsx
function Profile({ user, isLoading }) {
  if (isLoading) return <p>Loading...</p>; // early return
  if (!user) return <p>No user found</p>;

  return <h1>Hello, {user.name}</h1>;
}
```

---

## 3. ❓ Ternary Operator (Inline Rendering)

### Syntax

```jsx
condition ? <ComponentA /> : <ComponentB />;
```

### Example

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}</div>
  );
}
```

| Part                       | Matlab                  |
| -------------------------- | ----------------------- |
| `isLoggedIn ?`             | Condition check         |
| `<h1>Welcome Back!</h1>`   | Agar **true**           |
| `: <h1>Please Log In</h1>` | Agar **false** (`else`) |

> 📝 **Note (slide se):** **Complex ternaries** (`? : ? : ? :` kai baar nested) se bachho, isse code ki **readability kam** hoti hai.

```jsx
// ❌ Padhne mein mushkil
{
  status === "loading" ? (
    <Loader />
  ) : status === "error" ? (
    <Error />
  ) : status === "success" ? (
    <Data />
  ) : null;
}

// ✅ Isko switch ya object mapping se likho (Section 10, 11)
```

> 💡 **Kab:** Jab **do options mein se ek** dikhana ho (A **ya** B).

---

## 4. ✅ Logical AND (`&&`) Operator

### Syntax

```jsx
condition && <Component />;
```

### Example

```jsx
function Notification({ hasMessage }) {
  return <div>{hasMessage && <p>You have new messages!</p>}</div>;
}
```

### 📝 Note (slide se)

| Condition    | Result                                                          |
| ------------ | --------------------------------------------------------------- |
| **true**     | Element **render hota hai**                                     |
| **false**    | **Kuch render nahi hota**                                       |
| **Use case** | Jab aap **sirf kuch dikhana** chahte ho (alternate option nahi) |

```
hasMessage = true   ──►  <p>You have new messages!</p> dikhega
hasMessage = false  ──►  kuch nahi
```

### ⚠️ Gotcha: Number ke saath `&&` (0 dikh jaata hai!)

```jsx
const count = 0;

{
  count && <p>Items: {count}</p>;
} // ❌ screen par "0" dikhega
{
  count > 0 && <p>Items: {count}</p>;
} // ✅ sahi
```

**Kyun?** `false`, `null`, `undefined` React render nahi karta, lekin **`0` ek valid number hai**, isliye `0 && ...` ka result `0` aata hai aur React use screen par dikha deta hai.

> 💡 **Rule:** `&&` ke left side mein **boolean condition** rakho (`count > 0`, `Boolean(count)`), seedha number ya string nahi.

### 🆚 Ternary vs &&

|           | Ternary `? :`         | `&&`                         |
| --------- | --------------------- | ---------------------------- |
| Options   | **Do** (A ya B)       | **Ek** (dikhao ya kuch nahi) |
| Else case | ✅ Hota hai           | ❌ Nahi hota                 |
| Example   | Login / Logout button | "New messages" badge         |

---

## 5. 📦 Conditional Rendering with Variables

> **JSX ko variable mein store karo.** Isse `return` statement **clean aur readable** rehta hai.

```jsx
function Dashboard({ option }) {
  let content;

  if (option === "a") {
    content = <ComponentA />;
  } else if (option === "b") {
    content = <ComponentB />;
  } else {
    content = <ComponentC />;
  }

  return <div>{content}</div>;
}
```

### Flow

```
option = "a"  ──►  content = <ComponentA />  ──►  return <div>{content}</div>
option = "b"  ──►  content = <ComponentB />
other         ──►  content = <ComponentC />
```

> 💡 **Fayda:** Logic upar alag, UI neeche saaf. `return` ke andar bhaari ternary nahi likhni padti.

> ⚠️ Condition mein `===` use karo (strict equality), `==` nahi (Section 12).

---

## 6. 🎨 Conditional CSS or ClassName

```jsx
function Button({ isActive }) {
  return (
    <button className={isActive ? "btn-active" : "btn-inactive"}>
      Click Me
    </button>
  );
}
```

- Condition ke hisaab se **alag CSS class** lagao.
- `isActive` true hai → `btn-active`, warna `btn-inactive`.

### Aur kuch patterns

```jsx
// Base class + conditional class
<button className={`btn ${isActive ? "active" : ""}`}>Click</button>

// Inline style conditional
<p style={{ color: isError ? "red" : "green" }}>Message</p>
```

> 💡 Tailwind ke saath bhi same: `className={isActive ? "bg-blue-500" : "bg-gray-300"}` (poori class likho, tod ke mat banao).

---

## 7. 🔁 Conditional Rendering with State

> State ke saath conditional rendering se **toggle (show/hide)** banta hai.

```jsx
import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Message
      </button>

      {show && <p>This is a secret message!</p>}
    </div>
  );
}
```

### Kaise kaam karta hai?

| Step | Kya hota hai                                                                                   |
| ---- | ---------------------------------------------------------------------------------------------- |
| 1    | `show` state shuru mein `true` hai, message dikhta hai, button par **"Hide Message"**          |
| 2    | Button click → `setShow(!show)` → `show` ulta ho jaata hai (`false`)                           |
| 3    | Component re-render, `show && ...` false hai, message **gayab**, button par **"Show Message"** |
| 4    | Dobara click → wapas dikhta hai                                                                |

### Is example mein kya-kya use hua?

| Concept           | Kahan                                            |
| ----------------- | ------------------------------------------------ |
| **Ternary**       | Button ka text: `{show ? "Hide" : "Show"}`       |
| **`&&`**          | Message dikhana/chhupana: `{show && <p>...</p>}` |
| **State + event** | `useState` aur `onClick`                         |

> 💡 Ye pattern modals, dropdowns, accordions, password show/hide sab jagah use hota hai.

---

## 8. 🚫 Returning `null` (Hide Completely)

```jsx
function Alert({ show }) {
  if (!show) return null;

  return <div className="alert">This is an alert!</div>;
}
```

- **`return null` ka matlab: "kuch bhi render mat karo."**
- **Modal ya popup components** mein common hai.

```jsx
<Alert show={false} />   // kuch nahi dikhega
<Alert show={true} />    // alert dikhega
```

### `null` vs `undefined` vs `false`

| Return value                           | Result                                                      |
| -------------------------------------- | ----------------------------------------------------------- |
| `null`                                 | ✅ Kuch render nahi hota (recommended)                      |
| `false`                                | Kuch render nahi hota                                       |
| `undefined`                            | React 18+ mein theek hai (purane React mein error aata tha) |
| Kuch return hi na kiya (`return` miss) | Purane React mein error                                     |

> 💡 **Hamesha explicitly `return null` likho**, ye saaf hai aur safe bhi.

### 🆚 `return null` vs CSS se hide karna

|          | `return null`                              | CSS (`display: none`)                        |
| -------- | ------------------------------------------ | -------------------------------------------- |
| DOM mein | **Hota hi nahi**                           | Hota hai, bas chhupa hai                     |
| State    | Component hatne par **reset** ho jaati hai | Bachi rehti hai                              |
| Kab      | Jab poori tarah hatana ho                  | Jab state bachaani ho ya baar-baar toggle ho |

---

## 9. 🧬 Advanced: Conditional Components

> **Components ko hi conditionally select kar sakte ho.**

```jsx
function Layout({ type }) {
  const Component = type === "home" ? HomePage : AboutPage;
  return <Component />;
}
```

### Kaise?

1. Condition ke hisaab se **component ko variable mein** rakho (`HomePage` ya `AboutPage`).
2. Us variable ko **JSX tag ki tarah** use karo: `<Component />`.

> ⚠️ **Variable ka naam capital se shuru hona chahiye** (`Component`, `component` nahi). Warna JSX use HTML tag samajh lega.

```jsx
// ❌ lowercase: HTML tag samjha jaayega
const component = ...;
return <component />;

// ✅ Capital: React component
const Component = ...;
return <Component />;
```

### ✅ Kab useful?

- **Routing jaise patterns** (page ke hisaab se component)
- **Dynamic layouts** (admin ya user layout)
- Tabs (har tab ka alag component)

```jsx
const tabs = { home: HomePage, about: AboutPage, contact: ContactPage };

function Tabs({ active }) {
  const ActiveTab = tabs[active];
  return <ActiveTab />;
}
```

---

## 10. 🔀 Using `switch` Statement

> Jab **3 ya zyada conditions** hon, `if/else` messy ho jaata hai. Tab **`switch`** code ko **cleaner aur readable** banata hai.

```jsx
function StatusMessage({ status }) {
  switch (status) {
    case "loading":
      return <p>Loading...</p>;

    case "success":
      return <p>Data loaded successfully ✅</p>;

    case "error":
      return <p>Something went wrong ❌</p>;

    default:
      return <p>Idle state...</p>;
  }
}
```

### Kaise kaam karta hai?

| `status` ki value       | Output                        |
| ----------------------- | ----------------------------- |
| `"loading"`             | `Loading...`                  |
| `"success"`             | `Data loaded successfully ✅` |
| `"error"`               | `Something went wrong ❌`     |
| Koi aur (**`default`**) | `Idle state...`               |

> 💡 **`default` zaroor likho**, taaki koi unexpected value aaye toh bhi UI khaali na rahe.

> ⚠️ `switch` ko JSX ke **andar** nahi likh sakte (statement hai). Component function ke andar, `return` se pehle ya function se hi return karo.

---

## 11. 🗺️ Using Mapping (Object Lookup)

> **Aur zyada elegant aur scalable** tarika: **object maps** mein UI patterns store karo.

```jsx
function StatusMessage({ status }) {
  const statusMap = {
    loading: <p>Loading...</p>,
    success: <p>Data loaded successfully ✅</p>,
    error: <p>Something went wrong ❌</p>,
  };

  return statusMap[status] || <p>Idle state...</p>;
}
```

### Kaise kaam karta hai?

| Part                        | Matlab                                                           |
| --------------------------- | ---------------------------------------------------------------- |
| `statusMap`                 | Key = status, Value = us status ka JSX                           |
| `statusMap[status]`         | Status ke hisaab se JSX nikalna                                  |
| `\|\| <p>Idle state...</p>` | Agar status map mein nahi mila (`undefined`), toh **default** UI |

### 🆚 switch vs Object Mapping

|                     | `switch`                           | Object Mapping                         |
| ------------------- | ---------------------------------- | -------------------------------------- |
| Code                | Lamba (`case`, `return` baar-baar) | **Chhota aur clean**                   |
| Naya case add karna | Naya `case` likho                  | Naya key-value daalo                   |
| Dynamic banana      | Mushkil                            | Aasaan (map bahar se bhi aa sakta hai) |
| Default             | `default:`                         | `\|\| <Default />`                     |

> 💡 **Rule of thumb:** 2 conditions → ternary. 3-4 simple → `switch` ya map. Zyada ya reuse karne wale → **object map**.

---

## 12. ⚠️ Common Mistakes

| #   | ❌ Mistake                                                         | ✅ Fix                                     |
| --- | ------------------------------------------------------------------ | ------------------------------------------ |
| 1   | **JSX ke andar `if` likhna**                                       | **Ternary ya logical AND** use karo        |
| 2   | **Bahut zyada ternaries nest karna** (code unreadable)             | `switch`, mapping ya variable use karo     |
| 3   | **"Else" case handle karna bhool jaana** (UI khaali reh jaati hai) | Hamesha fallback/default UI do             |
| 4   | **`==` ki jagah `===`** use karna chahiye (unexpected behavior)    | Strict equality `===` use karo             |
| 5   | **`return null` bhool jaana** (unnecessary rendering)              | Jab kuch nahi dikhana, `return null` likho |

### Aur kuch gotchas

| ❌ Galat                                   | ✅ Sahi                                | Kyun?                                 |
| ------------------------------------------ | -------------------------------------- | ------------------------------------- |
| `{count && <p>..</p>}` (count = 0)         | `{count > 0 && <p>..</p>}`             | `0` screen par dikh jaata hai         |
| `const component = ...; <component />`     | `const Component = ...; <Component />` | Component naam capital se             |
| `{if (x) {...}}`                           | `{x ? <A /> : <B />}`                  | JSX mein statements nahi chalte       |
| `{items.length && <List />}`               | `{items.length > 0 && <List />}`       | Khaali array par `0` dikhega          |
| Har render par naya loader (without `key`) | Component structure stable rakho       | State unexpectedly reset ho sakti hai |

### `==` vs `===` ka example

```js
0 == false; // true  ❌ (surprising)
0 === false; // false ✅

"" == false; // true  ❌
"" === false; // false ✅
```

---

## 13. 🌟 Best Practices

- ✅ **Conditional logic ko chhote functions mein nikalo** (extract karo)
- ✅ **JSX clean rakho:** logic bahar, UI andar
- ✅ **Readability ko compactness par prefer karo** (chhota code zaroori nahi achha ho)
- ✅ **Multiple conditions ke liye `switch` ya mapping** use karo

### Example: Extract karna

```jsx
// ❌ Return ke andar bhaari logic
return (
  <div>
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Error />
    ) : data.length > 0 ? (
      <List data={data} />
    ) : (
      <Empty />
    )}
  </div>
);

// ✅ Alag function mein nikalo
function renderContent() {
  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (data.length === 0) return <Empty />;
  return <List data={data} />;
}

return <div>{renderContent()}</div>;
```

---

## 🎯 Interview Questions

### Q1. What is conditional rendering in React?

**✅ Answer**

- It is **displaying different UI elements based on conditions or state**.
- Since `if/else` statements cannot be used directly inside JSX, we use **ternary, `&&`, early returns, `switch` or object maps**.

**🗣️ Hinglish Explanation**
Conditional rendering matlab condition ya state ke hisaab se alag-alag UI dikhana, jaise login hai toh "Welcome", nahi hai toh "Please log in". JSX ke andar `if` nahi chalta, isliye ternary, `&&`, ya component ke upar `if` use karte hain.

---

### Q2. What are the different ways to do conditional rendering?

**✅ Answer**

- `if/else` with early return
- **Ternary operator** (`? :`)
- **Logical AND** (`&&`)
- **Variables** storing JSX
- **Returning `null`**
- **`switch`** statement
- **Object mapping** (lookup)

**🗣️ Hinglish Explanation**
Kai tarike hain: `if/else`, ternary (do options ke liye), `&&` (sirf dikhana ho toh), variable mein JSX rakhna, `null` return karna (kuch nahi dikhana), `switch` aur object map (jab zyada conditions ho).

---

### Q3. When should you use ternary and when `&&`?

**✅ Answer**

- Use **ternary** when you have **two alternatives** (A or B).
- Use **`&&`** when you want to **show something only if a condition is true**, with no alternative.

**🗣️ Hinglish Explanation**
Do options mein se ek dikhana ho (login/logout button) toh ternary. Sirf ek cheez dikhani ho ya kuch nahi (jaise "new messages" badge) toh `&&`.

---

### Q4. What is the problem with `{count && <Component />}` when `count` is 0?

**✅ Answer**

- `0` is a **falsy but renderable** value, so `0 && <Component />` evaluates to `0`.
- React renders `0` on the screen.
- Fix: use a **boolean condition** like `{count > 0 && <Component />}`.

**🗣️ Hinglish Explanation**
React `false`, `null`, `undefined` ko render nahi karta, lekin `0` ko number ki tarah dikha deta hai. Isliye `count = 0` hone par screen par `0` dikh jaata hai. Fix: `count > 0 && ...` likho.

---

### Q5. What does returning `null` from a component do?

**✅ Answer**

- It tells React to **render nothing** for that component.
- The component stays in the tree, but produces **no DOM output**.
- Commonly used for **modals, popups and alerts**.

**🗣️ Hinglish Explanation**
Component se `null` return karne ka matlab hai "kuch bhi mat dikhao". Component code mein rehta hai, par screen par kuch nahi aata. Modal, popup, alert jaise components mein ye bahut use hota hai.

---

### Q6. How would you handle 3 or more conditions cleanly?

**✅ Answer**

- Use a **`switch` statement** with a `default` case, or
- Use an **object map** like `statusMap[status] || <Default />`.
- Avoid deeply **nested ternaries** as they hurt readability.

**🗣️ Hinglish Explanation**
3 ya zyada conditions mein `if/else` aur nested ternary messy ho jaate hain. `switch` (har case ek status) ya object map use karo, jisme status ke hisaab se JSX store hota hai. Object map sabse chhota aur scalable hai, naya status add karna bhi aasaan.

---

### Q7. Difference between `return null` and hiding with CSS?

**✅ Answer**

- `return null` **removes the element from the DOM** (and the component's state is lost when it unmounts).
- CSS (`display: none`) keeps the element in the DOM, **just hidden**, and preserves its state.

**🗣️ Hinglish Explanation**
`return null` par element DOM mein hota hi nahi, aur component hatne par uski state reset ho jaati hai. CSS se chhupane par element DOM mein rehta hai, bas dikhta nahi, aur state bachi rehti hai. Jab baar-baar show/hide ho aur state bachaani ho, CSS ka option sochte hain.

---

## ✅ Revision Checklist

- [ ] Conditional rendering kya hai aur JSX mein `if` kyun nahi chalta
- [ ] Early return ke saath `if/else` use karna aata hai
- [ ] Ternary (2 options) aur `&&` (1 option) ka fark clear hai
- [ ] `0 &&` wali gotcha pata hai
- [ ] JSX ko variable mein store karna aata hai
- [ ] Conditional `className` likhna aata hai
- [ ] State se show/hide toggle bana sakte ho
- [ ] `return null` kab aur kyun use hota hai, pata hai
- [ ] Conditional components (capital variable naam) samajh aaye
- [ ] `switch` aur object mapping likhna aata hai
- [ ] `===` vs `==` aur nested ternary se bachna yaad hai

---

⭐ Happy Coding!
