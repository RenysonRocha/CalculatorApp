let displayValue = document.querySelector("#showValue")

//Function valid to get the value if the keybord is used
let bodyEvent = document.querySelector("body")
bodyEvent.addEventListener("keyup", (pressedKey) => {
    let typoValue = pressedKey.key;
    switch (true) {
        case isNaN(typoValue) == false:
            inputValue(typoValue);
            break;
        case typoValue == "+":
            operation('plus');
            break;
        case typoValue == "-":
            operation('subtraction');
            break;
        case typoValue == "*":
            operation('times');
            break;
        case typoValue == "/":
            operation('division');
            break;
        case typoValue == "(":
            inputValue(typoValue);
            break;
        case typoValue == ")":
            inputValue(typoValue);
            break;
        case typoValue == ".":
            inputValue(typoValue);
            break;
        case typoValue == "Backspace":
            backspaceClear();
            break;
        case typoValue == "=":
            operation('equal');
            break;
    }
})

//function valid to get the value if the claculator button is pressed
function operation(action) {
    switch (action) {
        case 'percent':
            inputValue('%');
            break;
        case 'plus':
            inputValue('+');
            break;
        case 'subtraction':
            inputValue('-');
            break;
        case 'times':
            inputValue('*');
            break;
        case 'division':
            inputValue('/');
            break;
        case 'clear':
            clearScreen();
            break;
        case 'equal':
            calculate();
            break;
    }
}
function calculate(params) {let calcValue = eval(displayValue.value); displayValue.value = calcValue;}
function clearScreen() {displayValue.value = "";}
function backspaceClear() {
    let removelastChar = displayValue.value;
    let tempValue = "";
    for (let index = 0; index < removelastChar.length - 1; index++) { tempValue += removelastChar.substr(index, 1) };
    displayValue.value = tempValue;
}
function inputValue(typoValue) { let numberCalc; numberCalc = displayValue.value; numberCalc += typoValue; displayValue.value = numberCalc; }