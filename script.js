let result = document.getElementById("result");
let expression = "";

function appendNumber(number) {
  expression += number;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function calculateResult() {
  try {
    let evaluation = eval(expression);
    result.value = evaluation;
    expression = evaluation.toString();
  } catch (error) {
    result.value = "Error";
  }
}

function clearResult() {
  expression = "";
  result.value = "";
}
