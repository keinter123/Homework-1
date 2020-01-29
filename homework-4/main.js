'use strict';


//Задача 1

let arr = [23,131,13,1,3123];

function copyArr(arr) {
    return arr.slice();
};

let copiedArray = copyArr(arr);

copiedArray.push('Hello');

console.log(copiedArray);
console.log(arr);


//Задача 2

console.log(arr.join());
console.log(arr.toString());


//Задача 3

let arrValue_x = [];

for(let i = 1; i <= 10; i++) {
    arrValue_x.push('x');
};
console.log(arrValue_x);


//Задача 4

let arrNumber = [];

for(let i = 1; i <= 10; i++) {
    arrNumber.push(i);
};

console.log(arrNumber);


//Задача 5

let arrFractions = [];

for(let i = 1;i <= 10; i++) {
    arrFractions.push(Math.random().toFixed(2));
};
console.log(arrFractions);


//Задача 6

let randomNumberArray = [];

for(let i = 0; i < 10; i++) {
    randomNumberArray.push(Math.floor(Math.random() * 10));
};

console.log(randomNumberArray);


//Задача 7

let arrNumbers = [21,16,8,12,4,5,1];

for(let i = 0; i < 10; i++) {
    if(arrNumbers[i] > 0 && arrNumbers[i] < 10) {
        console.log(arrNumbers[i]);
    };
};


//Задача 8

for(let i = 0; i < arrNumbers.length; i++) {
    if(arrNumbers[i] === 5) {
        console.log('Есть');
        break;
    };  
};


//Задача 9

let numberArray = [1,43,21,11,53,72];

let sumnumbersArray = 0;

for(let i = 0; i < numberArray.length; i++) {
    sumnumbersArray += numberArray[i]; 
};

console.log(sumnumbersArray);


//Задача 10

let sumNumberArray = 0;

for(let i = 0; i < numberArray.length; i++) {
    sumNumberArray += numberArray[i] * numberArray[i];
};

console.log(sumNumberArray)


//Задача 11

function numberArrSum (element, value ) {
    return element + value;
};
let summaryNumber = numberArray.reduce(numberArrSum);

function average(element, value) {
    return element / value;
};

console.log(average(summaryNumber,numberArray.length));


//Задача 12

let num = prompt('Введите многозначное число:');

function colonOdd(num) {
    let numResult = [];
    for(let i = 0;i < num.length; i++) {
        if(num[i] % 2 !== 0 && (num[i + 1] % 2 !== 0)) {
            numResult += num[i] + ';';
        } else {
            numResult += num[i];
        };    
    };
    return numResult;
}

console.log(colonOdd(num));


//Задача 13

let fruit = ['Apple', 'Apple','Banana', 'Orange', 'Banana'];

let filter = fruit.filter((element, index) => fruit.indexOf(element) === index);

console.log(filter);


//Задача 14

let number = [1,2,3,4,5,6,7,8,9,10];

let getFirst = (number = null, n) => number.slice(0, n);


console.log(getFirst(number, 3));


//Задача 15 

let numArrOne = [4,6,23,213,1,5];

let numArrTwo = [13,41,7,134,6,7];

function getSumArray() {
    let sumArr = [];
    for(let i = 0; i < numArrOne.length; i++) {
        sumArr.push(numArrOne[i] + numArrTwo[i]);
    }
    console.log(sumArr);
};

getSumArray(); 


//Задача 16

let numberArr = [2,1,52,6,12,62];

function combineArray(numberArr, number) {

    let resultCombine = [];
    resultCombine = number.concat(numberArr);
    resultCombine = resultCombine.filter((element, index) => resultCombine.indexOf(element) === index);
    return resultCombine;
};
console.log(combineArray(numberArr, number));


//Задача 17

let fruitArr = ['Orange', 'Banana', 'Apple', ' Orange', 'Mango'];
let fruitsAndVegetables = ['Potato', 'Mango','Potato', 'Carrot', 'Tomato'];
 
function getUnion(fruitArr, fruitsAndVegetables) {
    let unionArr = [];
    unionArr = fruitArr.filter((element, index) => fruitArr.indexOf(element) === index).concat(fruitsAndVegetables.filter((element, index) => fruitsAndVegetables.indexOf(element) === index));
    return unionArr;
};

console.log(combineArray(fruitArr, fruitsAndVegetables));


//Задача 18 

let unionNumber_One = [2,31,14,5,8,76];

let unionNumber_Two = [1,31,17,4,8,35];

function getUnionNumber(unionNumber_One, unionNumber_Two) {
    let numberArray_union = [];
    unionNumber_One.forEach((number) => unionNumber_Two.includes(number) ? number :  numberArray_union.push(number));
    unionNumber_Two.forEach((number) => unionNumber_One.includes(number) ? number : numberArray_union.push(number) );
    return numberArray_union;
};

console.log(getUnionNumber(unionNumber_One, unionNumber_Two));
console.log(getUnionNumber(unionNumber_Two ,unionNumber_One));


//Задача 19

function compareNumbers(unionNumber_One) {
    return unionNumber_One.sort((value_One, value_Two) => value_Two - value_One);
};

console.log(compareNumbers(unionNumber_One));

//Задача 20

function sumOfSquares(unionNumber_One) {
    return unionNumber_One.reduce((element,value) => element + value * value, 0);
};

console.log(sumOfSquares(unionNumber_One));


//Задача 21

function compositionArray(sum, composition) {
    sum = sum.reduce((element, value) => element + value);
    composition = composition.reduce((element,value) => element * value);
    console.log(sum);
    console.log(composition);
    return sum, composition;
};

compositionArray([1,2,4,5,67,8], [1,2,4,5,67,8]);


//Задача 22

function filterArray(arr) {
    return arr.filter(Boolean);
};
console.log(filterArray([1,3,false,123,'', NaN, 0, null,'Hello!']));


//Задача 23 

function moveArr(arr) {
    arr = arr.copyWithin(0,4);
    arr.splice(4,1);
    return arr;
};
console.log(moveArr([2,41,12,1,'Apple',89]));


//Задача 24 

function generateNumbers(start, len) {
    let arr = [];
    for(let i = start; i <= len;i++) {
        arr.push(i);
    };
    return arr;
};

console.log(generateNumbers(0,7));

// //Задача 25

function currentSums(numbers) {
    let arr = [];
    numbers.reduce(((value_one, value_two, index) => arr[index] = value_one + value_two), 0);
    return arr;
}
console.log(currentSums([2, 3, 5, 7, 11, 13, 17, 19]));

//Задача 26

let addArray = ['a','b','c'];

addArray.push(1,2,3);

console.log(addArray);

//Задача 27

console.log([1,2,3].reverse());

//Задача 28

let unshiftArray = [1,2,3];
unshiftArray.unshift(4,5,6);

console.log(unshiftArray);

//Задача 29

console.log(['js','css','jq'][2]);

//Задача 30

console.log([1, 2, 3, 4, 5].slice(3,5));

//Задача 31

let spliceNumber = [1, 2, 3, 4, 5];

let resultSplice = spliceNumber.splice(1,2);

console.log(spliceNumber);

//Задача 32

console.log([1,2,3,4,5].splice(1,3));

//Задача 33

console.log([ [1, 2, 3], [4, 5, 6], [7,8,9] ][1][0]);

//Задача 34

let programmingLanguages = {
    js: ['jQuery', 'Angular'],
    php: 'Hello',
    css: 'world'
};

console.log(programmingLanguages.js[0]);

//Задача 35

let alertArray = ['a', 'b', 'c'];

alert(alertArray);

//Задача 36

console.log(alertArray[0], alertArray[1], alertArray[2]);

//Задача 37

alertArray.push('d');

console.log(`${alertArray[0]} + ${alertArray[1]}, ${alertArray[2]} + ${alertArray[3]}`);

//Задача 38

let numbersArray = [2,5,3,9];

function sumNumber(numbersArray) {
    return numbersArray[0] * numbersArray[1] + numbersArray[2] * numbersArray[3];
};
console.log(sumNumber(numbersArray));