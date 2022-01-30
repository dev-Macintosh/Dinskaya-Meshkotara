const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});


let hashUrl = document.getElementById('button_bags');
hashUrl.addEventListener('click', event => {
    setTimeout(() => {
        history.pushState('', document.title, window.location.pathname);
    }, 0)
})

document.getElementsByClassName("hystmodal__close")[0].addEventListener("click", () => {
    document.getElementsByTagName("html")[0].style.scrollBehavior = "auto";
    setTimeout(() => {
        document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
    }, 0)
})

