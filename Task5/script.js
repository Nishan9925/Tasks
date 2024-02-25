let button = document.getElementById('btn');

const btnGreet = function(){
    if (button.innerHTML === 'Hello'){
        button.innerHTML = 'Goodbye';
    }else{
        button.innerHTML = 'Hello';
    }
}

// const btnGreet = function(){ // second option with ternary
//     button.innerHTML = button.innerHTML === 'Hello' ? 'Goodbye' : 'Hello';
// }