
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const firstArray = [`NaN`, `undefined`, 7, 9, 19901, `null`, `lorem`, 78954,{car: `red`, bus: `white`}, -74];
const secondArray = [];

function defineAverage(array){
    let numbers = array.filter(el => !isNaN(el));
    if(numbers.length === 0){
        return `Array of no number`
    } else {
        let sum = numbers.reduce((prev, curr) => prev + curr);
        return sum/numbers.length;
    }
}

console.log(defineAverage(firstArray))
console.log(defineAverage(secondArray))

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const x = +prompt('Enter x', `0`),
      y = +prompt('Enter y', `0`),
      znak = prompt('Enter a mathematical operator');

function doMath(x, znak, y) {
    switch (znak){
        case `+`:
        return `${x} + ${y} = ${x + y}`;
        case `-`:
            return `${x} - ${y} = ${x - y}`;
        case `*`:
            return `${x} * ${y} = ${x * y}`;
        case `/`:
            return `${x} / ${y} = ${x / y}`;
        case `%`:
            return `${x} % ${y} = ${x % y}`;
        case `^`:
            return `${x} ^ ${y} = ${x ** y}`;
        default:
            return `You didn't enter a mathematical operator`
    }
    // return eval(x + znak.replace('^', '**') + y); ///// eval ===> evil
  }

  console.log(doMath(x, znak, y))

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

const mainN = +prompt('Enter the length of the main array', `2`),
      subN = +prompt('Enter the length of the subarray', `3`),
      arr = new Array(mainN).fill(0).map((_, ind) => new Array(subN).fill(0).map((_, i) => prompt(`Enter item ${i} in subarray ${ind}`)));
      
console.log(arr);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const str = prompt(`Input string`, `Hello world`).split(``),
      arg = prompt(`What characters to delete?`, `l, d`).split(`, `);

function delSymbol(string, del){
    return string.filter(el => !del.includes(el)).join(``);
}

console.log(delSymbol(str, arg))