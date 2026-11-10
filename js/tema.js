// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");
tombolTema.addEventListener("click", () => {
  document.body.classList.toggle("gelap");
  if (document.body.classList.contains("gelap")) {
    tombolTema.textContent = "Mode Terang";
  } else {
    tombolTema.textContent = "Mode Gelap";
  }
});