function isPrime(number) {
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return number > 1;
}

console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(6)); // false
console.log(isPrime(3)); // true
