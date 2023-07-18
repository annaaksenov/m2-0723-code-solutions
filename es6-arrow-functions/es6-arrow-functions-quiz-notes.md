# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  () with more than one parameters and arrow function
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  Without curly braces it does not require a return and is equivalent to an expression alone. Shorter syntax.
- When using _concise body syntax_, how do you return an object literal?
  Wrapping the curcly braces after the arrow with ().
- In the expression
  `js
    foo(() => 42);
    `
  - Identify the arrow function
    =>
  - How many arguments does the arrow function take?
    0
  - What value does it return?
    42, an implicit return value.
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    A number argument
- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  After bar adn the first (). - How many arguments does the arrow function take?
  1 - What value does it return?
  `4y = 4y`? - How many arguments are passed to the function `bar`?
  1 console log - What type of argument is passed to the function `bar`?
  console log - When does the arrow function's code get executed?
  whyen bar is called
- How does the value of `this` differ between standard functions and arrow functions?
  The value of `this` in arrow dunc is determined at the time of decleration and never changes. In a standard func it return the closest non-arrow parent func.

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
