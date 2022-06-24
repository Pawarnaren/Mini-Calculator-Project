// create 4 function : add() , multiply() , subtract() , divide ()
// call the correct function when the user click on one of the buttons 
// perform the given calculation using num1 and num2
// render the result of the calculation  the paragraph with id = "sum-el"
// Eg. if the user click on the "plus button" you should render 
// sum : 10 inside the paragraph with id = "sum-el"


let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent += num1;
document.getElementById("num2-el").textContent += num2;

let answer = document.getElementById("sum-el")


// function to add two no 
function add(){
    answer.textContent += num1 + num2; 
}

// function to subtract two no 
function subtract(){
    answer.textContent += num1 - num2;
}

// function to multiply two no 
function multiply(){
    answer.textContent += num1 * num2;
}

// function to divide two no 
function divide(){
    answer.textContent += num1 / num2;
}



