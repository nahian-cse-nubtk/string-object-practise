const address = 'andhar killa';

const part = address.slice(2,5);
console.log(part);
// will be print dha which index 2,3,4

// here slice(2,5) means the slice part will be the part start from index 2 and end before 5 or at 4.

const name = 'Shaikh Al Nahian';

const part1 = name.slice(0,6);
const part2 = name.slice(7,9);

console.log(part1,part2);

// now we will see the substring and substr

// difference and syntax : substr(start, len) |||||| substring(start, end);

const subPart1 = name.substr(3,7);

console.log('part of the name using substr(3,7): ', subPart1);

const product = "tomato and morich";

const subPart2 = product.substr(2,5);

console.log('part of the product: ', subPart2);

// now we will see the substring, syntax : substring(start, end);

const color = 'dark blue and purpale';

const subpart3 = color.substring(0,5);

console.log('part of the color:', subpart3);

//output: dark ; index 5 er age porjonto jabe

//Now we will see the split function, split means vag kore fala..
console.log('now seeing the split');

const sentence = 'I am good and hard working person';

console.log(sentence.split());
// ata dia total sentence take akta array er modha dakhabe

console.log(sentence.split(''));
// aikhane total character gula split hoya alada alada double coma er modhe dakhabe white space sho but no gap here

console.log(sentence.split(' '));
//[ 'I', 'am', 'good', 'and', 'hard', 'working', 'person' ]   this format will come, aikhane word gula ke vag kore feltaca

console.log(sentence.split('a'));
//[ 'I ', 'm good ', 'nd h', 'rd working person' ]     prottek khetre a er dui side vag hoy jave but a will not show

const friends = "rohim, korim, jobber, borkot, saikot, abdul";

const friend = friends.split(',');

console.log(friend);
//[ 'rohim', ' korim', ' jobber', ' borkot', ' saikot', ' abdul' ]  this output will show

// now we will see the join function

const realFriend = ['dipankar', 'khalid', 'hamim', 'jahidul', 'saiful', 'abdulla'];

console.log(realFriend.join('.'));
//dipankar.khalid.hamim.jahidul.saiful.abdulla

console.log(realFriend.join('|'));
//dipankar|khalid|hamim|jahidul|saiful|abdulla

console.log(realFriend.join('-'));
//dipankar-khalid-hamim-jahidul-saiful-abdulla

// aikhane join dia array er upadan gula ke join kore akta string banano hoy
