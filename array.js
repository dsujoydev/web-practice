// ARRAY

let array1 = ['a', 'b', 'c'];
let array2 = ['aam', 'jaam', 'kathal'];


let array4 = array1.concat(array2);
console.log(array4);

let below = (Value) => Value < 3;

let array3 = ['1', '2', '3'];

console.log(array3.every(below)); // every

let result = array2.filter(word => word.length > 3); //filter

console.log(result);

let largeNumber = (element) => element > 1;
console.log(array3.findIndex(largeNumber)); //find index

array1.forEach(element => console.log(element)); //foreach

console.log(array2.indexOf('aam')); //indexof

console.log(array1.join('')); //join

let map1 = array3.map(x => x * 2); //map

console.log(map1);

console.log(array1.pop()); //pop - removes last element
console.log(array1);

console.log(array1.push("d")); //push
console.log(array1);

console.log(array1.reverse());

console.log(array2.shift()); //removes first element

console.log(array3.slice(2)); //slice







