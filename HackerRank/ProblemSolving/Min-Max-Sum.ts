function sum(array: number[], start: number): number {
  let sum: number = 0;
  for (let i = start; i < array.length - (start ^ 1); i++) {
    sum = sum + array[i];
  }
  return sum;
}

function miniMaxSum(array: number[]): number[] {
  // Write your code here
  array.sort(function (prevVal: number, currentVal: number): number {
    return prevVal < currentVal ? -1 : 1;
  });
  let maxSum: number = sum(array, 1);
  let minSum: number = sum(array, 0);
  return [minSum, maxSum];
}

const arrayMiniMaxSum: number[] = miniMaxSum([1, 2, 3, 4, 5]);
let string = "";
for (let i = 0; i < arrayMiniMaxSum.length; i++) {
  string += arrayMiniMaxSum[i] + " ";
}
console.log(string);
