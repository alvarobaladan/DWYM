const convertToCelsiusButton = document.getElementById("convertToCelsiusButton");
const convertToFarenheitButton = document.getElementById("convertToFarenheitButton");

convertToCelsiusButton.addEventListener("click", convertToCelsius);
convertToFarenheitButton.addEventListener("click", convertToFarenheit);

function convertToCelsius(){
    let valueToConvert = document.getElementById("valueToConvert").value;
    let resultCelsius = (valueToConvert - 32) * (5/9);
    let resultRounded = Math.round(resultCelsius * 100) / 100;

    console.log("Resultado en Celsius: " + resultRounded);
}

function convertToFarenheit(){
    let valueToConvert = document.getElementById("valueToConvert").value;
    let resultFarenheit = valueToConvert * (9/5) + 32;
    let resultRounded = Math.round(resultFarenheit * 100) / 100;

    console.log("Resultado en Farenheit: " + resultRounded);
}