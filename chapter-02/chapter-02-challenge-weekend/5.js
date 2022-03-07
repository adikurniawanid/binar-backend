let kata = "kasur rusak";
let result = false;

for (let index = 0; index < kata.length; index++) {
  if (kata[index] === kata[kata.length - 1 - index]) {
    result = true;
  } else {
    result = false;
    break;
  }
}

console.log(result);
