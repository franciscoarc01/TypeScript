function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  let count = 1;
  let piv = candles[0];
  for (let i = 1; i < candles.length; i++) {
    if (piv < candles[i]) {
      piv = candles[i];
      count = 1;
    } else {
      if (piv === candles[i]) {
        count++;
      }
    }
  }
  return count;
}
console.log(birthdayCakeCandles([4, 3, 6, 7, 8, 9, 10, 10, 10, 11, 12, 12]));
