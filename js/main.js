const clientCon = document.querySelector("#client-con");
const testimonialCon = document.querySelector("#testimonial-con");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let count = 0;
const slider = document.querySelector("#image-slider");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const slider2 = document.querySelector("#image-slider2");
const prevBtn2 = document.querySelector("#prev-btn2");
const nextBtn2 = document.querySelector("#next-btn2");

let limepanels = document.querySelectorAll(".infopanellime"); // array
let btnlime = document.querySelector("#swapbuttonlime");
if (limepanels.length > 1) {
  limepanels[1].classList.add("hidden");
}

let peachpanels = document.querySelectorAll(".infopanelpeach"); // array
let btnpeach = document.querySelector("#swapbuttonpeach");
if (peachpanels.length > 1) {
  peachpanels[1].classList.add("hidden");
}

let pineapplepanels = document.querySelectorAll(".infopanelpineapple"); // array
let btnpineapple = document.querySelector("#swapbuttonpineapple");
if (pineapplepanels.length > 1) {
  pineapplepanels[1].classList.add("hidden");
}

let grapepanels = document.querySelectorAll(".infopanelgrape"); // array
let btngrape = document.querySelector("#swapbuttongrape");
if (grapepanels.length > 1) {
  grapepanels[1].classList.add("hidden");
}

let slideWidth;
let slideWidth2;
let currentIndex = 0;
let currentIndex2 = 0;

const lightBox = document.querySelector("#lightbox");
const links = document.querySelectorAll(".promo-light-box-button a");
const content = document.querySelector("#lightbox article");

(function () {
  "use strict";
  console.log("fired");

  let burger = document.querySelector("#button");
  let burgerCon = document.querySelector("#burger-con");

  function hamburgerMenu() {
    burger.classList.toggle("expanded");
    burgerCon.classList.toggle("slide-toggle");
  }

  burger.addEventListener("click", hamburgerMenu, false);
})();

const testimonials = [
  {
    name: "Jonny, Dae",
    customerlevel: "Satisfied Customer",
    testimonial: "Great taste. Refreshing and fizzy!",
  },
  {
    name: "John M.",
    customerlevel: "Beverage Industry Analyst",
    testimonial:
      "Quatro has set a new standard in the beverage industry with its commitment to natural ingredients and sustainable practices. It's not just a drink; it's a movement toward a better future.",
  },
  {
    name: "Maria R.",
    customerlevel: "Store Manager",
    testimonial:
      "Our customers love Quatro! The vibrant flavors and unique packaging always catch their eye, and they keep coming back for more. It's one of our best-selling drinks.",
  },
];

function displayTestimonial() {
  const testimonialDiv = document.createElement("div");
  // testimonialDiv.classList.add("col-span-full");
  const testimonialParagraph = document.createElement("h4");
  testimonialParagraph.classList.add("testimonial-paragraph");
  const testimonialName = document.createElement("p");
  testimonialName.classList.add("testimonial-name");
  const testimonialCustomerLevel = document.createElement("p");
  testimonialCustomerLevel.classList.add("testimonial-level");

  testimonialName.textContent = testimonials[count].name;
  testimonialCustomerLevel.textContent = testimonials[count].customerlevel;
  testimonialParagraph.textContent = `${testimonials[count].testimonial}`;
  if (testimonialCon) {
    testimonialCon.innerHTML = "";
  }
  testimonialDiv.appendChild(testimonialParagraph);
  testimonialDiv.appendChild(testimonialName);
  testimonialDiv.appendChild(testimonialCustomerLevel);

  testimonialCon.appendChild(testimonialDiv);
}

function nextTestimonial() {
  count++;
  console.log(count);
  if (count >= testimonials.length) {
    count = 0;
  }
  displayTestimonial();
}

function previousTestimonial() {
  count--;
  console.log(count);
  if (count < 0) {
    count = testimonials.length - 1;
  }
  displayTestimonial();
}
if (testimonialCon) {
  displayTestimonial();

  //setInterval(nextTestimonial, 1000);

  next.addEventListener("click", nextTestimonial);
  previous.addEventListener("click", previousTestimonial);
}

function showSlide(index) {
  const newTransformValue = -index * slideWidth + "px";
  //The -index is used to calculate the position of the slide in the opposite direction.
  // For example, if index is 1, then -index becomes -1, which means moving one slide width to the left.
  // If index is 2, then -index becomes -2, which means moving two slide widths to the left.
  console.log(newTransformValue);
  slider.style.transform = "translateX(" + newTransformValue + ")";
}

function nextSlide() {
  console.log(currentIndex);
  currentIndex++;
  //if count is greater than or equal to number of slides restart
  if (currentIndex >= slider.children.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  // if count is less than 0 go to last slide
  if (currentIndex < 0) {
    currentIndex = slider.children.length - 1;
  }
  showSlide(currentIndex);
}

/*function updateSlideWidth() {
    slideWidth = slider.clientWidth;
    showSlide(currentIndex); // Adjust the position of the current slide on resize
  }*/

if (slider) {
  slideWidth = slider.clientWidth;
  function updateSlideWidth() {
    slideWidth = slider.clientWidth;
    showSlide(currentIndex); // Adjust the position of the current slide on resize
  }

  // Attach click event handlers to buttons using event listeners
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  window.addEventListener("resize", updateSlideWidth);

  // Call updateSlideWidth initially to set the correct initial slide width
  updateSlideWidth();

  setInterval(nextSlide, 1500);
}
function showSlide2(index) {
  const newTransformValue = -index * slideWidth2 + "px";
  //The -index is used to calculate the position of the slide in the opposite direction.
  // For example, if index is 1, then -index becomes -1, which means moving one slide width to the left.
  // If index is 2, then -index becomes -2, which means moving two slide widths to the left.
  console.log(newTransformValue);
  slider2.style.transform = "translateX(" + newTransformValue + ")";
}

function nextSlide2() {
  console.log(currentIndex2);
  currentIndex2++;
  //if count is greater than or equal to number of slides restart
  if (currentIndex2 >= slider2.children.length) {
    currentIndex2 = 0;
  }
  showSlide2(currentIndex2);
}

function prevSlide2() {
  currentIndex2--;
  // if count is less than 0 go to last slide
  if (currentIndex2 < 0) {
    currentIndex2 = slider2.children.length - 1;
  }
  showSlide2(currentIndex2);
}

/*function updateSlideWidth() {
    slideWidth = slider.clientWidth;
    showSlide(currentIndex); // Adjust the position of the current slide on resize
  }*/

if (slider2) {
  slideWidth2 = slider2.clientWidth;
  function updateSlideWidth2() {
    slideWidth2 = slider2.clientWidth;
    showSlide2(currentIndex); // Adjust the position of the current slide on resize
  }

  // Attach click event handlers to buttons using event listeners
  prevBtn2.addEventListener("click", prevSlide2);
  nextBtn2.addEventListener("click", nextSlide2);

  window.addEventListener("resize", updateSlideWidth2);

  // Call updateSlideWidth initially to set the correct initial slide width
  updateSlideWidth2();
}
function showHideLime() {
  if (limepanels[1].classList.contains("hidden")) {
    // Show second panel, hide first
    limepanels[0].classList.add("hidden");
    limepanels[1].classList.remove("hidden");
    btnlime.textContent = "Front";
  } else {
    // Show first panel, hide second
    limepanels[1].classList.add("hidden");
    limepanels[0].classList.remove("hidden");
    btnlime.textContent = "Back";
  }
}
if (btnlime) {
  btnlime.addEventListener("click", showHideLime);
}

function showHidePeach() {
  if (peachpanels[1].classList.contains("hidden")) {
    // Show second panel, hide first
    peachpanels[0].classList.add("hidden");
    peachpanels[1].classList.remove("hidden");
    btnpeach.textContent = "Front";
  } else {
    // Show first panel, hide second
    peachpanels[1].classList.add("hidden");
    peachpanels[0].classList.remove("hidden");
    btnpeach.textContent = "Back";
  }
}
if (btnpeach) {
  btnpeach.addEventListener("click", showHidePeach);
}

function showHidePineapple() {
  if (pineapplepanels[1].classList.contains("hidden")) {
    // Show second panel, hide first
    pineapplepanels[0].classList.add("hidden");
    pineapplepanels[1].classList.remove("hidden");
    btnpineapple.textContent = "Front";
  } else {
    // Show first panel, hide second
    pineapplepanels[1].classList.add("hidden");
    pineapplepanels[0].classList.remove("hidden");
    btnpineapple.textContent = "Back";
  }
}
if (btnpineapple) {
  btnpineapple.addEventListener("click", showHidePineapple);
}

function showHideGrape() {
  if (grapepanels[1].classList.contains("hidden")) {
    // Show second panel, hide first
    grapepanels[0].classList.add("hidden");
    grapepanels[1].classList.remove("hidden");
    btngrape.textContent = "Front";
  } else {
    // Show first panel, hide second
    grapepanels[1].classList.add("hidden");
    grapepanels[0].classList.remove("hidden");
    btngrape.textContent = "Back";
  }
}
if (btngrape) {
  btngrape.addEventListener("click", showHideGrape);
}

let promo = [
  {
    name: "Lime",

    discount: "Buy 1 Get 1 Free",
  },
  {
    name: "Peach",

    discount: "10% OFF",
  },
  {
    name: "Pineapple",

    discount: "20% OFF",
  },
  {
    name: "Grape",

    discount: "50% OFF",
  },
  // PROVING YOUR UNDERSTANDING: add a new object key/value that stores the image for each hero!
];

//console.log(promo[0].name);

function fillContent() {
  console.log(this.dataset.heroIndex);

  content.innerHTML = "";

  let productName = document.createElement("h3");
  productName.innerText = promo[this.dataset.heroIndex].name;
  productName.classList = "lb_heading";
  content.appendChild(productName);

  let productdiscount = document.createElement("p");
  productdiscount.innerText = promo[this.dataset.heroIndex].discount;
  productdiscount.classList = "lb_text";
  content.appendChild(productdiscount);

  // PROVING YOUR UNDERSTANDING: using the new image value you stored in the hero object,
  // update the image displayed in the lightbox that shows up!
}

links.forEach((link) => link.addEventListener("click", fillContent));
