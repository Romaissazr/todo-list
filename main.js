const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // create image for icons
        let icons =document.createElement("div")
        icons.className = "icons";
        li.appendChild(icons)
        // Create update  button
        let update = document.createElement("IMG");
        update.src = "pen.png";
        update.classList.add("update-btn");
      
        update.addEventListener("click", function() {
            updateTask(li); 
        });
        icons.appendChild(update);
        
        // Create remove button
        let remove = document.createElement("IMG");
        remove.src = "bin.png";
        remove.classList.add("remove-btn");
        remove.addEventListener("click", function() {
            removeTask(li); 
        });
        icons.appendChild(remove);
    }
    inputBox.value = ""; 
}


function removeTask(item) {
    item.remove(); 
}


function updateTask(item) {
    let updatedText = prompt("Update your task:", item.firstChild.textContent); 
    
    if (updatedText !== null && updatedText.trim() !== "") {
        item.firstChild.textContent = updatedText; 
    }
    else{
        alert("You must write something!");
        let updatedText = prompt("Update your task:", item.firstChild.textContent); 
    
    }
}


