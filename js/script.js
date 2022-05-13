
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
let date = new Date(2022, 1, 24, 5).getTime();
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