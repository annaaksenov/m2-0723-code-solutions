# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
Using `fetch()` for small applications or in development, it can deal with the data that responses or rejects and how they are displayed.
- What browser function can be used to make HTTP requests to a server in React?
`fetch()` method.
- How do you use `useEffect` to load component data just once when the component mounts?
The second parameter of the useEffect() should be an empty parameter.
- How do you use `useEffect` to load component data every time the data key changes?
Add a dependency to the array such as the element that will be changed. eg. dataKey
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
For bigger traffic using third-party data management library like React Query and Vercel SWR would help.

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
