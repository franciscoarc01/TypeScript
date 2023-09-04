const sumOfDiagonals = (matriz: number[][], op: string): number => {
  let sum = 0;
  switch (op) {
    case "SUPIZ-INFDER":
      for (let i = 0; i < matriz.length; i++) {
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

function diagonalDifference(arr: number[][]): number {
  // Write your code here
  return Math.abs(
    sumOfDiagonals(arr, "SUPIZ-INFDER") - sumOfDiagonals(arr, "SUPDER-INFIZ")
  );
}

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function main() {
  const n: number = 3;

  let arr: number[][] = Array(n);

  for (let i: number = 0; i < n; i++) {
    arr[i] = Array(n);
    for (let j = 0; j < n; j++) {
      arr[i][j] = random(-10, 10);
    }
    console.log(arr[i]);
  }
  const result: number = diagonalDifference(arr);
  console.log(result);
}
main();
