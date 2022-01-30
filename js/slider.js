var SELECTOR_PREV = '.slider__control[data-slide="prev"]',
  SELECTOR_NEXT = '.slider__control[data-slide="next"]',
  key = 0;
let sliders_caption = document.getElementsByClassName(
  "slider__items-caption_item"
);
sliders_item_one = document.getElementsByClassName("slider__item");

document.addEventListener("DOMContentLoaded", function () {
  const slider = new ChiefSlider(".slider", {
    loop: false,
  });
});

sliders_caption[key].classList.add("slider__items-caption_active");
let next = document.querySelector(SELECTOR_NEXT);
let prev = document.querySelector(SELECTOR_PREV);

next.addEventListener("click", () => {
  if (key < sliders_caption.length - 1) {
    sliders_caption[key].classList.remove("slider__items-caption_active");
    key++;
    sliders_caption[key].classList.add("slider__items-caption_active");
  }
});

prev.addEventListener("click", () => {
  if (key > 0) {
    sliders_caption[key].classList.remove("slider__items-caption_active");
    key--;
    sliders_caption[key].classList.add("slider__items-caption_active");
  }
});
sliders_caption = Array.from(sliders_caption);
// sliders_item=Array.from(sliders_item);
sliders_caption.forEach((element, ind) => {
  element.addEventListener("click", () => {
    sliders_caption[key].classList.remove("slider__items-caption_active");
    sliders_item_one[key].classList.remove("slider__item_active");
    key = ind;
    sliders_caption[key].classList.add("slider__items-caption_active");
    sliders_item_one[key].classList.add("slider__item_active");
    document.getElementsByClassName("slider__items")[0].style.transform =
      "translateX(-" + Number(key) * 100 + "%)";
    console.log("translateX(-" + Number(key) * 100 + "%)");
  });
});
