/**
Diberikan 3 variable yang me-representasikan seorang murid: nama, nilai, absen
Buatlah kodingan sebuah kondisional yang menentukan apakah murid tersebut lulus atau tidak.

Murid dinyatakan lulus jika:

nilainya 70 keatas
absennya dibawah 5 kali
Tampilkan nama murid dan keterangan apakah murid tersebut 'lulus' atau 'tidak lulus'
 */

// variabel bisa diubah-ubah sesuai kebutuhan
let nama = "Ana";
let nilai = 90;
let absen = 2;

// koding di sini
if (nilai >= 70 && absen < 5) {
  console.log(`${nama} - lulus`);
} else {
  console.log(`${nama} - tidak lulus`);
}
