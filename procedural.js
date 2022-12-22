function vector(vec1, vec2) {
  var dotVectors = 0;
  var vectorLengthOne = 0;
  var vectorlengthOneRoot = 0;
  var vectorLengthTwo = 0;
  var vectorlengthTwoRoot = 0;
  var vectorLengthProduct = 0;
  var cosAngle = 0;

  for (i = 0; i < vec1.length; i++) {
    dotVectors += vec1[i] * vec2[i];
    vectorLengthOne += vec1[i] ** 2;
    vectorLengthTwo += vec2[i] ** 2;
    vectorlengthOneRoot = Math.sqrt(vectorLengthOne);
    vectorlengthTwoRoot = Math.sqrt(vectorLengthTwo);
  }
  vectorLengthProduct = vectorlengthOneRoot * vectorlengthTwoRoot;
  cosAngle = dotVectors / vectorLengthProduct;
  var angle = Math.acos(cosAngle);
  var angleDegree = (angle * 180) / Math.PI;
  return `Dot of the vectors is ${dotVectors} the length is ${vectorlengthOneRoot} for the first vectors and ${vectorlengthTwoRoot} for the second vector the final angle is ${angleDegree}°`;
}
