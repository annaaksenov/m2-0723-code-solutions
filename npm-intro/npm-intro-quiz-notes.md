# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  Node Package Manager. Software registery that allows developers to share packages.
- What is a package?
  A file or directory that is described by a package.json file.
- What are some other popular package managers?
  Yarn and PNPM.
- How can you create a `package.json` with `npm`?
  Copy the file with cp command and with the npm command initialize yes to create the customized packae.json file as detailed in the JS file.
- What is a dependency and how do you add one to a package?
  Dependency is a library or piece of code that's essential for diff part of the code to work. Like jquery, it is added with the command `npm install jquery`.
- What happens when you add a dependency to a package with `npm`?
  It gets added to package.json (a customization to the file).
- What is a devDependency and how do you add one to a package?
  It is a package(s) a developer needs during development. Added with `npm install --save-dev (package e.g eslint)`.
- How do you define and run `npm` scripts? Why are these useful?
  Define script objects within the package.json in the js file. Running them can be done in the terminal with the code `npm run-script (key name of script)`.

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
