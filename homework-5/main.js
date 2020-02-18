'use strict';

function checkPolindrom(value) {
   value = value.toLowerCase();
   let result = value.split('').reverse().join('');
   if(result === value) {
       console.log('true');
   } else {
       console.log('false')
   }
};

checkPolindrom('Civic');


function findVowels(value) {
    const matched = value.match(/[aeiou]/gi);
    return matched.join(', ');
};
console.log(findVowels('hello'));


function fib(value) {
    if(value < 2) {
        return value;
    }
    return fib(value - 1) + fib(value - 2);
};
console.log(fib(15));


let str = 'aaa bbb ccc';
console.log(str.substr(4,4));

console.log(str.substring(4,7));

console.log(str.slice(4,7));


let data = "2025-12-31"; 
let arrData = data.split("-").reverse().join('.'); 
console.log(arrData); 

console.log('js'.toUpperCase());
console.log('JS'.toLowerCase());

let string = 'я учу javascript !';

console.log(string.length);

 console.log(string.substr(2,4));
 console.log(string.substring(6,16));
 console.log(string.slice(2,5));

console.log(string.indexOf('учу'));


function trimString(str, n) {
    let result = '';
    if(str.length > n) {
        result += str.substr(0, n) + '...'
    } else {
        result += str;
    }
    return result;
};
console.log(trimString('Дана переменная str, в которой хранится какой-либо текст.', 40));


console.log(string.split(' '));


console.log( string.split(' ').join('+'));


console.log(string[0].toUpperCase() + string.substr(1, string.length - 1));


let stringUpperCase = string.split(' ').map(function(value) { 
    return value[0].toUpperCase() + value.substr(1, string.length -1)
}).join(' ');

console.log(stringUpperCase);


function changeString(val) {
   let arr =  val.split('_');
    for(let i = 0; i < arr.length;i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1, arr[i].length - 1);
    }
   return arr.join('');
};
console.log(changeString('var_test_text'));


function stringToarray(str) {
    return str.split(' ');
};
console.log(stringToarray('Напишите функцию stringToarray(str), которая преобразует строку в массив слов.'));


function deleteCharacters(str, length) {
    return str.substr(0, length);
};
console.log(deleteCharacters('Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.', 40));


function insert_dash(str) {
    return  str.split(' ').join('-').toUpperCase();
};
console.log(insert_dash('Напишите функцию insertdash(str)'));


function changeRegistr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(changeRegistr('метод charAt() возвращает указанный символ из строки.'));


function capitalize(str) {
    let arr = str.split(' ');
    for(let i = 0; i < arr.length;i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    };
    return arr.join(' ');
};

console.log(capitalize('Каждое слово в верхнем регистре'));


function changeRegister(str) {
    let changedReg = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toLowerCase()) {
            changedReg += str[i].toUpperCase();
        } else {
            changedReg += str[i].toLowerCase();
        };
    };
        return changedReg;
    };   
console.log(changeRegister('КаЖдЫй ОхОтНиК'));


function removeChar(str) {
     return str.replace(/[^а-я\s]/gi, '');
 };
console.log(removeChar('Сегодня,# будет{} идти $снег ?'));


function zeros(num, length, sign){
    if(sign === undefined || sign === null) {
        return length + String(num).padStart(length, '0');
    } else {
        return sign + String(num).padStart(length, '0');
    };
};
console.log(zeros(145, 5, '+'));


function insentiveSearch(str1,str2) {
   return str1.search(str2) !== -1 ? 'Содержит': 'Не содержит';
};
console.log(insentiveSearch('Яблоки на снегу', 'Яблоки'));


function initSnake(str) {
    let newString = str.replace(/[A-Z]/g, function(value) {
        return '_'+ value.toLowerCase();
    });
    return newString.replace(/^_/, '');
};
console.log(initSnake('HelloWorld'));

function repeatStr(str, n) {
    return str.repeat(n) ;
};
console.log(repeatStr('1. ', 5));


let pathName = '/home/user/dir/file.txt';

function path(pathName) {
    let nameFile = pathName.split('/').pop();
    return nameFile;
};
console.log(path(pathName));


function insert(str, substr, position) {
    let arrStr = str.split('');
    arrStr.splice(position, 0, substr);
    return arrStr.join('')
};
console.log(insert('Я гуляю по ', 'Харькову ', 24));


function limitStr(str, n, symb) {
   let newStr = '';
   if(str.length > n && symb === undefined) {
       newStr += str.substr(0,n) + '...';
   } else {
       newStr += str.substr(0, n) + symb;
   }
   return newStr;
};
console.log(limitStr('Усеченная строка должна заканчиваться троеточием (если не задан параметр symb) или заданным символом symb.', 20, '111'));


function cutString(str, n) {
    let strArray = [];
    for(let i = 0; i < str.length;i++) {
        strArray.push(str.substr(i, n));
    };
    return strArray.join(',');
};
console.log(cutString('дерево', 2));


function count(str, stringSearch) {
    let count = 0;
    for(let i = 0; i < str.length;i++) {
        if(str.charAt(i) === stringSearch) {
            count++;
        };
    };
    return count;
};
console.log(count('парабупабу', 'и'));


function cutTegs(str) {
    return str.replace(/(<([^>]+)>)/gi, '');
};
console.log(cutTegs('<button onclick="showScrollTop()">Показать на сколько элемент прокручен сверху</button>'));


function strim(str) {
    return str.trim();
};
console.log(strim(' Max is a good boy '));


function uniqueLetters(str) {
    let unique = '';
    for(let i = 0; i < str.length; i++) {
        if(unique.indexOf(str.charAt(i)) < 0) {
            unique += str.charAt(i);
        };
    };
    return unique;
};
console.log(uniqueLetters('дубликат'));


function removeDuplicate(str) {
    let arr = str.split(',');
    return arr.filter((element, index) => arr.indexOf(element) === index);
};
console.log(removeDuplicate('хлеб, яблоки, вода, яблоки, сок, вишня'));


function findWord(word, str) {
    return str.includes(word);
};

console.log(findWord('javascript', 'Я учу javascript'));


function isUpperCase(str, character){
    if(str.charAt(character).toUpperCase() === str.charAt(character)) {
        return true;
    } else {
        return false
    };
};

console.log(isUpperCase('Указанной позиции. Если в верхнем регистре выводится', 0));



function reverceString(str) {
    return str.split('').reverse().join('');
};

console.log(reverceString('кобра'));
