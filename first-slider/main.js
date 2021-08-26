let indexSlider = 0;
Slider();

function Slider() {
    let mySlides = document.getElementsByClassName('slider');
    let dots = document.getElementsByTagName("span");
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    indexSlider++;
    if (indexSlider > mySlides.length) {
        indexSlider = 1;
    }
    for (let n = 0; n < dots.length; n++) {
        dots[n].className = dots[n].className.replace("active", "");
    }
    mySlides[indexSlider - 1].style.display = "block";
    dots[indexSlider - 1].className += "active";

    setTimeout(Slider, 5000);
}

function prevSlide() {
    Slider(indexSlider--);
}

function nextSlide() {
    Slider(indexSlider++);
}

function ThisSlide(n) {
    Slider(indexSlider = n);
}