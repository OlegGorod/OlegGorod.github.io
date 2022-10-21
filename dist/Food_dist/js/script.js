// window.addEventListener('DOMContentLoaded', () => {
// const tabs = document.querySelectorAll('.tabheader__item');
// const tabcontent = document.querySelectorAll('.tabcontent');
// const tabsParent = document.querySelector('.tabheader__items');

// function hideTabContent() {
//     tabcontent.forEach(item => {
//         item.classList.remove('show');
//         item.classList.add('hide');
//         // item.style.display = 'none';
//     });

//     tabs.forEach(item => {
//         item.classList.remove('tabheader__item_active');
//     });
// }

// function showTabContent(i=0) {
//     tabs[i].classList.add('tabheader__item_active');
//     tabcontent[i].classList.remove('hide');
//     tabcontent[i].classList.add('show');
//     // tabcontent[i].style.display = 'block';
// }

// hideTabContent();
// showTabContent();

// tabsParent.addEventListener('click', (e) => {
//     const target = e.target;
//     if (target && target.classList.contains('tabheader__item')) {
//          tabs.forEach((item, i) => {
//             if (item == target) {
//                 hideTabContent();
//                 showTabContent(i);
//             }
//          });
//     }

// });
// });

window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabcontent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabcontent.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent (i = 0) {
        tabcontent[i].classList.add('show');
        tabcontent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


const modal = document.querySelector('.modal');
const modalTrigger = document.querySelectorAll('[data-modal]');
const modalCloseBtn = document.querySelector('[data-close]');

function openModal () {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearTimeout(openModal);
}

function closeModal () {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
}

modalTrigger.forEach(item => {
    item.addEventListener('click', openModal);
});

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if( e.target === modal) {
        closeModal();
    }
}); 

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// setTimeout(openModal, 3000);

function showModalByScroll () {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
    }
    window.removeEventListener('scroll', showModalByScroll);
}

window.addEventListener('scroll', showModalByScroll);

class MenuCard {
    constructor (src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27;
        this.changeToUAH();
    }

    changeToUAH() {
        this.price = this.price * this.transfer;
    }

    render() {
        const element = document.createElement('div');
        this.classes.forEach(className => element.classList.add(className));
        element.innerHTML = `
        
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        
        `;
        this.parent.append(element);
    }
}

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
    'menu__item'
).render();

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
    'menu__item'
).render();

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
    'menu__item'
).render();
    
});

