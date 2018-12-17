const searchInput = document.getElementById("searchInput");
const paginationWrapper = document.getElementById("paginationWrapper");
const paginations = Array.from(paginationWrapper.querySelectorAll(".pagination__circle"));
const imagesWrapper = document.getElementById("imagesWrapper");
const imagesContainer = document.getElementById("imagesContainer");

const cache = {};
let photos, pageNumber, numberOfPages;

export const handleInitialFetch = () => {
  const url = `http://localhost:3000/initial-load`;
  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch(url, options).then(r => r.json())
    .then(r => {
      console.log(r);

      pageNumber = 1;
      cache["initial50"] = [{
          pageNum: 1,
          photos: r.photos.slice(0, 10),
          numOfPages: 5
        },
        {
          pageNum: 2,
          photos: r.photos.slice(10, 20),
          numOfPages: 5
        },
        {
          pageNum: 3,
          photos: r.photos.slice(20, 30),
          numOfPages: 5
        },
        {
          pageNum: 4,
          photos: r.photos.slice(30, 40),
          numOfPages: 5
        },
        {
          pageNum: 5,
          photos: r.photos.slice(40, 50),
          numOfPages: 5
        }
      ];

      console.log(cache);
      numberOfPages = 5;
      photos = cache["initial50"][0].photos;

      displayPhotos("initial");
      displayPagination(r.numOfPages);
    });
};

const imageEl = (pic) => {

  const img = document.createElement("img");
  img.src = pic.urls.small;
  img.classList.add("image__container");
  img.setAttribute("class", "image__container");
  img.setAttribute("tabIndex", "0");

  img.dataset.type = "pic";
  img.dataset.id = pic.id;
  img.dataset.date = pic.date || "Sometime";
  img.dataset.description = pic.description || "";
  img.dataset.url = pic.urls.full;
  img.dataset.likes = pic.likes || 0;
  img.dataset.user_id = pic.user.id;
  img.dataset.user_username = pic.user.username || "bobsyouruncle123";
  img.dataset.user_bio = pic.user.bio;

  return img;
}

// keyboard navigation via tabs --> send focus to first picture instead of staying on the activated pagination dot 
const resetActiveElement = () => {
  const masonry = Array.from(document.getElementById("imagesWrapper").children);

  if (masonry && masonry[0]) {
    masonry[0].focus();
  } else {
    searchInput.focus();
  }
}

export const handleSearch = (searchQuery, pageNum) => {
  pageNumber = pageNum;
  const cachedData = getFromCache(searchQuery);

  if (cachedData) {
    photos = cachedData;
    displayPhotos();
    displayPagination(numberOfPages);
    return
  }

  handleFetch(searchQuery);
}

const handleFetch = searchQuery => {

  const url = `http://localhost:3000/search`;
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      pageNum: pageNumber,
      searchQuery
    })
  }

  fetch(url, options).then(r => r.json()).then(r => {
    console.log(r);

    if (r.error) {
      alert(error);
      return
    }

    if (!r.photos.length) {
      alert(`Sorry, I'm getting nada for '${searchQuery}'`);
      return
    }

    photos = r.photos;
    numberOfPages = r.numOfPages;
    addToCache(searchQuery, r.numOfPages);

    console.log(cache);

    displayPhotos();
    displayPagination(r.numOfPages);
  })
}

const displayPagination = (numOfPages) => {

  if (numOfPages >= 5) {
    const hiddenPages = paginations.filter(el => Array.from(el.classList).includes("hide"));
    if (hiddenPages) {
      hiddenPages.forEach(el => {
        el.classList.remove("hide");
      })
    }
  }

  if (numOfPages >= 1 && numOfPages < 5) {
    for (let i = numOfPages; i <= 5; i++) {
      paginations[i - 1].classList.add("hide");
    }
  }

  if (Array.from(paginationWrapper.classList).includes("hide")) {
    paginationWrapper.classList.remove("hide");
  }
}

const displayPhotos = initial => {
  if (!photos) return
  imagesWrapper.innerHTML = "";

  photos.forEach(pic => {
    imagesWrapper.appendChild(imageEl(pic));
  })

  if (!initial) {
    resetActiveElement();
    window.scroll({
      top: imagesContainer.offsetTop,
      behavior: "smooth"
    });
  }
}

const addToCache = (searchQuery, numOfPages) => {

  const newCacheItem = {
    pageNum: pageNumber,
    photos,
    numOfPages
  };

  // first time searching this term
  if (!cache[searchQuery]) {
    cache[searchQuery] = [newCacheItem];
  };

  // already searched this term but not this page
  if (cache[searchQuery]) {
    const cacheItem = cache[searchQuery].find(el => el.pageNum === pageNumber);

    if (!cacheItem) {
      cache[searchQuery].push(newCacheItem);
    };
  }
}

const getFromCache = searchQuery => {

  if (cache[searchQuery]) {
    const cacheItem = cache[searchQuery].find(el => el.pageNum === pageNumber);

    if (cacheItem) {
      return cacheItem.photos;
    };
  }

  return null
}

export const manageInitialBatches = pageNum => {
  photos = cache["initial50"][pageNum - 1].photos;
  displayPhotos();
  displayPagination(cache["initial50"].length);
}