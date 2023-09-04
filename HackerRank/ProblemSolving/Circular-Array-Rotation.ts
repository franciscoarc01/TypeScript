function circularArrayRotation(
  array: number[],
  k: number,
  queries: number[]
): number[] {
  // Write your code here
  const arrayResult: number[] = [];
  for (let j = 0; j < k; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      let moveItem: number = array[i];
      let indexNext: number = i === 0 ? array.length - 1 : i + 1;
      array[i] = array[indexNext];
      array[indexNext] = moveItem;
    }
  }
  queries.forEach((itemIndex) => {
    arrayResult.push(array[itemIndex]);
  });
  return arrayResult;
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));
