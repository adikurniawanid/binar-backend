/**

Buatlah flowchart dan kodingan di javascript untuk kasus berikut: 
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:

Nilai 80 - 100: A
Nilai 65 - 79: B
Nilai 50 - 64: C
Nilai 35 - 49: D
Nilai 0 - 34: E

Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED: Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
 */

// Contoh 1:
let nama = "Andhika";
let nilai = 100;

// output yang diharapkan
// nama: Andhika; score: A

// Contoh 2:
let nama = "Andhiki";
let nilai = 70;

//output yang diharapkan
// nama: Andhiki; score: B

switch ((nilai, nama)) {
  case nilai >= 80 && nilai <= 100 && nama:
    console.log(`nama: ${nama}; score: A`);
    break;
  case nilai >= 65 && nilai <= 79 && nama:
    console.log(`nama: ${nama}; score: B`);
    break;
  case nilai >= 50 && nilai <= 64 && nama:
    console.log(`nama: ${nama}; score: C`);
    break;
  case nilai >= 35 && nilai <= 49 && nama:
    console.log(`nama: ${nama}; score: D`);
    break;
  case nilai >= 0 && nilai <= 34 && nama:
    console.log(`nama: ${nama}; score: E`);
    break;
  default:
    console.log("Nilai Invalid");
    break;
}
