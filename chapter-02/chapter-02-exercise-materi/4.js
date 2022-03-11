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

function boxOfAlphabet(row, col) {
  let counter = 0;
  const result = [];

  for (let i = 0; i < row; i++) {
    result.push([]);
    for (let j = 0; j < col; j++) {
      result[i].push(ALPHABET[counter]);
      counter++;
      counter %= 26;
    }
  }

  return result;
}

console.log(boxOfAlphabet(9, 9));

// output

// [
//   ['a', 'b'],
//   ['c', 'd']
// ]
