import { galleryItems } from "./gallery-items.js";
const galleryListEl = document.querySelector(".gallery");

const galleryItemsEls = onCreateEls(galleryItems);

galleryItemsRender(galleryItemsEls);

function onCreateEls(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

function galleryItemsRender(galleryItemsEls) {
  galleryListEl.innerHTML = galleryItemsEls;
}

new SimpleLightbox(".gallery a", { captionData: "alt", captionDelay: 250 });
