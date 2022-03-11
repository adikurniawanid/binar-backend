function isEqual(a, b) {
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
  let validate = false;

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let i = 0; i < Object.keys(a).length; i++) {
    if (Object.keys(a)[i].length !== Object.keys(b)[i].length) {
      return false;
    }

    let tempA = "";
    let tempB = "";
    for (let j = 0; j < Object.keys(a)[i].length; j++) {
      if (DICTIONARY[Object.keys(a)[i][j]]) {
        tempA += DICTIONARY[Object.keys(a)[i][j]];
      } else {
        tempA += Object.keys(a)[i][j];
      }
      if (DICTIONARY[Object.keys(b)[i][j]]) {
        tempB += DICTIONARY[Object.keys(b)[i][j]];
      } else {
        tempB += Object.keys(b)[i][j];
      }
    }

    if (tempA === tempB) {
      validate = true;
    } else {
      return false;
    }
  }

  return validate;
}

let a = {
  foo: 1,
  bar: 2,
};

let b = {
  Foo: 8,
  bAR: 100,
};

console.log(isEqual(a, b)); // true
