
let inputAnpha = document.getElementById('anpha');

inputAnpha.onchange = function() {
    if(inputAnpha.value < 6){
      
    }

}

let inputNumber = document.getElementById('numb');

function myFunction() {
    // Get the value of the input field with id="numb"
    let x = inputNumber.value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
      inputNumber.focus();
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }