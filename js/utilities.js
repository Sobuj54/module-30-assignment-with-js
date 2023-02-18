// common function to get value from input fields
function getValueById(elementId1, elementId2) {
  const inputFieldB = document.getElementById(elementId1);
  const inputFieldBString = inputFieldB.value;
  inputFieldB.value = "";
  const inputFieldBValue = parseFloat(inputFieldBString);

  const inputFieldH = document.getElementById(elementId2);
  const inputFieldHString = inputFieldH.value;
  inputFieldH.value = "";
  const inputFieldHValue = parseFloat(inputFieldHString);

  const totalFieldValue = inputFieldBValue * inputFieldHValue;
  const totalFieldValueString = totalFieldValue.toFixed(2);
  const totalValue = parseFloat(totalFieldValueString);

  return totalValue;
}

// setting value inside area calculation
function setValueById(elementId, value) {
  const previousValue = document.getElementById(elementId);
  previousValue.innerText = value;
}
