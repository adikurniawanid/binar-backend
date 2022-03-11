let row = 40;

for (let i = 0; i <= row; i++) {
  for (let j = 0; j <= row - i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
