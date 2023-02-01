const array = [1,2,3,4,5,6,7];

function addVolume(elem){
  return elem + ' liter(s)';
}

const newArray = array.map(addVolume);

console.log(newArray)