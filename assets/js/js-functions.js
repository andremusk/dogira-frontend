let buyers = document.getElementById("buyers")
let community = document.getElementById("community")


function renderBuyerInfo(){
    let section = document.getElementById("section-swap")
    section.style.flexDirection = 'row'
    let alternator = document.getElementById("alternator");
    let image = document.getElementById("image-swap")
    image.style.backgroundImage = `url("images/gold.jpg")`
    image.style.backgroundSize = "cover"
    buyers.style.backgroundColor = "#f09f13"
    community.style.backgroundColor = "rgb(28, 27, 27)"
    alternator.style.borderRadius = "5%"
    // community.style.opacity = .8
    
    alternator.innerText = 'Each buy has a buy fee that will go into a prize pool, buy fee is calculated by buy weight. More buy = less fee. Much money. Every 10th buy that buyer gets the WHOLE prize pool (adjustable). Every buy gets a buy bonus that is powered by sell fees (5% sell fee), buy AFTER a sell and get more money.'
}

function renderCommunityInfo(){
    // let communityButton = document.createElement("button")
    // communityButton.className = "disclaimer-button"
    // communityButton.innerHTML = "MUCHSUPPORT"
    let section = document.getElementById("section-swap")
    section.style.flexDirection = 'row-reverse'
    let image = document.getElementById("image-swap")
    image.style.backgroundImage = `url("images/north.jpg")`
    community.style.backgroundColor = "#f09f13"
    buyers.style.backgroundColor = "rgb(28, 27, 27)"
    // buyers.style.opacity = ".8"    
    let alternator = document.getElementById("alternator");
    alternator.innerText = 'muchsupport function that awards community members support/shills/etc from .001% to .1% of the dogecity treasury once per day. (dependent on admin approval)'
    // section.append(communityButton)
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
let content = document.getElementById("p-render")
let button1 = document.getElementById("disclaimer")
let button2 = document.getElementById("disclosure")


function renderDisclaimer(){
    let render = document.getElementById("render")
    
    button1.addEventListener("click", () => {
        button1.style.backgroundColor = "rgb(240, 159, 19)"
        button1.style.color = "black"
        button2.style.backgroundColor = "black"
        button2.style.color = "white"
        render.append(content)
        content.innerText = `The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. The DOGIRIA team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. By purchasing DOGIRIA, you agree that you are not purchasing a security or investment and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token "as is" and is not required to provide any support or services. You should have no expectation of any form from DOGIRIA and its team. Although DOGIRIA is an EXPERIMENTAL token for social experiment and not a digital currency, the team strongly recommends that United States persons do not purchase it because the team cannot ensure compliance with United states regulations. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.`

    })
}
function renderDisclosure(){
    let render = document.getElementById("render")
    button2.addEventListener("click", () => {
        button2.style.backgroundColor = "rgb(240, 159, 19)"
        button2.style.color = "black"
        button1.style.backgroundColor = "black"
        button1.style.color = "white"
        render.append(content)
        content.id = "rendered-content"
        content.innerText = `Please note there are always risks associated with smart-contracts. Please use at your own risk. DOGIRIA Token is not a registered broker, analyst or investment advisor. Everything that we provide on this site is purely for guidance, informational and educational purposes. All information contained herein should be independently verified and confirmed. We do not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services.
        Please be aware of the risks involved with any trading done in any financial market. Do not trade with money that you cannot afford to lose. When in doubt, you should consult a qualified financial advisor before making any investment decisions.`
    })
}

renderDisclaimer()
renderDisclosure()