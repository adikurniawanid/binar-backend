class Kalkulator {
  static tambah(a, b) {
    return a + b;
  }

  static kurang(a, b) {
    return a - b;
  }

  static bagi(a, b) {
    return a / b;
  }

  static kali(a, b) {
    return a * b;
  }

  static akarKuadrat(a) {
    return Math.sqrt(a);
  }

  static luasPersegi(panjang, lebar) {
    return panjang * lebar;
  }

  static volumeTabung(jariJari, tinggi) {
    return Math.PI * jariJari ** 2 * tinggi;
  }

  static volumeKubus(sisi) {
    return sisi ** 3;
  }
}

console.log(Kalkulator.tambah(1, 2));
console.log(Kalkulator.kurang(4, 2));
console.log(Kalkulator.bagi(1, 2));
console.log(Kalkulator.kali(3, 2));
console.log(Kalkulator.akarKuadrat(4));
console.log(Kalkulator.luasPersegi(4, 2));
console.log(Kalkulator.volumeTabung(4, 5));
console.log(Kalkulator.volumeKubus(5));
