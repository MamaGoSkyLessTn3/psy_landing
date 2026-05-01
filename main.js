import './style.css'

// --- ЭЛЕМЕНТЫ ---
const giftBtn = document.getElementById('gift-fixed');

// --- ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ (Intersection Observer) ---
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- ЛОГИКА ПОДАРКА (СКАЧИВАНИЕ ФАЙЛОВ) ---
if (giftBtn) {
    giftBtn.addEventListener('click', () => {
        // Список твоих файлов: Альманах и Памятка[cite: 1, 2]
        const files = [
            { url: '/мини_альманах_практик.pdf', name: 'Альманах_практик_Юлия_Белова.pdf' },
            { url: '/памятка_клиента.pdf', name: 'Памятка_для_терапии_Белова.pdf' }
        ];

        files.forEach((file, index) => {
            // Используем таймаут, чтобы браузер не посчитал множественное скачивание спамом
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = file.url;
                link.download = file.name;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, index * 500);
        });

        // Визуальный отклик при нажатии
        giftBtn.style.transform = 'scale(0.9)';
        setTimeout(() => giftBtn.style.transform = '', 200);
    });
}

// --- ПЛАВНЫЙ СКРОЛЛ ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});