// Contoh penggunaan if, else, dan nested if
let nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// Contoh penggunaan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa");
    break;
  default:
    console.log("Hari ini bukan Senin atau Selasa");
}

// Contoh penggunaan for statement
for (let i = 0; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}

// Contoh penggunaan while
let angka = 1;
while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

// Contoh penggunaan do while
let angka2 = 1;
do {
  console.log("Angka 2: " + angka2);
  angka2++;
} while (angka2 <= 5);

// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasilPenambahan = tambah(3, 5);
console.log("Hasil penambahan: " + hasilPenambahan);
