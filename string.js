//system of keeping string in a variable

const country = 'Bangladesh';

const division = "Khulna";

const district = `Bagerhat`;
//using back-tick

const thana = new String('Bagerhat Sadar');

console.log(thana);

console.log(typeof thana);

//String object – created using the new String() constructor

// string pass into object

const upzilla = 'Bagerhat Sadar';


console.log(typeof upzilla);

if(thana === upzilla)
    //using == type is not checking, but using === type check will be happen and the result show both are not string
{
    console.log('Both are string');
}
else
{
    console.log('Both are not string');
}

// we see an array again

const numbers = [32,44,55,66,77,88,99,100,101,102,107,108,109];

console.log(numbers.length);

console.log(numbers[3]);

// now we will see the string

const capital = 'Dhaka';

console.log(capital.length);

console.log(capital[1]);

capital[4] = 'i';

console.log(capital);

// here capital[4] = 'i'; will not be changed. Because array is mutable and string is immutable. Mutable means changeable the element of the array. Immutable means not change able the element of the string.

