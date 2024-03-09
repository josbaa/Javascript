function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

document.getElementById('numberA').value = getRandomNumber();
document.getElementById('numberB').value = getRandomNumber();

function incrementNumber(id) {
  var input = document.getElementById(id);
  if (parseInt(input.value) < 10) {
    input.value = parseInt(input.value) + 1;
  }
}

function decrementNumber(id) {
  var input = document.getElementById(id);
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

function calculate() {
  var numberA = parseInt(document.getElementById('numberA').value);
  var numberB = parseInt(document.getElementById('numberB').value);
  var operator = document.getElementById('operator').value;
  var result;

  switch (operator) {
    case '+':
      result = numberA + numberB;
      break;
    case '-':
      result = numberA - numberB;
      break;
    case '*':
      result = numberA * numberB;
      break;
    case '/':
      result = numberA / numberB;
      break;
  }

  alert("Result: " + result);
}