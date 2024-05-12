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

// const RIGHT_PASSWORD = "qwerty";
// const TRY_LIMIT = 3;
// let isPasswordCorrect = false;
// let currentTry = 1;
// debugger;
// do {
//   isPasswordCorrect = prompt("Input password") === RIGHT_PASSWORD;
// } while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// console.log(`Password is ${isPasswordCorrect ? "correct" : "wrong"}`);

// якщо тіло циклу має виконатися хоч 1 раз то do..while
// інакше while

// startPage = 1;
// stopPage = 10;
// step = 1;

// for (let startPage = 1; startPage <= stopPage; startPage++) {
//   console.log(startPage);
// }

// let startNumber = 101;
// let endNumber = 91;
// for (let i = startNumber; i >= endNumber; i--) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// const startNumber = 1;
// const endNumber = 3;
// let sum = 0;

// for (let i = startNumber; i <= endNumber; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// 0+1 = 1
// 1+2 = 3
// 3+3 = 6

// накопичити добуток парних чисел від 5 до 12 (6 8 10 12 = 5760)

// const startNumber = 5;
// const endNumber = 12;
// let mul = 1;
// for (let i = startNumber; i <= endNumber; i++) {
//   if (i % 2 == 0) {
//     mul *= i;
//   }
// }
// console.log("Mul:", mul);
