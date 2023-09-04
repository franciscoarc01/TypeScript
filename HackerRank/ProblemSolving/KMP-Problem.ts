class Pivote {
  index: number;
  pivote: number;
  isPrimero: boolean;
  constructor() {
    this.index = -1;
    this.pivote = 0;
    this.isPrimero = false;
  }
}

const letters: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const isZero = (number: number) => number === 0;

function kmp(xArray: number[]): string {
  // Write your code here
  const pivote = new Pivote();
  xArray.forEach((item: number, index: number) => {
    if (!isZero(item)) {
      if (pivote.pivote) {
        if (!(pivote.pivote < item)) {
          if (pivote.pivote !== item) {
            pivote.pivote = item;
            pivote.isPrimero = false;
            pivote.index = index;
          }
        }
      } else {
        pivote.index = index;
        pivote.isPrimero = index === 0 ? false : true;
        pivote.pivote = item;
      }
    }
  });
  let string: string = letters[pivote.index];
  if (pivote.isPrimero) {
    const segundoPiv: Pivote = new Pivote();
    for (let i = pivote.index + 1; i < xArray.length; i++) {
      if (!isZero(xArray[i])) {
        segundoPiv.index = i;
        segundoPiv.pivote = xArray[i];
        break;
      }
    }
    xArray.forEach((item: number, index: number) => {
      if (pivote.pivote === item && pivote.index === index) {
        for (let i = 0; i < segundoPiv.pivote; i++) {
          string += letters[segundoPiv.index];
        }
        for (let i = 0; i < pivote.pivote - 1; i++) {
          string += letters[pivote.index];
        }
      } else if (segundoPiv.pivote !== item || segundoPiv.index !== index) {
        for (let i = 0; i < item; i++) {
          string += letters[index];
        }
      }
    });
  } else {
    xArray.forEach((item: number, index: number) => {
      for (
        let i = 0;
        i <
        (pivote.pivote === item && pivote.index === index ? item - 1 : item);
        i++
      ) {
        string += letters[index];
      }
    });
  }
  return string;
}

console.log(
  kmp([
    0, 250, 671, 0, 7091, 0, 1129, 0, 1708, 3376, 4141, 6108, 0, 5289, 2587, 0,
    0, 0, 0, 0, 0, 0, 5210, 0, 4319, 0
  ])
);
