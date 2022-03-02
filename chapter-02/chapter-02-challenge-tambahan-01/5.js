/**
 *
 * Buatlah kodingan untuk kasus berikut:
 * Sebuah wahana bermain 'Disney Island' akan memberikan tarif sesuai dengan tinggi dan umur anak
 * dengan ketentuan sebagai berikut:
 * - Umur kurang dari 1 tahun: Tampilkan 'Dilarang masuk'
 * - Umur kurang dari 3 tahun: Rp 30.000. Jika tinggi anak umur 2-3 tahun melebih 70cm maka tarif akan bertambah 10.000
 * - Umur kurang dari 7 tahun: Rp 40.000. Jika tinggi anak umur 4-7 tahun melebih 120cm maka tarif akan bertambah 15.000
 * - Umur kurang dari 10 tahun: Rp 50.000. Jika tinggi anak umur 8-10 tahun melebih 150cm maka tarif akan bertambah 20.000
 * - Umur 10 tahun keatas: Rp 80.000
 * Tampilkan tarif harga sesuai umur dan tinggi seorang anak
 *
 **/

let umur = 1;
let tinggi = 122;
let tarif = 0;

switch (true) {
  case umur <= 1:
    console.log("Dilarang masuk");
    break;
  case umur <= 3:
    tarif = 30000;
    if (tinggi >= 70) {
      tarif += 10000;
    }
    break;
  case umur <= 7:
    tarif = 40000;
    if (tinggi >= 120) {
      tarif += 15000;
    }
    break;
  case umur <= 10:
    tarif = 50000;
    if (tinggi >= 150) {
      tarif += 20000;
    }
    break;
  case umur > 10:
    tarif = 80000;
    break;
}

if (tarif) {
  console.log("tarif", tarif);
}
