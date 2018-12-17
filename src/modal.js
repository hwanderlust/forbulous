import {
  modal,
  modalContents,
  modalDescEl,
  modalDateEl,
  modalLikesEl,
  modalUsernameEl,
  closeModalBtn,
  imagesWrapper,
  modalDetailsEl
} from './domElements';

import {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd
} from './touch';

// <-- EXPORTED METHODS (PUBLIC METHODS) -->

export const handleOpenModal = pic => {
  modal.dataset.id = pic.dataset.id;
  const modalImg = replaceModalImg(pic);
  setupModalDesc(pic.dataset);

  openModal();
  addTouchCapabilities(modalImg);
}

export const handleCloseModal = () => {
  const currentImageId = modal.dataset.id;
  const masonry = Array.from(imagesWrapper.children);
  const lastViewedImage = masonry.find(el => el.dataset.id === currentImageId);
  lastViewedImage.focus();
  modal.dataset.id = "";

  closeModal();
  removeTouchCapabilities();
  cancelImageLoad();
}

export const traverseImagesWithinModal = (direction) => {
  const masonry = Array.from(imagesWrapper.children);
  const currImgId = modal.dataset.id;
  const lastIndex = masonry.length - 1;
  let currImgIndex, followingImgIndex;

  cancelImageLoad();

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

  const followingImage = masonry[followingImgIndex];
  handleOpenModal(followingImage);
  hideModalInfo();
}

export const triggerModalTransition = (event, picture) => {
  if (event.propertyName === 'transform-origin') {
    handleOpenModal(picture);
    modal.removeEventListener("transitionend", triggerModalTransition)
  }
}

export const cancelImageLoad = _ => {
  const fullImg = document.getElementById("modalImage");
  const previewImg = document.getElementById("previewImage");
  previewImg.src = "";
  fullImg.src = "";
}


// <-- NON-EXPORTED METHODS (PRIVATE METHODS) -->

const handleEscKey = (e) => {
  if (e.keyCode !== 27) {
    return
  }

  closeModalBtn.focus();
  handleCloseModal();
}

const replaceModalImg = pic => {
  const modalImg = document.createElement('img');
  modalImg.className = 'modal__image';
  modalImg.classList.add("preview");
  modalImg.id = 'previewImage';
  modalImg.src = pic.src;

  const prevPreviewImg = document.getElementById("previewImage");
  modalContents.replaceChild(modalImg, prevPreviewImg);

  const fullImg = document.createElement('img');
  fullImg.className = 'modal__image';
  fullImg.classList.add("reveal");
  fullImg.id = 'modalImage';
  fullImg.src = pic.dataset.url;

  if (fullImg.complete) {
    // console.log(`complete, not onload`)
    handleOnload();

    fullImg.addEventListener("animationend", e => {
      // console.log(`animation ended`);
      fullImg.classList.remove("reveal");
      showModalInfo();
    });

  } else {
    // console.log(`not loaded yet`)
    fullImg.addEventListener('load', handleOnload);
  }

  const prevFullImg = document.getElementById("modalImage");
  modalContents.replaceChild(fullImg, prevFullImg);

  return fullImg;
}

const handleOnload = _ => {
  // console.log(`handleonload`)
  const previewImg = document.getElementById("previewImage");
  const fullImg = document.getElementById("modalImage");

  showModalInfo();
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
  modalDescEl.innerHTML = description;
  modalDateEl.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i>${new Date(date).toDateString()}`;
  modalLikesEl.innerHTML = `<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>${likes}`;
  modalUsernameEl.innerHTML = `<i class="fa fa-user" aria-hidden="true"></i>${user_username}`;
}

const hideModalInfo = () => {
  modalDescEl.style.display = 'none';
  modalDetailsEl.style.display = 'none';
}

const showModalInfo = _ => {

  if (modalDescEl.innerHTML) {
    modalDescEl.style.display = 'block';
  } else {
    modalDescEl.style.display = 'none';
  }

  modalDetailsEl.style.display = 'grid';
}

const addTouchCapabilities = modalImg => {
  modalImg.addEventListener("touchstart", handleTouchStart);
  modalImg.addEventListener("touchmove", handleTouchMove);
  modalImg.addEventListener("touchend", handleTouchEnd);
}

const removeTouchCapabilities = _ => {
  const modalImg = document.getElementById("modalImage");
  modalImg.removeEventListener("touchstart", handleTouchStart);
  modalImg.removeEventListener("touchmove", handleTouchMove);
  modalImg.removeEventListener("touchend", handleTouchEnd);
}

const openModal = _ => {
  modal.style.width = 'calc(100% - 2rem)';
  modal.style.animation = 'appear 500ms ease-out forwards';
  document.body.classList.add("noscroll");
  document.addEventListener("keydown", handleEscKey);
}

const closeModal = _ => {
  modal.style.animation = 'slideDown 500ms ease-out';
  document.body.classList.remove("noscroll");
  document.removeEventListener("keydown", handleEscKey);

  // avoid creating an X-scrollbar and extra space on page
  modal.style.width = '0';

  hideModalInfo();
}