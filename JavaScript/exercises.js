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

//Exercise 8 - Sum of Multiples of 3 and 5

// function sum(limit) {
//     let sums = 0;

//     for (i = 0; i <= limit; i++)
//         if ((i % 3 === 0) || (i % 5 === 0))
//             sums += i;

//     console.log(sums);
// }

// sum(10);

//Exercise 9 - Grade

// function calculateGrade(marks) {
//     let totalGrade = 0;

//     for (let grade of marks) 
//         totalGrade += grade;

//     let average = totalGrade / marks.length;

//     if (average >= 90)
//         return 'A';
//     if (average >= 80)
//         return 'B';
//     if (average >= 70)
//         return 'C';
//     if (average >= 60)
//         return 'D';
//     return 'F';
// }

// const grades = [90, 95, 100, 80, 85, 93, 21];
// console.log(calculateGrade(grades));

//Exercise 10 - Stars

// function showStars(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let string = '';
//         for (let j = 1; j <= i; j++) {
//             string = string + '*';
//         }
//         console.log(string);
//     }
// }

// showStars(14);

//Exercise 11 - Prime Numbers

// function showPrimes(limit) {
//     for (let num = 2; num <= limit; num++) {
//         let prime = true;

//         for (let divisor = 2; divisor < num; divisor++)
//             if (num % divisor === 0) {
//                 prime = false;
//                 break;
//             }
//         if (prime)
//             console.log(num);
//     }
// }

// showPrimes(20);


//OBJECT EXERCISES
//OBJECT EXERCISES
//OBJECT EXERCISES

//Exercise 1 
//Make an address object, function to print off keys and values

// const address = {
//     street: 'Hilton Head',
//     city: 'Missouri City',
//     zipCode: 77459
// };

// function showAddress(address) {
//     for (let key in address) {
//         console.log(`${key}: ${address[key]}`);
//     }
// }

// showAddress(address);

//Exercise 2
//Use a factory to create an address
//Use a constructor to create an address

// function createAddress(street, city, zipcode) {
//     return {
//         street,
//         city,
//         zipcode
//     };
// }

// let factoryAddress = createAddress('Hilton Head', 'Missouri City', 77459);
// console.log(factoryAddress);

// function Address(street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }

// let constructorAddress = new Address('Hilton Head', 'Missouri City', 77459);
// console.log(constructorAddress);


//Exercise 3
//Object Equality
//Use previous constructor to create 2 addresses, compare them to see if they are equal
//Are same to check if they point to the same object

// function Address(street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }

// let address1 = new Address('Hilton Head', 'Missouri City', 77459);
// let address2 = new Address('Hilton Head', 'Missouri City', 77459);

// function areEqual(object1, object2) {
//     if (object1.street !== object2.street)
//         return false;
//     if (object1.city !== object2.city)
//         return false;
//     if (object1.zipcode !== object2.zipcode)
//         return false;
//     return true;
// }

// console.log(areEqual(address1, address2));

// function areSame(object1, object2) {
//     console.log(object1 === object2);
// }

// areSame(address1, address2);

//Exercise 4 - Blog Post Object

