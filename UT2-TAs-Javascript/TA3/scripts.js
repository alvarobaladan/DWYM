const runButton = document.getElementById("runButton");
runButton.addEventListener("click", removeFromArray);

const array = [1, 2, 3];
const element = 2;

function removeFromArray(){
    console.log("Array: " + array);
    console.log("Element: " + element);

    let index = array.indexOf(element);
    if(index > -1){
        array.splice(index, 1);
    }

    console.log("Array sin elemento: " + array);
}