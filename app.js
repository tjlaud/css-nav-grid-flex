// Initialise variables and constants
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li");
const gridButton = document.querySelector(".grid-button");
const gridContainer = document.querySelector(".grid-container");
// add gridcontainer > div (queryselectorall)
const gridItems = document.querySelectorAll(".box");

// Function to toggle the side bar on/off
const navSlide = () => {
  // Event listener for burger button
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Links
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.9s ease forwards ${
          index / 5 + 0.2
        }s`;
      }
    });
    //Burger to X animation
    burger.classList.toggle("toggle");
  });
};

//Function to toggle Grid
const grid = () => {
  //Event listener for Grid button
  gridButton.addEventListener("click", () => {
    // add the active class
    gridContainer.classList.toggle("grid-active");
    //animate the swooosh
    gridItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `gridDivFade ease-in-out forwards ${index / 3}s`;
      }
    });
  });
};

// Call written functions
navSlide();
grid();

//
//
