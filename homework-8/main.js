'use strict';


let block = document.getElementById('block');
block.style.cssText = 'width: 100%; height: 300px; border: 1px solid black; margin-bottom: 30px';


let coordinates = document.getElementById('coordinates');
coordinates.style.cssText = 'margin: 20px';
window.onmousemove = function (event) {
    coordinates.innerHTML = 'X:' + event.clientX + ' ' + 'Y: ' + event.clientY;
};

let moveObject = document.getElementById('move-object');
moveObject.style.cssText = 'position: absolute; top: 60px; left: 10px ; width: 140px; height: 160px; border: 5px solid #5F9EA0; ';

block.addEventListener('click', function(event) {
    moveObject.style.left = event.clientX + 'px';
    moveObject.style.top = event.clientY + 'px';
});

let moveObjectCenter = document.getElementById('move-object-center');
moveObjectCenter.style.cssText = 'position: absolute; top: 60px; left: 10px ; width: 140px; height: 140px; border-radius: 100px; border: 10px solid #4682B4';

block.addEventListener('click', function(event) {
    moveObjectCenter.style.left = (event.clientX - moveObjectCenter.offsetWidth / 2) + 'px';
    moveObjectCenter.style.top = (event.clientY - moveObjectCenter.offsetHeight / 2) + 'px';
});

let inputCodeKey = document.querySelector('.input-code-key');
let codeKey = document.querySelector('.code-key');

inputCodeKey.onkeypress = function(event) {
    let code = event.keyCode;
    let key = String.fromCharCode(code);
    codeKey.innerHTML = 'Код: ' + code + ' клавиша: ' + key; 
};

let paintedButton = document.getElementById('button-painted-red-width-ctrl');

paintedButton.style.cssText = 'width: 200px; height: 50px';

paintedButton.addEventListener('click', function(event){
    if(event.ctrlKey) {
        paintedButton.style.cssText = 'width: 200px; height: 50px; background: red;border: none; border-radius: 50px; color: #fff';
        this.innerHTML = '1';
    } else if(event.altKey) {
        this.innerHTML = '2';
    } else if(event.shiftKey){
        this.innerHTML = '3';
    };
});

let addSignUL = document.getElementById('add-sign');

let buttonLI = document.getElementById('button-add-li');

buttonLI.addEventListener('click', function(){
    addSignUL.insertAdjacentHTML('beforeend', '<li>Пункт</li>')
});

addSignUL.addEventListener('click', function(){
    event.target.innerHTML = event.target.innerHTML + ' !';
});


let table = document.getElementById('table');

let nameUser = document.querySelector('input[placeholder = "Имя"]');

let serNameUser = document.querySelector('input[placeholder = "Фамилия"]');

let buttonAddUser = document.querySelector('.add-user');

buttonAddUser.addEventListener('click', function() {
    if(nameUser.value === '' || serNameUser.value === '' || nameUser.value === '' && serNameUser.value === '') {
        alert('error');
    } else {
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let th2 = document.createElement('th');
        table.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(th2);
        th.innerHTML = nameUser.value;
        th2.innerHTML = serNameUser.value;
        nameUser.value = '';
        serNameUser.value = '';
    }
        table.addEventListener('click', function () {
            event.target.innerHTML = prompt('Введите значение', '');
        });
})

document.getElementById('hide-button').addEventListener('click', function(){
    this.hidden = true;
    this.removeAttribute('id');
});


let listUl = document.getElementById('list-products');

let lastClickedLI = null;
let listLI = listUl.children;

listUl.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName != "LI") return;
    if(event.meataKey || event.ctrlKey) {
        toggleSelect(target);
    } else if (event.shiftKey) {
        selectFromLast(target);
    } else {
        for (let i = 0; i < listLI.length; i++) {
            listLI[i].classList.remove('selected');
            }
            target.classList.add('selected');
            };
            lastClickedLI = target;
    });

listUl.onmousedown = function() {
    return false;
};

function toggleSelect(listLI) {
    listLI.classList.toggle('selected');
}

function selectFromLast(target) {

      let startSelected = lastClickedLI || listUl.children[0];

      let isLastClickedBefore = startSelected.compareDocumentPosition(target) & 4;

      if(isLastClickedBefore) {
          for(let i = startSelected; i != target; i = i.nextElementSibling) {
              i.classList.add('selected');
          }
      } else {
          for (let i = startSelected; i != target; i = i.previousElementSibling) {
              i.classList.add('selected');   
          } 
      }

      target.classList.add('selected')
    }


document.addEventListener('keydown', function(event) {
    if(event.altKey) {
        let key = event.keyCode;
        if((key == "37")||(key == "38")||(key == "39")||(key == "40")) {
            event.preventDefault();
        };
        let x=window.scrollX;
        let y=window.scrollY;
        window.onscroll = function() {
            window.scrollTo(x, y);
        };
    };
});
