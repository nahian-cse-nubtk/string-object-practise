const school = 'Rajuk Uttra Model School and College';

console.log(school);

console.log(school.toUpperCase());
// sob gula boro banai felbe but last a () dawa lagbe na hole function kaj korbe nah.

console.log(school.toLowerCase());
// sob gula choto hat dakhabe

console.log(school.toLocaleUpperCase());
console.log(school.toLocaleLowerCase());
// look like same

// now see a use case of upper and lower case

const subject = "Chemistry";

const book = "chemistry";

//here the both name is not same. Because there are difference between C and c , Let compare

if(subject == book)
{
    console.log('they are same');
}
else
{
    console.log('they are not same');
}

// using toUppercase or toLowercase function we can solve this issue

if(subject.toLowerCase() == book.toLowerCase())
{
    console.log('they are same');
}
else
{
    console.log('they are not same');
}

if(subject.toUpperCase() == book.toUpperCase())
{
    console.log('they are same');
}
else
{
    console.log('they are not same');
}

// the above problem is happen sometimes for the typing mistake, to avoid it we can use toUppercase and toLowercase function


// now we will see and solve the white space issue by trim process

const drink = 'water';
const liquid = "            water";

if(drink==liquid)
{
    console.log('both are same');
}
else
{
    console.log('both are not same');
}

// now we solve the issue using trim() function
if(drink.trim() == liquid.trim())
{
    console.log('both are same');
}
else
{
    console.log('both are not same');
}
