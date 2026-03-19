import { galleryItems } from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");

const galleryItemsEls = onCreateEls(galleryItems);

galleryItemsRender(galleryItemsEls);

galleryListEl.addEventListener("click", handleBigImage);

function onCreateEls(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function galleryItemsRender(galleryItemsEls) {
  galleryListEl.innerHTML = galleryItemsEls;
}

function handleBigImage(e) {
  e.preventDefault();
  const targetElement = e.target;
  if (!targetElement.classList.contains("gallery__image")) return;

  const urlBigImg = targetElement.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${urlBigImg}" width="800" height="600">
  `);
  instance.show();

  window.addEventListener("keydown", onEscKey);

  function onEscKey(evt) {
    if (evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscKey);
    }
  }
}
