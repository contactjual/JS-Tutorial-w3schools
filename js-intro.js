// document.getElementById('inner-html').innerHTML='Writing into an HTML element, using innerHTML'





// console.log(2 + 2 * 5);
// console.log('jual' + ' ' + 'rana');

let x = 5;
x = 7;
x = x + x;
// console.log(x);

function blockScopeTesting() {
    let z = 5;
    // console.log('The value of z =', z);
};
// console.log('Out of z =', z) // cann't access though funstion is not block scope;
blockScopeTesting();

if (5 == 5) {
    let y = 4;
    // console.log('The value of y =', y); // cannot find 'y' out of 'if' scope 
};


// Object access 
const myObject = { firstName: 'Jual', lastName: 'Rana', age: 19 };
for (let [properties, value] of Object.entries(myObject)) {
    // console.log(properties + ': ' + value);
}



// Escape Characters
let me = "I am \'Jual\' Rana"
// console.log(me)




// JavaScript String Methods
let text = "HELLO WORLD, I am Jual and I am Rana";
// console.log(text.charAt(0));
// console.log(text.charCodeAt(0));
// console.log(text.slice(0, 5));
// console.log(text.substring(0, 5)); // 0 index theke start hoye 5ti okkhor nilo
// console.log(text.repeat(2));
// console.log(text.replace('HELLO', 'WORLD')); // HELLO k replase korbo WORLD diye
// console.log(text.replaceAll('am', 'is'));

// console.log(text.indexOf('am'));
// console.log(text.search('am'));
// console.log(text.search('am'));
// console.log(text.match('am'));
// console.log(text.matchAll('am'));
// console.log(text.includes("world")); x
// console.log(text.startsWith('am'));
// console.log(text.startsWith('am', 5)); // 5 no index theke start korbe




// Template Strings
// console.log(`Welcome to BD. ${text}`)






// NaN and numbers
let a = '5';
let b = 1;
let c = 'Hi';

// console.log(isNaN(a));
// console.log(isNaN(b));
// console.log(isNaN(b));
// console.log(isNaN(c));
// console.log(!isNaN(c));
// console.log(isNaN(4e-5)); // e er opor power -5

// console.log(typeof (NaN));
// console.log(typeof (Infinity));

// convert number to others format
let myDecemelNumber = 32;

const convertedToOctal = myDecemelNumber.toString(8) // ami base joto dibo sei base onojayi convert hobe
const econvertedToHexadecimal = myDecemelNumber.toString(16);
const econvertedToBinary = myDecemelNumber.toString(2);

// console.log(convertedToOctal);
// console.log(econvertedToHexadecimal);
// console.log(econvertedToBinary);

// number
// console.log(a * b)
// console.log(a / b)
// console.log(a - b)
// console.log(a + b) // concatinated

let d = 10.543
// console.log(typeof (d))
// console.log(typeof (d.toString()))

// console.log(d.toExponential(1))
// console.log(d.toExponential(2))
// console.log(d.toExponential(3))
// console.log(d.toExponential(4))

// console.log(d.toFixed(0)) // 11
// console.log((10.234).toFixed(0)) // 10
// console.log(d.toFixed(1))
// console.log(d.toFixed(2))

// console.log(d.toPrecision(10))
// console.log(typeof (d.toPrecision(10))) // string

// console.log(d.valueOf())
// console.log(typeof (d.valueOf()))
// console.log((12 + 3).valueOf())

// console.log(Number('234'));
// console.log(Number(typeof ('234')));
// console.log(parseInt(23.44)); // 23 
// console.log(parseInt('34.98')) // 34
// console.log(parseFloat('32'));

// console.log(Number.EPSILON) // The difference between 1 and the smallest floating point number greater than 1, in JavaScript is
// console.log(Number.MAX_VALUE);

// number sorting
let numbers = [1, 2, 34, 5, 3, 7, 6, 8, 10, 9];
// numbers.sort(); // wrong
numbers.sort(function (a, b) {
    return a - b; // for desending use (b - a)
});
numbers.sort(function (a, b) {
    // return 0.5 - Math.random(); // sort by randomly
});
// console.log(numbers);

// console.log(Math.max(numbers)); // wrong
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers)); // or
// console.log(Math.max(1, 2, 34, 5, 3, 7, 6, 8, 10, 9));

// object sorting
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];
// sort by year
// cars.sort(function  (x, y) {
//     return x.year - y.year;
// });

// sort by type 
cars.sort(function (a, b) {
    const aCase = a.type.toUpperCase();
    const bCase = b.type.toUpperCase();
    if (aCase > bCase) { return +1 }
    if (aCase < bCase) { return -1 }
    else { return 0 };
})
// console.log(cars);






// number to object

const object = new Number(112334566789);
// console.log(object);









// Array 
const myArray = ["Jual", "Rohim", "Korim", "Helim"]

// console.log(myArray);
// console.log(myArray.sort());
// console.log(myArray.reverse());
// console.log(myArray.push('Rohima', myArray))
// console.log(myArray.pop('Rohima', myArray))
// console.log(delete myArray[0])
// console.log(myArray.toString())
// console.log(myArray.join('|'))
// console.log(myArray[5] = 'Korima'), myArray;
// console.log(Array.isArray(myArray));
// console.log(myArray instanceof Array);
// console.log(myArray.splice(2, 0, 'Turi', 'Buri'), myArray) // 2 index er por theke last er doita add koro without cutting any index.
// console.log(myArray.splice(2, 2, 'Turi', 'Buri'), myArray) // 2 index er por theke last er doita add koro and 2ti index.
// console.log(myArray.splice(0,3)); // remove 0 index theke 3ta element
// console.log(myArray.slice(0,3), myArray); // remove 0 index theke 3 index porjonto .remove element but ager array okkhoto thakbe. 

// Array Iteration
let myNewArray = [45, 4, 9, 16, 25];
console.log(myNewArray);
myNewArray.forEach(function (value, index, array) {
    // console.log(value);
    // console.log(index);
    // console.log(array);
});
myNewArray.map(function (value, index, array) {
    // console.log(value);
    // console.log(index);
    // console.log(array);
});
myNewArray.flatMap(function (x) {
    // console.log(x * 2)
});
const newFlat = myNewArray.flatMap(x => x * 2);
console.log(newArr);

myNewArray.filter(function (value) {
    // console.log(value > 10);
});




