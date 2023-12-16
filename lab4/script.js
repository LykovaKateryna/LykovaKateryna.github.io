var element1 = document.getElementById("element1");
var element2 = document.querySelector(".element2");
var elementContainer = document.getElementById("elementContainer");
var buttonsContainer = document.getElementById("buttonsContainer");
var highlighted1 = false;
var highlighted2 = false;
element1.addEventListener("click", function(event){
    if (!highlighted1) {
        event.target.classList.add("highlight1");
        highlighted1 = true;
    } else {
        event.target.classList.remove("highlight1");
        highlighted1 = false;
    }
});
element2.addEventListener("click", function(event){
    if (!highlighted2) {
        event.target.classList.add("highlight2");
        highlighted2 = true;
    } else {
        event.target.classList.remove("highlight2");
        highlighted2 = false;
    }
});

function addImage() {
    var newImage = document.createElement("img");
    newImage.src = "2.jpg";
    elementContainer.appendChild(newImage);
}

function increaseImageSize() {
    var images = elementContainer.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        var currentWidth = images[i].width;
        images[i].width = currentWidth * 1.2; // Збільшення на 20%
    }
}

function decreaseImageSize() {
    var images = elementContainer.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        var currentWidth = images[i].width;
        images[i].width = currentWidth * 0.8; // Зменшення на 20%
    }
}

function deleteImage() {
    var images = elementContainer.getElementsByTagName("img");
    if (images.length > 0) {
        elementContainer.removeChild(images[0]);
    }
}