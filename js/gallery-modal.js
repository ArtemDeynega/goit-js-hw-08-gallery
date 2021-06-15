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
refs.lightboxOverlay.addEventListener(
    'click',
    isCloseModalEscAndOverlay,
);

window.addEventListener('keydown', isCloseModalEscAndOverlay);
window.addEventListener('keydown', onKeyPressArrowLeft);
window.addEventListener('keydown', onKeyPressArrowRight);

// отрытие модалки
function isOpenModal(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    evt.preventDefault();

    refs.lightbox.classList.add('is-open');
    refs.lightboxImage.src = evt.target.dataset.source;
    refs.lightboxImage.alt = evt.target.alt;
}
// закрытие модалки

function isCloseModal(evt) {
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = '';
    refs.lightboxImage.alt = '';
}

// Закрытие оверлей
// function isCloseOverlay(evt) {
//     if (evt.currentTarget === evt.target) {
//         isCloseModal();
//     }
// }

// Клавиши

function isCloseModalEscAndOverlay(evt) {
    // console.log(evt.code);
    if (evt.currentTarget === evt.target || evt.code === 'Escape') {
        isCloseModal();
    }
}

function onKeyPressArrowLeft(evt) {
    // console.log(evt.code);
    if (evt.code === 'ArrowLeft') {
        const src = gallery.map(({ original }) => original);
        const alt = gallery.map(({ description }) => description);

        let currentSrc = src.indexOf(refs.lightboxImage.src);
        let currentAlt = alt.indexOf(refs.lightboxImage.alt);

        if (currentSrc === 0 && currentAlt === 0) {
            currentSrc = src.length;
            currentAlt = alt.length;
        }

        refs.lightboxImage.src = src[currentSrc - 1];
        refs.lightboxImage.alt = alt[currentAlt - 1];
    }
}

function onKeyPressArrowRight(evt) {
    if (evt.code === 'ArrowRight') {
        const src = gallery.map(({ original }) => original);
        const alt = gallery.map(({ description }) => description);

        let currentSrc = src.indexOf(refs.lightboxImage.src);
        let currentAlt = alt.indexOf(refs.lightboxImage.alt);

        if (
            currentSrc + 1 > src.length - 1 &&
            currentAlt + 1 > alt.length - 1
        ) {
            currentAlt = -1;
            currentSrc = -1;
        }
        refs.lightboxImage.src = src[currentSrc + 1];
        refs.lightboxImage.alt = alt[currentAlt + 1];
    }
}
