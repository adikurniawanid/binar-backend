let names = ["ade", "adi", "febryan", "Febryan"];
const DICTIONARY = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F",
  g: "G",
  h: "H",
  i: "I",
  j: "J",
  k: "K",
  l: "L",
  m: "M",
  n: "N",
  o: "O",
  p: "P",
  q: "Q",
  r: "R",
  s: "S",
  t: "T",
  u: "U",
  v: "V",
  w: "W",
  x: "X",
  y: "Y",
  z: "Z",
};
let result = [];

for (let index = 0; index < names.length; index++) {
  let temp = "";
  if (DICTIONARY[names[index][0]]) {
    temp += DICTIONARY[names[index][0]];
    for (let i = 1; i < names[index].length; i++) {
      temp += names[index][i];
    }
    result.push(temp);
  } else {
    result.push(names[index]);
  }
}
console.log(result);
