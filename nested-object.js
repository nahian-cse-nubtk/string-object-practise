const college = {
    name : 'VNC',
    class: ['10','11','12'],
    events: ['science fair','bijoy dibosh','21 feb'],
    unique:{
        color: 'blue',
        result:{
            GPA: 5,
            Merit: 'top',

        }
    }
};
console.log(college);
console.log(college.name);
console.log(college.unique);
console.log(college.unique.color);
console.log(college.unique.result.Merit);
console.log(college['unique']['result']['Merit']);

college.unique.result.Merit = 'top top top';
console.log(college);

console.log(college.events);
console.log(college.events[1]);


//delete a property form an object

delete college.unique.result.Merit;
console.log(college);
delete college.unique;
console.log(college);