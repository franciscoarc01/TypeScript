const { performance } = require("perf_hooks");
require("dotenv").config();

class VowelperSubstring {
  substring;
  vowels;
  constructor(substring, vowels) {
    this.substring = substring;
    this.vowels = vowels;
  }

  static isVowel(character) {
    switch (character) {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "o":
      case "O":
      case "u":
      case "U":
        return true;
      default:
        return false;
    }
  }
}

const maxVowelsperSubstring = (array) => {
  let substring = array[0].substring || "Not found!";
  let maxVowel = array[0].vowels;
  for (let i = 0; i < array.length - 1; i++) {
    if (!(maxVowel > array[i + 1].vowels)) {
      substring = array[i + 1].substring;
      maxVowel = array[i + 1].vowels;
    }
  }
  return substring;
};

function findSubstring(s, k) {
  const substrings = [];
  for (let index = 0; index < s.length && index + k - 1 < s.length; index++) {
    substrings.push(s.substring(index, index + k));
  }
  const vowelsInSubstring = [];
  substrings.forEach(function (element) {
    let vowels = 0;
    for (let i = 0; i < element.length; i++) {
      VowelperSubstring.isVowel(element[i]) ? (vowels = vowels + 1) : vowels;
    }
    vowelsInSubstring.push(new VowelperSubstring(element, vowels));
  });
  return maxVowelsperSubstring(vowelsInSubstring);
}

const initialTime = performance.now();
console.log(findSubstring(process.env.STRING, 5));
const finishTime = performance.now();
console.log(`time milliseconds: ${Math.abs(initialTime - finishTime)}`);
