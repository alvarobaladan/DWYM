let peopleList = ["Juan", "Maria", "José", "Mariana"];
document.getElementById("textFilter").addEventListener("input", (event) => updatePeopleList());
showList(peopleList);

function showList(list){
    let result = "";
    for (let i = 0; i < list.length; i++){
        result = result + "<li>" + list[i] + "</li>";
    }
    document.getElementById("list").innerHTML = result;
}

function updatePeopleList(){
    let text = document.getElementById("textFilter").value;
    filteredPeopleList = peopleList.filter(name => name.includes(text));
    showList(filteredPeopleList);
}