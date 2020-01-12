//Задача 0
    
let userName = 'Dmitry';
let userStartedLearnJavaScript = "08.01.20";
let shoppingCart;

const COLOR_RED = '#F00';
const COLOR_GREEN = "#0D032D";
const dateRegistration = "12.01.20"; 

var lessons = 'JavaScript';
var price = 25521;
var secondLeson = true;


//Залача 1

let oddNumber = prompt('Введите число');
if(oddNumber % 2 > 0) {
    alert(oddNumber);
}

//Задача 2 

let year = prompt('Введите год');

if (year % 4 == 0 && year % 100 > 0) {
    alert('366 дней');
} else if (year % 100 == 0 && year % 400 == 0) {
    alert('366 дней');
} else if (year % 100) {
    alert('365 дней');
} else {
    alert('365 дней');
};

//Задача 3

let firstNumber = 4;
let middleNumber = 5;
let lastNumber = 6;

if (firstNumber > middleNumber && firstNumber < lastNumber) {
   alert('firstNumber');
} else if (middleNumber > firstNumber && middleNumber < lastNumber) {
   alert('middleNumber');
} else if (lastNumber > firstNumber && lastNumber < middleNumber) {
alert('lastNumber');
};

//Задача 4

let integerFirst = 54;
let integerSecond = 180;
let integerLast = 240;

if (integerFirst > integerSecond && integerFirst > integerLast) {
   alert(integerFirst);
} else if (integerSecond > integerFirst && integerSecond > integerLast) {
   alert(integerSecond);
} else if (integerLast > integerFirst && integerLast > integerSecond) {
alert(integerLast);
};

// //Задача 5 

//let year = prompt('Введите год');
/*if (year % 100 == 0 && year % 400 == 0) {
    alert('366 дней');
} else if (year % 4 == 0 && year % 100 > 0) {
    alert('366 дней');
} else if (year % 100 == 0) {
    alert('365 дней');
} else {
    alert('365 дней');
};*/