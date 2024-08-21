let textInput = document.getElementById("textInput");

textInput.addEventListener("focus", function() {
    textInput.style.outline = "3px solid grey";
});

textInput.addEventListener("blur", function() {
    textInput.style.outline = "";
});