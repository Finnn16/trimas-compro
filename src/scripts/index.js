const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

function countUp(counter, target) {
    let end = target;
    let duration = 1500;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp; // Menyimpan waktu awal animasi
        let progress = timestamp - startTime; // Hitung waktu yang telah berlalu
        let current = Math.min(Math.floor(progress / duration * end), end); // Hitung angka yang ditampilkan
        counter.textContent = current; // Update angka yang ditampilkan

        if (progress < duration) {
        requestAnimationFrame(animate); // Lanjutkan animasi jika durasi belum tercapai
        }
    }

    // Mulai animasi dengan requestAnimationFrame
    requestAnimationFrame(animate);
    }

    // Intersection Observer untuk memantau apakah elemen terlihat di viewport
    const counters = document.querySelectorAll('.counter');

    // Fungsi untuk menangani observer
    function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        const counter = entry.target;
        const target = counter.getAttribute('data-target');
        countUp(counter, target);
        observer.unobserve(counter); // Hentikan observasi setelah animasi dimulai
        }
    });
    }

    // Menambahkan observer untuk setiap counter
    const observerOptions = {
    threshold: 0.5 // Elemen harus terlihat 50% untuk mulai dihitung
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    counters.forEach(counter => {
    observer.observe(counter);
    });

    // Set target untuk masing-masing counter di JavaScript
    document.getElementById('count-01').setAttribute('data-target', '6');
    document.getElementById('count-02').setAttribute('data-target', '1000');
    document.getElementById('countup3').setAttribute('data-target', '300000');
