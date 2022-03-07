const ALPHABET = [
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
  "z",
];

function caesar_encrypt(str, num) {
  let result = "";

  loopSentence: for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < ALPHABET.length; j++) {
      if (str[i] === " ") {
        result += str[i];
        continue loopSentence;
      } else if (str[i] === ALPHABET[j]) {
        result += ALPHABET[(j + num) % 26];
        continue loopSentence;
      }
    }
  }
  return result;
}

function caesar_decrypt(str, num) {
  let result = "";

  loopSentence: for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < ALPHABET.length; j++) {
      if (str[i] === " ") {
        result += str[i];
        continue loopSentence;
      } else if (str[i] === ALPHABET[j]) {
        result += ALPHABET[(j - num) % 26] || ALPHABET[((j - num) % 26) + 26];
        continue loopSentence;
      }
    }
  }
  return result;
}

console.log(caesar_encrypt("xyz", 4)); // bcd
console.log(caesar_encrypt("aku anak sehat", 1)); // blv bobl tfibu
console.log(caesar_decrypt("bcd", 4)); // xyz
console.log(caesar_decrypt("blv bobl tfibu", 1)); // aku anak sehat
