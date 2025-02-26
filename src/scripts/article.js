document.addEventListener("DOMContentLoaded", function() {
    // Tombol toggle
    const fontToggle = document.getElementById("font-toggle");
    const fontMenu = document.getElementById("font-menu");
    
    // Cek apakah elemen fontToggle dan fontMenu ada
    if (!fontToggle || !fontMenu) {
        console.log("Elemen tidak ditemukan!");
        return;
    }

    // Toggle menu saat tombol diklik
    fontToggle.addEventListener("click", function(e) {
        e.stopPropagation(); // Mencegah event bubbling
        fontMenu.classList.toggle("active");
    });
    
    // Pilihan font
    const fontOptions = document.querySelectorAll(".font-option");
    const articleContent = document.getElementById("article-content");
    
    fontOptions.forEach(option => {
        option.addEventListener("click", function() {
            // Hapus kelas aktif dari semua opsi
            fontOptions.forEach(opt => opt.classList.remove("active"));
            
            // Tambahkan kelas aktif ke opsi yang dipilih
            this.classList.add("active");
            
            // Terapkan font ke artikel
            const selectedFont = this.getAttribute("data-font");
            articleContent.style.fontFamily = selectedFont;
            
            // Tutup menu
            fontMenu.classList.remove("active");
        });
    });
    
    // Tutup menu saat klik di luar
    document.addEventListener("click", function(e) {
        if (!fontToggle.contains(e.target) && !fontMenu.contains(e.target)) {
            fontMenu.classList.remove("active");
        }
    });
});
