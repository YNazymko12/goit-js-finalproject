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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`).join('')
};

const imagesMarkup = createItemsMarkup(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', imagesMarkup);

galleryListEl.addEventListener('click', handleClick);

function handleClick(e) {
    e.preventDefault();
    if(e.target.nodeName !== 'IMG'){
        return;
    }

    const modal = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
{
    onShow: () => {
        document.addEventListener('keydown',handleClose);
    },
    onClose: () => {
        document.addEventListener('keydown',handleClose);
    }
})

modal.show();

function handleClose(e){
    if(e.key === "Escape"){
        modal.close()
    }
}
}

