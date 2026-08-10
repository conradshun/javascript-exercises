let firstName = "John";
let lastName = "Doe";

console.log(firstName);
console.log(lastName);

let age = 11;
console.log(age);

age = 54;

console.log(age);

const pi = 3.14;
console.log(pi);

console.log(23 + 97);
console.log((4+6+9)/77)

let a = 10;
console.log(a);
a = 7;
console.log(a);

let b = a * 7;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual/max;
console.log(percentage);



function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

const string = "  the revolution will not be televised"
console.log(string);

let name = "john";
const greeting = `Hello ${name}`;
console.log(greeting);

const one = `hello, `;
const two = `how are you`;
const joined = `${one}${two}`;

console.log(joined);

function add7(number){

  return number + 7;
}

console.log(add7(10));

function multiply(number1, number2){

  return number1*number2;

}

console.log(multiply(3,10));

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("abcd"));

function lastLetter(str){

return str.at(-1);
}

console.log(lastLetter("javascript"));