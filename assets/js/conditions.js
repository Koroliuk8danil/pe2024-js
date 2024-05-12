console.group("Таблиця істинності &&");

console.log("true && true :>> ", true && true); // => true, якщо всі true
console.log("false && false :>> ", false && false);
console.log("true && false :>> ", true && false);
console.log("false && true :>> ", false && true);

console.groupEnd();

console.group("Таблиця істинності ||:");

console.log("true  true :>> ", true || true);
console.log("false  false :>> ", false || false); // => false, якщо всі false
console.log("true  false :>> ", true || false);
console.log("false  true :>> ", false || true);

console.groupEnd();

console.group("Таблиця істинності !:");

console.log("!true :>> ", !true);
console.log("!false  :>> ", !false);

console.groupEnd();

// вивести привітання
// Mr - для чоловіків
// Mrs - для заміжніх жінок
// Ms - для не заміжніх жінок

const isMale = true;
const isMarried = true;
const name = "Test";

// if (isMale) {
//   document.write(`<p>Hello Mr ${name}`);
// } else if (isMale === false && isMarried) {
//   document.write(`<p>Hello Mrs ${name}`);
// } else {
//   document.write(`<p>Hello Mr ${name}`);
// }

let appeal = "";

if (isMale) {
  appeal = "Mr";
} else if (isMarried) {
  appeal = "Mrs";
} else {
  appeal = "Ms";
}

document.write(`<p>Hello ${appeal} ${name}</p>`);

// вартість price
// надавати знижку неповнолітнім і пенсіонерам
// та вивести остаточну суму до сплати

const userAge = 17;
const fullPrice = 500;
let discount = 0;

if (userAge < 18 || userAge > 65) {
  discount = 100;
}

resultPrice = fullPrice - discount;
document.write(`<p>${resultPrice}</p>`);

// видати повыдомлення про знижку, якщо пт 13
const day = "friday";
const date = 13;

if (day === "friday" && date === 13) {
  document.write("<p>Вітаємо, у Вас знижка 10%</P>");
}

// NaN === NaN => false
// Number.isNaN()

// перевірка
// let value;

// if (value !== undefined && value !== null) {
//   console.log("Correct");
// }

// false, null, undefined, '', 0/-0, NaN -- falsy-значення

if (value) {
  console.log("Correct");
}

const port = undefined;

// const PORT = port;

// if(port) {
//     PORT = port;
// } else {
//     PORT = 5500
// }

const PORT = port || 5500;
const PORT1 = port ?? 5500;

console.log("PORT :>> ", PORT);
console.log("PORT1 :>> ", PORT);
