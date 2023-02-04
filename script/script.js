// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// ﻿sum(3) = 3

// sum(5) = 8

// sum(20) = 28

function createCounter() {
    let counter = 0;
    return function myFunction(n) {
        return counter += n;
    }
}

    const increment = createCounter();
    
    const resultFirst = increment(7);
    console.log(resultFirst);

    const resultSecond = increment(10);
    console.log(resultSecond);
    
    const resultThird = increment(10);
    console.log(resultThird)