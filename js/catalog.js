
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

// вівод товара с json файла.

function init() {
    $.getJSON("goods/goods.json", goodsOut);
}

function goodsOut(data) {
    let out = ' ';
    for (let key in data) {

        out += `<div class="content-ikon" data-type ="${data[key].type}">`;
        out += `<div class="content-ikon__img">`;
        out += `<div class="content-ikon__logo">`;
        out += `<div class="content-ikon__logo-img">`;
        out += `<img src="img/main/Group.svg" alt="Group.svg">`;
        out += `</div>`;
        out += `<div class="content-ikon__logo-text">`;
        out += `<p>support ukraine</p>`;
        out += `</div>`;
        out += `</div>`;
        out += `<a class ="content-ikon__img-ibg _ibg add-art" href="goods.html" data-id="${key}">`;
        out += `<img src="goods/img/${data[key].imge}" alt="img goods">`;
        out += `</a>`;
        out += `</div>`;
        out += `<div class="content-ikon__naim">`;
        out += `<a href="#" >`;
        out += `<p>${data[key].type} ${data[key].name} ${data[key].color}</p>`;
        out += `</a>`;
        out += `</div>`;
        out += `<div class="content-ikon__cost">`;
        out += `<p>${data[key].prace} UAN</p>`;
        out += `</div>`;
        out += `</div>`;
        $('.catalog__content').html(out);
        $('.add-art').on('click', addId);
    }

    let key = Object.keys(data).length;

    out = ` <span>Показано 1 - 21</span> з ${key} продуктів`;

    $('.catalog__list-info').html(out);

}



function addId() {
    let id = $(this).attr('data-id'),
        idGoods = {}; //сохранение id в обект
    idGoods = id;
    localStorage.setItem('SUid', JSON.stringify(idGoods));
}


$(document).ready(function () {
    init();
})
// ====================================================================

let teg = document.getElementsByClassName('content-ikon'),
    getFilt = {}; //фильтр масив

document.querySelectorAll('.filtr__block-input').forEach(element => {
    element.addEventListener('input', filtr);
})

document.querySelector('#reset-button').onclick = () => {
    delete getFilt;
    console.log(getFilt)
    init()
}

// 


function filtr() {
    id = this.value;

    if (this.checked) {
        getFilt[id] = 1

    } else {
        delete getFilt[id]
        if (Object.keys(getFilt).length === 0) { return init() }
    }
    console.log(getFilt)

    for (let elem of teg) {


        if (elem.dataset.type in getFilt) {
            elem.classList.remove('_none');
        } else {
            elem.classList.add('_none');

        }
    }



}


