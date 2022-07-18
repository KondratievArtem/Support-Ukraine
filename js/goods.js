const title = document.querySelectorAll('.goods-description__pianino-title');
title.forEach(item => {
    item.onclick = () => {
        const curent = item.closest('.goods-description__pianono-ikon');
        if (curent.classList.contains('activ')) {
            curent.classList.remove('activ')
        } else {
            document.querySelectorAll('.goods-description__pianono-ikon').forEach(item => { item.classList.remove('activ') });
            curent.classList.add('activ')
        }
    }
})


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


// вівод товара с json файла.
function init() {
    $.getJSON("goods/goods.json", getGoodsOut);
}

function getGoodsOut(data) {
    let idGoods = JSON.parse(localStorage.getItem('SUid')),
        html = `<p>${data[idGoods].type} ${data[idGoods].name} ${data[idGoods].color} </p> `,
        imgIbg = `<img src="./goods/img/${data[idGoods].imge}" alt="img goods">`,
        supTitle = `<h4>${data[idGoods].type}</h4>`,
        title = `<h2>${data[idGoods].type} ${data[idGoods].name} ${data[idGoods].color}</h2>`,
        artcl = `<p>${idGoods}</p>`,
        price = `<p>${data[idGoods].prace}</p><p>uan</p>`
    $('.navigacia__now').html(html);
    $('.goods-content__img-ibg').html(imgIbg);
    $('.goods-description__suptitle').html(supTitle);
    $('.goods-description__title').html(title);
    $('.goods-description__artcl').html(artcl);
    $('.goods-description__price').html(price);
}













$(document).ready(function () {
    init();
})