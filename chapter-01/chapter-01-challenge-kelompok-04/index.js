/**
 * SOAL NO. 1
 */

/**
 * SMA Maju Mundur mengadakan ujian matematika, dan didapatkan nilai-nilai ujian
 * siswanya dengan data sebagai berikut
 *
 * Nama; kelas; nilai
 *
 * Andi; 12-IPA-A; 90
 * Dila; 12-IPA-A; 35
 * Udin; 12-IPA-A; 67
 * Nina; 12-IPA-B; 80
 * Nani; 12-IPA-B; 73
 * Jali; 12-IPA-B; 98
 * Farah; 12-IPA-C; 76
 * Dini; 12-IPA-C; 81
 * Dina; 12-IPA-C; 87
 *
 *
 */

/**
 *
 * Ubahlah data nilai di atas menjadi sebuah array of object, di mana terdapat pengelompokkan per kelasnya.
 * Hasil disimpan di nilai_student
 *
 */

let nilai_student = [
  {
    nama: "Andi",
    kelas: "12-IPA-A",
    nilai: 90,
  },
  {
    nama: "Dila",
    kelas: "12-IPA-A",
    nilai: 35,
  },
  {
    nama: "Udin",
    kelas: "12-IPA-A",
    nilai: 67,
  },
  {
    nama: "Nina",
    kelas: "12-IPA-B",
    nilai: 80,
  },
  {
    nama: "Nani",
    kelas: "12-IPA-B",
    nilai: 73,
  },
  {
    nama: "Jali",
    kelas: "12-IPA-B",
    nilai: 98,
  },
  {
    nama: "Farah",
    kelas: "12-IPA-C",
    nilai: 76,
  },
  {
    nama: "Dini",
    kelas: "12-IPA-C",
    nilai: 81,
  },
  {
    nama: "Dina",
    kelas: "12-IPA-C",
    nilai: 87,
  },
];

console.log(nilai_student);

/**
 *
 * Nilai minimal untuk bisa lulus pelajaran matermatika adalah 70, tentukan siswa mana saja
 * pada masing-masing kelas yang tidak lulus pelajaran matematika
 *
 */

function filterKelas(array, kelas) {
  return array.filter(
    (element) => element.kelas === kelas && element.nilai < 70
  );
}

let student_tidak_lulus_kelas_A = filterKelas(nilai_student, "12-IPA-A");
let student_tidak_lulus_kelas_B = filterKelas(nilai_student, "12-IPA-B");
let student_tidak_lulus_kelas_C = filterKelas(nilai_student, "12-IPA-C");

console.log(student_tidak_lulus_kelas_A);
console.log(student_tidak_lulus_kelas_B);
console.log(student_tidak_lulus_kelas_C);

/**
 *
 * Hitung nilai rata-rata per kelas
 *
 *
 */

function rataRataKelas(arrayOfObject, kelas) {
  let arrayOfObjectFilter = arrayOfObject.filter(
    (student) => student.kelas == kelas
  );

  return (
    arrayOfObjectFilter.reduce((total, next) => total + next.nilai, 0) /
    arrayOfObjectFilter.length
  );
}

let rata_rata_kelas_A = rataRataKelas(nilai_student, "12-IPA-A");
let rata_rata_kelas_B = rataRataKelas(nilai_student, "12-IPA-B");
let rata_rata_kelas_C = rataRataKelas(nilai_student, "12-IPA-C");

console.log(rata_rata_kelas_A);
console.log(rata_rata_kelas_B);
console.log(rata_rata_kelas_C);

/**
 * SOAL NO.2
 */

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
    activities: [
      {
        type: "productive",
        activities: [
          {
            name: "cooking",
            day: "Monday",
          },
          {
            name: "coding",
            day: "Tuesday",
          },
          {
            name: "doing laundry",
            day: "Tuesday",
          },
        ],
      },
      {
        type: "unproductive",
        activities: [
          {
            name: "netflix-ing",
            day: "Sunday",
          },
          {
            name: "scroll through IG",
            day: "Saturday",
          },
          {
            name: "Party",
            day: "Friday",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
    activities: [
      {
        type: "productive",
        activities: [
          {
            name: "clean the apartment",
            day: "Wednesday",
          },
        ],
      },
      {
        type: "unproductive",
        activities: [
          {
            name: "netflix-ing",
            day: "Sunday",
          },
          {
            name: "scroll through IG",
            day: "Saturday",
          },
          {
            name: "Party",
            day: "Friday",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

// Nama company dari Glenna Reichert
console.log(users[8].company.name); // lengkapi

// Aktivitas tidak produktif Ervin Howell yang dilakukan tiap Jumat
console.log(users[1].activities[1].activities[2].name);

// Zipcode dari Ervin Howell
console.log(users[1].address.zipcode);

// Leanne Graham melakukan coding setiap hari apa?
console.log(users[0].activities[0].activities[1].day);

// Geolocation (latitude, longitude) dari alamat Clementina DuBuque adalah
console.log(users[9].address.geo.lat, users[9].address.geo.lng);

/**
 * SOAL NO. 3
 */

/**
 * Lengkapi function untuk mengkonversi detik menjadi menit
 */

function convertTime(seconds) {
  let menit = Math.floor(seconds / 60);
  let detik = seconds % 60;

  if (menit < 10) {
    menit = "0" + menit;
  }
  if (detik < 10) {
    detik = "0" + detik;
  }

  return menit + ":" + detik;
}

console.log(convertTime(60)); // expected output: 01:00
console.log(convertTime(75)); // expected output: 01:15
console.log(convertTime(153)); // expected output: 02:33

/**
 * SOAL NO.4
 */

/**
 * Lengkapilah function berikut untuk menampilkan 'Aku suka buah ...'
 */

function iLoveFruit(fruits) {
  fruits.forEach((element) => {
    console.log("I love " + element);
  });
}

iLoveFruit(["Apple", "Orange", "Banana"]);

/**
 * sample input: ["Apple", "Orange", "Banana"]
 * sample output:
 * I love Apple
 * I love Orange
 * I love Banana
 */

/**
 * SOAL NO. 5
 */

/**
 * Lengkapi function untuk menghilangkan nama buah-buahan yang dimulai dengan huruf A
 */
function removeFruitStartWithALetter(fruits) {
  return fruits.filter((element) => element.charAt(0) !== "A");
}

console.log(removeFruitStartWithALetter(["Apple", "Banana"])); // expected output: ["Banana"]
console.log(removeFruitStartWithALetter(["Anggur"])); // expected output: []
console.log(removeFruitStartWithALetter(["Mengkudu", "Pisang"])); // expected output: ["Mengkudu", "Pisang"]

/**
 * sample input: ["Apple", "Orange", "Banana"]
 * sample output: ["Orange", "Banana"]
 */

/**
 * SOAL NO. 6
 */

/**
 * Lengkapi function berikut untuk menjumlahkan semua elemen dalam array
 */

function sumOfArray(arr) {
  return arr.reduce((total, element) => (total += element), 0);
}

console.log(sumOfArray([3, 0, 9])); // expected output: 12
console.log(sumOfArray([12, 8, 4, 9])); // expected output: 33
console.log(sumOfArray([8])); // expected output: 8
console.log(sumOfArray([])); // expected output: 0

/**
 * SOAL NO. 7
 */

/**
 * Lengkapi function berikut untuk menambah 1 setiap elemen yang ada di dalam array
 */

function plusOne(arr) {
  arr.forEach((element, index) => {
    arr[index] += 1;
  });
  return arr;
}

console.log(plusOne([3, 6, 7])); // expected output: [4, 7, 8]
console.log(plusOne([0, 8, 9])); // expected output: [1, 9, 10]
console.log(plusOne([])); // expected output: []

/**
 * SOAL NO. 8
 */

/**
 * Lengkapi function berikut untuk menggabungkan array-array
 */
function joinArray(arr1, arr2, arr3) {
  return arr1.concat(arr2).concat(arr3).join(",");
}

console.log(joinArray([1, 2], [3, 4], [8])); // expected output: [1, 2, 3, 4, 8]
console.log(joinArray([9], [8], [])); // expected output: [9, 8]
console.log(joinArray([], [8, 2], [6, 4])); // expected output: [8, 2, 6, 4]

/**
 * SOAL NO. 9
 */

/**
 * Lengkapilah function berikut untuk menghitung harga setelah didiskon
 */

function countDiscount(harga_awal, persen_diskon) {
  return harga_awal - (persen_diskon / 100) * harga_awal;
}

console.log(countDiscount(10000, 10)); // expected output: 9000
console.log(countDiscount(5000, 25)); // expected output: 3750
console.log(countDiscount(50000, 20)); // expected output: 40000

/**
 * SOAL NO. 10
 */

/**
 * Lengkapi function berikut untuk menghilangkan elemen array yang memiliki tipe data number
 */

function removeAllNumber(arr) {
  return arr.filter((element) => typeof element !== "number");
}

console.log(removeAllNumber(["Lala", undefined, 12, 9, true])); // expected output: ["Lala", undefined, true]
console.log(removeAllNumber([[1, 2], "Apel", false, 9])); // expected output: [[1, 2], "Apel", false]
