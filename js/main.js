import overLay from "./cartUI.js";
console.log("overLay");

//image drag

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
});

//top header [currency selector]
const currency = document.querySelector(
  "header .top-header .currency-selector"
);
//Toggle drobdown list
const currencyMenu = document.querySelector(
  "header .top-header .currency-selector .drobdown-list"
);
currency.onclick = () => {
  if (currencyMenu.style.display === "block") {
    currencyMenu.style.display = "none";
  } else {
    currencyMenu.style.display = "block";
  }
};
//toggle selected class
const currencyList = document.querySelectorAll(
  "header .top-header .currency-selector ul li"
);
const currencyTitle = document.querySelector(
  "header .top-header .currency-selector .menu-toggle .title"
);
currencyList.forEach((list) => {
  list.addEventListener("click", removeSelectedClass);
});
function removeSelectedClass() {
  currencyList.forEach((list) => {
    list.classList.remove("selected");
    this.classList.add("selected");
    if (list.classList.contains("selected")) {
      currencyTitle.textContent = list.textContent;
    } else {
    }
  });
}
//mid header

let showMenuBtn = document.querySelector(".show-menu"),
  bottomHeader = document.querySelector(".bottom-header");
showMenuBtn.addEventListener("click", () => {
  bottomHeader.classList.add("show");
  document.body.classList.add("overflow");
  overLay.classList.add("active");
});

//bottom header
let hideMenu = document.querySelector(".close-menu");
hideMenu.addEventListener("click", () => {
  bottomHeader.classList.remove("show");
  document.body.classList.remove("overflow");
  overLay.classList.remove("active");
});
overLay.addEventListener("click", () => {
  bottomHeader.classList.remove("show");
  document.body.classList.remove("overflow");
  overLay.classList.remove("active");
});
const categoriesBtn = document.querySelector(
    ".bottom-header .categories .categries-btn"
  ),
  productLists = document.querySelector(".bottom-header .categories .b-list"),
  bottomLinks = document.querySelectorAll(".bottom-header nav ul li a"),
  ellipsis = document.getElementById("ellipsis"),
  toggleElements = document.querySelectorAll(
    `.bottom-header
    .categories
    .b-list
    ul
    li.hide`
  );
categoriesBtn.onclick = () => {
  if (!productLists.classList.contains("active")) {
    productLists.classList.add("active");
  } else {
    productLists.classList.remove("active");
  }
};
bottomLinks.forEach((link) => {
  link.addEventListener("click", toggleClass);
});
function toggleClass() {
  bottomLinks.forEach((link) => {
    link.classList.remove("active-link");
    this.classList.add("active-link");
  });
}

ellipsis.onclick = () => {
  toggleElements.forEach((element) => {
    if (!element.classList.contains("active")) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};
//slider

const slider = document.querySelector(".landing .sliders"),
  slides = Array.from(document.querySelectorAll(".landing .sliders .slide")),
  slidesLength = slides.length,
  nextBtn = document.getElementById("nextBtn"),
  prevBtn = document.getElementById("prevBtn");
let currentSlide = 1;

if (window.matchMedia("(max-width: 767px)")) {
  slides.forEach((slide) => {
    slide.addEventListener("touchstart", () => {
      currentSlide++;
      checker();
      if (currentSlide === slidesLength) {
        currentSlide = 0;
      }
    });
  });
}

//nextBtn
nextBtn.addEventListener("click", () => {
  checker();
  checkLastIndex("next");
});

//prevBtn
prevBtn.addEventListener("click", () => {
  checker();
  checkLastIndex("prev");
});

function checker() {
  removeActiveClasses();
  slides[currentSlide - 1].classList.add("active");
}

checker();

function removeActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

function checkLastIndex(action) {
  if (currentSlide === slidesLength && action == "next") {
    currentSlide = 1;
  } else if (currentSlide === 1 && action == "prev") {
    currentSlide = slidesLength;
  } else if (action == "next") {
    currentSlide++;
  } else {
    currentSlide--;
  }
  checker();
}

setInterval(() => {
  checkLastIndex("next");
  checker();
}, 8000);

// slides[0].classList.add("active");

//categories sections
const categoriesSection = document.querySelector(
  ".categories .container .outer .content"
);

let categoriesArray = [
  `women's clothing`,
  `men's clothing`,
  `kid's clothing`,
  `laptop & tablets`,
  `smartphone`,
  `sport & travel`,
  `food & drink`,
  `gift & handmade`,
  `pet shop`,
  `drone`,
  `cosmetics`,
  `camera`,
  `audio`,
  `television`,
  `watch`,
  `jewelry`,
  `smartwatch`,
  `kid toy`,
  `motorcycle`,
  `gaming`,
];

let categoriesIcons = [
  `<i class="fa-solid fa-person-dress"></i>`,
  `<i class="fa-solid fa-shirt"></i>`,
  `<i class="fa-solid fa-child-reaching"></i>`,
  `<i class="fa-solid fa-laptop"></i>`,
  `<i class="fa-solid fa-mobile-screen-button"></i>`,
  `<i class="fa-solid fa-bicycle"></i>`,
  `<i class="fa-solid fa-burger"></i>`,
  `<i class="fa-solid fa-gift"></i>`,
  `<i class="fa-solid fa-cat"></i>`,
  `<i class="fa-brands fa-phoenix-squadron"></i>`,
  `<i class="fa-solid fa-paintbrush"></i>`,
  `<i class="fa-solid fa-camera"></i>`,
  `<i class="fa-solid fa-headset"></i>`,
  `<i class="fa-solid fa-tv"></i>`,
  `<i class="fa-solid fa-clock"></i>`,
  `<i class="fa-solid fa-gem"></i>`,
  `<i class="fa-solid fa-house-signal"></i>`,
  `<i class="fa-solid fa-gamepad"></i>`,
  `<i class="fa-solid fa-motorcycle"></i>`,
  `<i class="fa-solid fa-puzzle-piece"></i>`,
];

for (let i = 0; i < categoriesArray.length; i++) {
  let box = document.createElement("div");
  box.className = "box";
  box.innerHTML = `<div class = "icon" > ${categoriesIcons[i]} </div>`;

  let contentH4 = document.createElement("h4");
  contentH4.textContent = categoriesArray[i];
  box.appendChild(contentH4);
  categoriesSection.appendChild(box);
}
//tech

const filterProducts = document.querySelectorAll(" .filter-products ul li");

filterProducts.forEach((el) => {
  el.addEventListener("click", () => {
    filterProducts.forEach((ele) => {
      ele.classList.remove("active");
    });
    el.classList.add("active");
  });
});

//Weekly deal
let weeklyDealContainer = document.querySelector(".trending");
let prevButton = document.querySelector(".swip .left"),
  nextButton = document.querySelector(".swip .right"),
  productLength = document.querySelector("[data-slides]").children.length,
  productsDeal = document.querySelectorAll(".trending .trending-product");
let productWidth = document.querySelector(
  ".trending .trending-product"
).offsetWidth;

nextButton.onclick = function () {
  weeklyDealContainer.scrollBy(productWidth + 20, 0);
};

prevButton.onclick = function () {
  weeklyDealContainer.scrollBy(-productWidth, 0);
};

//footer
const showMoreBtn = Array.from(
  document.querySelectorAll("footer .top-footer .title-block button")
);

showMoreBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.toggle("active");

    if (btn.parentElement.parentElement.classList.contains("active")) {
      btn.innerText = "-";
    } else {
      btn.innerText = "+";
    }
  });
});

// console.log(showMoreBtn);
console.log(document.querySelector("section.wishlist"));
