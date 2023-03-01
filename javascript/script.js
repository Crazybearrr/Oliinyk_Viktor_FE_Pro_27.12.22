'use strict';

// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.+
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.
// Домашку можна здати після терміну


class Student{
    constructor(name, surName, birthYear,  marks){
        this.name = name;
        this.surName = surName;
        this.birthYear = birthYear;
        this.marks = marks;
        this.presence = new Array(25);
        this.presenceIndex = 0;
        this.result = {
            good:`Молодець!`,
            normal: `Добре, але можна краще `,
            bad: `Редиска!`
        };
    };

    age() {
        return new Date().getFullYear() - this.birthYear
    };

    averageMark() {
        return this.marks.reduce((a, b) => a + b) / this.marks.length
    };

    absent() {
        if (this.presence.length > this.presenceIndex) {
            this.presence[this.presenceIndex] = false;
            this.presenceIndex++;
        };
    };

    present() {
        if (this.presence.length > this.presenceIndex) {
            this.presence[this.presenceIndex] = true;
            this.presenceIndex++;
        };
    };

    summary(){
        let precenceCount = this.presence.slice(0, this.presenceIndex).filter(x => x).length / this.presenceIndex;
        // console.log(precenceCount)
        if(this.averageMark()>90 && precenceCount > 0.9){
            return this.result.good;
        } else if (this.averageMark()>90 || precenceCount > 0.9){
            return this.result.normal;
        } else {
            return this.result.bad
        }
    };
}

let tommy = new Student(`Tommy`, `Fury`, 1999, [100,100,80,90,60]);
tommy.absent();
tommy.absent();
tommy.absent();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
tommy.present();
console.log(tommy.name, tommy.surName);
console.log(tommy.averageMark());
console.log(tommy.age());
console.log(tommy.summary());

let tony = new Student(`Tomy`, ` Montana`, 1994, [90,90,90,90,90]);
tony.absent();
tony.absent();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
tony.present();
console.log(tony.name, tony.surName);
console.log(tony.averageMark());
console.log(tony.age());
console.log(tony.summary());

let millie = new Student(`Millie`, `Brown`, 2002, [90,90,97,90,90]);
millie.absent();
millie.absent();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
millie.present();
console.log(millie.name, millie.surName);
console.log(millie.averageMark());
console.log(millie.age());
console.log(millie.summary());