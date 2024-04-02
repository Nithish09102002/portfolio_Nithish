const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".nav");

let isOverflowEnabled = true;

function toggleOverflow() {
  const sections = document.querySelectorAll(".section");

  if (isOverflowEnabled) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  isOverflowEnabled = !isOverflowEnabled;
}
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  toggleOverflow();
});

// Select all navigation links inside the header
const navLinks = document.querySelectorAll(".nav-list a");

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Close the navigation by removing the 'nav-open' class from the header
    headerEl.classList.remove("nav-open");
    // Optionally, you can also call a function to toggle overflow if needed
    if (window.innerWidth <= 544) toggleOverflow();
  });
});

document.addEventListener("contextmenu", function (event) {
  // event.preventDefault();
});

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
// console.log(allSections);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
///////////////

// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });
