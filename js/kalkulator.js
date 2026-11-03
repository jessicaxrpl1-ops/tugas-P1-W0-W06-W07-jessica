// Ambil elemen dengan id (querySelector, seperti selector CSS)
const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");
const tombol = document.querySelector("#tombol");
const hasil = document.querySelector("#hasil");

// Tentukan grade dari nilai akhir
const tentukanGrade = (nilai) => {
  if (nilai >= 85) {
    return "A";
  } else if (nilai >= 70) {
    return "B";
  } else if (nilai >= 55) {
    return "C";
  } else if (nilai >= 40) {
    return "D";
  } else {
    return "E";
  }
};

// Jalankan setiap kali tombol diklik
tombol.addEventListener("click", () => {
  // .value selalu berupa teks, jadi diubah ke angka dengan Number()
  const tugas = Number(inputTugas.value);
  const uts = Number(inputUts.value);
  const uas = Number(inputUas.value);

  // Validasi: kolom kosong atau di luar 0-100
  if (
    inputTugas.value === "" || inputUts.value === "" || inputUas.value === "" ||
    tugas < 0 || tugas > 100 ||
    uts < 0 || uts > 100 ||
    uas < 0 || uas > 100
  ) {
    hasil.textContent = "Isi semua nilai dengan angka 0-100.";
    return;
  }

  const nilaiAkhir = tugas * 0.3 + uts * 0.3 + uas * 0.4;
  const grade = tentukanGrade(nilaiAkhir);

  // Ganti teks di elemen hasil
  hasil.textContent = `Nilai akhir: ${nilaiAkhir.toFixed(1)} (Grade ${grade})`;
});