function showForm(operator) {
  var form = document.getElementById("form");
  form.style.display = "block";
  form.operator = operator;
}

function calculate() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var operator = document.getElementById("form").operator;
  var result = 0;
  switch (operator) {
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
  }
  alert(result);
  document.getElementById("form").style.display = "none";
}
