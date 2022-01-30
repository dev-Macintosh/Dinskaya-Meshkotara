var nextTwo = document.getElementById("slider-two_next");
var prevTwo = document.getElementById("slider-two_prev");

var sliders_item = document.getElementsByClassName("slider-two__item");
nextTwo.style.background = "#FAFAFA";
prevTwo.style.background = "rgba(24, 24, 24, 0.1)";
nextTwo.addEventListener("click", () => {
  sliders_item[0].classList.remove("slider-two--active");
  sliders_item[1].classList.add("slider-two--active");
  nextTwo.style.background = "rgba(24, 24, 24, 0.1)";
  prevTwo.style.background = "#FAFAFA";
  sliders_item[0].classList.add("slider-two--flur");
  sliders_item[1].classList.remove("slider-two--flur");
});

prevTwo.addEventListener("click", () => {
  sliders_item[1].classList.remove("slider-two--active");
  sliders_item[0].classList.add("slider-two--active");

  nextTwo.style.background = "#FAFAFA";
  prevTwo.style.background = "rgba(24, 24, 24, 0.1)";

  sliders_item[1].classList.add("slider-two--flur");
  sliders_item[0].classList.remove("slider-two--flur");
});
