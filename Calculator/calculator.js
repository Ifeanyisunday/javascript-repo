const calculatorDisplay = document.getElementById("displayBox");

function clearDisplayBox() {
    calculatorDisplay.value = 0
}

function goToDisplayBox(value) {
    if (value === calculatorDisplay.value) {
        calculatorDisplay.value = value
    }else{
        calculatorDisplay.value += value
    }
}

function calculate() {
    try{
        calculatorDisplay.value = eval(calculatorDisplay.value)
    }
    catch (e) {
        calculatorDisplay.value = calculatorDisplay.value;
    }
}

let onState = false

function onBtn(){
    if(calculatorDisplay.value === "" || calculatorDisplay.value === 0){
        onState = true
        calculatorDisplay.value = 0;
    }
}

function offBtn(){
    if(onState === true && calculatorDisplay.value !== ""){
        onState = false
        calculatorDisplay.value = "";
    }else if(onState === false){
        calculatorDisplay.value = "";
    }
}

function getSine(value){
    calculatorDisplay.value = value
}
