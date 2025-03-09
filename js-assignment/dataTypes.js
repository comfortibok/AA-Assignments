let firstName = "Comfort";
console.log(typeof firstName);
let lastName = "Ibok";
console.log(typeof lastName);
let country = "Nigeria";
console.log(typeof country);
let city = "Lagos";
console.log(typeof city);
let age = 31;
console.log(typeof age);
let isMarried = false;
console.log(typeof isMarried);

console.log("10" === 10);

console.log(parseInt("10") === 10);

// Truthy
Boolean(7);
Boolean("Welcome");
Boolean(true);
// Falsy
Boolean(0);
Boolean("");
Boolean(null);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

let userBase = prompt("Enter base:");
let userHeight = prompt("Enter height:");
let area = 0.5 * userBase * userHeight;
console.log(area);

let userDob = prompt("Enter birth year:");
let now = new Date();
let year = now.getFullYear();
let userAge = year - userDob;
let yearDiff = 18 - userAge;
if (userAge <= 17) {
  alert(
    `You are ${userAge}. You will be allowed to drive after ${yearDiff} years`
  );
} else {
  alert(`You are ${userAge}. You are old enough to drive`);
}

let challenge = "30 Days Of JavaScript";
challenge = challenge.toUpperCase();
challenge = challenge.toLowerCase();
challenge = challenge.slice(3, 7);
challenge = challenge.substring(2);
challenge = challenge.includes("Script");
let firstIndex = challenge.indexOf("a");
let lastIndex = challenge.lastIndexOf("a");

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

console.log(challenge.startsWith("30 Days Of JavaScript"));
console.log(challenge.endsWith("30 Days Of JavaScript"));

let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

// if else
let a = 7;
let b = 4;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
// Tenary operator
let verify = a > b ? "a is greater than b" : "a is less than b";
console.log(verify);

let scores = 40;
if (scores >= 90 && scores <= 100) {
  console.log("A");
} else if (scores >= 70 && scores <= 89) {
  console.log("B");
} else if (scores >= 60 && scores <= 69) {
  console.log("C");
} else if (scores >= 50 && scores <= 59) {
  console.log("D");
} else {
  console.log("F");
}
