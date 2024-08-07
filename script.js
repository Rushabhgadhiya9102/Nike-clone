var lastScrollTop = 0;
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-110px"; // hide navbar
  } else {
    navbar.style.top = "0"; // show navbar
  }
  lastScrollTop = scrollTop;
});
