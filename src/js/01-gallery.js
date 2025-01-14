// Описаний в документації
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
console.log('test');

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
 <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
 </li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', markup);
console.log(markup);

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
