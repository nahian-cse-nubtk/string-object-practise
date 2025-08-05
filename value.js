const person = {
    name: 'Shaikh Al Nahian',
    age: 25,
    profession: 'Developer',
    salary: 25000,
    married: true,

};

console.log(person);
person.salary= 30000;
person['age']=26;
person['profession']='student';
console.log(person);

const keyName = 'profession';
console.log(person[keyName]);

person[keyName] = 'Teacher';
console.log(person);