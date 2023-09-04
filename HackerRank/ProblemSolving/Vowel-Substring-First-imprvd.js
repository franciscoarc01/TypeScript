const { performance } = require("perf_hooks");
require("dotenv").config();

class Vowel {
  character;
  vowel;
  constructor(character) {
    this.character = character;
    this.vowel = Vowel.isVowel(character);
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

class VowelperSubstring {
  vowels;
  substring;
  constructor(vowels, substring) {
    this.vowels = vowels;
    this.substring = substring;
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
  const vowels = [];
  for (let i = 0; i < s.length; i++) {
    vowels.push(new Vowel(s[i]));
  }
  const auxArray = [];
  for (let i = 0; i <= vowels.length - k; i++) {
    let count = 0;
    let substring = "";
    for (let j = i; j < k + i; j++) {
      substring = substring + vowels[j].character;
      if (vowels[j].vowel) {
        count++;
      }
    }
    auxArray.push(new VowelperSubstring(count, substring));
  }
  return maxVowelsperSubstring(auxArray);
}
const initialTime = performance.now();
console.log(findSubstring(process.env.STRING, 5));
const finishTime = performance.now();
console.log(`time milliseconds: ${Math.abs(initialTime - finishTime)}`);
