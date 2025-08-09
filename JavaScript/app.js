// console.log("Ayyyy, links working");

//Ternary Operators
// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);
// console.log(points > 100 ? 'gold' : 'silver');

// let x = 10;
// let y = x++;
// console.log(y);

//Exercise for operators
//Write code to swap values;
// let a = 'red';
// let b = 'blue';

// let temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);

//For In Loop

// const person = {
//     name: 'William',
//     age: 40
// };

// for (let key in person) {
//     console.log(key, person[key]);
// }

// const colors = ['red', 'blue', 'green'];

// for (let index in colors) {
//     console.log(index, colors[index]);
// }

//For Of Loop

// const colors = ['red', 'blue', 'green'];

// for (let color of colors) {
//     console.log(color);
// }

//FACTORY

// function createCircle() {
//     const circle =  {
//         radius: 1,
//         location: {
//             x: 1,
//             y: 1
//         },
//         isVisible: true,
//         draw: function() {
//             console.log('draw');
//         }
//     };
//     return circle; 
// }

//shorter version of Factory

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);
// const circle2 = createCircle(4);
// console.log(circle1);
// console.log(circle2);

//CONSTRUCTOR FUNCTIONS

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(4);

// console.log(circle1);
// console.log(circle2);

//OBJECT CLONING

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

//The {} is creating a new object to place the copy in
// const another = Object.assign({}, circle);

// console.log(another);
// circle.radius = 73;
// console.log(circle);
// console.log(another);

// const another = { ...circle };
// console.log(another);
// circle.radius = 73;
// console.log(circle);
// console.log(another);

//MATH

// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log(Math.round(Math.random() * (10 - 1) + 1));

//Stringplay

// let message = "first";
// console.log(message);
// message = message.replace('first', 'second');
// console.log(message);



//ARRAYS
//ARRAYS
//ARRAYS

//FINDING OBJECTS

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' }
// ];

// const found = courses.find(function(element) {
//     return element.name === 'a';
// }); 

// console.log(found);

//Same using arrow functions

// const found = courses.find(element => { element.name === 'a' });
//element use because there is one element, otherwise use (), () also for no parameters

//ITERATING AN ARRAY

// const numbers = [1, 2, 3, 4];

// for (let number of numbers)
//     console.log(number);

// numbers.forEach(number => console.log(number));

// numbers.forEach((number, index) => console.log(index, number));

//JOINING ARRAYS

// const numbers = [1, 2, 3, 4];
// const joined = numbers.join('***');
// console.log(joined);

// const message = 'This is a message';
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('***');
// console.log(combined);

//SORTING ARRAYS OBJECTS

// const courses = [ 
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'JavaScript' }
// ];

// courses.sort(function(first, second) {
//     if (first.name < second.name) return -1;
//     if (first.name > second.name) return 1;
//     return 0;
// });

//TESTING ELEMENTS IN AN ARRAY

// const numbers = [1, 2, -1, 4];

// const atLeastOnePos = numbers.some(function(value) {
//     return value >= 0;
// });

// console.log(atLeastOnePos);

//FILTERING AN ARRAY

// const numbers = [1, -1, 2, 3];

//const pos = numbers.filter(function(value) {
//     return value >= 0;
// });
//since a single line we can just arrow function it
// const pos = numbers.filter(value => value >= 0);

// console.log(pos);

//MAPPING AND CHAINING

// const numbers = [1, -1, 2, 3];

//filter out numbers less than 0
//map each number to an object where the value is the number
//filter out objects where the value is less than or equal to 1
//map each object to the number of their value

// const items = numbers
//     .filter(n => n >= 0)
//     .map(n => ({ value: n }))
//     .filter(obj => obj.value > 1)
//     .map(obj => obj.value);

// console.log(items);

//REDUCING AN ARRAY

// const numbers = [1, -1, 2, 3];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

//can get rid of initial 0 at the end and accumulator will be set to first value in the array

// console.log(sum);











