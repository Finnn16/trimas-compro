document.addEventListener('DOMContentLoaded', function() {
    // Mengambil elemen dropdown dan artikel
    const fontSelect = document.getElementById('font-select');
    const article = document.querySelector('.article');

    // Mengecek apakah ada preferensi font yang disimpan di LocalStorage
    const savedFont = localStorage.getItem('selectedFont');
    if (savedFont) {
    // Jika ada, terapkan font yang disimpan
    article.style.fontFamily = savedFont;
    fontSelect.value = savedFont; // Menyesuaikan dropdown dengan font yang dipilih
    }

    // Menambahkan event listener pada dropdown untuk mengubah font
    fontSelect.addEventListener('change', function() {
    const selectedFont = fontSelect.value;
    
    // Mengubah font artikel sesuai pilihan pengguna
    article.style.fontFamily = selectedFont;

    // Menyimpan pilihan font pengguna di LocalStorage
    localStorage.setItem('selectedFont', selectedFont);
    });
});