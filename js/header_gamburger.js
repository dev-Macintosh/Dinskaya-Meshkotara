let gamburger = false;

let menu = document.getElementsByClassName("menu__btn")[0];
headerNav = document.getElementsByClassName("header__inner-nav")[0];
headerLogo = document.getElementsByClassName("header__inner-logo")[0];
headerFeedback = document.getElementsByClassName("header__inner-feedback")[0];
headerInner = document.getElementsByClassName("header__inner")[0];

menu.addEventListener("click", () => {
  if (!gamburger) {
    headerNav.style.display = "block";
    headerLogo.style.display = "none";
    headerFeedback.style.display = "block";
    headerFeedback.style.position = "relative";
    headerFeedback.style.left = "17px";
    headerFeedback.style.top = "17px";
    headerFeedback.style.marginBottom = "80px";
    headerInner.style.flexDirection = "column";
    headerInner.style.position = "relative";
    headerInner.style.zIndex = "99";
    gamburger = true;
  } else {
    headerLogo.style.display = "flex";
    headerNav.style.display = "none";
    headerFeedback.style.display = "none";
    headerInner.style.flexDirection = "row";
    headerFeedback.style.position = "static";
    headerFeedback.style.marginBottom = "0px";
    gamburger = false;
  }
});
