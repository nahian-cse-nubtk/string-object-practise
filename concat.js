const first = 'Abid';
const second = 'Hasan';

const fullname = first +" "+second ;
console.log(fullname);

// the above system is our normal system

const fullname2 = first.concat(second);
console.log(fullname2);

const fullname3 = first.concat(' ').concat(second);

console.log(fullname3);

const fullname4 = first.concat(" ",second,"!");
console.log(fullname4);

const fullname5 = first.concat(" ","Navid");
console.log(fullname5);

console.log(second.includes('s'));
console.log(second.includes('d'));


//The concat() method in JavaScript join or concatenate two or more strings together. It does not change the existing strings and returns a new string. This method efficiently combines multiple strings into one, ensuring the original strings remain unchanged.
//concatenate means: সংযুক্ত করা

// syntax: str1.concat(str2, str3, str4,......, strN)