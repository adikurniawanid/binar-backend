# Logic Challenge - Game Board

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun


---

## Objectives

- Mampu memecahkan masalah yang diberikan
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah

## Directions

Diberikan sebuah function bernama *gameControl* yang menerima dua parameter.
Parameter pertama adalah sebuah array 2 dimensi (disebut gameBroad) yang hanya memiliki satu '*' dan sisanya adalah sebuah ''.
Lebar dan tinggi dari gameBoard akan selalu sama.
Parameter kedua adalah sebuah array 1 dimensi (disebut controller), yang berisi karakter '↑', '←', '↓', atau '→'.
Controller berfungsi untuk mengubah posisi dari '*' pada gameBoard.
Jika controller '↑', maka '*' dipindahkan ke atas,
Jika controller '←', maka '*' dipindahkan ke kiri,
Jika controller '↓', maka '*' dipindahkan ke bawah,
Jika controller '→', maka '*' dipindahkan ke kanan
Function gameControl akan mengembalikan array 2 dimensi dan posisi terakhir '*' setelah dipindahkan oleh controller


```js
Contoh 1:
let board1 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]
  
console.log(gameControl(board1, ['↑', '←', '↑', '→']))

// output

// [
//   ['', '', '*', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', '']
// ]

Contoh 2:
  
let board2 = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '*', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
]
console.log(gameControl(board2, ['↓', '←', '↑', '→', '→', '↑', '→']))

//output

// [
//   ['', '', '', '', ''],
//   ['', '', '', '', '*'],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', '']
// ]
```