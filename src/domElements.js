// index.js
export const searchForm = document.getElementById("searchForm");
export const searchInput = document.getElementById("searchInput");
export const imagesWrapper = document.getElementById("imagesWrapper");
export const paginationWrapper = document.getElementById("paginationWrapper");
export const modal = document.getElementById("modal");
export const paginations = Array.from(paginationWrapper.querySelectorAll(".pagination__circle"));
export const prevModalBtn = document.getElementById("modalPrevBtn");
export const nextModalBtn = document.getElementById("modalNextBtn");

// photos.js
export const imagesContainer = document.getElementById("imagesContainer");

// modal.js
export const modalContents = document.getElementById("modalContents");
export const modalDescEl = document.getElementById("modalImgDesc");
export const modalDateEl = document.getElementById("modalImgDate");
export const modalLikesEl = document.getElementById("modalImgLikes");
export const modalUsernameEl = document.getElementById("modalImgUsername");
export const closeModalBtn = document.getElementById("modalCloseBtn");
export const modalDetailsEl = document.getElementById("modalImageDetails");