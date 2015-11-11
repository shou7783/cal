var result;
var panelValue;
var operator = {
	noop: 0,
    plus: 1,
    minus: 2,
    multiply: 3,
	divide: 4
};
var currentOperator = operator.noop;
panelValue = 0;

function clickValueButton (button) {
	var panel = document.getElementById("panel");
	if (button.innerText === ".") {
		panelValue = panelValue + ".";
	} else {
		panelValue = parseFloat(panelValue + button.innerText).toString();
	}

	panel.innerHTML = panelValue;
}

function clickACButton (button) {
	var panel = document.getElementById("panel");
	result = 0
	panel.innerHTML = "0"
	panelValue = "0"
	currentOperator = operator.noop;
}

function clickOperatorButton(button, operatorCode) {
	var panel = document.getElementById("panel");
	if (currentOperator === operator.noop) {
		result = parseFloat(panelValue);
	} else {
		calresult();
	}
	currentOperator = operatorCode;
	panel.innerHTML = result.toString();
	panelValue = "0";
}

function clickEqualButton () {
	var panel = document.getElementById("panel");
	calresult();
	panel.innerHTML = result.toString();
}

function clickPlusOrMinusButton () {
	var panel = document.getElementById("panel");
	
}

function calresult () {
	switch (currentOperator) {
		case operator.plus:
			result = result + parseFloat(panelValue);
		break;
		
		case operator.minus:
			result = result - parseFloat(panelValue);
		break;
		
		case operator.multiply:
			result = result * parseFloat(panelValue);
		break;
		
		case operator.divide:
			result = result / parseFloat(panelValue);
		break;
	}
}