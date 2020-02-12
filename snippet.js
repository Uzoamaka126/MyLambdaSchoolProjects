const arr = ["red", "blue", "gray", "purple", "peach"];

// using ES5

const newArr = arr.map(function(elem, index) {
  return "This colour is called" + " " + elem;
});

// using ES6 
const newArr = arr.map((elem, index) => {
  return "This colour is called" + " " + elem;
});
