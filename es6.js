// Object Destruction || Destructing

const list = {
    type : "grocerylist",
    items : ["fruits", "vegetables", "tissuebox", "noodles"],
    price : ["10", "20", '30']
};

const {type, items, price} = list;

console.log(type, items, price);

//Arrow function

const myName = (firstName, lastName) => {
    console.log(`My name is ${firstName} ${lastName}`);
}

myName("Sujoy", "Das");

const sum = (firstNum, secondNum) => (firstNum**secondNum);

console.log(sum("2", "3"));

//template literals

const name = "Sujoy";
const age = "23";
const profession = "bekar";

console.log(`My name is ${name},
I am ${age} year old and 
I am ${profession}`);

// const vs let

const x = 10;

//Map

const array = [2, 6, 9, 15, 35]
const array1 = array.map(num => {
    return num * 2
})

console.log(array1);

const name2 = "Sujoy"
const map = Array.prototype.map

const newName = map.call(name2, eachLetter => {
    return `${eachLetter}u`
})

console.log(newName)