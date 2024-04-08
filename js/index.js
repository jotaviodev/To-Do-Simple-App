window.addEventListener("load", showData)
let centralBox = document.querySelector(".centralBox");
function showData(){
    for(content = 0; content<localStorage.length;content++){
        let key = localStorage.key(content)
        let x = localStorage.getItem(key)
        centralBox.innerHTML+=` 
        <div class="checkBoxItem">
            <input type="checkbox" name="" id="">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash" id="${localStorage.getItem(x)}" onclick="deleteItem(this.id)"></i>
        </div>
        <div class="content">
            <h4>${localStorage.getItem(x)}</h4>
        </div>
        `
    }
}

function deleteItem(item){
    let item2 = document.getElementById(item)
    localStorage.removeItem(item2.id)
    window.location.replace("./index.html")  
}
