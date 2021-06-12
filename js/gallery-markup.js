import gallery from './app.js';

const galleryList = document.querySelector('.js-gallery');

const createsImg = ({ preview, original, description }, parent) => {
    const imgEl = document.createElement('img');

    imgEl.classList.add('gallery__image');
    imgEl.src = preview;
    imgEl.dataset.source = original;
    imgEl.alt = description;

    parent.appendChild(imgEl);
};

const createsLink = (item, parent) => {
    const linkEl = document.createElement('a');

    const { original } = item;

    linkEl.classList.add('gallery__link');
    linkEl.href = original;

    // калбек для картинки

    createsImg(item, linkEl);

    parent.appendChild(linkEl);
};

const createsList = item => {
    const liEl = document.createElement('li');
    liEl.classList.add('gallery__item');

    // калбек для ссылки
    createsLink(item, liEl);
    return liEl;
};

const galleryMarkup = arg => {
    const items = arg.map(item => createsList(item));

    galleryList.append(...items);
};

galleryMarkup(gallery);
