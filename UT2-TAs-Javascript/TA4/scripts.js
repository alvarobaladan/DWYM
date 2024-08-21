const runButton = document.getElementById("runButton");
runButton.addEventListener("click", sumAll);

const a = 1;
const b = 3;

function sumAll(){
    if(a < b){
        let result = 0
        for (let i = a; i <= b; i++){
            result = result + i;
        }
        console.log(result);
    }else{
        console.log("'a' debe ser mayor a 'b'.");
    }
}