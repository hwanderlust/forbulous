import '../public/style.scss';

import {
  searchForm,
  searchInput,
  imagesWrapper,
  paginationWrapper,
  modal,
  paginations,
  prevModalBtn,
  nextModalBtn
} from './domElements';

import {
  handleOpenModal,
  handleCloseModal,
  traverseImagesWithinModal,
  triggerModalTransition,
  cancelImageLoad
} from './modal';

import {
  handleInitialFetch,
  handleSearch,
  manageInitialBatches
} from './photos';

document.addEventListener("DOMContentLoaded", () => {
  console.log(`loaded!`);

  let searchQuery; // easiest to keep track of most current search and to be used when switching pages
  let initialBatch = true; // distinguish which images to load in modal and when pagination dots are activated
  let justSearched = false; // help identify which dots to set as active

  handleInitialFetch();


  // <-- EVENT LISTENERS -->

  // user searches for some images via form and input
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    cancelImageLoad();

    initialBatch = false;
    justSearched = true;
    searchQuery = searchInput.value;

    handleSearch(searchQuery, 1);
    searchInput.blur();
    manageActivePage();
  })

  // I like how you can still see the last previously searched term (if there was one) and just clearing out when going to search again
  searchInput.addEventListener("focus", e => {
    if (searchInput.value) {
      searchInput.value = "";
    }
  })

  // event delegation--no need for 5 separate event listeners
  paginationWrapper.addEventListener("click", e => {
    handleSwitchPages(e.target);
  })

  // to open an image in the modal when clicked on
  imagesWrapper.addEventListener("click", e => {
    const check = e.target.dataset.type === 'pic';

    if (check) {
      cancelImageLoad();
      const picture = e.target;
      modal.style.width = 'calc(100% - 2rem)';

      if (window.innerWidth > 768) {
        modal.style.transformOrigin = `${e.clientX}px ${e.clientY}px`;
        modal.addEventListener("transitionend", (event) => triggerModalTransition(event, picture));
        return
      }

      modal.style.display = 'flex';
      handleOpenModal(picture);
    }
  })


  // manage modal button clicks
  modal.addEventListener("click", e => {
    const btn = e.target;

    switch (btn.id) {
      case 'modalCloseBtn':
        handleCloseModal();
        return

      case 'modalPrevBtn':
        btn.blur();
        traverseImagesWithinModal('prev');
        return

      case 'modalNextBtn':
        btn.blur();
        traverseImagesWithinModal('next');
        return

      default:
        return
    }
  })

  // manage certain 'key' keydown events for keyboard accessibility
  document.addEventListener("keydown", e => {
    const enterCode = 13;
    // const escCode = 27;
    const leftCode = 37;
    const rightCode = 39;
    const modalOpen = !!modal.dataset.id;

    if (e.keyCode !== enterCode && e.keyCode !== leftCode && e.keyCode !== rightCode) {
      return
    }

    if (e.keyCode === leftCode && modalOpen) {
      prevModalBtn.focus();
      traverseImagesWithinModal('prev');
      return
    }

    if (e.keyCode === rightCode && modalOpen) {
      nextModalBtn.focus();
      traverseImagesWithinModal('next');
      return
    }

    if (e.keyCode === enterCode && document.activeElement.className === 'pagination__circle') {
      handleSwitchPages(document.activeElement);
      return
    }

    if (e.keyCode === enterCode && document.activeElement.className === 'image__container') {
      handleOpenModal(document.activeElement);
      return
    }
  })



  // <-- HELPER FUNCTIONS -->

  // // for pagination changes via keyboard and click events
  const handleSwitchPages = (element) => {

    cancelImageLoad();
    justSearched = false;
    const className = element.dataset.class;
    const pageNum = +element.dataset.id;

    if (className !== 'circle') return

    if (!initialBatch) {
      handleSearch(searchQuery, pageNum);
      manageActivePage();
    }

    if (initialBatch) {
      manageInitialBatches(pageNum);
    }

    manageActivePage(element);
  }

  // handle which pagination dot to be active under certain circumstances
  const manageActivePage = (paginationDot) => {

    if ((!initialBatch && justSearched) || paginationDot) {
      const prevActivePage = paginations.find(el => Array.from(el.classList).includes("active"));
      prevActivePage.classList.remove("active");

      // when a search was done 
      if (paginationDot) {
        paginationDot.classList.add("active");
        return
      }

      // only for the first search AKA prior to this the user was looking at the initial load of fetched pics
      paginations[0].classList.add("active");
    }
  }

});