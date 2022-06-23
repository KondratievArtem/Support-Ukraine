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