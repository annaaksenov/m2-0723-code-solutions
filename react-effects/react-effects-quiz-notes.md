# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
During the commit process.
- What is a React Effect?
Effect is a React hook that allows you run some code after rendering so that you can synchronize your component with some system outside of React.
- When should you use an Effect and when should you not use an Effect?
Effects should be used when you need to "step outside" of React and synchronize your components with some external system. Should not be used if no external system is involved.
- When do Effects run?
By default after every render.
- What function is used to declare an Effect?
First you need to import useEffect hook and then decalre it `useEffect(() => {})` The first argument is the code block. Any dependencies are declared as second argument.
- What are Effect dependencies and how do you declare them?
Eff. dep. are second arguments that are in a array that tell the effect function to skip re-rendering if the state/render is the same as it was during the prev. render. There can be more than one dep. (Can not choose your dep. e.g both a & b not a or b.)
- Why would you want to clean up from an Effect?
Clean up from an Eff. unmounts(remove) components and essientally stop them from piling  up which saves from bugs like memory leaks.
- How do you clean up from an Effect?
Within the code block, add a cleanup function to unmount.
- When does the cleanup function run?
After every render.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
