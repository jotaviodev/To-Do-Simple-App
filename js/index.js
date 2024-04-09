window.addEventListener("load", showData)
let centralBox = document.querySelector(".centralBox");
function showData(){
    for(content = 0; content<localStorage.length;content++){
        let key = localStorage.key(content)
        let item = localStorage.getItem(key)
        centralBox.innerHTML+=` 
        <div class="checkBoxItem">
            <input type="checkbox" onclick="checkItem(this.id)" id="${localStorage.getItem(item)}">
            <i class="fa-solid fa-pen-to-square" id="${localStorage.getItem(item)}" onclick="editItem(this.id)"></i>
            <i class="fa-solid fa-trash" id="${localStorage.getItem(item)}" onclick="deleteItem(this.id)"></i>
        </div>
        <div class="content">
            <h4 name="${localStorage.getItem(item)}">${localStorage.getItem(item)}</h4>
        </div>
        `
    }
}
function deleteItem(item){
    let item2 = document.getElementById(item)
    let response = confirm("Você realmente deseja apagar esta tarefa? ")
    if(response){
        localStorage.removeItem(item2.id)
        window.location.replace("./index.html")  
    }
}
function checkItem(item){
    let checkbox = document.getElementById(item)
    if(checkbox.checked){
        let element = document.getElementsByName(item)
        element[0].style.textDecoration="line-through"
        let response = confirm("Tarefa concluída! Deseja descartá-la?")
        if(response){
            localStorage.removeItem(item)
            window.location.replace("./index.html") 
        }
    }else{
        let element = document.getElementsByName(item)
    }
}
function editItem(item){
    let newItem = prompt("Atualize o nome da tarefa: ")
    if(newItem){
        if(localStorage.getItem(item)){
            localStorage.removeItem(item)
            localStorage.setItem(newItem, newItem)
            window.location.replace("./index.html")
        }
    }
}