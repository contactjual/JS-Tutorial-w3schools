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
let me = "I am \n 'Jual' Rana"
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






// number to object and string to number
const object = new Number(112334566789);
// console.log(object);
// console.log(Number("90")); // converted string to number









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
// console.log(myNewArray);
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
// console.log(newArr);

myNewArray.filter(function (value) {
    // console.log(value > 10);
});

const useReduce = myNewArray.reduce(reduceFunction);
function reduceFunction(firstValue, lastValue) {
    return firstValue + lastValue;
}
// console.log(useReduce);

const usingEvery = myNewArray.every(everyFunction);
function everyFunction(value) {
    return value > 18;
}
// console.log(usingEvery);

const usingSome = myNewArray.some(everyFunction);
function everyFunction(value) {
    return value > 18;
}
// console.log(usingSome);

// console.log(Array.from('HiIamRana'));


for (let key of myNewArray) {
    // console.log(key);
}

let entriesUse = myNewArray.entries()
for (let key of entriesUse) {
    // console.log(key);
}

// console.log(...myNewArray);











// JavaScript Date Objects

const date1 = new Date();
// console.log(date1);

// console.log(new Date("2015-09-25"));
// console.log(new Date(2015, 10, 15, 12, 25, 40, 40000)); // year,month,day,hours,minutes,seconds,ms

// method converts a date to a more readable format
// date1.toDateString();
// date1.toUTCString();
// date1.toISOString()

// date format
// ISO date is international date
// Date.parse(date1); // conveting to mili second

// Get Date Methods
// console.log(date1.getFullYear());
// console.log(date1.getMonth());
// console.log(date1.getDate());
// console.log(date1.getDay());
// console.log(date1.getHours());
// console.log(date1.getMinutes());
// console.log(date1.getSeconds());
// console.log(date1.getMilliseconds());
// console.log(date1.getTimezoneOffset());
// console.log(date1.setMonth(11));

// const myInterval = setInterval(function myClock() {
//     const date1 = new Date();
//     console.log(date1.getSeconds());
// }, 1000);









// JavaScript Math Object

// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.ceil(2.1)); // 3
// console.log(Math.floor(2.7)); // 2
// console.log(Math.trunc(2.9)); // 2
// console.log(Math.round(2.7)); // 3
// console.log(Math.sign(2)); // +1
// console.log(Math.sign(0)); // 0
// console.log(Math.sign(-2)); // -1
// console.log(Math.abs(-42)); // 42
// console.log(Math.abs(42)); // 42
// console.log(Math.sin(90 * Math.PI / 180)); // sin(90deg)=1
// console.log(Math.log2(8)); // 3 karon 2 k 3bar gon korle 8 hoy

// get random number betwen 2 to 10 use the common format 
function formatRandom(max, min) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
// formatRandom(10, 2);






// #problem-1. find how many vowel is here? used--- from() and includes()
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function countVowel() {
    let count = 0;
    const ItaretSentence = Array.from(mySentece);
    ItaretSentence.forEach(function (singleAlpha) {
        if (vowel.includes(singleAlpha)) {
            count++;
        }
        else {
            // console.log('No match')
        }
    });
    return count;
}
const mySentece = 'I love Bangladesh'
// console.log(countVowel(mySentece))

// #problem-2. find the duplicate value in array used--- filter(), indexOf()
const someNimbers = [2, 3, 5, 2, 6, 8, 6, 3, 5, 8];
const findDuplicate = someNimbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
});
// console.log(findDuplicate);









// turnary oparator 

// if (5 > 6) {
//     console.log('thik thik')
// }
// else {
//     console.log('no no');
// }

const myturnary = (5 > 6) ? "thik thik" : "no no";
// console.log(myturnary); 







// JS condition 

// switch
// let q = 10;
// switch (true) {
//     case q < 18:
//         console.log('You are addult');
//         break;
//     case q < 9:
//         console.log('You are child');
//         break;
//     default:
//         console.log('You middle');
// };

// switch (q) {
//     case 0:
//         console.log('You are addult');
//         break;
//     case 2:
//         console.log('You are child');
//         break;
//     case 10:
//         console.log('x er value 10');
//         break;
//     default:
//         console.log('No found value');
// };




// loop 

// for in loop for object 
const person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
    // console.log(x)
}
for (let x in person) {
    // console.log(person[x])
}

// for of loop for array
let w = 'JualRana'
let r = ['jual', 'rana'];
let n = [1, 3, 4, 5, 6, 7, 8]
for (key of w) {
    // console.log(key);
}
for (key of r) {
    // console.log(key);
}
for (key of n) {
    // console.log(key);
}
for (key in r) {
    // console.log(key);
}



// while loop 
let s = 0;
// while (s < 10) {
//     console.log(s);
//     s++;
// }
// or 
// do {
//     console.log(s);
//     s++;
// }
// while (s < 10);




// brack and continue
// for (let i = 0; i < 10; i++) {
//     if (i === 6) {
//         break; // all loop tay skip hoyeche
//     }
//     console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue; // just 5 skip hoyeche
//     }
//     console.log(i);
// }







// JavaScript Sets 

const mySet = new Set(['a', 'b', 'c']);
// console.log(mySet);

const mySet2 = new Set(['a', 'b', 'c', 'b', 'c']);
// console.log(mySet2);

// console.log(mySet2.has('a')); // '.has()' like '.include()' of array;
// console.log(mySet2.add('D'));












// JavaScript Map Methods

// const fruits = new Map([
//     ['mango', 230],
//     ['apple', 30],
//     ['banana', 100]
// ]);
// console.log(fruits.get('mango'));

const fruits = new Map();

fruits.set('mango', 230)
fruits.set('apple', 30)
fruits.set('banana', 100)

// console.log(fruits);
// console.log(fruits.size); // Array.length
fruits.delete('banana');
// console.log(fruits.has('banana'));
// fruits.clear(); // all element deleted

fruits.forEach(function (value, key) {
    // console.log('value=' + value + ' ' + 'key=' + key);
});

for (let x of fruits.entries()) {
    // console.log(x); // ekti ekti element fully return kore
}

for (let x of fruits.values()) {
    // console.log(x); 
}

for (let x of fruits.keys()) {
    // console.log(x); 
}







// JavaScript typeof

// console.log(typeof null); // obeject, null means nai.
// console.log(typeof undefined); // undefine , undefine means define kora nai but memory te jayga dokol kore ache
// console.log(typeof Array); //  function
// console.log(typeof Object); //  function

let time = new Date()
// console.log(time instanceof Array)
let m = [1, 3, 4]
// console.log(m instanceof Array)
// console.log(m instanceof Set) // false
let h = new Set(['Jual', 'Rana']);
// console.log(h instanceof Set) // true

let myMap = new Map();
// console.log((myMap.constructor === Array));
// console.log((myMap.constructor === Object));
// console.log((myMap.constructor === Map));
// console.log((myMap.constructor.toString().indexOf('Array') > -1));
// console.log((myMap.constructor.toString().indexOf('Map') > -1));









// JavaScript Type Conversion

// console.log(Number('')) // 0
// console.log(Number('jual')) // NaN
// console.log(parseFloat(2.334)) // 2.334
// console.log(parseInt(2.3)) // 2 (cil er motho kaj kroe)
// console.log((2.59678).toFixed(2)); // 2.60
// console.log((2.59678).toPrecision(3)); // 2.60
// console.log((123).toExponential()); // 123

// console.log((123).toString()); // 123

// console.log(Number(false)); // 123
// console.log(Number(true)); // 123

// number comvert to other base (number.toString(base))
// console.log((45).toString(2)) // converted to bainary
// console.log((0b101101).toString(10)) // converted to decimal (0b) means it's a binary number
// console.log((0o732).toString(2)) // converted to decimal (0o) means it's a octal number






// BigInt data type 
// let g = BigInt('2032039438573485429857340952849033333333333333333333333333333333333333333333333333333888888888888888888888888888888888888888888888888');
// console.log(g);
// let p = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
// console.log(p);







// JavaScript Regular Expressions

let ami = 'Jual Rana is a website developer. Korim is also a developer';
let kew = 'Jual Rana is a developer. Korim is also a developer';

// console.log(ami.search('developer')); // 23 no index e koje peyeche
// console.log(ami.search(/DeVeloPer/i)); // ekhn case-insensitive hisebe kaj korbe
// console.log(ami.search(/developer/ig)); // global, ekoi line e akadik valo ver korbe
// console.log(kew.search(/developer/igm)); // multi line e akadik valo ver korbe
// console.log(ami.replace('developer', 'nothing')); 
// console.log(ami.replace(/developer/ig, 'nothing')); 
// let j = /e/i;
// console.log(j.test('the last search is very bad'));
// console.log(/E/i.exec('the last search is very bad'));
// console.log(ami.match(/[abc]/i));


// console.log(~5); // 5
// console.log(2 ^ 4);










// JavaScript Errors

let num = 4;
const show = 'I am in catch'

try {
    // console.log('I am in try');
    // if (fetch('https://www.geeksforgeeks.or') ) throw 'This link is wrong' 
    if (num < 5) throw 'wrong'
}
catch (err) {
    // console.log(err);
}
finally {
    // console.log('I am in finally')
}


// try {
//     l = num + Y; throw 'I am error' // referance error
// }
// catch {
//     console.log(l)
// }

// try {
//     if (num < 5)= throw 'wrong' // sytext error
// }
// catch (err) {
//     console.log(err)
// }


// function myfunc (){
//     carName = 'JIX';
//     console.log(carName);
// }
// myfunc()

// let z = 4;
// function myfunc() {
//     z = 10;
// }
// myfunc()
// console.log(z) // 10






// JavaScript Hoisting
// var, let and const are hoisted. Var can set his value as undefine and set the provided value by reaplacing undefine. But let and const can not set value as undefine fist of all.

// var t;
// t = 10; 
// var k;
// k = 5;  
// console.log(t, k);

// var t;
// t = 10;
// console.log(t, k); // k is undefine
// var k;
// k = 5;  

// let fm;
// fm = 4;
// console.log(fm);

// fm = 4;
// let fm;
// console.log(fm); // ReferenceError: Cannot access 'fm' before initialization

// const gm;
// gm = 3;
// console.log(gm); // SyntaxError: Missing initializer in const declaration





// JavaScript Use Strict
// "use strict"; Defines that JavaScript code should be executed in "strict mode".

// "use strict"; // Uncaught ReferenceError: xm is not defined
// xm = 34;







// JS this

const myNewObject = {
    firstName: 'Jual',
    lastName: 'Rana',
    getFname: function(){
        return this.firstName; // this means myNewObject
    }
}
// console.log(myNewObject.getFname());


// if I control 'this' use call() or bind() function
const myOthersObject = {
    firstName: 'Jual',
    lastName: 'Rana',
    getFname: function(){
        return this.hisName; // this means myOthObject
    }
}
const myOthObject = {
    myName: 'Jual',
    hisName: 'Rana',
}
// console.log(myOthersObject.getFname.call(myOthObject));



// this in arrow function 
// const arewfunc = () => {
//     console.log(this); // this means the window
// }
// window.addEventListener('load', arewfunc);

const arewfunc = () => {
    console.log(this); // this also means the window
}
document.getElementById('but').addEventListener('click', arewfunc);