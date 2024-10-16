let resultField = document.querySelector("div.display-result");
let clear = document.querySelector(".clear");
// console.log(resultField)
let result;
let calculatorButton = document.querySelectorAll("button");
// console.log(calculatorButton)

let equalsTo = document.querySelector(".equals");
let clearDisplay = document.querySelector(".clear");
let clickedButton;
let decimal = document.querySelector(".decimal");

console.log(resultField);
function showNum(num) {
    resultField.innerText += num;
}


clearDisplay.addEventListener("click", ()=> {
    if(resultField.innerText.length > 1) {

        // let newResult = resultField.innerText.slice(0, resultField.innerText.length - 1);
        // resultField.innerText = newResult;
        resultField.innerText = resultField.innerText.substring(0, resultField.innerText.length - 1);
        // console.log("Clear");
    }

    if (resultField.innerText.length == 1) {
        resultField.innerText = null;
    }
    // console.log(resultField.innerHTML.length);
    // console.log("Clear");
})

decimal.addEventListener("click", ()=> {
    
    if (resultField.innerText.includes(".") !== true) {
        resultField.innerText += ".";
    }

    else if(resultField.innerText.slice(-1) == "+" || resultField.innerText.slice(-1) == "-" || resultField.innerText.slice(-1) == "*" || resultField.innerText.slice(-1) == "/" ) {
        resultField.innerText += ".";
    }
    
})

equalsTo.addEventListener("click", ()=> {
    resultField.innerText = eval(resultField.innerText);
})

