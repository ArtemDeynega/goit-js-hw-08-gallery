import gallery from './app.js';

const refs = {
    galleryList: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.lightbox'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
    lightboxContent: document.querySelector('.lightbox__content'),
    lightboxImage: document.querySelector('.lightbox__image'),
    lightboxCloseButton: document.querySelector(
        '[data-action="close-lightbox"]',
    ),
};
// console.log(refs.lightboxCloseButton);

refs.galleryList.addEventListener('click', isOpenModal);
refs.lightboxCloseButton.addEventListener('click', isCloseModal);
refs.lightboxOverlay.addEventListener('click', isCloseOverlay);

// отрытие модалки
function isOpenModal(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    evt.preventDefault();

    refs.lightbox.classList.add('is-open');
    refs.lightboxImage.src = evt.target.dataset.source;
    refs.lightboxImage.alt = evt.target.alt;

    window.addEventListener('keydown', onKeyPressEsc);
    window.addEventListener('keydown', onKeyPressArrowLeft);
}
// закрытие модалки

function isCloseModal(evt) {
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = '';
    refs.lightboxImage.alt = '';
}

// Закрытие оверлей
function isCloseOverlay(evt) {
    if (evt.currentTarget === evt.target) {
        isCloseModal();
    }
}

// Клавиши

function onKeyPressEsc(evt) {
    // console.log(evt.code);
    if (evt.code === 'Escape') {
        isCloseModal();
    }
}

function onKeyPressArrowLeft(evt) {}
