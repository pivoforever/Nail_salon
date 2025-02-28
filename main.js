document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelector(".carousel");
    const itemWidth = items.querySelector("a").offsetWidth+40; // Ширина одного элемента

    let scrollInterval;

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