const clientCon = document.querySelector("#client-con");
const testimonialCon = document.querySelector("#testimonial-con");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let count = 0;
const slider = document.querySelector("#image-slider");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
let slideWidth;
let currentIndex = 0;

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

  testimonialCon.innerHTML = "";

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

displayTestimonial();

//setInterval(nextTestimonial, 1000);

next.addEventListener("click", nextTestimonial);
previous.addEventListener("click", previousTestimonial);

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
}

// Attach click event handlers to buttons using event listeners
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

window.addEventListener("resize", updateSlideWidth);

// Call updateSlideWidth initially to set the correct initial slide width
updateSlideWidth();
