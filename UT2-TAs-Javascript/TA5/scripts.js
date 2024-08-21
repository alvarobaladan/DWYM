const runButton = document.getElementById("runButton");
const leapYear = document.getElementById("year");
let yearValue = "2024";
leapYear.value = yearValue;

runButton.addEventListener("click", function () { leapYears(yearValue) });

leapYear.addEventListener("input", (event) => {
    yearValue = event.target.value;
});

function leapYears(year){
    if((year % 4) === 0 || ((year % 100) === 0) && ((year % 400) === 0)){
        console.log(true);
    }else{
        console.log(false);
    }
}