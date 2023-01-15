// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for(let i = 20; i <= 30;){
    console.log(i);
    i = i + 0.5;
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const price = 27;

for(let i = 10; i <= 100; i = i + 10){
    result = i * price;
    console.log(result);
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let n = 9801;

for(let i = 1; i <= 100; i++){
   if ((Math.pow(i, 2)) <= n){
    console.log(i);
   }
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let number = 11;

loop:
for (let i = 2; i <= number; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue loop;
  }
  console.log(i);
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let someNum = 12;

for(let i = 0; i <= 100; i++){
    if((3 * i) === someNum){
        console.log(`${someNum} can be obtained by raising the number 3 to ${i} power`);
        break;
    } else if((3 * i) !== someNum){
        console.log(`${someNum} cannot be obtained by raising the number 3 to the power`);
    }   
}