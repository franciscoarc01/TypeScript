var sumOfDiagonals = function (matriz, op) {
  var sum = 0;
  switch (op) {
    case "SUPIZ-INFDER":
      for (var i = 0; i < matriz.length; i++) {
        sum += matriz[i][i];
      }
      break;
    case "SUPDER-INFIZ":
      for (var i = 0; i < matriz.length; i++) {
        sum += matriz[i][matriz.length - (i + 1)];
      }
      break;
  }
  return sum;
};
function diagonalDifference(arr) {
  // Write your code here
  return Math.abs(
    sumOfDiagonals(arr, "SUPIZ-INFDER") - sumOfDiagonals(arr, "SUPDER-INFIZ")
  );
}
var random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function main() {
  var n = 3;
  var arr = Array(n);
  for (var i = 0; i < n; i++) {
    arr[i] = Array(n);
    for (var j = 0; j < n; j++) {
      arr[i][j] = random(-10, 10);
    }
    console.log(arr[i]);
  }
  var result = diagonalDifference(arr);
  console.log(result);
}
main();
