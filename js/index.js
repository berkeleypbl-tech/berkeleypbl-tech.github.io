// CREATED BY JACKIE ZHANG

// MODALS
// Get the modal
var modal_1_content = document.getElementById("modal_1_content");

// Get the button that opens the modal
var modal_1_text = document.getElementById("modal_1_text");

// Get the <span> element that closes the modal
var span_1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

modal_1_text.onclick = function() {
    modal_1_content.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_1.onclick = function() {
    modal_1_content.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_1_content) {
        modal_1_content.style.display = "none";
    }
}

