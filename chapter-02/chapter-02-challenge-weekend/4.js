let lebar = 10;
let tinggi = 10;

for (let i = 0; i < tinggi; i++) {
  for (let j = 0; j < lebar; j++) {
    if (i === 0 || i === tinggi - 1 || j === 0 || j === lebar - 1) {
      process.stdout.write("*");
      continue;
    }
    process.stdout.write(" ");
  }
  process.stdout.write("\n");
}
