const clientCon = document.querySelector("#client-con");
const testimonialCon = document.querySelector("#testimonial-con");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let count = 0;

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
  testimonialDiv.classList.add("col-span-full");
  const testimonialParagraph = document.createElement("h4");
  const testimonialName = document.createElement("p");
  const testimonialCustomerLevel = document.createElement("p");

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
