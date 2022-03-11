function hitungAlphabet(str) {
  const VOWELS = ["a", "i", "u", "e", "o"];
  const CONSONANTS = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let vocalCount = 0;
  let consonantCount = 0;
  let sentence = str.toLowerCase();

  loopSentence: for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < VOWELS.length + CONSONANTS.length; j++) {
      if (sentence[i] === VOWELS[j]) {
        vocalCount++;
        continue loopSentence;
      } else if (sentence[i] === CONSONANTS[j]) {
        consonantCount++;
        continue loopSentence;
      }
    }
  }

  const result = {
    huruf: {
      vokal: vocalCount,
      konsonan: consonantCount,
    },
    panjang: str.length,
  };

  return result;
}

console.log(hitungAlphabet("javascript!"));
console.log(hitungAlphabet("When I Get Older Losing My Hair"));
console.log(hitungAlphabet("2020 20 20 ## && +"));
