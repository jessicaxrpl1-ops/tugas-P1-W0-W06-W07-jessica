
// Soal 1: ganjil atau genap
function ganjilGenap(angka) {
  if (angka % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}

console.log("Soal 1: ganjil atau genap");
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`); // ganjil
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`); // genap
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`); // genap



// Soal 2: konversi suhu
const celsiusKeFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
};

function konversiSuhu(celsius) {
  if (celsius > 0) {
    return "Suhu positif";
  } else if (celsius < 0) {
    return "Suhu negatif";
  } else {
    return "Suhu nol";
  }
}

console.log("Soal 2: Celsius ke Fahrenheit");
console.log(`celsiusKeFahrenheit(0) = ${celsiusKeFahrenheit(0)}`); // 32
console.log(`celsiusKeFahrenheit(100) = ${celsiusKeFahrenheit(100)}`); // 212
console.log(`celsiusKeFahrenheit(-40) = ${celsiusKeFahrenheit(-40)}`); // -40


// Soal 3: nilai terbesar
function nilaiTerbesar(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log("Soal 3: nilai terbesar");
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`); // 9
console.log(`nilaiTerbesar(80, 75, 80) = ${nilaiTerbesar(80, 75, 80)}`); // 80
console.log(`nilaiTerbesar(-3, -7, -1) = ${nilaiTerbesar(-3, -7, -1)}`); // -1


// Soal 4: tahun kabisat
function tahunKabisat(tahun) {
  if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Soal 4: tahun kabisat");
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`); // true
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`); // false
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`); // false
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`); // true


// Soal 5: diskon belanja
function hargaSetelahDiskon(total) {
  if (total >= 500000) {
    return total - total * 0.2; // diskon 20%
  } else if (total >= 200000) {
    return total - total * 0.1; // diskon 10%
  } else {
    return total; // tanpa diskon
  }
}

console.log("Soal 5: harga setelah diskon");
console.log(`hargaSetelahDiskon(600000) = ${hargaSetelahDiskon(600000)}`); // 480000
console.log(`hargaSetelahDiskon(200000) = ${hargaSetelahDiskon(200000)}`); // 180000
console.log(`hargaSetelahDiskon(100000) = ${hargaSetelahDiskon(100000)}`); // 100000
