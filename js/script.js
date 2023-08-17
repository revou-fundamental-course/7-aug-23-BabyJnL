function calculateArea() {
  const baseA = parseFloat(document.getElementById('baseA').value);
  const heightA = parseFloat(document.getElementById('heightA').value);
  
  if (!isNaN(baseA) && !isNaN(heightA)) {
      const area = 0.5 * baseA * heightA;
      document.getElementById('areaResult').textContent = `Area: ${area.toFixed(2)}`;
  } else {
      document.getElementById('areaResult').textContent = 'Please enter valid values.';
  }
}

function calculatePerimeter() {
  const sideA = parseFloat(document.getElementById('sideA').value);
  const sideB = parseFloat(document.getElementById('sideB').value);
  const sideC = parseFloat(document.getElementById('sideC').value);
  
  if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
      const perimeter = sideA + sideB + sideC;
      document.getElementById('perimeterResult').textContent = `Hasil: ${perimeter.toFixed(2)}`;
  } else {
      document.getElementById('perimeterResult').textContent = 'Please enter valid side lengths.';
  }
}