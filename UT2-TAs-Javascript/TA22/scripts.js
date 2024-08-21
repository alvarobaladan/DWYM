window.addEventListener("resize", updateSizeValues);

function updateSizeValues(){
    document.getElementById("width").innerHTML = "Width: " + window.innerWidth;
    document.getElementById("height").innerHTML = "Height: " + window.innerHeight;
}