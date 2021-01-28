
//STRING

let sent = "When the going gets tough, the tough gets going";
let word1 = "Sujoy";
let word2 = "Das";

console.log(sent.charAt(3)); // character position
console.log(word1.concat(" ",word2)) //attach two word

console.log(sent.includes("going")); //find one word or letter in a sentence
console.log(`The word "${word1}" ${sent.includes(word1) ? 'is' : 'is not'} in the sentence`);

console.log(sent.indexOf("g"));
console.log(sent.indexOf("g", (9 + 1)));

console.log(sent.lastIndexOf("g"));
console.log(sent.lastIndexOf("g", (46 - 1)));

console.log(sent.replace('going', 'coming')); //How to replace every "going"

console.log(sent.slice(0, 20));

const words = sent.split(' ');
console.log(words[5]);

console.log(sent.toUpperCase());
console.log(sent.toLowerCase());

