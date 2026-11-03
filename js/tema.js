const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function ()  {
    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '☀ Mode Terang';
    } else {
        btnTema.textContent = '🌙 Mode Gelap';
    }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function () {
    event.preventDefault(); // Mencegah link pindah halaman / buka email
    elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function () {
    elemenModal.classList.remove('show'); // Sembunyikan modal
});

elemenModal.addEventListener('click', function (event) {
    if (event.target === modal){
        modal.classList.remove('show');
    }
});
