// Initialise variables and constants
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li");
const gridButton = document.querySelector(".grid-button");
const gridContainer = document.querySelector(".grid-container");
const gridItems = document.querySelectorAll(".box");
const flexButton = document.querySelector(".flex-button");
const flexContainer = document.querySelector(".flex-container");
const flexRotateButton = document.querySelectorAll(".flex-box");

// -----------Side bar functions------------------------
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

//-----------------Grid Functions ----------------------
const grid = () => {
  //Event listener for Grid button
  gridButton.addEventListener("click", () => {
    // add the active class
    linkActivate("grid", gridContainer);
    //animate the swooosh
    gridItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `gridDivFade ease-in-out forwards ${
          index / 2.6
        }s`;
      }
    });
  });
};

// ---------------Flex functions--------------------------
// Make the flex boxes appear
flexButton.addEventListener("click", () => {
  // add the active class
  linkActivate("flex", flexContainer);
  // flexContainer.classList.toggle("flex-active");
});
// switch between row and column.
// to make this eventlistener work on all three boxes a forEach needs to be used. followed by an eventlistener.
flexRotateButton.forEach((el) => {
  el.addEventListener("click", () => {
    // Swap between row and column. Can't animate flex direction so keyframes is used.
    flexContainer.style.flexDirection === "column"
      ? (flexContainer.style.flexDirection = "row") &&
        (flexContainer.style.animation = `flexChangeOne 1.6s ease-out`)
      : (flexContainer.style.flexDirection = "column") &&
        (flexContainer.style.animation = `flexChangeTwo 1.6s ease-out`);
  });
});

// --------------Multiple link function-------------------
// a function that checks if any are active then deactivates the others. Use  an argument for the in use link.
const linkActivate = (str, container) => {
  // Switch function to remove all other active views.
  switch (str) {
    case "flex":
      gridContainer.classList.remove("grid-container-active");
      console.log("switch = flex");
      break;
    case "grid":
      flexContainer.classList.remove("flex-container-active");
      console.log("switch = grid");
      break;
    default:
      console.log("default! Switch function not functioning :/");
  }
  // Then add the passed argument to active the desired view.
  container.classList.toggle(str + "-container-active");
};

//----------------- Call functions------------------------
navSlide();
grid();

// change button to box in the middle. So either 1 or two depending...

//
//
