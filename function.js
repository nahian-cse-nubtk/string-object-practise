console.log('today we will learn function');

function hello(){
    console.log('I am a function, please call me to work');
}

hello();

function moneyBag(){
    var money = 4500;
    console.log('I have '+money+' taka');
}
moneyBag();

// the declared variable in the function will not be accessable outside the function

//now we will make a addition machine

function additionMachine(input1, input2){
    //here input1 and input2 are called parameter
    let sum = input1 + input2;
    console.log('The sum is: ',sum);
    return sum;
}

additionMachine(10,40);

// here only the value will be print and if we return the value like sum
// then it will be accessable outside the function, lets do it

const result = additionMachine(20,50);
console.log('we get the value:', result);