let currentDisplay = "";

function appendToDisplay(value) {
  currentDisplay += value;
  document.getElementById("display").value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = "";
  document.getElementById("display").value = "0";
}

function calculateResult() {
  
    currentDisplay = eval(currentDisplay);
    document.getElementById("display").value = currentDisplay;
 
}
