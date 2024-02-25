let input = document.getElementById('inp');
let button = document.getElementById('submit');
let paragraph = document.getElementById('par');

const read = function(){
    paragraph.innerHTML = input.value;
    input.value = '';
}