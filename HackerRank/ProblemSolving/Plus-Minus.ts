function plusMinus(arr: number[]): number[] {
  const array: number[] = [0, 0, 0];
  arr.sort((elementA: number, elementB: number) =>
    elementA > elementB ? 1 : -1
  );
  console.log(arr);
  arr.forEach((element) => {
    if (element < 0) {
      array[1] = array[1] + 1 / arr.length;
    } else if (element > 0) {
      array[0] = array[0] + 1 / arr.length;
    } else {
      array[2] = array[2] + 1 / arr.length;
    }
  });
  return array;
}

function main() {
  const arr: number[] = [1, 1, 0, -1, -1];

  plusMinus(arr).forEach((item) => console.log(item));
}
main();
