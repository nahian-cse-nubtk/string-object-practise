const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: "12MP"
};
//for in
for(const property in mobile)
{
    console.log(property);
    console.log(mobile[property]);
}

const keys = Object.keys(mobile);

// using for of

for(const key of keys){
    console.log(key,':',mobile[key]);
}