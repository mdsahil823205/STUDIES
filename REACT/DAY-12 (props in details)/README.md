# 📨 Props in React — Complete Guide

Props React ka sabse important concept hai. Isse components **reusable aur dynamic** bante hain. Is README mein props kya hain, kaise kaam karte hain, aur props ke **saare possible types** (string, object, array, function, JSX, children, default, spread) examples ke saath Hinglish mein hai.

---

## 📚 Table of Contents

1. [Props kya hain?](#1--props-kya-hain)
2. [Props kyun chahiye?](#2--why-do-we-need-props)
3. [Basic Understanding](#3--basic-understanding)
4. [Destructuring Props](#4--destructuring-props-cleaner-way)
5. [Props are Immutable](#5--props-are-immutable)
6. [All Possibilities of Props](#6--all-possibilities-of-props)
7. [Common Mistakes](#-common-mistakes)
8. [Revision Checklist](#-revision-checklist)

---

## 1. 🤔 Props kya hain?

- Props ka matlab **properties**.
- Ye React component ke **inputs** hote hain.
- Props se **parent component se child component ko data** pass karte hain.
- Props **read-only (immutable)** hote hain, child component ke andar inhe change nahi kar sakte.

```
   ┌──────────┐
   │  Parent  │
   └────┬─────┘
        │  props ↓  (name="Manas", age={21})
   ┌────▼─────┐
   │  Child   │   ← sirf padh sakta hai, badal nahi sakta
   └──────────┘
```

> 💡 **Simple samjho:** Props = function ke **parameters**. Jaise `add(a, b)` mein a, b input hain, waise component ke liye props input hain.

---

## 2. ❓ Why Do We Need Props?

- Components ko **reusable aur dynamic** banane ke liye.
- Values **hardcode karne ki jagah**, data props ke through pass karte hain.

```jsx
// ❌ Hardcoded: sirf ek hi banda dikhega
function Profile() {
  return <h2>Manas</h2>;
}

// ✅ Props ke saath: kisi ka bhi naam dikha sakte ho
function Profile({ username }) {
  return <h2>{username}</h2>;
}

<Profile username="Manas" />
<Profile username="Muskan" />
<Profile username="Mehek" />
```

> 💡 Ek hi component, alag-alag data. Isi ko **reusability** kehte hain.

---

## 3. 🧪 Basic Understanding

```jsx
function Profile(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

function App() {
  return (
    <Profile username="Manas" age={21} />
  );
}
```

### Kaise kaam karta hai?

1. `App` (parent) `<Profile username="Manas" age={21} />` likhta hai.
2. React in saari attributes ko ek **object** mein bundle karke `Profile` ko `props` naam se deta hai:
   ```js
   props = { username: "Manas", age: 21 }
   ```
3. `Profile` (child) `props.username` aur `props.age` se data use karta hai.

### Props pass karne ke rules

| Value type | Kaise likhein | Example |
|------------|---------------|---------|
| **String** | Quotes mein | `username="Manas"` |
| **Number** | Curly braces mein | `age={21}` |
| **Boolean / Array / Object / Function** | Curly braces mein | `isStudent={true}` |

> ⚠️ `age="21"` likhoge toh wo **string** `"21"` ban jaayega, number nahi. Number ke liye `age={21}` likho.

---

## 4. ✨ Destructuring Props (Cleaner Way)

Har baar `props.username`, `props.age` likhne ki jagah, function ke parameter mein hi **destructure** kar lo.

```jsx
function Profile({ username, age }) {
  return (
    <div>
      <h2>{username}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

### Compare karo

| Without destructuring | With destructuring |
|-----------------------|--------------------|
| `function Profile(props)` | `function Profile({ username, age })` |
| `{props.username}` | `{username}` |
| `{props.age}` | `{age}` |

> 💡 Code chhota, saaf aur readable ho jaata hai. Real projects mein **hamesha yahi tarika** use hota hai.

---

## 5. 🔒 Props Are Immutable

> **Child component ke andar props ko modify nahi kar sakte.**

```jsx
function Profile(props) {
  props.username = "Changed";   // ❌ Not allowed
  return <h2>{props.username}</h2>;
}
```

### Kyun?

- Data **parent se child** ki taraf ek hi direction mein behta hai (one-way data flow).
- Agar child props badal de, toh parent ko pata hi nahi chalega ki data kyun badla, aur app mein bugs aayenge.

### Agar value change karni ho toh?

| Situation | Solution |
|-----------|----------|
| Child ko apni value badalni hai | **State** (`useState`) use karo |
| Parent ka data badalna hai | Parent se **function (callback) as prop** lo aur wo function call karo |

```jsx
// Parent apna state change karne ka function child ko deta hai
function Parent() {
  const [count, setCount] = useState(0);
  return <Child count={count} onIncrement={() => setCount(count + 1)} />;
}
```

> 💡 **Yaad rakho:** Props = bahar se mila **input** (read-only). State = component ki apni **memory** (change ho sakti hai).

---

## 6. 🌈 All Possibilities of Props

Props mein **kuch bhi** pass kar sakte ho. Ye hain saare tarike:

| # | Type | Ek line mein |
|---|------|--------------|
| 1 | Basic (String, Number, Boolean) | Normal values |
| 2 | Objects | Poora object ek prop mein |
| 3 | Arrays | List data |
| 4 | Functions (Callbacks) | Event handling / logic pass karna |
| 5 | JSX Elements | React elements as prop |
| 6 | Children | Tags ke beech ka content (special prop) |
| 7 | Default Props | Prop na mile toh default value |
| 8 | Default values via destructuring | Modern tareeka (neeche note dekho) |
| 9 | Spread Operator | Saare props ek saath |

---

### 6.1 🔤 Basic Props (Strings, Numbers, Booleans)

```jsx
function Greeting({ name, age, isStudent }) {
  return (
    <h2>
      {name} is {age} years old. Student: {isStudent ? "Yes" : "No"}
    </h2>
  );
}

function App() {
  return <Greeting name="Manas" age={21} isStudent={true} />;
}
```

**Output:** `Manas is 21 years old. Student: Yes`

> 💡 **Boolean shortcut:** `isStudent={true}` ki jagah sirf `isStudent` likh do, wo bhi `true` hi maana jaata hai.
> ```jsx
> <Greeting name="Manas" age={21} isStudent />
> ```

---

### 6.2 📦 Props as Objects

```jsx
function Profile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
}

function App() {
  const userObj = { name: "Manas", age: 21 };
  return <Profile user={userObj} />;
}
```

- Alag-alag props bhejne ki jagah **ek hi object** bhej do.
- Child mein `user.name`, `user.age` se access karo.

> 💡 Jab bahut saari related values ho (jaise ek user ka data), tab object pass karna clean rehta hai.

---

### 6.3 📋 Props as Arrays

```jsx
function List({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  return <List items={["Apple", "Banana", "Mango"]} />;
}
```

- Array pass karke child mein `.map()` se list render karte hain.
- Har item par `key` lagana zaroori hai.

> 💡 Agar data mein `id` ho toh `key={item.id}` use karo, `index` sirf simple static list ke liye theek hai.

---

### 6.4 🔔 Props as Functions (Callback Functions)

> **Event handling ya logic pass karne ke liye use hota hai.**

```jsx
function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const handleClick = () => alert("Button Clicked!");
  return <Button onClick={handleClick} />;
}
```

### Flow

```
App  ──(handleClick function)──►  Button
                                     │
                          user click kare toh
                                     │
App ka handleClick() chalta hai  ◄───┘
```

> 💡 **Ye bahut important hai:** Child se parent ko "signal" bhejne ka yahi tarika hai. Data parent → child (props), lekin event/action child → parent (callback function).

> ⚠️ `onClick={handleClick}` likho, `onClick={handleClick()}` nahi. Bracket lagaoge toh function **render hote hi chal jaayega**, click par nahi.

---

### 6.5 🧩 Props as JSX Elements

> **React elements ko prop ki tarah pass kar sakte ho.**

```jsx
function Card({ content }) {
  return <div className="card">{content}</div>;
}

function App() {
  return <Card content={<h2>Hello World</h2>} />;
}
```

- JSX ek expression hai, isliye use prop mein bhej sakte ho (`{ }` ke andar).
- Child mein `{content}` likhne par wo element render ho jaata hai.

---

### 6.6 👶 Props as Children (Special Prop)

> **Component ke opening aur closing tag ke beech jo kuch bhi likhoge, wo `props.children` ban jaata hai.**

```jsx
function Layout({ children }) {
  return (
    <div className="layout">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <h1>Welcome to my site</h1>
      <p>This is content inside children.</p>
    </Layout>
  );
}
```

### Kaise kaam karta hai?

```
<Layout>
   <h1>Welcome to my site</h1>          ← ye sab
   <p>This is content inside children.</p>   ← children ban gaya
</Layout>
```

Layout ka `<main>{children}</main>` wahi jagah hai jahan ye content dikhega. Header aur Footer fixed rahenge.

### 🆚 `content` prop vs `children`

| | `content={<h2>..</h2>}` | `<Layout> ... </Layout>` (children) |
|---|------------------------|-------------------------------------|
| Likhne ka tarika | Attribute ki tarah | Tags ke beech |
| Prop ka naam | Aap rakhte ho | Hamesha `children` |
| Readability | Chhote content ke liye theek | Bade/nested JSX ke liye best |

> 💡 **Kahan use hota hai?** Layout, Card, Modal, Wrapper jaise components mein, jahan andar ka content alag-alag hota hai.

---

### 6.7 🔧 Default Props

> **Agar koi prop pass nahi kiya gaya, toh default value use ho sakti hai.**

Slides mein ye tarika dikhaya gaya hai:

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}

Button.defaultProps = {
  label: "Click Me"
};
```

> ⚠️ **Important update:** Function components ke liye `defaultProps` **purana tarika hai**. React 18.3 mein isse deprecation warning aati hai, aur **React 19 mein function components ke liye ye remove ho chuka hai** (yaani wahan kaam nahi karega). Naye projects mein neeche wala tarika (6.8) use karo. `defaultProps` interviews mein aur purane code mein dikhta hai, isliye samajhna zaroori hai.

---

### 6.8 ✅ Default Values via Destructuring (Modern Way)

> Ye slides mein nahi tha, lekin aajkal yahi tarika use hota hai.

```jsx
function Button({ label = "Click Me" }) {
  return <button>{label}</button>;
}

<Button />                  {/* "Click Me" dikhega */}
<Button label="Submit" />   {/* "Submit" dikhega */}
```

- Parameter mein hi `= value` likh do.
- Prop **nahi mila (`undefined`)** toh default value use hogi.

| Tarika | React 19 mein function component par |
|--------|--------------------------------------|
| `Button.defaultProps = {...}` | ❌ Kaam nahi karta |
| `({ label = "Click Me" })` | ✅ Sahi tarika |

---

### 6.9 🌊 Spread Operator for Props

> **Saare props ek saath pass karne ke liye.**

```jsx
function Profile({ name, age }) {
  return <h2>{name} is {age}</h2>;
}

function App() {
  const user = { name: "Manas", age: 21 };
  return <Profile {...user} />;
}
```

### Ye kya karta hai?

```jsx
<Profile {...user} />
// ye bilkul same hai is ke:
<Profile name="Manas" age={21} />
```

- Object ki har property ek alag prop ban jaati hai.
- Jab object mein bahut saari properties hon, tab time bachta hai.

### 🆚 Object prop vs Spread

| | `user={userObj}` (6.2) | `{...user}` (6.9) |
|---|------------------------|-------------------|
| Child ko kya milta hai | Ek prop `user` (object) | Alag-alag props (`name`, `age`) |
| Child mein access | `user.name` | `name` |

> ⚠️ Spread ka overuse mat karo. Isse pata nahi chalta ki component ko kaun-kaun se props mil rahe hain, aur galti se extra props pass ho sakte hain.

---

## ⚡ Quick Summary Table

| # | Type | Syntax |
|---|------|--------|
| 1 | String | `name="Manas"` |
| 1 | Number | `age={21}` |
| 1 | Boolean | `isStudent={true}` ya `isStudent` |
| 2 | Object | `user={{ name: "Manas" }}` ya `user={userObj}` |
| 3 | Array | `items={["Apple", "Banana"]}` |
| 4 | Function | `onClick={handleClick}` |
| 5 | JSX | `content={<h2>Hello</h2>}` |
| 6 | Children | `<Layout>...</Layout>` |
| 7/8 | Default | `({ label = "Click Me" })` |
| 9 | Spread | `{...user}` |

---

## ⚠️ Common Mistakes

| ❌ Galat | ✅ Sahi | Kyun? |
|---------|--------|-------|
| `props.username = "New"` | State use karo ya parent se change karwao | Props read-only hote hain |
| `age="21"` (number chahiye tha) | `age={21}` | Quotes ka matlab string hota hai |
| `onClick={handleClick()}` | `onClick={handleClick}` | Bracket se function turant chal jaata hai |
| `function Profile(username, age)` | `function Profile({ username, age })` | Props ek object mein aate hain, curly braces se destructure karo |
| List mein `key` na dena | `key={item.id}` do | React ko unique pehchaan chahiye |
| `<profile />` (chhota p) | `<Profile />` | Component naam capital se shuru hona chahiye |
| Function component par `Button.defaultProps` (React 19) | `({ label = "Click Me" })` | defaultProps function components ke liye remove ho gaya |
| Child mein parent ka data directly badalna | Callback function as prop use karo | One-way data flow |

---

## ✅ Revision Checklist

- [ ] Props kya hain aur parent se child kaise jaate hain
- [ ] Props kyun chahiye (reusability), samajh aaya
- [ ] `props.name` aur destructuring `{ name }` dono aate hain
- [ ] Props immutable kyun hain, aur change karna ho toh kya karein
- [ ] String, number, boolean props ke liye syntax ka fark pata hai
- [ ] Object aur Array props pass karna aata hai
- [ ] Callback functions as props samajh aaye
- [ ] JSX element as prop aur `children` ka fark clear hai
- [ ] Default values dene ke tarike aate hain (modern way yaad hai)
- [ ] Spread operator `{...user}` samajh aaya

---

⭐ Happy Coding, dost!