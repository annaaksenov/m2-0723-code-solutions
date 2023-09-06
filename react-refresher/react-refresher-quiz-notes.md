# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  Since a component acts as a JS function the first letter of the name must be capital for it to be defined a React component.
- How do you use JSX in a React component?
  JSX is a syntax extension that is used to easily write HTML and JS together. So with js syntax encapsulated in curly braces.
- How do you declare the props a React component needs?
  Firstly the react component would need one argument, props. W/in the component you would declare variables with the prop e.g `let text = props.text;`
- How do you pass props to a React component?
  Include the props as attributes when rendering in JSX such as `onClick={handleClick}`.
- How do you include JavaScript expressions in JSX?
  Write JS as is but wrapped {}.
- What are React hooks and what are the three "Rules of Hooks"?
  Hooks are functions and you can only call them at the top level, only call hooks from react functions, and only use hooks in functional components.
- How do you manage state in a React component?
  You can use `useState`, this allows you to create a state variable and update it.
- How do you handle events in React?
  Defining event handlers as functions within the component and then attaching them to specific JSX elements. E.g `handleClick` and attaching that to `onClick`.
- How do you let a parent component know that an event happened?
  By passing a callback function from the parent to the child coomponent as a prop. E.g create a handleEvent in parent. Within the component pass as a prop `<Child onEvent={handleEvent} />`.

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
