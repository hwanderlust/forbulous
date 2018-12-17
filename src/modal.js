import {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd
} from './touch';

const modal = document.getElementById("modal");
const modalContents = document.getElementById("modalContents");
const modalDescEl = document.getElementById("modalImgDesc");
const modalDateEl = document.getElementById("modalImgDate");
const modalLikesEl = document.getElementById("modalImgLikes");
const modalUsernameEl = document.getElementById("modalImgUsername");
const closeModalBtn = document.getElementById("modalCloseBtn");
const imagesWrapper = document.getElementById("imagesWrapper");

export const handleOpenModal = pic => {
  // modal.dataset.id = data.id;
  modal.dataset.id = pic.dataset.id;
  const modalImg = replaceModalImg(pic);
  // const modalImg = replaceModalImg(data.url);
  // setupModalDesc(data);
  setupModalDesc(pic.dataset);
  modal.style.width = 'calc(100% - 2rem)';

  modal.style.animation = 'appear 500ms ease-out forwards';
  document.body.classList.add("noscroll");
  document.addEventListener("keydown", handleEscKey);

  // add touch event listeners here
  modalImg.addEventListener("touchstart", handleTouchStart);
  modalImg.addEventListener("touchmove", handleTouchMove);
  modalImg.addEventListener("touchend", handleTouchEnd);
}

export const handleCloseModal = () => {
  modal.dataset.id = "";

  modal.style.animation = 'slideDown 500ms ease-out';
  document.body.classList.remove("noscroll");
  document.removeEventListener("keydown", handleEscKey);

  // avoid creating an X-scrollbar and extra space on page
  modal.style.width = '0';

  // remove touch event listeners here
  const modalImg = document.getElementById("modalImage");
  modalImg.removeEventListener("touchstart", handleTouchStart);
  modalImg.removeEventListener("touchmove", handleTouchMove);
  modalImg.removeEventListener("touchend", handleTouchEnd);
}

export const traverseImagesWithinModal = (direction) => {
  const masonry = Array.from(imagesWrapper.children);
  const currImgId = modal.dataset.id;
  const lastIndex = masonry.length - 1;
  let currImgIndex, followingImgIndex;

  // avoid another traversal with indexOf
  masonry.find((el, idx) => {
    currImgIndex = idx;
    return el.dataset.id === currImgId
  });

  if (direction === 'next') {
    followingImgIndex = currImgIndex !== lastIndex ? currImgIndex + 1 : 0;
  }

  if (direction === 'prev') {
    followingImgIndex = currImgIndex !== 0 ? currImgIndex - 1 : lastIndex;
  }

  handleOpenModal(masonry[followingImgIndex])
  // handleOpenModal(masonry[followingImgIndex].dataset)
}

const handleEscKey = (e) => {
  if (e.keyCode !== 27) {
    return
  }

  closeModalBtn.focus();
  handleCloseModal();
}

// const replaceModalImg = url => {
const replaceModalImg = pic => {
  const modalImg = document.createElement('img');
  modalImg.className = 'modal__image';
  modalImg.classList.add("preview");
  // modalImg.id = 'modalImage';
  modalImg.id = 'previewImage';
  modalImg.src = pic.src;
  // modalImg.src = url;
  // const prevModalImg = document.getElementById("modalImage");
  const prevPreviewImg = document.getElementById("previewImage");
  modalContents.replaceChild(modalImg, prevPreviewImg);
  // return modalImg;

  const fullImg = document.createElement('img');
  fullImg.className = 'modal__image';
  fullImg.classList.add("reveal");
  fullImg.id = 'modalImage';
  fullImg.src = pic.dataset.url;

  if (fullImg.complete) {
    console.log(`complete, not onload`)
    handleOnload();
  } else {
    console.log(`not loaded yet`)
    fullImg.addEventListener('load', handleOnload);
  }

  const prevFullImg = document.getElementById("modalImage");
  modalContents.replaceChild(fullImg, prevFullImg);

  return fullImg;
}

const handleOnload = _ => {
  console.log(`handleonload`)
  const previewImg = document.getElementById("previewImage");
  const fullImg = document.getElementById("modalImage");

  previewImg.style.display = 'none';
  fullImg.classList.remove("reveal");
  fullImg.removeEventListener("load", handleOnload);
}


const setupModalDesc = ({
  description,
  user_username,
  likes,
  date
}) => {

  if (description) {
    modalDescEl.innerHTML = description;

    if (modalDescEl.style.display !== 'block') {
      modalDescEl.style.display = 'block';
    }

  } else {
    modalDescEl.style.display = 'none';
  }

  modalDateEl.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i>${new Date(date).toDateString()}`;
  modalLikesEl.innerHTML = `<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>${likes}`;
  modalUsernameEl.innerHTML = `<i class="fa fa-user" aria-hidden="true"></i>${user_username}`;
}

export const triggerModalTransition = (event, picture) => {
  if (event.propertyName === 'transform-origin') {
    handleOpenModal(picture);
    modal.removeEventListener("transitionend", triggerModalTransition)
  }
}