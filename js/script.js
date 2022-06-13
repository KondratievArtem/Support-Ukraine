
// функционал на всплытие меню на каталоге
document.querySelector('.navbar__title-open').onclick = () => {
    document.querySelector('.navbar__manu').classList.toggle('activ');
};

// функционал для меню бургера

document.querySelector('.logo__open-burger').onclick = () => {
    document.querySelector('.br-menu').classList.add('activ');
};
document.querySelector('.br-menu__close').onclick = () => {
    document.querySelector('.br-menu').classList.remove('activ');
};

// функционал для селектора выбора языка

document.querySelectorAll('.box-menu__header').forEach(item => {
    item.onclick = () => {
        document.querySelectorAll('.box-menu__select').forEach(icon => {
            icon.classList.toggle('activ');
        });
    };
});

document.querySelectorAll('.box-menu__item').forEach(item => {
    item.onclick = function () {
        let itemText = this.innerHTML,
            select = this.closest('.box-menu__select');
        textCurrent = this.closest('.box-menu__select').querySelector('.box-menu__current');
        textCurrent.innerHTML = itemText;
        select.classList.remove('activ');
    };
});

// функционал для таймера времени

// создание времени одчета==============================
// получение времени от которого наченаеться отчет======
let date = new Date(2022, 1, 23,).getTime();
// обновление таймера=============
let countDowenFunction = setInterval(function () {
    // время на данный момент
    let dateNew = new Date().getTime();
    // промежуток времени
    let distance = dateNew - date;
    // высчитываем время
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // результат
    document.querySelector('.header-main__dey').innerHTML = days;
    document.querySelector('.header-main__hors').innerHTML = hours;
    document.querySelector('.header-main__minut').innerHTML = minutes;
}, 1000)

// ФУНКЦИЯ СЛАЙДЕРА

new Swiper('.whats-main__slider', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
        },
    },
});


// Функционал для спойлера

document.querySelectorAll('.question__ikon-title').forEach(ikon => {
    ikon.addEventListener('click', function () {
        if (this.parentNode.classList.contains('activ')) {
            this.parentNode.classList.remove('activ')
        } else {
            document.querySelectorAll('.question__ikon').forEach(parent => { parent.classList.remove('activ') })
            this.parentNode.classList.add('activ')
        }
    })
})