
document.querySelector('.catalog-select__header-body').onclick = () => headerBody();

document.querySelectorAll('.catalog-select__ikon').forEach(ikon => {
    ikon.addEventListener('click', select)
})

function headerBody() {
    document.querySelector('.catalog-select__body').classList.toggle('activ');
}

function select() {
    let iconText = this.innerHTML,
        currentText = document.querySelector('.catalog-select__current');
    currentText.innerHTML = iconText;
    document.querySelector('.catalog-select__body').classList.remove('activ');
}

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

// функция для фильтра

document.querySelector('.catalog__ikon-filter').onclick = () => {
    document.querySelector('.catalog__filtr').classList.toggle('activ');
}