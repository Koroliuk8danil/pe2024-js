// let currentStep = 1;
// const STEP_COUNT = 4;
// while (currentStep <= STEP_COUNT) {
//   console.log(currentStep);
//   console.log("пройти прямо");
//   console.log("пройти на 90 град наліво");
//   currentStep++; // currentStep = currentStep + 1;
// }
// console.log("Next line");

// let currentPage = 10;
// const END_PAGE = 20;

// while (currentPage <= END_PAGE) {
//   console.log("Current page: ", currentPage);
//   currentPage += 2;
// }
// let currentPage = Number(prompt("Input start page"));
// const endPage = Number(prompt("Input end page"));

// while (currentPage <= endPage) {
//   if (currentPage % 2 === 0) {
//     console.log(currentPage);
//   }
//   currentPage += 1;
// }

// let inputNumber = Number(prompt("Input number"));

// while (!Number.isFinite(inputNumber)) {
//   inputNumber = Number(prompt("Input number"));
// }

// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// let inputNumber = null;

// do {
//   let inputNumber = Number(prompt("Input number"));
// } while (!Number.isFinite(inputNumber));

// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// let startPage = 50;
// const endPage = 40;

// do {
//   console.log("Current page: ", startPage--);
// } while (startPage >= endPage);

// Користувач має 3 спроби ввести пароль
// Якщо пароль вірний, то вивести "Пароль вірний"
// Інакше "Пароль невірний"

// const RIGHT_PASSWORD = "qwerty";
// const TRY_LIMIT = 3;
// let isPasswordCorrect = false;

// let currentTry = 1;

// do {
//   let inputPassword = prompt("Input password");
//   if (inputPassword === RIGHT_PASSWORD) {
//     console.log("Password is correct");
//     isPasswordCorrect = true;
//     break;
//   }
// } while (++currentTry <= TRY_LIMIT);

// if (!isPasswordCorrect) {
//   console.log("Password is wrong");
// }

const RIGHT_PASSWORD = "qwerty";
const TRY_LIMIT = 3;
let isPasswordCorrect = false;
let currentTry = 1;
debugger;
do {
  isPasswordCorrect = prompt("Input password") === RIGHT_PASSWORD;
} while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

console.log(`Password is ${isPasswordCorrect ? "correct" : "wrong"}`);
