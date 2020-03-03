'use strict';
(function(){
  let form = document.getElementById('form');
  let listUL = document.getElementById('list');
  let input = document.getElementById('input-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    if(input.value) {
      listUL.innerHTML+= '<li>' + input.value + '</li>';
    store();
    }
    input.value = '';
  });

  listUL.addEventListener('click', function(event) {
    let target = event.target;
      if(target.classList.contains('listUL')) {
        target.classList.add('checked');
      } else {
        listUL.removeChild(target)
      }
      store();
    
});
  function store() {
    window.localStorage.myitems = listUL.innerHTML;
  }
  function getValues() {
    let storedValues = window.localStorage.myitems;
    listUL.innerHTML = storedValues;
  }
  getValues();
}) ();
