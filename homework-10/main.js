'use strict';
let buttonAddUsers = document.getElementById('button-add-users');

let container = document.getElementById('container');

let counter = 0; 

(function (){
    ajaxGetID("https://jsonplaceholder.typicode.com/posts")
})()


function ajaxGetID(url) {
    let xhr = new XMLHttpRequest();

   
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            xhr = xhr.responseText;
            let xhrParse = JSON.parse(xhr);
            for(let i = 0; i < xhrParse.length;i++) {
                counter++;
                container.innerHTML += xhrParse[i].id + '<br>';
                console.log(xhrParse[i].id)
                if(i === 9) break;
            }
            buttonAddUsers.addEventListener('click', function() {
                
                for(let j = counter; j < xhrParse.length; j++) {
                    
                    container.innerHTML += xhrParse[j].id + '<br>';
                    if(j === (counter+9)) {
                        counter+=10;
                        break
                    }
                }  
            })
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

document.getElementById('form').style.cssText = 'margin-top: 20px'
 
let resultForm = document.getElementById('result-form');
resultForm.style.cssText = 'margin-top: 20px';

class Validation {
    constructor(str) {
        this.str = str;
    }
    checkMaxMin() {
        if(this.str.length < 5 || this.str.length > 25) {
            return false 
        } else {
            return true;
        }
    }
    checkSymbols() {
        let specialCharacters = /\W/;
        let isValid = specialCharacters.test(this.str);
        if(isValid) {
            return false
        } else {
            return true
        }
    }
    checkNumbers() {
        let num = /\d/;
        let isValid = num.test(this.str);
        if(isValid) {
            return false
        } else {
            return true
        }

    }
    isEmpty() {
        if (this.str === "") {
          return false;
        } else {
          return true;
        }
      }
}

let buttonForm = document.getElementById('button-form');

buttonForm.addEventListener('click', function() {
    let inputForm = document.getElementById('input-form').value;
    let validation = new Validation(inputForm);
    switch (false) {
        case validation.checkNumbers():
            resultForm.innerHTML = "Введите без цифр";
        break;
        case validation.checkSymbols():
            resultForm.innerHTML = "Введите без спецсимволов";
        break;
        case validation.isEmpty():
            resultForm.innerHTML = "Заполните строку";
        break;
        case validation.checkMaxMin():
            resultForm.innerHTML = "Введите от 5 до 25 символов";
        break;
        default:
            resultForm.innerHTML = "Все правильно";
          return true;
      }
})