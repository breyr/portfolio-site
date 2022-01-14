const navButton = document.getElementById("nav-button");
navButton.addEventListener("click", openNav);

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  navButton.style.display = "none";
}

function showNavButton() {
  navButton.style.display = "block";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(showNavButton, 400);
}

let sidenavListItems = [...document.querySelectorAll("nav > li > a")]
sidenavListItems.forEach(element => element.addEventListener("click", closeNav))