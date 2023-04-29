let expression = '';

function addChar(char) {
	expression += char;
	document.getElementById('result').value = expression;
}

function clearDisplay() {
	expression = '';
	document.getElementById('result').value = expression;
}

function calculate() {
	let result = '';
	try {
		result = eval(expression);
	} catch (e) {
		result = 'Error';
	}
	document.getElementById('result').value = result;
	expression = '';
}
