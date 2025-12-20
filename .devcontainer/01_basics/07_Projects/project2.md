### Project link
[clickhere](https://stackblitz.com/edit/dom-project-chaiaurcode-zctjbc1n?file=index.html)

## Project 2 
### Solution Code
``` JavaScript
const form = document.querySelector('form');
//this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //toFixed(2) => means till two decimal value
    //show the results
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```