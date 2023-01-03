"use strict"
const userName = prompt(`Enter your name`);
const userAge = +prompt(`Enter your age`);
const smoke = confirm(`Are you smoke?`);

if (userName && userAge) {
    if (userAge >= 18 && smoke) {
        alert(`Hi ${userName}, well, you chose this path by yourself...`)
        console.log (`Hi ${userName}, well, you chose this path by yourself...`);
    }     else if (userAge >= 18 && !smoke) {
        alert(`Hi ${userName}, great! You probably also do sports`)
        console.log (`Hi ${userName}, great! You probably also do sports`);
    }     else if (userAge < 18 && smoke) {
        alert(`Hi ${userName}! Do the parents know about it?`)
        console.log (`Hi ${userName}! Do the parents know about it?`);
    }     else if (userAge < 18 && !smoke) {
        alert(`Hi ${userName}, great! You probably also do sports`)
        console.log (`Hi ${userName}, great! You probably also do sports`);
    }
}   else {
        alert(`ERROR`)
        console.log (`ERROR`);
    }