const nums = [1, 2, 2, 3, 4, 4, 4, 5];

function duplicates(nums){
    let processed = [];
    let totalDuplicates = 0;

    while(nums.length !== 0){
        let actual = nums.shift();

        actualIsProcessed = processed.indexOf(actual) !== -1;
        actualIsDuplicated = nums.indexOf(actual) !== -1;
        
        if(!actualIsProcessed && actualIsDuplicated){
            totalDuplicates++;
        }

        processed.push(actual);
    }

    console.log("Total duplicados: " + totalDuplicates);
}