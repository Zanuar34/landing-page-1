// Mengeksekusi script JavaScript yang berinteraksi dengan struktur HTML dan CSS ketika dokumen sudah siap dan lengkap.
// Tanpa event ini, script JavaScript dapat dijalankan sebelum seluruh dokumen selesai diproses, dan hal ini dapat menyebabkan error atau bug pada halaman website.
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("button-menu-list");
    const menuList = document.getElementById("bottom-list");
    const bottomLink = document.getElementById("bottom-link");
    const iconCancel = document.getElementById("icon-cancel");

    bottomLink.style.display = "none";

    // Ketika mengklik ikon kiri bawah, menu dalam id "bottom-link" akan muncul.
    menuIcon.addEventListener("click", () => {
        // menuList.classList.toggle("hidden");

        bottomLink.style.display = "block";
    });

    // Ketika mengklik icon-cancel (dalam id "bottom-link"), menu dalam id "bottom-link" akan hilang.
    iconCancel.addEventListener("click", () => {
        bottomLink.style.display = "none";
    });
});



// Ambil elemen tombol kiri dan tombol kanan
const btnKiri = document.querySelector('.button-kiri');
const btnKanan = document.querySelector('.button-kanan');

// Ambil elemen gambar testimonial
const gambarTestimoni = document.querySelector('.foto img');

// Daftar gambar testimonial
const daftarGambar = [
    'assets/foto.png',
    'assets/wanita-bertanya.png',

];

// Indeks gambar saat ini
let indeksGambar = 0;

// Fungsi untuk mengganti gambar
function gantiGambar(direction) {
    if (direction === 'next') {
        indeksGambar = (indeksGambar + 1) % daftarGambar.length;
    } else if (direction === 'prev') {
        indeksGambar = (indeksGambar - 1 + daftarGambar.length) % daftarGambar.length;
    }

    // Atur sumber gambar sesuai dengan indeks yang baru
    gambarTestimoni.src = daftarGambar[indeksGambar];
}

// Tambahkan event listener untuk tombol kiri
btnKiri.addEventListener('click', () => {
    gantiGambar('prev');
});

// Tambahkan event listener untuk tombol kanan
btnKanan.addEventListener('click', () => {
    gantiGambar('next');
});
