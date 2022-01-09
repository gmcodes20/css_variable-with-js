# JAVASCRIPT PLUS CSS VARIABLES

The Program allows you to manipulate and change CSS variables in run time using JavaScript

## The Program (JavaScript)

The controls were accessed using the `queryselectorall` to get all the `input` elements inside the `.controls` class from the DOM.
Then, for each of the input element, the `change` and `mousemove` event was added.

The function that drives the event is as follows:

```javascript
function updatePage() {
  suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
```
