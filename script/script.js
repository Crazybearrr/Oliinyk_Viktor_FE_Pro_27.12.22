const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item){

    let newArray = array.filter((el) => {return el !== item });

console.log(newArray)

}

removeElement(array, 5)