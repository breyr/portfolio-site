const navButton = document.getElementById("nav-button");
navButton.addEventListener("click", openNav);

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let sidenavListItems = [...document.querySelectorAll("nav > li > a")]
sidenavListItems.forEach(element => element.addEventListener("click", closeNav))