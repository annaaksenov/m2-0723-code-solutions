# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The && operator is for a set of boolean operands will be true if they are true. OR operator is for one or the other boolean pair will be true. Could be used outside of `if` statement for determining if a value that is tested is true or false.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  && and || will 'short-circuit' or stop if the first expression is falsy.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  A logical operator that returns its right-hand side operand when its left is null or undefined, and otherwise returns its left-hand side operand. ?? is useful if 0, null or undefined are considered valid values.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It takes 3 operands. Different from if/else because it provides two outcomes to if true or false.
- What is the `?.` (optional chaining) operator? When would you use it?
  Accesses an object's prop or calls a function. If object or function called using this operand is undefined or null it short-circuits and evaluates to undefined instead of throwing an error.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  allows and iterable to be expanded in places where 0 or more arguments/elements are expexted. `const arr1 = [1,2,3]; const arr2 = [a,...arr1] == arr2 = [a, 1, 2, 3];`
- What data types can be spread into an array? Into an object?
  Function arg, obj literals, array literals.
- How does spread syntax differ from rest syntax?
  Spread is to concat two arrays while rest is to apply the rest of the elements later on.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
