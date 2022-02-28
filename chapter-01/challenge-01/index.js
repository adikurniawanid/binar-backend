const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log("Terima Kasih, Sampai Jumpa!");
  process.exit(0);
});

const JUDUL_MENU_ARITMATIKA = "Operasi Aritmatika";
const JUDUL_MENU_AKAR_KUADRAT = "Operasi Akar Kuadrat";
const JUDUL_MENU_LUAS_PERSEGI = "Operasi Hitung Luas Persegi";
const JUDUL_MENU_VOLUME_KUBUS = "Operasi Hitung Volume Kubus";
const JUDUL_MENU_VOLUME_TABUNG = "Operasi Hitung Volume Tabung";

function showMenu() {
  console.log(
    `
=========================
Kalkulator CLI sederhana
=========================
Menu:
    1    => ${JUDUL_MENU_ARITMATIKA}
    2    => ${JUDUL_MENU_AKAR_KUADRAT}
    3    => ${JUDUL_MENU_LUAS_PERSEGI}
    4    => ${JUDUL_MENU_VOLUME_KUBUS}
    5    => ${JUDUL_MENU_VOLUME_TABUNG}
    menu => Tampilkan Menu
    stop => Keluar`
  );
}

function operasiAritmatika(input) {
  return "Hasil           : " + eval(input);
}

function hitungLuasPersegi(panjang, lebar) {
  return "Hasil            : " + panjang * lebar;
}

function hitungVolumeKubus(sisi) {
  return "Hasil          : " + sisi ** 3;
}

function hitungVolumeTabung(jariJari, tinggi) {
  return "Hasil              : " + Math.PI * jariJari ** 2 * tinggi;
}

function isStop(input) {
  if (input == "stop") {
    return rl.close();
  }
}

showMenu();
const recursiveAsyncReadLine = function () {
  rl.question(
    `=========================
Masukan pilihan menu: `,
    function (menu) {
      console.log("=========================");
      isStop(menu);
      switch (menu) {
        case "menu":
          showMenu();
          break;
        case "1":
          console.log(`> ${JUDUL_MENU_ARITMATIKA} <`);
          rl.question("Masukan input   : ", function (input) {
            isStop(input);
            console.log(operasiAritmatika(input));
            recursiveAsyncReadLine();
          });
          break;
        case "2":
          console.log(`> ${JUDUL_MENU_AKAR_KUADRAT} <`);
          rl.question("Masukan input   : ", function (input) {
            isStop(input);
            console.log(Math.sqrt(input));
            recursiveAsyncReadLine();
          });
          break;
        case "3":
          console.log(`> ${JUDUL_MENU_LUAS_PERSEGI} <`);
          rl.question("Masukan panjang  : ", function (panjang) {
            isStop(panjang);
            rl.question("Masukan lebar    : ", function (lebar) {
              isStop(lebar);
              console.log(hitungLuasPersegi(panjang, lebar));
              recursiveAsyncReadLine();
            });
          });
          break;
        case "4":
          console.log(`> ${JUDUL_MENU_VOLUME_KUBUS} <`);
          rl.question("Masukan sisi   : ", function (sisi) {
            isStop(sisi);
            console.log(hitungVolumeKubus(sisi));
            recursiveAsyncReadLine();
          });
          break;
        case "5":
          console.log(`> ${JUDUL_MENU_VOLUME_TABUNG} <`);
          rl.question("Masukan jari-jari  : ", function (jariJari) {
            isStop(jariJari);
            rl.question("Masukan tinggi     : ", function (tinggi) {
              isStop(tinggi);
              console.log(hitungVolumeTabung(jariJari, tinggi));
              recursiveAsyncReadLine();
            });
          });
          break;
        default:
          console.log("Opsi menu tidak tersedia");
          break;
      }
      recursiveAsyncReadLine();
    }
  );
};
recursiveAsyncReadLine();
