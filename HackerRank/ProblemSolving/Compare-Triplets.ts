function score(a: number, b: number, arrayScore: number[]): void {
  a > b ? (arrayScore[0] += 1) : a < b ? (arrayScore[1] += 1) : 0;
}

function compareTriplets(a: number[], b: number[]): number[] {
  // Write your code here
  const arrayScore: number[] = [0, 0];
  for (let index = 0; index < a.length && index < b.length; index++) {
    score(a[index], b[index], arrayScore);
  }
  return arrayScore;
}

function main() {
  const a: number[] = [17, 28, 30];

  const b: number[] = [99, 16, 8];

  const result: number[] = compareTriplets(a, b);
  console.log(result);
}
main();
