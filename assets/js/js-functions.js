let buyers = document.getElementById("buyers")
let community = document.getElementById("community")


function renderBuyerInfo(){
    let section = document.getElementById("section-swap")
    section.style.flexDirection = 'row'
    let alternator = document.getElementById("alternator");
    let image = document.getElementById("image-swap")
    image.style.backgroundImage = `url("images/gold.jpg")`
    buyers.style.backgroundColor = "#f09f13"
    community.style.backgroundColor = "grey"
    community.style.opacity = .8
    
    alternator.innerText = 'Each buy has a buy fee that will go into a prize pool, buy fee is calculated by buy weight. More buy = less fee. Much money. Every 10th buy that buyer gets the WHOLE prize pool (adjustable). Every buy gets a buy bonus that is powered by sell fees (5% sell fee), buy AFTER a sell and get more money.'
}

function renderCommunityInfo(){
    let section = document.getElementById("section-swap")
    section.style.flexDirection = 'row-reverse'
    let image = document.getElementById("image-swap")
    image.style.backgroundImage = `url("images/north.jpg")`
    community.style.backgroundColor = "#f09f13"
    buyers.style.backgroundColor = "grey"
    buyers.style.opacity = ".8"    
    let alternator = document.getElementById("alternator");
    alternator.innerText = 'muchsupport function that awards community members support/shills/etc from .001% to .1% of the dogecity treasury once per day. (dependent on admin approval)'
}
window.addEventListener("DOMContentLoaded",()=>renderBuyerInfo())


// GLOBAL FUNCTIONS - CAROUSEL 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//About Picture rounding with scrolling

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("about-image").style.borderRadius = "50%";
    } else {
        document.getElementById("about-image").style.borderRadius = "0%";
    }
}