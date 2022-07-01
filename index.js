const firstNumber = +prompt('first number');
const operator = prompt('operator');
const secondNumber = +prompt('second number');
let result = 0;
switch (operator) {
    case '*':
      result = firstNumber*secondNumber;
        break;
    case '+':
        result = firstNumber+secondNumber;
        break;
    case '-': 
        result = firstNumber-secondNumber;
        break;
    case '/': 
        result = firstNumber/secondNumber;
        break;
    default:
        result = 000 ;
        break;
}
console.log(firstNumber);
console.log(operator);
console.log(secondNumber);
console.log(result);






