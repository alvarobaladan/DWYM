function addElementToList(){
    let list = document.getElementById("list");
    let text = document.getElementById("text").value;

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));

    list.appendChild(li);

    document.getElementById("text").value = "";
}