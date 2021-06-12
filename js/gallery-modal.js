import gallery from './app.js';

const refs = {
    galleryList: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
    lightboxContent: document.querySelector('.lightbox__content'),
    lightboxImg: document.querySelector('.lightbox__image'),
    lightboxCloseButton: document.querySelector(
        '[data-action="close-lightbox"]',
    ),
};
// console.log(refs.lightboxCloseButton);

refs.galleryList.addEventListener('click', isOpenModal);
refs.lightboxCloseButton, addEventListener('click', isCloseModal);

function isOpenModal(evt) {
    if (evt.target.nodeName !== IMG) {
        return;
    }
    evt.preventDefault();
    refs.lightbox.classList.add('is-open');
    refs.lightboxImg.src = evt.target.dataset.source;
    refs.lightboxImg.alt = evt.target.alt;
}

function isCloseModal(evt) {
    refs.lightboxImg.classList.remove('is-open');
    refs.lightboxImg.src = '';
    refs.lightbox.alt = '';
}
