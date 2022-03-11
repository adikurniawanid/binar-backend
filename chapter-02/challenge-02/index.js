class Controller {
  static insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let j = i - 1;
      let temp = array[i];
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = temp;
    }
    return array;
  }

  static getMaxValue(sortedArray) {
    return sortedArray[sortedArray.length - 1];
  }

  static getMinValue(sortedArray) {
    return sortedArray[0];
  }

  static getTotal(array) {
    let result = 0;
    for (let index = 0; index < array.length; index++) {
      result += array[index];
    }
    return result;
  }

  static getAverage(array) {
    return this.getTotal(array) / array.length;
  }

  static getTotalSiswaLulus(array) {
    let lulusCount = 0;
    let tidakLulusCount = 0;
    for (let index = 0; index < array.length; index++) {
      if (array[index] >= 75) {
        lulusCount++;
      } else {
        tidakLulusCount++;
      }
    }
    return { lulus: lulusCount, tidakLulus: tidakLulusCount };
  }

  static validate(arrayNilai) {
    for (let index = 0; index < arrayNilai.length; index++) {
      if (
        arrayNilai[index] > 100 ||
        arrayNilai[index] < 0 ||
        isNaN(arrayNilai[index])
      ) {
        console.log("Invalid Value");
        return false;
      }
    }
    return true;
  }

  static isStop(input) {
    return input === "q";
  }

  static evaluate(arrayNilai) {
    console.log(`
    nilai             : ${arrayNilai}
    nilai tersusun    : ${(arrayNilai = this.insertionSort(arrayNilai))}
    nilai min         : ${this.getMinValue(arrayNilai)}
    nilai max         : ${this.getMaxValue(arrayNilai)}
    rata-rata nilai   : ${this.getAverage(arrayNilai)}
    jumlah lulus      : ${this.getTotalSiswaLulus(arrayNilai).lulus}
    jumlah tidak lulus: ${this.getTotalSiswaLulus(arrayNilai).tidakLulus}
    `);
  }
}
// alternatif readline:
/* 
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const nilai = [];
const recursiveAsyncReadLine = function () {
  rl.question("", function (input) {
    if (Controller.isStop(input)) {
      if (Controller.validate(nilai)) {
        Controller.evaluate(nilai);
      }
      process.exit(0);
    }
    nilai.push(Number(input));
    recursiveAsyncReadLine();
  });
};

console.log("Masukan nilai mahasiswa");
recursiveAsyncReadLine();
*/

const nilai = [];
const input = process.argv;

for (let index = 2; index < input.length; index++) {
  if (Controller.isStop(input[index])) {
    break;
  }
  nilai.push(Number(input[index]));
}

if (Controller.validate(nilai)) {
  Controller.evaluate(nilai);
}
