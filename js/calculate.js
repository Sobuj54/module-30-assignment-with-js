// click to calculate triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
  //for triangle
  const triangle = getValueById("triangle-b", "triangle-h");
  const triangleArea = 0.5 * triangle;
  const triangleAreaString = triangleArea.toFixed(2);
  const area = parseFloat(triangleAreaString);

  const triangleDisplay = document.getElementById("triangle-display");
  if (isNaN(area)) {
    triangleDisplay.style.display = "none";
  } else {
    triangleDisplay.style.display = "block";
  }
  //set value
  setValueById("triangle-area", area);
});
//   -------------
// for rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangle = getValueById("rectangle-w", "rectangle-l");
  const rectangleDisplay = document.getElementById("rectangle-display");
  if (isNaN(rectangle)) {
    rectangleDisplay.style.display = "none";
  } else {
    rectangleDisplay.style.display = "block";
  }
  setValueById("rectangle-area", rectangle);
});
// ----------
// for parallelogram
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const parallelogram = getValueById("parallelogram-b", "parallelogram-h");
    const parallelogramDisplay = document.getElementById(
      "parallelogram-display"
    );
    if (isNaN(parallelogram)) {
      parallelogramDisplay.style.display = "none";
    } else {
      parallelogramDisplay.style.display = "block";
    }
    setValueById("parallelogram-area", parallelogram);
  });
//   ----------
// for rhombus
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const rhombus = getValueById("rhombus-d1", "rhombus-d2");
  const rhombusArea = 0.5 * rhombus;
  const rhombusAreaString = rhombusArea.toFixed(2);
  const area = parseFloat(rhombusAreaString);

  const rhombusDisplay = document.getElementById("rhombus-display");
  if (isNaN(area)) {
    rhombusDisplay.style.display = "none";
  } else {
    rhombusDisplay.style.display = "block";
  }
  //   set value
  setValueById("rhombus-area", area);
});
// ------
// for pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
  const pentagon = getValueById("pentagon-p", "pentagon-b");
  const pentagonArea = 0.5 * pentagon;
  const pentagonAreaString = pentagonArea.toFixed(2);
  const area = parseFloat(pentagonAreaString);

  const pentagonDisplay = document.getElementById("pentagon-display");
  if (isNaN(area)) {
    pentagonDisplay.style.display = "none";
  } else {
    pentagonDisplay.style.display = "block";
  }
  //   set value
  setValueById("pentagon-area", area);
});
// ------
// for ellipse
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const ellipse = getValueById("ellipse-a", "ellipse-b");
  const ellipseArea = 3.14 * ellipse;
  const ellipseAreaString = ellipseArea.toFixed(2);
  const area = parseFloat(ellipseAreaString);

  const ellipseDisplay = document.getElementById("ellippse-display");
  if (isNaN(area)) {
    ellipseDisplay.style.display = "none";
  } else {
    ellipseDisplay.style.display = "block";
  }
  //   set value
  setValueById("ellipse-area", area);
});
