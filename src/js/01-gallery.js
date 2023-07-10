import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

const container = document.querySelector(".gallery");
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc+= `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="galery-image" src="${preview}" alt="${description}" width="300"/>
</a>
</li>`, '');


container.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});