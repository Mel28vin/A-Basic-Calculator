const button1 = document.getElementById(1);
const button2 = document.getElementById(2);
const button3 = document.getElementById(3);
const button4 = document.getElementById(4);
const button5 = document.getElementById(5);
const button6 = document.getElementById(6);
const button7 = document.getElementById(7);
const button8 = document.getElementById(8);
const button9 = document.getElementById(9);
const button0 = document.getElementById(0);
const buttonClear = document.getElementById("clear");
const buttonDivide = document.getElementById("divide");
const buttonMultiply = document.getElementById("multiply");
const buttonSubtract = document.getElementById("subtract");
const buttonAdd = document.getElementById("add");
const buttonBackspace = document.getElementById("backspace");
const buttonEquals = document.getElementById("equals");

const buttonDisplay = document.getElementById("screen");

button1.addEventListener("click", function () {
  if (buttonDisplay.innerHTML === "0") {
    buttonDisplay.innerHTML = "1";
  } else {
    buttonDisplay.innerHTML += "1";
  }
});

button2.addEventListener("click", function () {
  if (buttonDisplay.innerHTML === "0") {
    buttonDisplay.innerHTML = "2";
  } else {
    buttonDisplay.innerHTML += "2";
  }
});

button3.addEventListener("click", function () {
  if (buttonDisplay.innerHTML === "0") {
    buttonDisplay.innerHTML = "3";
  } else {
    buttonDisplay.innerHTML += "3";
  }
});

button4.addEventListener("click", function () {
  buttonDisplay.innerHTML = 4;
  if (buttonDisplay.innerHTML === "0") {
    buttonDisplay.innerHTML = "4";
  } else {
    buttonDisplay.innerHTML += "4";
  }
});
button5.addEventListener("click", function () {
  if (buttonDisplay.innerHTML === "0") {
    buttonDisplay.innerHTML = "5";
  } else {
    buttonDisplay.innerHTML += "5";
  }
});
button6.addEventListener("click", function () {
  if (buttonDisplay.innerHTML === "0") {
    buttonDisplay.innerHTML = "6";
  } else {
    buttonDisplay.innerHTML += "6";
  }
});
button7.addEventListener("click", function () {
  if (buttonDisplay.innerHTML === "0") {
    buttonDisplay.innerHTML = "7";
  } else {
    buttonDisplay.innerHTML += "7";
  }
});
button8.addEventListener("click", function () {
  if (buttonDisplay.innerHTML === "0") {
    buttonDisplay.innerHTML = "8";
  } else {
    buttonDisplay.innerHTML += "8";
  }
});
button9.addEventListener("click", function () {
  if (buttonDisplay.innerHTML === "0") {
    buttonDisplay.innerHTML = "9";
  } else {
    buttonDisplay.innerHTML += "9";
  }
});
button0.addEventListener("click", function () {
  if (buttonDisplay.innerHTML !== "0") {
    buttonDisplay.innerHTML += "0";
  }
});
buttonClear.addEventListener("click", function () {
  buttonDisplay.innerHTML = "0";
});
buttonBackspace.addEventListener("click", function () {
  if (buttonDisplay.innerHTML.length == 1) {
    buttonDisplay.innerHTML = "0";
  } else {
    buttonDisplay.innerHTML = buttonDisplay.innerHTML.slice(0, -1);
  }
});
buttonAdd.addEventListener("click", function () {
  buttonDisplay.innerHTML += "+";
});
buttonSubtract.addEventListener("click", function () {
  buttonDisplay.innerHTML += "-";
});
buttonMultiply.addEventListener("click", function () {
  buttonDisplay.innerHTML += "*";
});
buttonDivide.addEventListener("click", function () {
  buttonDisplay.innerHTML += "/";
});
buttonEquals.addEventListener("click", function () {
  buttonDisplay.innerHTML = Math.floor(
    math.evaluate(buttonDisplay.innerHTML)
  ).toString();
});
