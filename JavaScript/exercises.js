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
//create an object literal blog post with the following fields
//title, body, author, views, comments (author, body), isLive (boolean)

// const blogPost = {
//     title: 'Cool Title',
//     body: 'Lazy kids do all the hard things',
//     author: 'William Koks',
//     views: 10,
//     comments:[ {
//         author: 'Bobby',
//         body: 'I comment on things for funsies'
//     }],
//     isLive: false
// };
// console.log(blogPost);

//Exercise 5 - Constructor for blogPost

// function BlogPost(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }


//ARRAY EXERCISES
//EXERCISE 1 - Array from range

// const numbers = arrayFromRange(-44, 6);

// console.log(numbers);

// function arrayFromRange(min, max) {
//     const array = [];
//     for (let i = min; i <= max; i++)
//         array.push(i);
//     return array;
// }


//Exercise 2 - Includes (rewrite the method)

// const numbers = [1, 2, 3, 4];

// function myIncludes(array, searchElement) {
//     for (let value of array)
//         if (value === searchElement)
//             return true;
//     return false;    
// }

// console.log(myIncludes(numbers, -1));


//Exercise 3 - Except - Remove elements from an array

// const numbers = [1, 2, 3, 4, 1, 2, 1, 2];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
//     const newArray = [];
//     for (let element of array)
//         if (!excluded.includes(element))
//             newArray.push(element);
//     return newArray;    
// }

//Exercise 4 - Moving an Element

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, -1);

// console.log(output);

// function move(array, index, offset) {
//     const newArray = [...array];
//     let toMove = newArray[index];
//     if (toMove == undefined) {
//         console.error('Invalid offset');
//         return;
//     }
//     if (index + offset < array.length - 1 || index + offset > array.length - 1) {
//         console.error('Invalid offset');
//         return;
//     }
//     newArray.splice(index, 1);
//     newArray.splice(index + offset, 0, toMove);
//     return newArray;
// }

//Exercise 5 - Count Occurrences
//do it the simple way, then implement reduce
// const numbers = [1, 1, 2, 2, 3, 4, 5];

// const count = countOccurrences(numbers, -2);

// console.log(count);

// function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let element of array) 
    //     if (element === searchElement)
    //         count++;

    // return count;

    //same but with reduce
    // return array.reduce((accumulator, current) => {
    //     const occurence = (current === searchElement) ? 1 : 0;
    //     return accumulator + occurence;
    // }, 0);
// }

//Exercise 6 - Get Max
//simple method, then reduce

// const numbers = [21, 2, 12, 3, 4];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//     let currMax = array[0];
//     for (let element of array) 
//         if (element > currMax)
//             currMax = element;
//     return currMax
// }

//with reduce

// function getMax(array) {
//     return array.reduce((currMax, newElement) => {
//         if (newElement > currMax)
//             return newElement;
//         return currMax;
//     }, array[0]);
// }

//testing a possible shorter code

// function getMax(array) {
//     return array.reduce((currMax, newElement) => {
//         return (newElement > currMax) ? newElement : currMax;
//     }, array[0]);
// }

//Exercise 7 - Movies

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 }
// ];

//All movies in 2018 with a rating > 4
//sort them by their rating
//descending order
//pick their title and display on console

// const output = movies
//     .filter(movie => (movie.year === 2018) && (movie.rating > 4)) 
//     .sort((a, b) => b.rating - a.rating)
//     .map(obj => obj.title);
// console.log(output);



//FUNCTION EXERCISES
//FUNCTION EXERCISES
//FUNCTION EXERCISES

//EXERCISE 1 - Sum of Arguments

//function sum should return the sum of all arguments
//challenge - use Array.isArray and do the same if it is given an array

// function sum(...args) {
//     return args.reduce((arg1, arg2) => arg1 + arg2);
// }
// console.log(sum(1, 2, 3, 4, 5));

// function sum(...args) {
//     if (Array.isArray(args[0]))
//         return args[0].reduce((arg1, arg2) => arg1 + arg2);
//     return args.reduce((arg1, arg2) => arg1 + arg2);
// }
// console.log(sum([1, 2, 3, 4, 5]));

//Exercise 2 - Area of a Circle with getters and setters

// const circle = {
//     radius: 3,
//     get area() {
//         return this.radius * this.radius * Math.PI;
//     }
// }
// circle.radius = 2;
// console.log(circle.area);

// Exercise 3 - Handling Errors

//if first argument is not an array, throw an exception

// const numbers = [1, 2, 3, 4];
// const numbers = true;
const numbers = 6;
try {
    const count = countOccurrences(numbers, 1);
    console.log(count);
}

catch(error) {
    console.log(error);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error('First argument is not an array!');
    }
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}

