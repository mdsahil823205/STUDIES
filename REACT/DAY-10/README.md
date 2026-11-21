# 🌬️ Tailwind CSS with React — Complete Guide

Tailwind CSS ek **utility-first CSS framework** hai. Isme alag CSS file mein styles likhne ki jagah, hum **seedha HTML/JSX ke `className` mein chhoti-chhoti utility classes** lagate hain. Is README mein setup se lekar responsive design, hover states, dark mode aur customization tak sab Hinglish mein hai.

---

## 📚 Table of Contents

1. [Tailwind CSS kya hai?](#1--tailwind-css-kya-hai)
2. [Setup (React + Vite)](#2--setup-react--vite)
3. [Basic Utility Classes](#3--basic-utility-classes)
4. [Flexbox & Grid](#4--flexbox--grid)
5. [Responsive Design](#5--responsive-design)
6. [Hover, Focus & States](#6--hover-focus--states)
7. [Dark Mode](#7--dark-mode)
8. [Arbitrary Values](#8--arbitrary-values)
9. [Customization (`@theme`)](#9--customization-theme)
10. [Conditional / Dynamic Classes](#10--conditional--dynamic-classes)
11. [Real Example: Card Component](#11--real-example-card-component)
12. [Tailwind vs Baaki Methods](#12--tailwind-vs-baaki-methods)
13. [Common Mistakes](#-common-mistakes)
14. [Revision Checklist](#-revision-checklist)

---

## 1. 🤔 Tailwind CSS kya hai?

- **Utility-first CSS framework.**
- Har class ek **chhota sa kaam** karti hai (`p-4` = padding, `text-red-500` = red text, `flex` = display flex).
- Aap **naya CSS likhne ki jagah**, ready-made classes ko **combine** karte ho.
- Sirf wahi CSS final build mein aati hai jo aapne **actually use** ki hai, isliye file size chhota rehta hai.

### Normal CSS vs Tailwind

```css
/* Normal CSS */
.btn {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
}
```
```jsx
<button className="btn">Click</button>
```

```jsx
{/* Tailwind: CSS file likhne ki zaroorat nahi */}
<button className="bg-blue-500 text-white px-4 py-2 rounded-md">
  Click
</button>
```

> 💡 **Simple samjho:** Pehle aap khud kapde silte the (custom CSS). Tailwind mein ready-made kapdon ke tukde milte hain, bas jod do.

### ✅ Kyun use karte hain?

| Fayda | Matlab |
|-------|--------|
| ⚡ Fast development | CSS file aur class naam sochne ki tension nahi |
| 🎯 Consistent design | Spacing, colors, sizes ek fixed scale par chalte hain |
| 📱 Responsive aasaan | `md:`, `lg:` jaise prefixes se |
| 📦 Chhota bundle | Sirf use ki hui classes hi build mein aati hain |
| 🧩 Component ke saath fit | Style aur JSX ek hi jagah |

---

## 2. ⚙️ Setup (React + Vite)

> Ye steps **Tailwind v4** ke hain (current version). Isme `tailwind.config.js` aur PostCSS config ki zaroorat nahi hoti.

### Step 1: Vite + React project banao

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

### Step 2: Tailwind install karo

```bash
npm install tailwindcss @tailwindcss/vite
```

### Step 3: `vite.config.js` mein plugin add karo

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### Step 4: CSS file mein Tailwind import karo

```css
/* src/index.css */
@import "tailwindcss";
```

### Step 5: CSS file entry point mein import hai ya nahi, check karo

```jsx
// src/main.jsx
import './index.css'
```

### Step 6: Test karo

```jsx
// src/App.jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline text-blue-600">
      Hello Tailwind!
    </h1>
  )
}
```

```bash
npm run dev
```

Agar text bada, bold, underlined aur blue dikhe, toh Tailwind chal gaya ✅

### 📝 Old (v3) vs New (v4) setup

| | Tailwind v3 (purana) | Tailwind v4 (naya) |
|---|---------------------|--------------------|
| Install | `tailwindcss postcss autoprefixer` | `tailwindcss @tailwindcss/vite` |
| Config file | `tailwind.config.js` + `postcss.config.js` | ❌ Zaroori nahi |
| CSS file | `@tailwind base; @tailwind components; @tailwind utilities;` | `@import "tailwindcss";` |
| Content paths | Manually likhne padte the | Automatic detect |

> ⚠️ Internet par bahut tutorials purane v3 wale hain (`npx tailwindcss init -p`). Naye project mein v4 wala tarika use karo.

### 🛠️ VS Code Tip

**"Tailwind CSS IntelliSense"** extension install kar lo. Isse class names ka **autocomplete** aur hover par CSS preview milta hai. Bahut kaam aata hai.

---

## 3. 🧱 Basic Utility Classes

### 📏 Spacing (padding / margin)

Tailwind ka spacing scale: **1 unit = 0.25rem = 4px**

| Class | Matlab | Value |
|-------|--------|-------|
| `p-4` | Padding saari taraf | 16px |
| `px-4` | Padding left + right | 16px |
| `py-2` | Padding top + bottom | 8px |
| `pt-2` / `pb-2` / `pl-2` / `pr-2` | Single side padding | 8px |
| `m-4` | Margin saari taraf | 16px |
| `mx-auto` | Horizontal center | auto |
| `mt-6` | Margin top | 24px |
| `gap-4` | Flex/Grid items ke beech gap | 16px |

### 🔤 Typography

| Class | Kaam |
|-------|------|
| `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl` | Font size |
| `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold` | Font weight |
| `text-left`, `text-center`, `text-right` | Text alignment |
| `uppercase`, `lowercase`, `capitalize` | Text transform |
| `underline`, `line-through` | Text decoration |
| `italic` | Italic text |

### 🎨 Colors

Format: `{property}-{color}-{shade}`, shade `50` (halka) se `950` (gehra) tak.

| Class | Kaam |
|-------|------|
| `text-red-500` | Text color |
| `bg-blue-600` | Background color |
| `border-gray-300` | Border color |
| `bg-white`, `bg-black` | Fixed colors |
| `bg-blue-500/50` | 50% opacity ke saath color |

### 📐 Width & Height

| Class | Matlab |
|-------|--------|
| `w-full` | width: 100% |
| `w-1/2` | width: 50% |
| `w-64` | width: 16rem (256px) |
| `h-screen` | height: 100vh |
| `h-10` | height: 2.5rem |
| `max-w-md` | max-width: medium |
| `min-h-screen` | min-height: 100vh |

### 🔲 Border, Radius & Shadow

| Class | Kaam |
|-------|------|
| `border`, `border-2` | Border width |
| `rounded`, `rounded-md`, `rounded-lg`, `rounded-full` | Border radius |
| `shadow`, `shadow-md`, `shadow-lg` | Box shadow |
| `ring-2 ring-blue-500` | Outline ring |

---

## 4. 📦 Flexbox & Grid

### Flexbox

```jsx
<div className="flex items-center justify-between gap-4">
  <p>Left</p>
  <p>Right</p>
</div>
```

| Class | CSS |
|-------|-----|
| `flex` | `display: flex` |
| `flex-col` | `flex-direction: column` |
| `items-center` | `align-items: center` |
| `justify-center` | `justify-content: center` |
| `justify-between` | `justify-content: space-between` |
| `flex-wrap` | `flex-wrap: wrap` |
| `flex-1` | `flex: 1 1 0%` |

**Perfect center (sabse common):**

```jsx
<div className="flex items-center justify-center h-screen">
  <h1>Center me!</h1>
</div>
```

### Grid

```jsx
<div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

| Class | CSS |
|-------|-----|
| `grid` | `display: grid` |
| `grid-cols-3` | 3 equal columns |
| `col-span-2` | Item 2 columns lega |
| `gap-4` | Items ke beech gap |

---

## 5. 📱 Responsive Design

Tailwind **mobile-first** hai. Matlab bina prefix wali class **sabhi screens** par lagti hai, aur prefix wali class **us size ke upar** lagti hai.

| Prefix | Screen size (min-width) |
|--------|-------------------------|
| *(koi nahi)* | Mobile (0px+) |
| `sm:` | 640px+ |
| `md:` | 768px+ |
| `lg:` | 1024px+ |
| `xl:` | 1280px+ |
| `2xl:` | 1536px+ |

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Mobile: 1 column | Tablet: 2 columns | Desktop: 4 columns */}
</div>
```

```jsx
<h1 className="text-xl md:text-3xl lg:text-5xl">
  {/* Screen bada hoga toh text bhi bada */}
  Responsive Heading
</h1>
```

> 💡 **Yaad rakhne ka trick:** Pehle **mobile ka design** likho (bina prefix), phir bade screens ke liye `md:`, `lg:` se override karo.

### Hide / Show

```jsx
<div className="hidden md:block">Sirf tablet/desktop par dikhega</div>
<div className="block md:hidden">Sirf mobile par dikhega</div>
```

---

## 6. 🖱️ Hover, Focus & States

Prefix ke saath state-based styling:

```jsx
<button className="bg-blue-500 hover:bg-blue-700 focus:ring-2 active:scale-95 transition">
  Click Me
</button>
```

| Prefix | Kab lagta hai |
|--------|---------------|
| `hover:` | Mouse upar aane par |
| `focus:` | Element focus hone par (input click) |
| `active:` | Click dabaye rakhne par |
| `disabled:` | Disabled element par |
| `first:` / `last:` | Pehle / aakhri child par |
| `group-hover:` | Parent par hover hone par child ko style |

### `transition` (smooth animation)

```jsx
<button className="bg-blue-500 hover:bg-blue-700 transition duration-300">
  Smooth Hover
</button>
```

> 💡 Normal inline CSS mein `hover` nahi chalta tha, Tailwind mein ek prefix lagao aur ho gaya. Ye Tailwind ka bada fayda hai.

---

## 7. 🌙 Dark Mode

`dark:` prefix se dark mode ki styles likho.

```jsx
<div className="bg-white text-black dark:bg-gray-900 dark:text-white p-6">
  Dark mode ready!
</div>
```

- By default `dark:` styles tab lagti hain jab user ke **system/browser ka theme dark** ho.
- Agar aapko **button se toggle** karna hai, toh Tailwind ki dark mode setting ko customize karna padta hai (docs ke "Dark mode" section mein hai).

---

## 8. 🎯 Arbitrary Values

Jab ready-made class mein aapki chahi hui value na ho, toh **square brackets `[ ]`** mein apni value likh do:

```jsx
<div className="w-[350px] h-[200px] bg-[#1da1f2] mt-[13px]">
  Custom values
</div>
```

| Class | Matlab |
|-------|--------|
| `w-[350px]` | width: 350px |
| `bg-[#1da1f2]` | Custom hex color |
| `text-[22px]` | Custom font size |
| `top-[117px]` | Custom position |

> ⚠️ Zyada use mat karo. Pehle Tailwind ki scale se kaam chalao, taaki design consistent rahe.

---

## 9. 🎨 Customization (`@theme`)

Tailwind v4 mein customization **CSS file ke andar** hoti hai, `@theme` directive se:

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-brand: #ff5722;
  --font-display: "Poppins", sans-serif;
}
```

Ab aap in classes ko use kar sakte ho:

```jsx
<h1 className="text-brand font-display">Custom Theme!</h1>
<button className="bg-brand text-white px-4 py-2">Brand Button</button>
```

### `@apply` (repeat classes ko ek jagah likhna)

```css
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600;
}
```

> 💡 React mein better hai ki repeat hone wale UI ko **component** bana do (jaise `<Button />`), `@apply` ki zaroorat kam padti hai.

---

## 10. 🔀 Conditional / Dynamic Classes

### Ternary ke saath

```jsx
function Status({ isOnline }) {
  return (
    <p className={isOnline ? "text-green-500" : "text-red-500"}>
      {isOnline ? "Online" : "Offline"}
    </p>
  )
}
```

### Template literal ke saath (base + conditional)

```jsx
<button
  className={`px-4 py-2 rounded ${
    isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
  }`}
>
  Click
</button>
```

### ⚠️ Sabse bada gotcha: class naam **poora likhna** padta hai

Tailwind aapki files mein **poori class ka text scan** karta hai. Isliye class naam ko tod ke (concatenate karke) mat banao.

```jsx
// ❌ GALAT: Tailwind isse detect nahi kar paayega
<p className={`text-${color}-500`}>Hello</p>

// ✅ SAHI: poori class likho
<p className={color === "red" ? "text-red-500" : "text-blue-500"}>Hello</p>
```

> 💡 **Kyun?** Tailwind build time par sirf wahi classes banata hai jo code mein **poore naam** se likhi mili hon. `text-${color}-500` mein poora naam kahin likha hi nahi hai.

---

## 11. 🧪 Real Example: Card Component

```jsx
function ProductCard({ name, price }) {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition p-5">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-2xl font-bold text-green-600 mt-2">₹{price}</p>
      <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
        Add to Cart
      </button>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard name="Samsung Galaxy F05" price={6499} />
        <ProductCard name="Motorola g05" price={7299} />
        <ProductCard name="POCO C71" price={6999} />
      </div>
    </div>
  )
}
```

### Is code mein kya-kya use hua?

| Concept | Kahan |
|---------|-------|
| Spacing | `p-5`, `mt-2`, `gap-6` |
| Typography | `text-lg`, `font-semibold`, `text-2xl` |
| Colors | `bg-white`, `text-gray-800`, `text-green-600` |
| Border/Shadow | `rounded-xl`, `shadow-md` |
| Hover + Transition | `hover:shadow-xl transition`, `hover:bg-blue-600` |
| Responsive Grid | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` |

---

## 12. 🆚 Tailwind vs Baaki Methods

| Feature | Regular CSS | CSS Modules | Inline CSS | **Tailwind** |
|---------|-------------|-------------|------------|--------------|
| Alag CSS file | ✅ Chahiye | ✅ Chahiye | ❌ | ❌ (mostly nahi) |
| Class naam sochna | ✅ Haan | ✅ Haan | ❌ | ❌ |
| Hover / Media queries | ✅ | ✅ | ❌ | ✅ (prefix se) |
| Naam conflict | ⚠️ Ho sakta hai | ✅ Nahi | ✅ Nahi | ✅ Nahi |
| Design consistency | ⚠️ Khud sambhalo | ⚠️ Khud sambhalo | ⚠️ | ✅ Built-in scale |
| JSX mein lambi className | ❌ | ❌ | ❌ | ⚠️ Haan, ye hota hai |
| Seekhna | Easy | Easy | Easy | Thoda time (classes yaad karna) |

### ✅ Pros / ❌ Cons

| ✅ Pros | ❌ Cons |
|--------|--------|
| Bahut fast development | Shuru mein classes yaad karna padta hai |
| Consistent design system | JSX mein `className` lambi ho jaati hai |
| Responsive + hover + dark mode aasaan | Dynamic class names tod ke nahi bana sakte |
| Final CSS chhoti (unused remove) | Pure CSS ka knowledge phir bhi zaroori hai |

> 💡 **Tip:** Lambi `className` se bachne ke liye repeated UI ko **component** bana do (`<Button />`, `<Card />`).

---

## ⚠️ Common Mistakes

| ❌ Galat | ✅ Sahi | Kyun? |
|---------|--------|-------|
| `class="p-4"` | `className="p-4"` | JSX mein `className` |
| `text-${color}-500` | Poori class likho | Tailwind dynamic names detect nahi karta |
| Naye project mein `@tailwind base;...` | `@import "tailwindcss";` | v4 mein import syntax badla hai |
| CSS file ko `main.jsx` mein import na karna | `import './index.css'` | Warna Tailwind apply nahi hoga |
| `npx tailwindcss init -p` (v4 mein) | Zaroorat nahi | v4 mein config file optional hai |
| Desktop pehle design karna (`lg:` se shuru) | Mobile pehle, phir `md:`, `lg:` | Tailwind mobile-first hai |
| Har jagah `w-[...]` arbitrary values | Scale ki classes use karo | Consistency bani rehti hai |
| Vite config mein plugin add na karna | `tailwindcss()` plugins mein daalo | Warna styles load nahi hongi |

---

## 🗺️ Seekhne ka Plan

1. **Spacing, typography, colors** (`p-`, `m-`, `text-`, `bg-`)
2. **Flexbox aur Grid** (`flex`, `items-center`, `grid-cols-`)
3. **Responsive** (`sm:`, `md:`, `lg:`)
4. **States** (`hover:`, `focus:`) aur **transitions**
5. **Dark mode** aur **`@theme` customization**
6. **Projects banao** (To-Do, Weather App, Portfolio) Tailwind ke saath

> 📖 Official docs: [tailwindcss.com/docs](https://tailwindcss.com/docs) (search bar mein koi bhi CSS property likho, Tailwind class mil jaati hai).

---

## ✅ Revision Checklist

- [ ] Tailwind kya hai aur "utility-first" ka matlab samajh aaya
- [ ] Vite + React mein v4 setup kar sakte ho
- [ ] Spacing scale (`p-4` = 16px) yaad hai
- [ ] Typography, colors, width/height classes aati hain
- [ ] Flex aur Grid ki basic classes aati hain
- [ ] Responsive prefixes (`sm:`, `md:`, `lg:`) aur mobile-first concept clear hai
- [ ] `hover:`, `focus:`, `transition` use kar sakte ho
- [ ] `dark:` prefix samajh aaya
- [ ] Arbitrary values `[...]` aur `@theme` ka idea hai
- [ ] Dynamic class naam wali galti (`text-${color}-500`) pata hai
- [ ] Tailwind vs CSS / Modules / Inline ka fark bata sakte ho

---

⭐ Happy Coding!