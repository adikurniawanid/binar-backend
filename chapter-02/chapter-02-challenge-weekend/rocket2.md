# Logic Challenge - Caesar Encryption

Caesar Encryption adalah metoda enkripsi tertua dan ringan. Enkripsi dilakukan hanya dengan memajukan atau memundurkan setiap karakter sejumlah yang ditentukan.

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun
- selain alphabet, tidak usah di olah


---

## Objectives

- Mampu memecahkan masalah yang diberikan
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah

## Release 1

Buat lah sebuah fungsi encrypt, dengan input sebuah string dan angka yang menunjukkan jumlah langkah maju karakter.
Jika sampai huruf z, pemrosesan selanjutnya akan balik lagi ke a dan seterusnya

```js
console.log(caesar_encrypt('xyz', 4)) // bcd
console.log(caesar_encrypt('aku anak sehat', 1)) // blv bobl tfibu
```

## Release 2

Buat lah sebuah fungsi decrypt, dengan input sebuah string dan angka yang menunjukkan jumlah langkah mundur karakter. 
Jika sampai huruf a, pemrosesan selanjutnya akan balik lagi ke z dan seterusnya

```js
console.log(caesar_decrypt('bcd', 4)) // xyz
console.log(caesar_decrypt('blv bobl tfibu', 1)) // aku anak sehat
```

