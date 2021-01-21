// Jquery change navbar background color on scroll
$(window).scroll(function () {
    $(".navbar").toggleClass("active", $(this).scrollTop() > 10);
  });
// Listen for a click event on navbar toggle
const navbarToggle = document.querySelector(".navbar-toggle");
navbarToggle.addEventListener("click", () => {
  document.body.classList.toggle("navbar-open");
});
// Jquery prevent scroll while navbar overlay open
$(".navbar-menu").on("scroll touchmove mousewheel", function (e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
});
// Jquery top button fade in and fade out on scroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".top").fadeIn();
  } else {
    $(".top").fadeOut();
  }
});