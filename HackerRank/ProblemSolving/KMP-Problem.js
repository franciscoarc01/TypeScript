var Pivote = /** @class */ (function () {
  function Pivote() {
    this.index = -1;
    this.pivote = 0;
    this.isPrimero = false;
  }
  return Pivote;
})();
var letters = [
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
var isZero = function (number) {
  return number === 0;
};
function kmp(xArray) {
  // Write your code here
  var pivote = new Pivote();
  xArray.forEach(function (item, index) {
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
  var string = letters[pivote.index];
  if (pivote.isPrimero) {
    var segundoPiv_1 = new Pivote();
    for (var i = pivote.index + 1; i < xArray.length; i++) {
      if (!isZero(xArray[i])) {
        segundoPiv_1.index = i;
        segundoPiv_1.pivote = xArray[i];
        break;
      }
    }
    xArray.forEach(function (item, index) {
      if (pivote.pivote === item && pivote.index === index) {
        for (var i = 0; i < segundoPiv_1.pivote; i++) {
          string += letters[segundoPiv_1.index];
        }
        for (var i = 0; i < pivote.pivote - 1; i++) {
          string += letters[pivote.index];
        }
      } else if (segundoPiv_1.pivote !== item || segundoPiv_1.index !== index) {
        for (var i = 0; i < item; i++) {
          string += letters[index];
        }
      }
    });
  } else {
    xArray.forEach(function (item, index) {
      for (
        var i = 0;
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
    2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ])
);
