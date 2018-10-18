# Rocket
Build composable HTML pages with modern JavaScript and 🚀.

## Why?
Inspired to create a library that allows for the same
easy and flexible DOM rendering from JavaScript as React.
The goal is to reason about how React handles DOM rendering,
and create a rendering system from scratch that can be
used in assignments that require pure HTML, CSS and JavaScript only.

## Usage
```javascript
import * as Rocket from '...';

Rocket.ready(() => {
  Rocket.render(
    ...,
    document.body
  );
});
```

## Progress / features
- [x] Render simple DOM elements (h1, p, div, etc.)
- [x] Render stateless components (function)
- [x] Create a virtual DOM (VDOM) and render it
- [ ] Implement patching (patching the VDOM and rendering parts of it)
- [ ] Render stateful componets (class)
