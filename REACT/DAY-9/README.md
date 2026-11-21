# 🎨 CSS in React — Complete Guide

React mein styling karne ke **3 main tarike** hain: **Regular CSS File**, **CSS Modules** aur **Inline CSS**. Is README mein teeno ko examples, comparison aur "kab kya use karein" ke saath simple Hinglish mein samjhaya gaya hai.

---

## 📚 Table of Contents

1. [Overview](#-overview)
2. [Regular CSS File](#1--regular-css-file)
3. [CSS Modules](#2--css-modules)
4. [Inline CSS](#3--inline-css)
5. [Teeno ka Comparison](#-teeno-ka-comparison)
6. [Kab kya use karein?](#-kab-kya-use-karein)
7. [Common Mistakes](#-common-mistakes)
8. [Revision Checklist](#-revision-checklist)

---

## 🧭 Overview

| # | Method | Scope | Ek line mein |
|---|--------|-------|--------------|
| 1 | **Regular CSS File** | 🌍 Global | CSS file import karo (jaise `App.css`), styles by default **global** hote hain |
| 2 | **CSS Modules** | 🔒 Component-level | CSS ko **component tak scope** karta hai (global conflicts nahi) |
| 3 | **Inline CSS** | 📍 Sirf us element par | `style` prop use hota hai, jo **JavaScript object** leta hai (string nahi) |

---

## 1. 🌍 Regular CSS File

Agar aap React mein koi CSS file import karte ho (jaise `App.css`), toh uski styles **by default global** hoti hain.

### JSX file

```jsx
// App.jsx
import './App.css';

function App() {
  return <h1 className="title">Hello React</h1>;
}

export default App;
```

### CSS file

```css
/* App.css */
.title {
  color: blue;
  font-size: 30px;
}
```

### Steps

1. Same folder mein `App.css` banao.
2. Component mein `import './App.css';` likho (variable ki zaroorat nahi).
3. Element par `className="title"` lagao.
4. CSS mein `.title { ... }` likho.

### ⚠️ "Global" ka matlab kya hai?

Import hote hi wo CSS **poori application par apply** ho sakti hai, sirf usi component par nahi.

```css
/* A.css */
.title { color: blue; }

/* B.css */
.title { color: red; }
```

Agar dono files import hain, toh dono mein `.title` naam same hai aur **ek dusre ko overwrite karenge**. Bade projects mein isi se **style conflicts** hote hain.

> 💡 **Simple samjho:** Class names ek common "mohalle" mein rehte hain. Do logon ka naam same ho gaya toh confusion hoga.

### ✅ Pros / ❌ Cons

| ✅ Pros | ❌ Cons |
|--------|--------|
| Simple, familiar (normal CSS jaisa) | Styles global hoti hain |
| Pseudo-classes (`:hover`), media queries, animations sab chalte hain | Bade projects mein naam conflicts |
| Global styles ke liye best (`index.css`) | Kaun si style kahan se aa rahi hai, track karna mushkil |

---

## 2. 🔒 CSS Modules

CSS Modules CSS ko **component tak scope** kar dete hain, isliye **global conflicts nahi hote**.

### JSX file

```jsx
// Button.jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.btn}>Click Me</button>;
}

export default Button;
```

### CSS file

```css
/* Button.module.css */
.btn {
  background: green;
  color: white;
  padding: 10px;
}
```

### Rules

| Rule | Detail |
|------|--------|
| File ka naam | `Something.module.css` (**`.module.css` zaroori hai**) |
| Import | `import styles from './Button.module.css';` (variable ke saath) |
| Use | `className={styles.btn}` (**curly braces `{ }` ke saath**) |

### 🔍 Behind the scenes: scope kaise hota hai?

Build tool har class ka naam **unique bana deta hai**:

```
.btn  ──►  .Button_btn__x7Kd2      (unique, hashed name)
```

Isliye agar do alag components mein `.btn` ho, toh dono ke final naam alag honge aur **kabhi clash nahi karenge**.

```jsx
// Button.module.css ka .btn   → Button_btn__x7Kd2
// Card.module.css ka .btn     → Card_btn__a9Pq1
// Dono alag hain! ✅
```

### 💡 Kuch useful tips

**1. Hyphen wali class naam (jaise `.my-btn`):**

```css
.my-btn { color: red; }
```
```jsx
<button className={styles['my-btn']}>Click</button>   // bracket notation
```
> Isliye modules mein class naam **camelCase** rakhna aasaan hota hai (`.myBtn` → `styles.myBtn`).

**2. Do classes ek saath lagana:**

```jsx
<button className={`${styles.btn} ${styles.large}`}>Click</button>
```

### ✅ Pros / ❌ Cons

| ✅ Pros | ❌ Cons |
|--------|--------|
| Styles component tak limited, conflicts nahi | Har component ke liye alag `.module.css` file |
| Normal CSS ki saari power milti hai | Global styles ke liye alag se regular CSS chahiye |
| Bade projects ke liye safe | Dynamic styling ke liye extra kaam |

---

## 3. 📍 Inline CSS

Inline CSS mein **`style` prop** use hota hai, jo **JavaScript object** leta hai, **string nahi**.

```jsx
function App() {
  return (
    <h1
      style={{
        color: 'red',
        fontSize: '24px'
      }}
    >
      Hello Inline
    </h1>
  );
}
```

### Double curly braces `{{ }}` kyun?

```
style={{ color: 'red' }}
       │└─────────────┘│
       │  JS object     │
       └ JSX expression ┘
```

- **Bahar wale `{ }`** → JSX mein JavaScript likhne ke liye
- **Andar wale `{ }`** → style ka JavaScript object

### 📏 Inline CSS ke rules

| Rule | ❌ Galat | ✅ Sahi |
|------|---------|--------|
| Style object hota hai | `style="color: red"` | `style={{ color: 'red' }}` |
| Property naam camelCase | `'font-size': '24px'` | `fontSize: '24px'` |
| Value string mein | `fontSize: 24px` | `fontSize: '24px'` |
| Properties comma se alag | `color: 'red' fontSize: '24px'` | `color: 'red', fontSize: '24px'` |

**CSS → JSX property naam:**

| CSS | JSX |
|-----|-----|
| `font-size` | `fontSize` |
| `background-color` | `backgroundColor` |
| `margin-top` | `marginTop` |
| `border-radius` | `borderRadius` |

> 💡 **Shortcut:** Number likhoge toh React khud `px` laga deta hai: `fontSize: 24` = `24px`.

### 🔄 Dynamic styling (Inline ka sabse bada fayda)

Kyunki style ek JS object hai, toh hum **variables aur conditions** use kar sakte hain:

```jsx
function Status({ isOnline }) {
  return (
    <p style={{ color: isOnline ? 'green' : 'red' }}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  );
}
```

### 🧹 Style object alag variable mein rakhna

```jsx
const headingStyle = {
  color: 'red',
  fontSize: '24px'
};

function App() {
  return <h1 style={headingStyle}>Hello Inline</h1>;
}
```

### ✅ Pros / ❌ Cons

| ✅ Pros | ❌ Cons |
|--------|--------|
| Quick, chhote changes ke liye best | `:hover`, `:focus` jaise pseudo-classes nahi chalte |
| Dynamic values aasani se (state/props se) | Media queries nahi chalti |
| Koi extra file nahi | Bade projects mein messy ho jaata hai |
| Scope sirf usi element par | Code reuse mushkil |

---

## 📊 Teeno ka Comparison

| Feature | Regular CSS | CSS Modules | Inline CSS |
|---------|-------------|-------------|------------|
| **Scope** | 🌍 Global | 🔒 Component-level | 📍 Single element |
| **File** | `App.css` | `Button.module.css` | Koi file nahi |
| **Import** | `import './App.css'` | `import styles from './X.module.css'` | Import nahi chahiye |
| **Use** | `className="title"` | `className={styles.btn}` | `style={{ color: 'red' }}` |
| **Naam conflict** | ⚠️ Ho sakta hai | ✅ Nahi hota | ✅ Nahi hota |
| **Pseudo-classes / Media queries** | ✅ Haan | ✅ Haan | ❌ Nahi |
| **Dynamic styling** | ⚠️ Thoda mushkil | ⚠️ Thoda mushkil | ✅ Bahut aasaan |
| **Property naam** | `font-size` | `font-size` | `fontSize` (camelCase) |

---

## 🎯 Kab kya use karein?

| Situation | Best Choice |
|-----------|-------------|
| Poore app ke global styles (reset, fonts, body) | 🌍 **Regular CSS** (`index.css`) |
| Chhota project, simple styling | 🌍 **Regular CSS** |
| Component-specific styling, conflicts avoid karne hain | 🔒 **CSS Modules** |
| Bada project / team ke saath kaam | 🔒 **CSS Modules** |
| State/props ke hisaab se changing value (color, width) | 📍 **Inline CSS** |
| Bas ek-do quick styles | 📍 **Inline CSS** |

> 💡 **Real projects mein:** Aksar teeno **mix** karke use karte hain, jaise global styles `index.css` mein, component styles CSS Modules mein, aur dynamic values inline.

---

## ⚠️ Common Mistakes

| ❌ Galat | ✅ Sahi | Kyun? |
|---------|--------|-------|
| `<h1 class="title">` | `<h1 className="title">` | JSX mein `class` nahi, `className` |
| `style="color: red"` | `style={{ color: 'red' }}` | Inline style object hota hai |
| `style={{ font-size: '24px' }}` | `style={{ fontSize: '24px' }}` | camelCase use karo |
| `import styles from './Button.css'` | `import styles from './Button.module.css'` | Modules ke liye `.module.css` zaroori |
| `className="styles.btn"` | `className={styles.btn}` | Variable ke liye `{ }` lagao |
| `import './Button.module.css'` (modules mein bina variable) | `import styles from './Button.module.css'` | Classes access karne ke liye `styles` chahiye |
| Do files mein same class naam (regular CSS) | CSS Modules use karo | Global conflict hoga |

---

## 🔮 Aage Kya?

Roadmap ke hisaab se aage aap **Tailwind CSS** seekhoge (utility-first styling), jo bade projects mein bahut popular hai. Uske baad styled-components, ShadCN, Material UI jaise tools bhi aate hain. Abhi ye 3 basic tarike achhe se samajh lo, kyunki baaki sab inhi ke concepts par based hain.

---

## ✅ Revision Checklist

- [ ] Regular CSS global kyun hoti hai, samajh aaya
- [ ] CSS Modules ka `.module.css` naam aur `styles.btn` syntax aata hai
- [ ] CSS Modules mein class naam unique kaise bante hain, pata hai
- [ ] Inline style object hota hai (`{{ }}`), string nahi
- [ ] Inline mein camelCase use karna aata hai (`fontSize`)
- [ ] Inline CSS ki limitations (hover, media queries) yaad hain
- [ ] Teeno methods ka fark aur use-case bata sakte ho

---

⭐ Happy Coding!