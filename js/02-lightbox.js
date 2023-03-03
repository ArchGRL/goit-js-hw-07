import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", showOriginalImgEl);

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

function showOriginalImgEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  new SimpleLightbox(".gallery a", {
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
