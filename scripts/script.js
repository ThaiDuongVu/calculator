let operand1 = "";
let operand2 = "";

let operand1Entered = false;
let operand2Entered = false;

let operator = "";
let operatorEntered = false;

let result = 0;
let display = document.querySelector(".display");
let calculated = false;

// Add event listeners to the number buttons
for (let i = 0; i < 10; i++) {
	document.querySelectorAll(".number")[i].addEventListener("click", (event) => {
		if (calculated) {
			reset();
		}

		onNumberClick(event);
	});
}

// Add event listener to the operator buttons
for (let i = 0; i < 4; i++) {
	document.querySelectorAll(".operator")[i].addEventListener("click", (event) => {
		onOperatorClick(event);
	});
}

// Add event listener to the equal button
document.getElementById("equal").addEventListener("click", () => {
	updateCalculations();
});

// Add event listener to the ac button
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

// Do the calculation and update to the display
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

// Reset calculator state
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