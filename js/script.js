// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// SLIDER IMAGES
const sliderImages = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];


//ELEMENTS OF HTML
const itemsContainer = document.querySelector(".items-container");

for (let i = 0; i < sliderImages.length; i++) {
    const element = 
    `<div class="item">
           <img src="${sliderImages[i]}" alt="">
    </div>`
    itemsContainer.innerHTML += element;
}

const items = document.getElementsByClassName("item");
let sliderPosition = 0;
items[sliderPosition].classList.add("active");

// FORWARD NAVIGATION 
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function () {
    //IF CAN STEP FORWARD
    if(sliderPosition < (items.length - 1)) {
        //REMOVE CLASS ACTIVE TO CURRENT ITEM
        items[sliderPosition].classList.remove("active");
        sliderPosition++;
        //ADD CLASS ACTIVE TO FOLLOWING ITEM
        items[sliderPosition].classList.add("active");
    }
});

// BACKWARD NAVIGATION
const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function () {
    //IF CAN STEP BACKWARD
    if(sliderPosition > 0) {
        //REMOVE CLASS ACTIVE TO CURRENT ITEM
        items[sliderPosition].classList.remove("active");
        sliderPosition--;
        //ADD CLASS ACTIVE TO FOLLOWING ITEM
        items[sliderPosition].classList.add("active");
    } 
});
