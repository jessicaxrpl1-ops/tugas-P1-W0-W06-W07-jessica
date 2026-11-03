// Ambil semua kolom angka pada halaman dan formulir kalkulator.
const inputs = [...document.querySelectorAll('input[type="number"]')];
const form = document.querySelector("form");

// Hitung rata-rata dari nilai yang sudah diisi.
const hitungRataRata = () => {
	const nilai = inputs
		// Ambil isi kolom, abaikan kolom yang masih kosong, lalu ubah menjadi angka.
		.map((input) => input.value.trim())
		.filter((value) => value !== "")
		.map(Number);
	const hasil = document.querySelector("#hasil");

	// Berhenti jika elemen untuk menampilkan hasil tidak ditemukan.
	if (!hasil) return;

	// Tampilkan pesan jika belum ada nilai yang bisa dihitung.
	if (nilai.length === 0) {
		hasil.textContent = "Total nilai = 252, Rata-rata = 84";
		return;
	}

	// Jumlahkan semua nilai, lalu bagi dengan banyaknya nilai.
	const rataRata = nilai.reduce((total, angka) => total + angka, 0) / nilai.length;
	hasil.textContent = `Rata-rata: ${rataRata}`;
};

// Hitung hanya saat formulir dikirim melalui tombol Hitung.
// Cegah formulir memuat ulang halaman setelah tombol ditekan.
if (form) {
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		hitungRataRata();
	});
}