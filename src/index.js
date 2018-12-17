import '../public/style.scss';

import {
  handleOpenModal,
  handleCloseModal,
  traverseImagesWithinModal,
  triggerModalTransition
} from './modal';

import {
  handleInitialFetch,
  handleSearch,
  manageInitialBatches
} from './photos';

document.addEventListener("DOMContentLoaded", () => {
  console.log(`loaded!`);

  // getElementById computes faster and it's good to separate the CSS and JS
  // one way to know what is being manipulated by looking at the HTML
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const imagesWrapper = document.getElementById("imagesWrapper");
  const paginationWrapper = document.getElementById("paginationWrapper");
  const modal = document.getElementById("modal");
  const paginations = Array.from(paginationWrapper.querySelectorAll(".pagination__circle"));
  const prevModalBtn = document.getElementById("modalPrevBtn");
  const nextModalBtn = document.getElementById("modalNextBtn");

  let searchQuery; // easiest to keep track of most current search and to be used when switching pages

  let initialBatch = true; // distinguish which images to load in modal and when pagination dots are activated
  let justSearched = false; // help identify which dots to set as active

  handleInitialFetch();


  // <-- EVENT LISTENERS -->

  searchForm.addEventListener("submit", e => {
    e.preventDefault();

    initialBatch = false;
    justSearched = true;
    searchQuery = searchInput.value;
    handleSearch(searchQuery, 1);
    searchInput.blur();
    manageActivePage();
  })

  searchInput.addEventListener("focus", e => {
    if (searchInput.value) {
      searchInput.value = "";
    }
  })

  paginationWrapper.addEventListener("click", e => {
    handleSwitchPages(e.target);
  })

  imagesWrapper.addEventListener("click", e => {
    const check = e.target.dataset.type === 'pic';

    if (check) {
      const picture = e.target.dataset;
      modal.style.width = 'calc(100% - 2rem)';

      if (window.innerWidth > 768) {
        modal.style.transformOrigin = `${e.clientX}px ${e.clientY}px`;
        modal.addEventListener("transitionend", (event) => triggerModalTransition(event, e.target));
        // modal.addEventListener("transitionend", (event) => triggerModalTransition(event, picture));
        return
      }

      modal.style.display = 'flex';
      handleOpenModal(e.target);
      // handleOpenModal(picture);
    }
  })

  modal.addEventListener("click", e => {
    const btnCheck = e.target.id;

    switch (btnCheck) {
      case 'modalCloseBtn':
        handleCloseModal();
        return

      case 'modalPrevBtn':
        e.target.blur();
        traverseImagesWithinModal('prev');
        return

      case 'modalNextBtn':
        e.target.blur();
        traverseImagesWithinModal('next');
        return

      default:
        return
    }
  })

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
      // handleOpenModal(document.activeElement.dataset);
      return
    }
  })



  // <-- HELPER FUNCTIONS -->

  // // for pagination changes via keyboard and click events
  const handleSwitchPages = (element) => {

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

// const handleSearch = (searchQuery) => {
//   const cachedData = getFromCache();

//   if (cachedData) {
//     photos = cachedData;
//   }

//   handleFetch();
// }

// const handleFetch = _ => {

//   const url = `http://localhost:3000/search`;
//   const options = {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       pageNum: pageNumber,
//       searchQuery
//     })
//   }

//   fetch(url, options).then(r => r.json()).then(r => {
//     console.log(r);

//     if (r.error) {
//       alert(error);
//       return
//     }

//     if (!r.photos.length) {
//       alert(`Sorry, I'm getting nada for '${searchQuery}'`);
//       return
//     }

//     photos = r.photos;
//     addToCache(r.numOfPages);

//     console.log(cache);

//     displayPhotos();
//     displayPagination(r.numOfPages);
//   })
// }

// const displayPagination = (numOfPages) => {
//   manageActivePage();

//   if (numOfPages >= 5) {
//     const hiddenPages = paginations.filter(el => Array.from(el.classList).includes("hide"));
//     if (hiddenPages) {
//       hiddenPages.forEach(el => {
//         el.classList.remove("hide");
//       })
//     }
//   }

//   if (numOfPages >= 1 && numOfPages < 5) {
//     for (let i = numOfPages; i <= 5; i++) {
//       paginations[i - 1].classList.add("hide");
//     }
//   }

//   if (Array.from(paginationWrapper.classList).includes("hide")) {
//     paginationWrapper.classList.remove("hide");
//   }
// }

// const displayPhotos = (initial) => {
//   if (!photos) return
//   imagesWrapper.innerHTML = "";

//   photos.forEach(pic => {
//     imagesWrapper.appendChild(imageEl(pic));
//   })

//   // masonry = Array.from(imagesWrapper.children);

//   if (!initial) {
//     resetActiveElement();
//     window.scroll({
//       top: imagesContainer.offsetTop,
//       behavior: "smooth"
//     });
//   }
// }

// const manageInitialBatches = _ => {
//   photos = cache["initial50"][pageNumber - 1].photos;
// }

// const addToCache = (numOfPages) => {

//   const newCacheItem = {
//     pageNum: pageNumber,
//     photos,
//     numOfPages
//   };

//   // first time searching this term
//   if (!cache[searchQuery]) {
//     cache[searchQuery] = [newCacheItem];
//   };

//   // already searched this term but not this page
//   if (cache[searchQuery]) {
//     const cacheItem = cache[searchQuery].find(el => el.pageNum === pageNumber);

//     if (!cacheItem) {
//       cache[searchQuery].push(newCacheItem);
//     };
//   }
// }

// const getFromCache = () => {

//   if (cache[searchQuery]) {
//     const cacheItem = cache[searchQuery].find(el => el.pageNum === pageNumber);

//     if (cacheItem) {
//       return cacheItem.photos;
//     };
//   }

//   return null
// }