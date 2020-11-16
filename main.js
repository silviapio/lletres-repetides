//FASE 1
let myName = "SILVIA";
let myNameArray = myName.split("");
console.log(myNameArray);

for (let char of myNameArray) {
    console.log(char);
}

//FASE 2
let myName1 = "SILV1A";
let myNameArray1 = myName1.split("");
console.log(myNameArray1);

console.log(`Partim del nom ${myName1}`);
const vowels = ["A", "E", "I", "O", "U"];
const consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (let char of myNameArray1) {
    if (vowels.includes(char)) {
        console.log(`He trobat la VOCAL: ${char}`);
    } else if (consonants.includes(char)) {
        console.log(`He trobat la CONSONANT: ${char}`);
    } else if (numbers.includes(char)) {
        console.log(`Els noms de persones no contenen el número: ${char}`);
    } else {
        console.log(`Character not recognized: ${char}`);
    } 
};

//FASE 3
let myMap = new Map();

for (let char of myNameArray) {
    let count = myMap.get(char);
    count = (count != null) ? (myMap.get(char) + 1) : 1;
    myMap.set(char, count); 
}
console.log(myMap);
for (let [key, value] of myMap.entries() ) {
	console.log(key, value);
};

//FASE 4
var mySurname = "PIOVESAN";
var mySurnameArray = mySurname.split("");
console.log(mySurnameArray);
var blankSpace = [""];
var fullNameArray = myNameArray.concat(blankSpace, mySurnameArray);
console.log(fullNameArray);