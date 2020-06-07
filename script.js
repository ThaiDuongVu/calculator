var operand1 = "";
var operand2 = "";

var operand1Entered = false;
var operand2Entered = false;

var operator = "";
var operatorEntered = false;

var result = 0;
var display = document.querySelector(".display");
var calculated = false;

for (var i = 0; i < 10; i++) {
	document.querySelectorAll(".number")[i].addEventListener("click", (event) => {
		if (calculated) {
			reset();
		}

		onNumberClick(event);
	});
}

for (let i = 0; i < 4; i++) {
	document.querySelectorAll(".operator")[i].addEventListener("click", (event) => {
		onOperatorClick(event);
	});
}

document.getElementById("equal").addEventListener("click", () => {
	updateCalculations();
});

document.getElementById("ac").addEventListener("click", () => {
	reset();
})

onNumberClick = (event) => {
	if (!operatorEntered) {
		operand1 += event.target.value;
		operand1Entered = true;

		display.textContent += event.target.value;
	} else {
		operand2 += event.target.value;
		operand2Entered = true;

		display.textContent += event.target.value;
	}
}

onOperatorClick = (event) => {
	if (!operatorEntered && operand1Entered) {
		operator += event.target.id;
		operatorEntered = true;

		display.textContent += " " + operator + " ";
	}
}

updateCalculations = () => {
	operand1 = parseInt(operand1);
	operand2 = parseInt(operand2);

	if (operator === "+") {
		result = operand1 + operand2;
	} else if (operator === "-") {
		result = operand1 - operand2;
	} else if (operator === "*") {
		result = operand1 * operand2;
	} else if (operator === "/") {
		result = operand1 / operand2;
	}

	calculated = true;
	display.textContent = result;
}

reset = () => {
	operand1 = "";
	operand2 = "";

	operand1Entered = false;
	operand2Entered = false;

	operator = "";
	operatorEntered = false;

	result = 0;
	display.textContent = "";

	calculated = false;
}