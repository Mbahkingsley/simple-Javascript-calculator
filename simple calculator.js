// simple calculator with Javascript

// first get the type of operation the user wish to perform

let result;

const operation = prompt("kindly enter the operation you wish to perform. +,-,/ or *: ");

// get the operands from user
const first =parseFloat(prompt("Enter your first number: "));

const second =parseFloat(prompt("Enter your first number: "));

if ( operation == "+") {
    result = first + second;
    alert("result: " + result);
}
else if (operation == "-") {
    result = first - second;
    alert("result: " + result);
}
else if (operation == "/") {
    result = first / second;
    alert("result: " + result);
}
else if (operation == "*") {
    result = first * second;
    alert("result: " + result)
}
else {
    alert("invalid operation kindly run the program and try again.")
}
