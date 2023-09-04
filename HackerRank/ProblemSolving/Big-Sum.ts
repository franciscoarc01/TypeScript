function aVeryBigSum(ar: number[]): number {
  // Write your code here
  return ar.reduce(
    (prevValue: number, currentValue: number) =>
      (currentValue = currentValue + prevValue)
  );
}

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function main() {
  const arCount: number = 80;

  const ar: number[] = new Array(arCount);

  for (let index = 0; index < ar.length; index++) {
    ar[index] = random(Number.MIN_VALUE / 1000000, Number.MAX_VALUE / 1000000);
  }

  const result: number = aVeryBigSum(ar);

  console.log(result);
}
main();
