let submitButton = document.getElementById("send");
submitButton.addEventListener("submit", (e)=>{
    e.preventDefault();
    window.location.replace("../index.html")    
})
function sendData(){    
    let task = document.getElementById("content").value;
    localStorage.setItem(task,task)
}
