function scrollToElement(elementId) {
    // Find the element you want to scroll to by its ID
    var elementToScrollTo = document.getElementById(elementId);

    // Check if the element exists
    if (elementToScrollTo) {
        // Scroll to the element smoothly
        elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
    }
}


const iconElement = document.getElementById("icon");
const tst = document.getElementById("tst");


iconElement.addEventListener("click", function () {
    // Check if the element currently has the "fa-bars" class
    if (iconElement.classList.contains("fa-bars")) {
        // If it does, remove "fa-bars" and add "fa-cross"
        iconElement.classList.remove("fa-bars");
        iconElement.classList.add("fa-times");
        tst.classList.remove("none");


    } else {
        // If it has "fa-cross," reverse the operation
        iconElement.classList.remove("fa-times");
        iconElement.classList.add("fa-bars");
        tst.classList.add("none");


    }
})

