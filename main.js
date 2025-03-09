document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelector(".carousel");
    const itemWidth = items.querySelector("a").offsetWidth + 40; // Ширина одного элемента

    let scrollInterval;
    const header = document.querySelector("header");
    // Базовая конфигурация
    ScrollReveal({
        reset: false, // Элементы анимируются только один раз
        distance: '50px', // Расстояние, с которого элементы "приплывают"
        duration: 1000, // Длительность анимации в мс
        delay: 200 // Задержка в мс
    });

    // Применяем эффекты к разным элементам
    ScrollReveal().reveal('.about-left h2', { origin: 'left' });
    ScrollReveal().reveal('.about-left p', { origin: 'left', interval: 200 }); // Каждый абзац с задержкой
    ScrollReveal().reveal('.about-right img', { origin: 'right', interval: 300 });

    // Применяем к другим разделам
    ScrollReveal().reveal('.price h2', { origin: 'top' });
    ScrollReveal().reveal('.price-item', { origin: 'bottom', interval: 100 });

    ScrollReveal().reveal('.our_works h2', { origin: 'left' });
    ScrollReveal().reveal('.carousel', { origin: 'right' });

    ScrollReveal().reveal('.reviews_block h2', { origin: 'top' });
    ScrollReveal().reveal('.comments p', { origin: 'left', interval: 200 });

    ScrollReveal().reveal('.our_studio_box h2, .our_studio_box p', { origin: 'left', interval: 200 });
    ScrollReveal().reveal('.our_studio_imgs img', { origin: 'bottom', interval: 200 });
    // Функция для изменения цвета при скролле
    function changeHeaderOnScroll() {
        if (window.scrollY > 50) { // Когда скроллинг больше 50px
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // Слушатель события скролла
    window.addEventListener("scroll", changeHeaderOnScroll);

    // Функция для автоматической прокрутки
    function startAutoScroll() {
        scrollInterval = setInterval(() => {
            const currentScroll = items.scrollLeft;
            const maxScroll = items.scrollWidth - items.clientWidth;

            if (currentScroll >= maxScroll) {
                // Если достигнут конец, вернуться в начало
                items.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Прокрутка на один элемент вправо
                items.scrollBy({ left: itemWidth, behavior: "smooth" });
            }
        }, 3000); // Интервал прокрутки (3 секунды)
    }

    // Остановить прокрутку при наведении
    items.addEventListener("mouseenter", () => {
        clearInterval(scrollInterval);
    });

    // Возобновить прокрутку, когда курсор убран
    items.addEventListener("mouseleave", () => {
        startAutoScroll();
    });

    // Запустить автоматическую прокрутку при загрузке страницы
    startAutoScroll();

    // Получаем элементы
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Открытие модального окна
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});