document.addEventListener('DOMContentLoaded', () => {
    const deadeline = '2022-07-28';

function getTimeRemainig (endtime) {
    let hours, days, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date()); /* разница в милисекундах */
    if (t <= 0) {
        hours = 0;
        days = 0;
        minutes = 0;
        seconds = 0;
    } else {
        const days = Math.floor(t / (1000 * 60 * 60 * 24)); /* считаем количество дней, которые будут отображться в нашем таймере. берём количество милисекунд и делим их на количество милисекунд, которые находятся в одном дне */
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);
    } 

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds     
    };
}

function setClock(selector,endtime) {                   /* Функция, которая устанавливает наши часы на страничку */
    const timer = document.querySelector(selector);
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);    /* функция updateclock запускается каждую секунду. Обновляет таймер каждую секунду */

    updateClock();

    function getZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function updateClock () {                             /* Функция, которая обновляет наш таймер каждую секунду*/
        const t = getTimeRemainig(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        } 
    }
} 

setClock('.time', deadeline);

const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId); /* чтобы модальное окно не открывалось само */

}

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
}



modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal();
    }
});

modalCloseBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
});

// const modalTimerId = setTimeout(openModal, 3000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll); 

// Создаём классы для карточек

class MenuCard {
    constructor(src,alt,title,descr,price,parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
        this.transfer = 27;
        this.changeToUAH();
    }

    changeToUAH () {
        this.price = this.price * this.transfer;
    }

    render () {
        const element = document.createElement('div');
        if (this.classes.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }
        
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
    `;
    this.parent.append(element);
    }
    
}

const div = new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
);

div.render();

});






// document.addEventListener('DOMContentLoaded', () => {

//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabContent = document.querySelectorAll('.tabcontent'),
//           parentTabContent = document.querySelector('.tabheader__items');

//           function hideTabContent () {
//             tabContent.forEach(item => {
//                 item.style.display = 'none';
//             });

//             tabs.forEach(item => {
//                 item.classList.remove('.tabheader__item_active');
//             });
//           }

//           function showTabContent (i = 0) {
//             tabContent[i].style.display = 'block';
//             tabs[i].classList.add('.tabheader__item_active');
//           }

//           parentTabContent.addEventListener('click', (event) => {
//             const target = event.target;

//             if (target && target.classList.contains('tabheader__item')) {
//                 tabs.forEach((item, i) => {
//                     if (item == target) {
//                         hideTabContent();
//                         showTabContent(i);
//                     }
//                 });
//             }
//           });

//         hideTabContent();
//         showTabContent();

// });