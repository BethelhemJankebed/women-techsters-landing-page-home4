## Women Techsters Assignment

**Name:** Bethelhem Jankebed  
**ID:** WTF/2025/5523

---

## 1. Intro to React (jscomplete.com)

### React Basics

React is a JavaScript library (not a full framework) focused on building user interfaces. It lets developers describe what the UI should look like rather than manually manipulating the DOM.

React uses a declarative style: you describe the UI in terms of a final state, and React figures out how to update the DOM to match.

---

### Virtual DOM & Efficiency

React keeps a Virtual DOM, which is a JavaScript representation of the UI. It compares the Virtual DOM with the real DOM and performs only the necessary updates. This makes UI updates fast and efficient.

---

### Components

The UI in React is built from components, typically written as functions that return a tree of UI elements (often using JSX).

Components:

- Can be reused and composed
- Can have state (data that changes over time)
- Can receive props (external inputs)

---

### JSX

JSX is a syntax that looks like HTML but is transpiled into `React.createElement()` calls. JSX is not HTML itself; it is JavaScript syntax that makes writing UI code more readable.

---

### Hooks (Introduction)

Hooks are special functions (starting with `use`) that allow functional components to manage state and side effects.

Examples:

- `useState` for state management
- `useEffect` for side effects

Instead of writing instructions to manipulate the DOM directly, you describe what the UI should look like for a given state, and React updates the UI efficiently.

---

## 2. React Hooks Cheatsheet (freecodecamp.org)

React Hooks provide simple utilities to manage behavior in function components.

### Essential Hooks

### useState

Allows you to add state to a functional component.

### useEffect

Used for running side effects such as data fetching, timers, or subscriptions.

### useContext

Consumes a context value and allows access to shared data across components.

### useReducer

An alternative to `useState` when state logic is complex.

### useRef

Stores a mutable reference, commonly used for accessing DOM nodes.

### useMemo

Memoizes expensive calculations to improve performance.

### useCallback

Memoizes callback functions to prevent unnecessary re-renders.

---

### How Hooks Work

- State update hooks (such as `useState`) inform React when a component needs to re-render.
- Effect hooks (such as `useEffect`) run after rendering and are useful for asynchronous tasks or DOM interactions outside normal rendering.
- Hooks can only be used inside React function components, not regular JavaScript functions.

---

## 3. JavaScript DOM Document (w3schools)

### What the DOM Is

The DOM (Document Object Model) is the browser’s in-memory representation of an HTML page. It represents HTML as a tree of node objects that JavaScript can interact with.

JavaScript can read, change, and remove elements using the DOM API.

---

### Key Abilities

- Access the document structure (e.g., `document.body`, `document.getElementById`)
- Modify content and styles dynamically using JavaScript
- Understand how React abstracts away direct DOM manipulation

---

## 4. JavaScript DOM Elements (w3schools)

### DOM Elements

DOM elements represent individual HTML tags such as `<p>` and `<div>`, each treated as a node that can be manipulated with JavaScript.

---

### Selecting Elements

Common methods include:

- `getElementById`
- `getElementsByClassName`
- `querySelector`
- `querySelectorAll`

---

### Changing Content and Attributes

JavaScript can modify:

- Text content
- `innerHTML`
- CSS styles
- Attributes such as `src` and `href`

---

### Dynamic Updates

These DOM updates are how basic JavaScript applications work without frameworks. React abstracts this process by efficiently updating the DOM through the Virtual DOM.

DOM APIs are the underlying platform browsers provide for manipulating page structure and content. React builds on top of this by allowing developers to write declarative UI code instead of directly manipulating the DOM. Hooks enhance React function components with state and lifecycle behavior without using classes.
