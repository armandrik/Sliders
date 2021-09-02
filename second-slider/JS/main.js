var slideIndex = 1;
const body = document.getElementById("body");
showSlides(slideIndex);
let bgcolor = ["#57cf95", "#b5db69", "#b983eb"];

function plusSlides(n) {
    showSlides(slideIndex += n);
    if (slideIndex == 1) {
        body.style.backgroundColor = "#D4DAD9";
    } else if (slideIndex == 2) {
        body.style.backgroundColor = "#a1c7ed";
    } else if (slideIndex == 3) {
        body.style.backgroundColor = "#9effa8";
    } else if (slideIndex == 4) {
        body.style.backgroundColor = "#fffc9e";
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var mySlides = document.getElementsByClassName("my-slides");
    if (n > mySlides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = mySlides.length;
    }
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    mySlides[slideIndex - 1].style.display = "flex";
}