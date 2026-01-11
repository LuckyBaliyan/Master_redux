# Redux Library Implementation (Practice Project)

This repository is a **practice-oriented project** where I have implemented the **entire Redux flow from scratch** to deeply understand how Redux works internally, and then compared it with **Redux Toolkit** for modern and optimized Redux development.

The goal of this project is **learning by implementation** — understanding *why* Redux works the way it does, not just *how* to use it.

---

## 📂 Project Structure

```
root/
│
├── concepts/            # Pure JavaScript implementation of Redux concepts
│   ├── store.js
│   ├── reducer.js
│   ├── actions.js
│   └── index.js
│
├── react-redux/         # React application using Redux & Redux Toolkit
│   ├── src/
│   │   ├── app/
│   │   │   └── store.js
│   │   ├── features/
│   │   │   └── slice.js
│   │   ├── components/
│   │   └── main.jsx
│   └── package.json
│
├── screenShots/
│   └── 1.png
│
└── README.md
```

---

## 🧠 What I Learned & Implemented

### 1️⃣ Redux Core Concepts (JavaScript Only)

Implemented **Redux from scratch using plain JavaScript** to understand the internal flow:

* `createStore`
* `getState()`
* `dispatch(action)`
* `subscribe(listener)`
* Reducers (pure functions)
* Action objects & action creators
* Single source of truth
* State immutability
* Unidirectional data flow

📁 Located inside: `concepts/`

This part focuses **only on logic**, without React, to make Redux fundamentals crystal clear.

---

### 2️⃣ Redux with React (Manual Setup)

Integrated Redux with React to understand how state flows in UI:

* Store configuration
* `Provider` usage
* `useSelector`
* `useDispatch`
* Connecting reducers with UI components
* Managing global state in React

📁 Located inside: `react-redux/`

---

### 3️⃣ Redux Toolkit (Modern Redux)

Rebuilt the same logic using **Redux Toolkit** to understand the advantages:

* `configureStore`
* `createSlice`
* Auto-generated actions
* Immutable updates using Immer
* Cleaner & scalable architecture
* Reduced boilerplate

This helped compare:

| Traditional Redux           | Redux Toolkit     |
| --------------------------- | ----------------- |
| More boilerplate            | Minimal code      |
| Manual immutability         | Immer handles it  |
| Separate actions & reducers | Single slice file |

---

## 🖼️ Screenshot

Below is a screenshot from the project:

![Project Screenshot](./screenShots/1.png)

---

## 🚀 Why This Project?

* To **master Redux fundamentals** instead of blindly using libraries
* To understand **how Redux works internally**
* To clearly see the **difference between core Redux and Redux Toolkit**
* To build confidence in **state management concepts**

This repository is meant for **learning, practice, and revision**.

---

## 🛠️ Tech Stack

* JavaScript (ES6+)
* React
* Redux
* Redux Toolkit

---

## 📌 Note

This is a **practice project**, not a production-ready application. The focus is on **concept clarity and implementation flow**.

---

⭐ If you are learning Redux, feel free to explore and experiment with this codebase.
