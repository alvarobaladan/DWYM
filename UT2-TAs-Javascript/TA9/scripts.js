const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers;

function getOdds(nums){
    oddNumbers = [];
    nums.forEach(processOdds);
    
    console.log("Números impares de la lista: ");
    console.log(oddNumbers.toString());
}

function processOdds(number){
    if(isOdd(number)){
        oddNumbers.push(number);
    }
}

function isOdd(number){
    return (number % 2 === 1);
}