# 📥 React Imports — Complete Guide

React project mein alag-alag cheezein (components, CSS, images, packages, hooks, etc.) kaise **import** karte hain, ye README us sab ko simple Hinglish mein samjhata hai.

---

## ⚡ Quick Cheat Sheet

| # | Kya import karna hai | Syntax |
|---|----------------------|--------|
| 1 | Component (Default) | `import Header from './Header';` |
| 1 | Component (Named) | `import { Footer } from './Footer';` |
| 2 | CSS File | `import './App.css';` |
| 3 | Image | `import logo from './assets/logo.png';` |
| 4 | Function / Utility | `import { formatDate } from './utils/helper';` |
| 5 | JSON File | `import data from './data.json';` |
| 6 | NPM Package | `import axios from 'axios';` |
| 7 | Hooks | `import { useState, useEffect } from 'react';` |
| 8 | Fonts (CSS mein) | `@import url('https://fonts.googleapis.com/...');` |

---

## 1. 🧱 Components

### How to import:

```jsx
import Header from './Header';        // Default export
import { Footer } from './Footer';    // Named export
```

### How to use:

```jsx
<Header />
<Footer />
```

### 🤔 Default vs Named Export — fark kya hai?

| | Default Export | Named Export |
|---|---------------|--------------|
| Import syntax | `import Header from './Header'` | `import { Footer } from './Footer'` |
| Curly braces `{}` | ❌ Nahi lagte | ✅ Lagte hain |
| Naam | Import karte waqt **koi bhi naam** de sakte ho | **Exact same naam** likhna padta hai |
| Ek file mein kitne? | Sirf **1** | **Kitne bhi** |

### Export kaise karte hain? (Dono side dekho)

```jsx
// Header.jsx → Default export
function Header() {
  return <h1>Header</h1>;
}
export default Header;
```

```jsx
// Footer.jsx → Named export
export function Footer() {
  return <h1>Footer</h1>;
}
```

> 💡 **Yaad rakhne ka trick:**
> - **Default export** → `{}` nahi lagte, naam apni marzi ka.
> - **Named export** → `{}` lagte hain, naam same hona chahiye.

---

## 2. 🎨 CSS File

```jsx
import './App.css';
```

- CSS file ko import karne ke liye **koi variable nahi** chahiye, sirf path likho.
- Import karte hi us CSS ki styling apply ho jaati hai.

> 💡 **Note:** `index.css` global styles ke liye hoti hai, aur `App.css` `App.jsx` ki styling ke liye.

---

## 3. 🖼️ Images

### How to import:

```jsx
import logo from './assets/logo.png';
```

### How to use:

```jsx
<img src={logo} alt="Logo" />
```

> 💡 **Dhyan rakho:**
> - `src={logo}` mein **curly braces `{}`** lagte hain, kyunki `logo` ek JS variable hai.
> - `alt` attribute hamesha likho (accessibility ke liye achha hai).
> - Image `src/assets/` mein ho toh import karte hain. `public/` folder ki image ho toh seedha `/logo.png` likhte hain.

---

## 4. 🛠️ Modules / Functions / Utilities

```jsx
import { formatDate } from './utils/helper';
```

- Ye aapke **khud ke banaye hue helper functions** hote hain.
- Aam taur par inhe `utils/` ya `helpers/` folder mein rakhte hain.

```jsx
// utils/helper.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
```

```jsx
// App.jsx
import { formatDate } from './utils/helper';

<p>{formatDate("2025-01-15")}</p>
```

---

## 5. 📄 JSON Files

```jsx
import data from './data.json';
```

- JSON file ka data seedha import karke use kar sakte ho.
- Import hone par ye ek **JavaScript object / array** ban jaata hai.

```jsx
// data.json
[
  { "id": 1, "name": "Sahil" },
  { "id": 2, "name": "Rahul" }
]
```

```jsx
// App.jsx
import data from './data.json';

function App() {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

---

## 6. 📦 Third-party Packages (NPM Modules)

```jsx
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
```

- Ye wo packages hain jo **dusre developers ne banaye** hain aur NPM se milte hain.
- Inme path (`./`) nahi hota, **sirf package ka naam** hota hai.

### Pehle install karna zaroori hai:

```bash
npm install axios
npm install react-router-dom
```

> 💡 **Fark samjho:**
> - `'./Header'` → aapki **apni file** (path ke saath, `./` se shuru)
> - `'axios'` → **NPM package** (sirf naam, `node_modules` se aata hai)

---

## 7. 🪝 Hooks

```jsx
import { useState, useEffect } from 'react';
```

- Hooks `react` package se aate hain.
- Ye **named exports** hain, isliye `{}` ke andar likhte hain.
- Jitne hooks chahiye, utne comma lagake ek hi line mein import kar sakte ho.

```jsx
import { useState, useEffect, useRef } from 'react';
```

---

## 8. 🔤 Fonts and Assets

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```

- Ye **CSS file ke andar** likhte hain (JS file mein nahi).
- Google Fonts jaise external fonts ko use karne ka tarika hai.

### Use kaise karein?

```css
/* index.css */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

> 💡 **Note:** `@import` ko CSS file ke **sabse upar** likhna chahiye, warna kaam nahi karta.

---

## 🧪 Real Example: Ek File Mein Sab Kuch

```jsx
// App.jsx
import { useState, useEffect } from 'react';      // 7. Hooks
import axios from 'axios';                         // 6. NPM package
import Header from './Header';                     // 1. Default component
import { Footer } from './Footer';                 // 1. Named component
import { formatDate } from './utils/helper';       // 4. Utility function
import data from './data.json';                    // 5. JSON
import logo from './assets/logo.png';              // 3. Image
import './App.css';                                // 2. CSS

function App() {
  return (
    <div>
      <Header />
      <img src={logo} alt="Logo" />
      <Footer />
    </div>
  );
}

export default App;
```

---

## ⚠️ Common Mistakes

| ❌ Galat | ✅ Sahi | Kyun? |
|---------|--------|-------|
| `import { Header } from './Header'` (jab default export hai) | `import Header from './Header'` | Default export mein `{}` nahi lagte |
| `import Footer from './Footer'` (jab named export hai) | `import { Footer } from './Footer'` | Named export mein `{}` lagte hain |
| `import axios from './axios'` | `import axios from 'axios'` | NPM package ke liye `./` nahi lagta |
| `<img src="logo" />` | `<img src={logo} />` | Variable ke liye `{}` zaroori hai |
| `<header />` (chhota h) | `<Header />` (bada H) | Component ka naam hamesha **capital** letter se shuru hota hai |
| Package install kiye bina import karna | Pehle `npm install` karo | Warna "module not found" error aayega |

---

## ✅ Revision Checklist

- [ ] Default vs Named export ka fark clear hai
- [ ] CSS import ke liye variable nahi chahiye
- [ ] Image ko import karke `src={logo}` mein use karna aata hai
- [ ] Utility functions aur JSON import karna aata hai
- [ ] NPM package install karke import karna aata hai
- [ ] Hooks `'react'` se import hote hain
- [ ] Fonts ke liye CSS mein `@import url()` use hota hai

---

⭐ Happy Coding!