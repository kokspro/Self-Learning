//Exercise 1 - Return max of two numbers
// function maxNum(num1, num2) {
//     console.log(Math.max(num1, num2));

    //Less knowledge way
    // if (num1 > num2) {
    //     return num1;
    // }
    // return num2;

    //Ternary version
//     console.log((num1 > num2 ? num1 : num2))
// }

// maxNum(23, 21);
// console.log(maxNum(23, 17));

//Exercise 2 - Return Landscape or Portrait
// function isLandscape(width, height) {
    // if (width > height) {
    //     return true;
    // }
    // return false;
//     return (width > height);
// }

// console.log(isLandscape(1200, 800));
// console.log(isLandscape(1200, 1200));
// console.log(isLandscape(400, 800));

//Exercise 3 - FizzBuzz

// function fizzBuzz(num) {
//     if (typeof(num) !== 'number') 
//         return 'Not A Number';
//     if ((num % 3 === 0) && (num % 5 === 0))
//         return 'FizzBuzz';
//     if (num % 3 === 0) 
//         return 'Fizz';
//     if (num % 5 === 0) 
//         return 'Buzz';
//     return num; 
// }

// console.log(fizzBuzz('5'));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(11));

//Exercise 4 - Points on License
//For every 5 mph over speed limit you get 1 point
//More than 12 points means license is suspended

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const infractionLimit = 5;
//     if (typeof(speed) !== 'number')
//         return 'Not A Valid Speed';
//     if (speed <= speedLimit)
//         return 'Speed is Okay!';
//     const points = Math.floor((speed - speedLimit) / infractionLimit);
//     if (points < 12)
//         return `Point(s): ${points}`;
//     return 'License Suspended!';  
// }

// console.log(checkSpeed(35));
// console.log(checkSpeed(70));
// console.log(checkSpeed(80));
// console.log(checkSpeed(190));
// console.log(checkSpeed(111));
// console.log(checkSpeed(130));

//Exercise 5 - Even and Odd

// function showNumbers(limit) {
//     if (typeof(limit) !== 'number') {
//         console.log('Not a valid limit!');
//         return;
//     }    
//     for (let i = 0; i <= limit; i++) {
//         let sign = (i % 2 === 0) ? 'EVEN' : 'ODD';
//         console.log(`${i} "${sign}"`);
//     }
// }

// showNumbers(21);

//Exercise 6 - Count Truthy

// function countTruthy(array) {
//     let count = 0;
//     for (let truthy of array)
//         if (truthy)
//             count++;
//     console.log(count + ' Truthy Elements');
// }

// let arrays = ['red', NaN, null, undefined, 1, 'William', 65];
// countTruthy(arrays);

//Exercise 7 = Show Properties

// function showProperties(object) {
//     for (let strings in object) {
//         if (typeof object[strings] === 'string')
//             console.log(strings, object[strings]);    
//     }
// }

// const person = {
//     name: 'William',
//     age: 40,
//     title: 'Cool Dude',
//     hieght: 5.8,
//     nickName: 'Willy'
// };

// showProperties(person);