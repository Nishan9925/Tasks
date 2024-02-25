let squareDiv = document.getElementById('div-element');
let button = document.getElementById('btn');

const showHide = function(){
    button.innerHTML = button.innerHTML === 'Show' ? 'Hide' : 'Show';
    squareDiv.style.display = squareDiv.style.display === 'block'? 'none' : 'block';
}

