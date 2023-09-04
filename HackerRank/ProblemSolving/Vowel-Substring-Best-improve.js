const { performance } = require("perf_hooks");
require("dotenv").config();

function isVowel(character) {
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

class VowelperSubstring {
  vowels;
  substring;
  constructor(vowels, substring) {
    this.vowels = vowels;
    this.substring = substring;
  }
}

function continueVowel(vowelPSubstring, s, k, i) {
  let substring = s[i - 1] + s[i];
  let vowels = 2;
  for (let j = i + 1; j < k - 2 + (i + 1) && k - 2 + (i + 1) <= s.length; j++) {
    substring = substring + s[j];
    vowels = vowels + (isVowel(s[j]) ? 1 : 0);
  }
  if (!(vowelPSubstring.vowels > vowels) && substring.length === k) {
    vowelPSubstring.substring = substring;
    vowelPSubstring.vowels = vowels;
  }
}

function discontinueVowel(vowelPSubstring, s, k, i) {
  let substring = s[i - 1];
  let vowels = isVowel(s[i - 1]) ? 1 : 0;
  for (let j = i; j < k - 1 + i && k - 1 + i <= s.length; j++) {
    substring = substring + s[j];
    vowels = vowels + (isVowel(s[j]) ? 1 : 0);
  }
  if (!(vowelPSubstring.vowels > vowels) && substring.length === k) {
    vowelPSubstring.substring = substring;
    vowelPSubstring.vowels = vowels;
  }
}

function findSubstring(s, k) {
  let vowelperSubstring = new VowelperSubstring(0, null);
  for (let i = 1; i < s.length; i++) {
    if (isVowel(s[i - 1]) && isVowel(s[i])) {
      continueVowel(vowelperSubstring, s, k, i);
    } else {
      discontinueVowel(vowelperSubstring, s, k, i);
    }
  }
  return vowelperSubstring.substring || "Not found!";
}
const initialTime = performance.now();
console.log(
  findSubstring(process.env.STRING, parseInt(process.env.NSUBSTRING, 10))
);
const finishTime = performance.now();
console.log(`time milliseconds: ${Math.abs(initialTime - finishTime)}`);
