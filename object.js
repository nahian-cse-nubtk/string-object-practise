// object means real word entities like bottle, chair, mobile, laptop etc.

//Object has the four things. They are object name, property, key, value.
// property is the key and value pair
// let see the object syntax

const bottle = {
    brand: 'Aquafina',
    price: 20,
    color: 'blue',
    isClean: true
};

console.log(bottle);

console.log(bottle.brand);
console.log(bottle.isClean);
// access the property using dot notation

console.log(bottle['price']);
console.log(bottle['color']);
// acces using bracket notion

//...............creating 'subject' object...........

const subject = {
    name : 'Biology',
    teacher: 'Rasheda Mam',
    examDate: '30 Feb',
    chapters: ['first','second','fourth'],
    exams: {
        name: 'final exam',
        marks: 100

    }
};

// console.log(subject);

