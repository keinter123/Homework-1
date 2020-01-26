'use strict';

//Задача 1

function sumNumbers(element) {
    return element + 3;
    
};
alert(sumNumbers(4));


//Задача 1.1

function sumsOrDividesNumber(element) {
    if(element > 50) {
        return element / 2;
    } else {
        return Number(element) + 20;
    }
};

alert(sumsOrDividesNumber(4));


//Задача 1.2

function sumOfEvenNumbers(element) {
    let sum = 0;
    for(let i = 1; i <= element; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
    };
    alert(sum);
};
sumOfEvenNumbers(4);


//Задача 1.3

function searchValue(first, middle, last) {
    return first + middle * last;
}
alert(searchValue(2,10,2));


//Задача 2

function displaysInTheConsole() {
    console.log('Dmitry');
};

displaysInTheConsole();

function displaysInTheAlert() {
    alert('Dmitry');
};

displaysInTheAlert();

function displaysInTheAlertAndConsole() {
    console.log('Dmitry');
    alert('Dmitry');
};

displaysInTheAlertAndConsole();


//Задача 3

function sumOfOddNumbers(value, sumNumbers = null) {
    sumNumbers = 0;
    for(let i = 1; i < value; i++) {
        if(i % 2 !== 0) {
            sumNumbers += i;
        };
    };
    return sumNumbers;
};

alert(sumOfOddNumbers(10));


//Задача 3.1

function findingGreatestEvenNumber(number) {
  let result;
  for(let i = 0; i <= number; i++) {
    if(number % 2 === 0) {
      result = number;
    } else {
      result = number -1 ;
    };
    return result;
  };
};

alert(findingGreatestEvenNumber(45));


//Задача 3.2

function findLastOddNumber(number) {
  let result;
  for(let i = number; i >= 0; i--) {
    if(number % 2 !== 0) {
      result = number;
    } else {
      result = number - 1;
    };
    return result;
  };
};

alert(findLastOddNumber(1334));


//Задача 3.3

function printLargerNumber(element_one, element_two, element_three) {
    
    if(element_one > element_two && element_one > element_three) {
        alert(element_one);
    } else if (element_two > element_one && element_two > element_three) {
        alert(element_two);
    } else if (element_three > element_one && element_three > element_two) {
        alert(element_three);
    }
};

printLargerNumber(3,4,2);


//Задача 3.4

function getSmallerNumber(valueOne, valueTwo, valueThree, valueFour, valueFive) {
    if(valueOne < valueTwo && valueOne < valueThree && valueOne < valueFour && valueOne < valueFive) {
        alert(valueOne + ' меньшее из 5 параметров');
    } else if(valueTwo < valueOne && valueTwo < valueThree && valueTwo < valueFour && valueTwo < valueFive) {
        alert(valueTwo + ' меньшее из 5 параметров');
    } else if(valueThree < valueOne && valueThree < valueTwo && valueThree < valueFour && valueThree < valueFive) {
        alert(valueThree + ' меньшее из 5 параметров');
    } else if(valueFour < valueOne && valueFour < valueTwo && valueFour < valueThree && valueFour < valueFive) {
        alert(valueFour + ' меньшее из 5 параметров');
    } else if(valueFive < valueOne && valueFive < valueTwo && valueFive < valueThree && valueFive < valueFour) {
        alert(valueFive + ' меньшее из 5 параметров');
    }
};

getSmallerNumber(5,6,4,8,3);


//Задача 3.5

function checkParameterType(value) {
    alert(typeof value);
};

checkParameterType(true);


//Задача 3.6 

function passesDayWeek(value) {
    switch(value) {
        case 1:
            alert('1 - Понедельник');
            break;
        case 2: 
            alert('2 - Вторник');
            break;
        case 3:
            alert('3 - Среда');
            break;
        case 4:
            alert('4 - Четверг');
            break;
        case 5:
            alert('5 - Пятница');
            break;
        case 6:
            alert('6 - Суббота');
            break;
        case 7: 
            alert('7 - Воскресенье');
            break;
        default:
            alert('ошибка');
            break;
        
    };
};

passesDayWeek(4);