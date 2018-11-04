# Rocket
Build composable HTML pages with modern JavaScript and 🚀.

## Why?
Inspired to create a library that allows for the same easy and flexible DOM rendering in JavaScript as React. The goal is to reason about how React handles DOM rendering, and create a rendering system from scratch that can be used in assignments that require pure HTML, CSS and JavaScript only. No additional tools required, although ESLint can be helpful for development.

## Usage
Take a look at the [example](example) code.

### Tip
Export Rocket from a local file to reduce typing:

```javascript
export * from 'https://raw.githack.com/fshauge/rocket/master/lib/index.js';
```

## Progress / features
- [x] Render simple DOM elements (h1, p, div, etc.)
- [x] Render stateless components (function)
- [x] Create a virtual DOM (VDOM) and render it
- [ ] Implement patching (patching the VDOM and rendering parts of it)
- [ ] Render stateful componets (class)
