// document.getElementById('inner-html').innerHTML='Writing into an HTML element, using innerHTML'

console.log(2 + 2 * 5);
console.log('jual' + ' ' + 'rana');

let x = 5;
x = 7;
x = x + x;
console.log(x);

function blockScopeTesting() {
    let z = 5;
    console.log('The value of z =', z);
};
// console.log('Out of z =', z) // cann't access though funstion is not block scope;
blockScopeTesting();

if (5 == 5) {
    let y = 4;
    console.log('The value of y =', y); // cannot find 'y' out of 'if' scope 
};


// Object access 
const myObject = { firstName: 'Jual', lastName: 'Rana', age: 19 };
for (let [properties, value] of Object.entries(myObject)) {
    console.log(properties + ': ' + value);
}



// Escape Characters
let me = "I am \'Jual\' Rana"
console.log(me)


// JavaScript String Methods
let text = "HELLO WORLD, I am Jual and I am Rana";
console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.slice(0, 5));
console.log(text.substring(0, 5)); // 0 index theke start hoye 5ti okkhor nilo
console.log(text.repeat( 2));
console.log(text.replace('HELLO','WORLD')); // HELLO k replase korbo WORLD diye
console.log(text.replaceAll('am', 'is'));

console.log(text.indexOf('am'));
console.log(text.search('am'));
console.log(text.search('am'));
console.log(text.match('am'));
console.log(text.matchAll('am'));
console.log(text.includes("world"));
console.log(text.startsWith('am'));
console.log(text.startsWith('am', 5)); // 5 no index theke start korbe



