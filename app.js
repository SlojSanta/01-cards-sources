function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide') // Получаем слайды в строке

    slides[activeSlide].classList.add('active')

for (const slide of slides) { //Пройдем по слайдам через цикл
    slide.addEventListener('click', () => { //Добавим событие при клике
        clearActiveClasses() //Почистим активное свойство прошлого слайда
        slide.classList.add('active') //Активируем текущий слайд
    })
}

function clearActiveClasses() { //Функция отчистки актива слайда
    slides.forEach((slide) => { //Аналог цикла как сверху
        slide.classList.remove('active') //Деактивируем прошлый слайд
    })
}
}

slidesPlugin()