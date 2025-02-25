const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

function countUp(counter, target) {
    let end = target;
    let duration = 1500;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let current = Math.min(Math.floor(progress / duration * end), end); 
        counter.textContent = current; 

        if (progress < duration) {
        requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}
const counters = document.querySelectorAll('.counter');

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

const observerOptions = {
    threshold: 0.5 // Elemen harus terlihat 50% untuk mulai dihitung
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

counters.forEach(counter => {
observer.observe(counter);
});

document.getElementById('count-01').setAttribute('data-target', '6');
document.getElementById('count-02').setAttribute('data-target', '1000');
document.getElementById('countup3').setAttribute('data-target', '90000');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch((error) => {
        console.log('Service Worker registration failed:', error);
    });
}