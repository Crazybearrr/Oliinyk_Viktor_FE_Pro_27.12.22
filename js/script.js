"use strict";

// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.

let positivEl = arr.filter(el => el > 0);

let result = positivEl.reduce((accumulator, el) => accumulator + el, 0);

console.log(result);
console.log(positivEl.length);
// function sumEl(positivEl) {
//     let sum = 0;
//     positivEl.forEach(function(el){
//         sum += el
//     })
//     return sum;
// }
// console.log(sumEl(positivEl));


// Знайти мінімальний елемент масиву та його порядковий номер.

let minNumber = Math.min(...arr);

console.log(minNumber);
console.log(arr.indexOf(minNumber));

// Знайти максимальний елемент масиву та його порядковий номер.

let maxNumber = Math.max(...arr);

console.log(maxNumber);
console.log(arr.indexOf(maxNumber));

// Визначити кількість негативних елементів.

let negativEl = arr.filter(el => el < 0);

console.log(negativEl.length);

// Знайти кількість парних позитивних елементів.

let positivDuplicat = positivEl.filter((el, index, numbers) => {
    return numbers.indexOf(el) !== index;
});

console.log(positivDuplicat.length);

// Знайти кількість непарних позитивних елементів.

let positivNotDuplicat = positivEl.filter(el => !positivDuplicat.includes(el));

console.log(positivNotDuplicat.length);

// Знайти суму парних позитивних елементів.

let resultDuplicat = positivDuplicat.reduce((accumulator, el) => accumulator + el, 0);

console.log(resultDuplicat);

// Знайти суму непарних позитивних елементів.

let resultNotDuplicat = positivNotDuplicat.reduce((accumulator, el) => accumulator + el, 0);

console.log(resultNotDuplicat);

// Знайти добуток позитивних елементів.

// function multEl(positivEl) {
//     let mult = 1;
//     positivEl.forEach(function(el){
//         mult *= el
//     })
//     return mult;
// }
// console.log(multEl(positivEl))

let resultPositivEl = positivEl.reduce((accumulator, el) => accumulator * el, 1);

console.log(resultPositivEl);

// Знайти найбільший серед елементів масиву, остальні обнулити.

let max = arr[0];
let maxi = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    arr[maxi] = 0;
    maxi = i;
  } else {
    arr[i] = 0;
  }
}

console.log(arr);