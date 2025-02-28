document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelector(".carousel");
    const itemWidth = items.querySelector("a").offsetWidth+40; // Ширина одного элемента
    console.log(`Ширина элемента: ${itemWidth}`);
    console.log(items.scrollLeft);
    console.log(items.scrollWidth);
    console.log(items.clientWidth);

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
    console.log("Скрипт запустился");
    
});