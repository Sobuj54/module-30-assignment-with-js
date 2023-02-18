// click to calculate triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
  //for triangle
  const triangle = getValueById("triangle-b", "triangle-h");
  const triangleArea = 0.5 * triangle;
  const triangleAreaString = triangleArea.toFixed(2);
  const area = parseFloat(triangleAreaString);
  //set value
  setValueById("triangle-area", area);
});
//   -------------
// for rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangle = getValueById("rectangle-w", "rectangle-l");
  setValueById("rectangle-area", rectangle);
});
// ----------
// for parallelogram
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const parallelogram = getValueById("parallelogram-b", "parallelogram-h");
    setValueById("parallelogram-area", parallelogram);
  });
//   ----------
// for rhombus
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const rhombus = getValueById("rhombus-d1", "rhombus-d2");
  const rhombusArea = 0.5 * rhombus;
  const rhombusAreaString = rhombusArea.toFixed(2);
  const area = parseFloat(rhombusAreaString);
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
  //   set value
  setValueById("ellipse-area", area);
});
