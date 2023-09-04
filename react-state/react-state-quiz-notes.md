# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are special functions that start with 'use' that lets you state react features without writing a class.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks can only be used at the top level of the component or your own hooks.
- What is the purpose of state in React?
  State acts as a component's memory.
- Why can't we just maintain state in a local variable?
  Local variables do not persisit between renders and changes to won't trigger render.
- What two actions happen when you call a `state setter` function?
  The state setter will accept previous value as an argument and re-render with new data.
- When does the local `state variable` get updated with the new value?
  When state setter is triggered.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
