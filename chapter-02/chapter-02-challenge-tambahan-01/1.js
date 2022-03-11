/**

Dalam permainan gacha ini jika seorang anak menekan sebuah tombol maka permainan akan mengacak angka 1 - 5.
  Dimana jika mendapatkan angka,
    1: akan menampilkan "coba lagi ya"
    2: akan mendapatkan jumlah kupon/karcis sebanyak 5 dan menampilkan "selamat kamu mendapatkan kupon sebanyak 5"
    3: akan mendapatkan jumlah kupon/karcis sebanyak 15 dan menampilkan "selamat kamu mendapatkan kupon sebanyak 15"
    4: akan mendapatkan jumlah kupon/karcis sebanyak 50 dan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"
    5: akan mendapatkan jumlah kupon/karcis sebanyak 100 dan menampilkan "WOW, kamu menang jackpot! Selamat!!"

Buatlah flowchart dan kodingannya menggunakan SWITCH-CASE
 */

/**

HINTS:

Untuk merandom angka 1-5 silakan menggunakan built in function Math seperti Math.random, Math.ceil, Math.round, Math.floor, dll
RESTRICTION: Hanya boleh menggunakan built-in function Math seperti Math.random, Math.ceil, Math.round, Math.floor, dll
 */
let karcis = 0;
const angka = Math.floor(Math.random() * 5) + 1;
console.log("angka", angka);

switch (angka) {
  case 1:
    console.log("coba lagi ya");
    break;
  case 2:
    karcis = 5;
    console.log("selamat kamu mendapatkan kupon sebanyak 5");
    break;
  case 3:
    karcis = 15;
    console.log("selamat kamu mendapatkan kupon sebanyak 15");
    break;
  case 4:
    karcis = 50;
    console.log("selamat kamu mendapatkan kupon sebanyak 50");
    break;
  case 5:
    karcis = 100;
    console.log("WOW, kamu menang jackpot! Selamat!!");
    break;
}
