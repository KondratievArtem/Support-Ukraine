
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