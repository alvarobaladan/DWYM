const runButton = document.getElementById("runButton");
runButton.addEventListener("click", reverseString);

function reverseString(){
    let originalString = document.getElementById("originalString").value;

    let originalStringArray = originalString.split("");
    let reverseStringArray = originalStringArray.reverse();
    let reverseString = reverseStringArray.join("");

    console.log(reverseString);
}