// this is our javascript file.
console.log("javascript calculator linked");
// 1. Create a function name "getElementValue" that will get a value from an element.
// this function will take one parameter "selector"
// which will select the elements.
// this function will return the innerText of an element.
const getElementValue = (selector) => {
    let elementValue = (document.querySelector(selector)).innerText;
    return elementValue;
}

// 2. create function name "multiply" that will take two numbers as parameters
// and multiply them together. 
// parameter named: firstValue, secondValue
// reference here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
// and return the result
const multiply = (firstValue, secondValue) => {
    let product = firstValue * secondValue;
    return product;
}

// 3. create a function "updateResult" that will calculate the result.
// a. this will get the values from step 1 and parse the values
// using the parseInt function reference here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
// b. mutliply the values from "a."
// update the element with the innerText of "We don't know" 
const updateResult = () => {
    let numberOne = getElementValue("#first-value");
    let elementOne = parseInt(numberOne);
    let numberTwo = getElementValue("#second-value");
    let elementTwo = parseInt(numberTwo);
    let updateProduct = multiply(elementOne, elementTwo);
    let result = document.querySelector("#result");
    result.innerHTML = (updateProduct);

}

//const updateResult = 

// 4. Call the function "updateResult" on the page load.
