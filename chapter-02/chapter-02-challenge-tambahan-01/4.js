/*
=================
HUBUNGAN KELUARGA
=================

Cari tahu hubungan keluarga apa yang kamu miliki dengan seseorang berdasarkan generasi dan gender yang diberikan. Hubungan keluarganya bisa kamu lihat di tabel berikut.

|   Generasi    |   Male    |   Female   |
|     -2        |   kakek   |    nenek   |
|     -1        |   ayah    |    ibu     |
|      0        |          aku           |
|      1        |          anak          |
|      2        |          cucu          |

Munculkan juga 'Invalid input' ketika:
- Tidak ada nama yang dimasukkan, atau
- Gender yang dimasukkan bukan 'male' atau 'female', atau
- Tidak ada generasi yang dimasukkan/tipe datanya bukan number.

--------
CONTOH 1
--------
let nama = 'Daniel'
let gender = 'male'
let generasi = -2

OUTPUT:
Daniel adalah kakekku

--------
CONTOH 2
--------
let nama = 'Risan'
let gender = 'male'
let generasi = 0

OUTPUT:
Risan adalah aku

--------
CONTOH 3
--------
let nama = 'Devita'
let gender = 'female'
let generasi = 1

OUTPUT:
Devita adalah anakku

--------
CONTOH 4
--------
let nama = 'Afifah'
let gender = 'female'
let generasi = 'z'

OUTPUT:
Invalid input


RULE:
- Kerjakan tanpa menggunakan built in function apa pun
- Buat kodingannya saja, tanpa perlu flowchart

*/

let nama = "Afifah";
let gender = "female";
let generasi = "z";

if (
  !nama ||
  (gender !== "male" && gender !== "female") ||
  !generasi ||
  typeof generasi !== "number"
) {
  console.log("Invalid input");
} else if (generasi === -2) {
  if (gender === "male") {
    console.log(`${nama} adalah kakekku`);
  } else {
    console.log(`${nama} adalah nenekku`);
  }
} else if (generasi === -1) {
  if (gender === "male") {
    console.log(`${nama} adalah ayah`);
  } else {
    console.log(`${nama} adalah ibu`);
  }
} else if (generasi === 0) {
  console.log(`${nama} adalah aku`);
} else if (generasi === 1) {
  console.log(`${nama} adalah anakku`);
} else if (generasi === 2) {
  console.log(`${nama} adalah cucuku`);
} else {
  console.log("Invalid input");
}
