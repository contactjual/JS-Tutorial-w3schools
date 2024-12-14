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
const myObject = {firstName: 'Jual', lastName: 'Rana', age: 19};
for (let [properties, value] of Object.entries(myObject)){
    console.log(properties+ ': '+ value);
}



