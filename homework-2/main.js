'use strict';

//Задача 0

const weeklSchedule = prompt('Расписание недели','Введите порядковый номер недели');

switch (weeklSchedule) {
    case '1':
        alert('Понедельник\n 1. Повторение теории\n 2. Выполнение домашнего задания\n');
    break;
    case '2':
        alert('Вторник\n 1. Вылазка на природу\n');
    break;
    case '3':
        alert('Среда\n 1. Курсы JavaScript на 19:00\n');
    break;
    case '4':
        alert('Четверг\n 1. Стоматолог 18:00\n');
    break;
    case '5':
        alert('Пятница\n 1. Английский на 19:00\n');
    break;
    case '6':
        alert('Суббота\n 1. Курсы JavaScript на 11:00\n');
    break;
    case '7':
        alert('Воскресенье\n 1. Английский на 19:00\n');
    break;
    };


//Задача 1

const callCost = prompt('Стоимость 10 минутного междугороднего разговора');

switch (callCost) {
    case '905':
        alert('Москва' + ' ' + 4.15 * 10 + ' ' + 'рублей');
    break;
    case '194':
        alert('Ростов' + ' ' + 1.98 * 10 + ' ' + 'рублей');
    break;
    case '491':
        alert('Краснодар' + ' ' + 2.69 * 10 + ' ' + 'рублей');
    break;
    case '800':
        alert('Киров' + ' ' + 5 * 10 + ' ' + 'рублей');
    break;
    default:
        alert('Извините, город не найден');
};


//Задача 2

let $min = 14;

if($min <= 15) {
    alert('Первая');
} else if ($min <= 30) {
    alert('Вторая');
} else if ( $min <= 45) {
    alert('Третья');
} else if ($min < 60) {
    alert('Четвертая');
} else {
    alert('Число больше 59');
};


//Задача 3

const $num = prompt('Введите число от 1 до 4');

let $result;

switch ($num) {
    case '1':
        $result = 'Зима';
        alert($result);
    break;
    case '2':
        $result = 'Весна';
        alert($result);
    break;
    case '3':
        $result = 'Лето';
        alert($result);
    break;
    case '4':
        $result = 'Осень';
        alert($result);
    break;
};


//Задача 4

let rectangleArea;

let height = 23;
let width = 10;

rectangleArea = height * width;

alert(rectangleArea);


//Задача 4.1

let heightCylinder = 10;
let diameterCylinder = 4;

let value_p = 3.14;

let cylinderBaseArea = value_p * diameterCylinder;

let cylinderVolume = cylinderBaseArea * heightCylinder;

alert(Math.floor(cylinderVolume));

//Задача 4.2

let sideOfTheTrianglen_n = 3;
let sideOfTheTrianglen_m = 4;

let hypotenuse = Math.floor(Math.pow(sideOfTheTrianglen_n, 2) + Math.pow(sideOfTheTrianglen_m, 2) / 2);

alert(hypotenuse);


//Задача 4.3 
////////////////////


//Задача 4.4

let credit = 2000000;

let perepl = 0;

for(let i = 1; i <= 5; i++) {
    perepl += 10;
};

let overpaymentForFiveYears = credit / 100 * perepl;
alert(overpaymentForFiveYears + ' ' + 'это' + ' ' + perepl+ '%' + ' ' + 'от всей суммы');


//Задача 5

let number = 46;

while(number <= 67) {
    console.log(number);
    number++;
};


//Задача 5.1

let initialValue = 45;

while(initialValue < 670) {
    initialValue++;
    if(initialValue % 10 === 0) {
        console.log(initialValue);
    };
};


//Задача 5.2

for(let i = 45;i <= 67; i++) {
    console.log(i);
};

for(let i = 45;i <= 670; i++) {
   if(i % 10 == 0) {
       console.log(i);
    };
};


//Задача 7 
 
let booleanValue = true;
let resultCalculator;

while(booleanValue) {
    let valueOne = prompt('Первое значение');
    let calculatorOperators = prompt('Введите знак операции');
    let valueTwo = prompt('Второе значение');
    if(valueOne === '' || calculatorOperators === '' || valueTwo === '' || (calculatorOperators !== '+' && calculatorOperators !== '-' && calculatorOperators !== '*' && calculatorOperators !== '/')) {
        alert('Неправильное значение');
    } else {
    if(calculatorOperators === '+') {
        calculatorOperators = 1;
    } else if (calculatorOperators === '-') {
        calculatorOperators = 2;
    } else if (calculatorOperators === '/') {
        calculatorOperators = 3;
    } else if (calculatorOperators === '*') {
        calculatorOperators = 4;
    }

    switch (calculatorOperators) {
        case 1:
            resultCalculator = Number(valueOne) + Number(valueTwo);
            alert(resultCalculator);
        break;
        case 2:
            resultCalculator = Number(valueOne) - Number(valueTwo);
            alert(resultCalculator);
        break;
        case 3:
            resultCalculator = Number(valueOne) / Number(valueTwo);
            alert(resultCalculator);
        break;
        case 4:
            resultCalculator = Number(valueOne) * Number(valueTwo);
            alert(resultCalculator);
        break;
    }
    let finishWork = confirm('Продолжить?');
    if(finishWork === true) {
        booleanValue = true;
    } else {
        booleanValue = false;
    }
    }
};


//Задача 8

let searchSumNumber = 255;

let searchSum = 0;

for(let i = 1; i <= searchSumNumber; i++) {
    if(i % 2 !== 0) {
        searchSum += i;  
    }
};
alert(searchSum);


//Задача 9

let numberMultiplication = 0;

for(let i = 1; i <= 9; i++) {
  numberMultiplication = numberMultiplication + 3 + ' * ' + i + ' = ' + 3 * i + '\n';
};
console.log(numberMultiplication);


//Задача 10

let lastValue = 23;

let sumOfNumber = 0;

for(let i = 0; i <= lastValue; i++) {
    sumOfNumber = sumOfNumber + i;
    
}
console.log(sumOfNumber);


//Задача 11

let answer = true;
let attempt = 0;

while(answer) {
    let puzzle = prompt('Отгадай загадку:\n' + 'Удивительный вагон! Посудите сами: Рельсы в воздухе, а он держит их руками.');
    
    if(puzzle === '') {
        alert('Напиши что нибудь');
        attempt++;
    } else if(attempt > 0 && puzzle === 'Сдаюсь') {
        alert('Правильный ответ Троллейбус');
        answer = false;
    } else if(answer === 'Троллейбус') {
        alert('Правильно!');
        answer = false;
    }  else {
        let finishWorks = confirm('Попробовать ещё?');
        if(finishWorks === true) {
            answer = true;
        } else {
            answer = false;
        };
    };
};


//Задача 12

let rangeOfNumberFirst = prompt('Введите первое число:');
let rangeOfNumberSecond = prompt('Введите второе число:');

let sumResult = 0;
for(let i = 0; i <= rangeOfNumberSecond; i++) {
    if(i % 2){
        sumResult += i;
    }
};
alert(sumResult);


// //Задача 13

let factorialOfNumber = prompt('Введите число');

let factorial = 1;
for(let i = 1; i <= factorialOfNumber; i++) {
    factorial *= i; 
};
alert(factorial);


// //Задача 14 

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter++;
}
console.log(result);


