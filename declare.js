//object literal

const pen = {
    brand: 'econo',
    price: 10,
    color: 'black'
};

//another system

const pencil = new Object();
pencil.name ='black';
pencil.price = 5;
pencil.model= '6B';
console.log(pencil);

// using create keyword

const rubber = Object.create({});
rubber.name = 'matador';
rubber.price = 5;
console.log(rubber);