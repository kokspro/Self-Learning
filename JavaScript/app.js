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

// function createCircle() {
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

//Start at Objects Math