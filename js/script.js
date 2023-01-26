// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key = ``;

function generateKey(numb, sting){
    for(let i = 0; i < numb; i++){
        key += sting[Math.floor(Math.random() * (sting.length))];
    } if (key.length === 16) {
        console.log(key);
    }
}

generateKey(16, characters);