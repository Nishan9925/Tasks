let button = document.getElementById('btn');
let paragraph = document.getElementById('text');

const showHide = function(){
    button.innerHTML = button.innerHTML === 'Show' ? 'Hide' : 'Show';
    paragraph.innerHTML = paragraph.innerHTML === 'Lorem' ? '' : "Lorem";
}