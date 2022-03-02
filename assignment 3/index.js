// addlistener for main nav
let toggleNavStatus = false;
function addListener() {
  if (window.addEventListener) {
    let getNav = document.querySelector(".btn-toggle-nav");
    getNav.addEventListener("click", navBtn1, false);
    // getNav.addEventListener("mouseleave", navBtn1, false);
  }
}
// button function
function navBtn1() {
  toggleNav();
}
// wait for
window.onload = addListener;

// toggleNav function
let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arraylength = getSidebarLinks.length;
    for (let index = 0; index < arraylength; index++) {
      getSidebarLinks[index].style.opacity = "1";
    }
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arraylength = getSidebarLinks.length;
    for (let index = 0; index < arraylength; index++) {
      getSidebarLinks[index].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};
// Set variables for nav-main and body
let topNavBar = document.querySelector(".nav-main");
let backgroundCurentColor = document.querySelector("body");
// set the rest of the variables for colors
let redColor = document.querySelector(".red-color");
let orange = document.querySelector(".orange");
let purple = document.querySelector(".purple");
let green = document.querySelector(".green");
let default1 = document.querySelector(".default1");

// addEventListener for background change
let firstColor = redColor.addEventListener("click", function () {
  changeColorRed("red");
});
let secondColor = orange.addEventListener("click", function () {
  changeColorRed("orange");
});
let thirdColor = purple.addEventListener("click", function () {
  changeColorRed("purple");
});
let forthColor = green.addEventListener("click", function () {
  changeColorRed("green");
});
let fifthColor = default1.addEventListener("click", function () {
  changeColorRed("gray");
});
// changeColorRed function with e parameter
function changeColorRed(e) {
  backgroundCurentColor.style.backgroundColor = e;
  topNavBar.style.backgroundColor = e;
}
// Change background with keyboard
window.addEventListener("keypress", (event) => {
  switch (event.keyCode) {
    case 49: // 1
      changeColorRed("red");
      break;
    case 50: // 2
      changeColorRed("orange");
      break;
    case 51: // 3
      changeColorRed("purple");
      break;
    case 52: // 4
      changeColorRed("green");
      break;
    case 53: // 5
      changeColorRed("gray");
      break;
  }
});
