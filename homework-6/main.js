'use strict';


let element_Class = document.getElementById('workWithClass');
element_Class.classList.add('www');

element_Class.classList.remove('www');

let element_Class_result = element_Class.classList.contains('www');
console.log(element_Class_result);

let result = element_Class.classList.toggle('www');
console.log(result);

let element_Class_length = element_Class.classList.length;
console.log(element_Class_length);

for(let i = 1; i <= length;i++) {
    alert(length);
};



let element_css = document.querySelector('.element_css')
element_css.style.cssText = 'background: #c74d35; font-size: 30px; border: 6px solid black; width: 30px; height: 30px; box-sizing: border-box';



let tag = document.querySelector('.printTagName');

tag.onclick = function() {
    alert(tag.tagName);
    alert(tag.tagName.toLocaleLowerCase());
}

let perentElement = document.getElementById('work_with_tagName');
let titleTag = document.getElementsByClassName('title-tag');

for(let i = 0; i < titleTag.length;i++){
    titleTag[i].innerHTML = titleTag[i].innerHTML + ' ' + titleTag[i].tagName.toLocaleLowerCase();
};


let elementOL = document.getElementById('listCreateChild');

let elementLI1 = document.createElement('li');

elementOL.appendChild(elementLI1);

elementLI1.innerHTML = 'пункт';


let arr = ['Первый','Второй','Третий','Четвертый'];

let elementUL = document.getElementById('listArray');

for(let i = 0;i < arr.length;i++) { 
    let elementLI = document.createElement('li');
    elementLI.innerHTML = arr[i];
    elementUL.appendChild(elementLI);
};


let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

for(let i = 0;i < fruits.length;i++) {

    let listFruitsUL = document.getElementById('listArrayFruits');
    let listFruitsLI = document.createElement('li');

    listFruitsLI.innerHTML = fruits[i];
    listFruitsUL.appendChild(listFruitsLI);
    listFruitsLI.onclick = function() {
        alert(listFruitsLI.innerHTML);
    }
};


let ul = document.getElementById('listOfCharacters');
let elem = document.querySelector('.elem');

let li= document.createElement('li');
li.innerHTML = '!!!';

ul.appendChild(li);

ul.insertBefore(li, elem);


let insert = document.getElementById('add-insert-adjacenthtml');

insert.insertAdjacentHTML('beforeBegin', '<span>beforeBegin</span');

insert.insertAdjacentHTML('afterEnd', '<span>afterEnd</span>');

insert.insertAdjacentHTML('afterBegin', '<span>afterBegin</span>');

insert.insertAdjacentHTML('beforeEnd', '<span>beforeEnd</span>');


let descendants = document.getElementById('descendants');

descendants.firstElementChild.style.cssText = 'color: red';

descendants.lastElementChild.style.cssText = 'color: red';

for(let i = 0; i < descendants.children.length; i++) {
    descendants.children[i].innerHTML += ' !';
};


let paragraph = document.getElementById('paragraph');

let paragraphOne = paragraph.previousElementSibling;
paragraphOne.innerHTML += ' !';

let paragraphThree = paragraph.nextElementSibling;

paragraphThree.innerHTML += ' !';

let paragraphFour = paragraph.nextElementSibling.nextElementSibling;

paragraphFour.innerHTML += ' !';



let pets = document.getElementById('pets');

pets.parentElement.style.cssText = 'color: red';

pets.parentNode.parentNode.style.cssText = 'color: blue';



let removeElement = document.getElementById('remove-element');

let child = document.getElementById('child');

let buttonDelete = document.getElementById('button-delete');

buttonDelete.onclick = function() {
    removeElement.removeChild(child);
};


let colors = document.querySelector('.colors-list');
let deletelastLi = document.getElementById('delete-last-element');

deletelastLi.onclick = function() {
    colors.removeChild(colors.lastElementChild);
}


let deleteElement = document.querySelector('.deleteElement');

deleteElement.onclick = function() {
    deleteElement.parentNode.removeChild(deleteElement);
};


let users = document.querySelector('.users');

let usersList = users.children;

for(let i = 0; i < usersList.length;i++) {
    usersList[i].onclick = function() {
        users.removeChild(this);
    };
};


let cloneInput = document.querySelector('.delete-element');
let input = document.querySelector('.entryField');
let buttonAddInput = document.querySelector('.addInput');



buttonAddInput.onclick = function() {
    
    let clone = input.cloneNode(true);

    cloneInput.appendChild(clone);
    cloneInput.insertBefore(clone, input);
    cloneInput.children[1].setAttribute('value', 'Фамилия');
};


let carBrands = ['Merscedes-Benz','Aston Martin', 'Ferrari', 'Maserati'];

let listCarBrandsUL = document.createElement('ul');

document.body.appendChild(listCarBrandsUL);

for(let i = 0; i< carBrands.length;i++){
    let listCarBrandsLI = document.createElement('li');
    listCarBrandsLI.innerHTML = carBrands[i];
    listCarBrandsUL.appendChild(listCarBrandsLI);
};


let inputForm = document.querySelector('.input-form');

let inputText = document.querySelector('.input');

let buttonInputPlus = document.querySelector('.inputPlus');

inputForm.style.cssText = 'display: flex; flex-direction: column; width: 200px; margin-top: 30px';


buttonInputPlus.onclick = function() {
    let cloneInput = inputText.cloneNode(true);
    
    inputForm.appendChild(cloneInput);
    inputForm.insertBefore(cloneInput, inputText);
    inputForm.children[1].setAttribute('value', 'Адрес');
};

let inputNumber = document.getElementById('create-input');

inputNumber.addEventListener('blur', function(){
    let array = inputNumber.value.split('');
    for(let i = 0;i < array.length;i++){
    let newInput = document.createElement('input');
    newInput.value = array[i];
    this.parentElement.appendChild(newInput);
    }
    inputNumber.value = null;
})

let parentElementButton = document.querySelector('.hide-parent-element');

let button_hideParentElement = document.querySelector('.hide');

button_hideParentElement.onclick = function() {
    parentElementButton.style.cssText = 'display: none';
}


let borderElement = document.querySelector('.border-element');

borderElement.style.cssText = 'display: flex; flex-direction: column; width: 200px; border: 10px solid gray; margin-top: 30px';

let button_borderTop = document.querySelector('.button-border-top');
button_borderTop.onclick = function() {
    alert(borderElement.clientTop);
}

let button_borderLeft = document.querySelector('.button-border-left');

button_borderLeft.style.cssText = 'margin-top: 10px';
button_borderLeft.onclick = function() {
    alert(borderElement.clientLeft);
}



let elementSize = document.querySelector('.full-size-element');

elementSize.firstElementChild.style.cssText = 'width:200px';

function get_FullSize() {
    alert(`Полная ширина: ${elementSize.firstElementChild.offsetWidth}\nПолная высота: ${elementSize.firstElementChild.offsetHeight}`)
}

elementSize.lastElementChild.style.cssText = 'display: block; border: 10px solid; padding: 50px; margin-top: 20px; margin-bottom: 20px';

function get_sizeElement() {
    alert(`Ширина элемента без border: ${elementSize.lastElementChild.clientWidth}\nВисота элемента без border: ${elementSize.lastElementChild.clientHeight}`);
};



let sizeElement = document.querySelector('.size-element');

sizeElement.style.cssText = "width: 350px; height: 40px; padding: 5px;"
function getFullSize() {
    alert(`Ширина: ${getComputedStyle(sizeElement).width}\nВысота: ${getComputedStyle(sizeElement).height}`);
};
                


let img = document.getElementById('img');
let boxImg = document.querySelector('.box-img');

img.style.cssText = 'width: 300px; height: 300px; overflow: scroll; margin-bottom: 20px';
boxImg.style.cssText = 'width: 1000px; height: auto';

function showScrollTop() {
    alert(img.scrollTop);
};
function showScrollLeft() {
    alert(img.scrollLeft)
}

function showScrollTopPosition(){
    img.scrollTop = 100;
};
function scrollOn100px() {
    img.scrollTop += 100;
};



function heightWithScroll() {
    alert(img.scrollHeight);
};

function widthWithScroll() {
    alert(img.scrollWidth);
};
function scrollOn100pxFromBottomToTop() {
    img.scrollTop = img.scrollHeight - 200;
};


function scrollparagraph() {
    img.scrollTo(300, 500);
}
function scrollDownOn300() {
    img.scrollBy(0,300);
};


function scrollDownFull() {
    img.scrollTop = img.scrollHeight;
};

function scrollOn400() {
    img.scrollTop += 400;
};

function checkScrollPage() {
    if(img.scrollHeight - img.scrollTop === img.clientHeight){
        img.scrollTo(0,100);
    }
};
function boostWidthAndHeight() {
    img.style.width = img.offsetWidth * 2 + 'px';
    img.style.height = img.offsetHeight * 2 + 'px';
};


function checkVerticalScroll() {
    alert(window.pageYOffset);
};
function scrollDownFullPage() {
    window.scrollBy(0, document.documentElement.offsetHeight);
};

function wrapUpChildElement() {
    this.par
};

let nextTask = document.getElementById('nextTask');



let addedToListUL = document.getElementById('added-to-list');

let enterNewItemInput = document.getElementById('enter-new-item');

let addItemButton = document.getElementById('add-item');

addItemButton.onclick = function() {
    let newItem = enterNewItemInput.value;
    enterNewItemInput.value = '';

let itemListLi = document.createElement('li');

let span = document.createElement('span');

let deleteItem = document.createElement('button');

span.style.cssText = 'margin-right: 30px;';
itemListLi.style.cssText = 'margin-bottom: 15px;';


itemListLi.appendChild(span);
itemListLi.appendChild(deleteItem);

span.textContent = newItem;
deleteItem.textContent = 'Удалить';

addedToListUL.appendChild(itemListLi);


deleteItem.onclick = function() {
    addedToListUL.removeChild(itemListLi);
}

enterNewItemInput.focus();
};