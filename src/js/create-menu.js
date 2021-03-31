import menu from '../data/menu.json';
import menuCardsTpl from '../templates/menu.hbs';

const menuListRef = document.querySelector('.js-menu');

const menuMarkup = createMenuCardsMarkup(menu);
menuListRef.insertAdjacentHTML('beforeend', menuMarkup.join(''));

function createMenuCardsMarkup(menu) {
    return menu.map(menuCardsTpl)
};
