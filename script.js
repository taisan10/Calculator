function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
  


}
function squareInput() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = value * value;
  } else {
    display.value = "Error";
  }
}

function removeLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}


function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return NaN;
  return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
}

function calculate() {
  let input = document.getElementById('display').value;

  // Replace "^" with "**"
  input = input.replace(/\^/g, "**");

  // Replace "5!" with "factorial(5)"
  input = input.replace(/(\d+)!/g, (_, num) => `factorial(${num})`);

  // Replace "50%" with "(50/100)"
  input = input.replace(/(\d+)%/g, (_, num) => `(${num}/100)`);

  try {
    const result = math.evaluate(input, { factorial });
    document.getElementById('display').value = result;
  } catch (err) {
    document.getElementById('display').value = "Error";
  }
}



// async function calculate() {
//   let expression = document.getElementById('display').value;
//   let input = document.getElementById("expression").value;
    
//     // Replace "5!" with "factorial(5)"
//     input = input.replace(/(\d+)!/g, (_, num) => `factorial(${num})`);

//     // Replace "50%" with "(50/100)"
//     input = input.replace(/(\d+)%/g, (_, num) => `(${num}/100)`);

//     try {
//         // Use math.js to evaluate, with factorial function injected
//         const result = math.evaluate(input, { factorial });
//         document.getElementById("result").innerText = `Result: ${result}`;
//     } catch (err) {
//         document.getElementById("result").innerText = "Error: Invalid Expression";
//     }


//   const response = await fetch('/calculate', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ expression })
//   });

//   const result = await response.json();
//   document.getElementById('display').value = result.result;
// }
