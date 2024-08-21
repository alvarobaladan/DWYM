function increment(){
    let counter = parseInt(document.getElementById("counter").innerHTML);
    counter++;
    document.getElementById("counter").innerHTML = counter;
}