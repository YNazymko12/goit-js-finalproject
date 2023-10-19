import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');


function createItemsMarkup(){
    return galleryItems.map(({preview, original, description}) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image lazyload"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`).join('')
};

const imagesMarkup = createItemsMarkup(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', imagesMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
});
