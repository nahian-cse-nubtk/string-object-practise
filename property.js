const person ={
    name:'Shaikh Al Nahian',
    age: 25,
    profession: 'Developer',
    salary: 25000,
    married: true,
    favouritePlace: ['bandorbon', 'Kuakata', 'Coxs Bazar','Chattagram']

};

console.log(person.profession);
console.log(person.married);
console.log(person.age);
// property is accessed by the dot notation

// now the property will be accessed by the bracket notation

console.log(person['salary']);

console.log(person['favouritePlace']);

console.log(person.favouritePlace[2]);

console.log(person.favouritePlace[3]);

console.log(person['favouritePlace'][1]);
//it is different from other