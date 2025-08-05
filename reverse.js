const sentence = 'I am learning web development';

for(const letter of sentence)
{
    console.log(letter);
}

const sentence2 = 'I am learning web development';

let reverse = '';

for(const letter1 of sentence2)
{

    reverse = letter1 + reverse;
}
console.log(reverse);

// using for loop we will see the reverse system

let rev = '';

for(let i = 0; i< sentence.length; i++)
{


    let letter = sentence[i];

    rev = letter + rev ;
}

console.log(rev);

//shortcut method

const reversed = sentence.split('').reverse().join('');

console.log(reversed);