function calculate() {
    let num1 = parseInt(document.getElementById("numero").value);
    let num2 = parseInt(document.getElementById("numero").value);
    let operator = document.getElementById("operator").value;
    
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
    
    let result;
    switch (valitse) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
    }
    
    document.getElementById("result").textContent = "Result: " + result;
  }
  