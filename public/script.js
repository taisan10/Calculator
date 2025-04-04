function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

async function calculate() {
  let expression = document.getElementById('display').value;

  // Replace symbols for backend processing
  expression = expression.replace(/\^/g, '**'); // Replace ^ with **
  expression = expression.replace(/pi/g, 'Math.PI'); // Replace π with Math.PI
  expression = expression.replace(/sqrt\(/g, 'Math.sqrt('); // Replace √ with Math.sqrt()

  const response = await fetch('/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression })
  });

  const result = await response.json();
  document.getElementById('display').value = result.result;
}
