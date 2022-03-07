function star(num) {
  let temp = num + num - 1;

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= temp + num - i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i * 2; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < temp * 3 - i * 4; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

star(5);
