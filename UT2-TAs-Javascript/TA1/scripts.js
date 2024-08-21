const runButton = document.getElementById("runButton");
runButton.addEventListener("click", repeatString);

function repeatString() {
    let repeatStringText = document.getElementById("repeatStringText").value;
    let repeatNumber = document.getElementById("repeatNumber").value;

    for (let i = 0; i < repeatNumber; i++){
        console.log(repeatStringText);
    }
}

