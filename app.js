var todoText = document.querySelector(".todo-text");
var addTodo = document.getElementById("addtodo");

function todos() {
    addTodo.addEventListener("click", function() {
        var newTodo = document.createElement("LI");
        newTodo.setAttribute("id", "listItem")
        var delButton = document.createElement("BUTTON");
        var checkBox = document.createElement("BUTTON");
        checkBox.innerHTML = '<i class="fas fa-check"></i>';
        checkBox.setAttribute("id", "completed");
        delButton.innerHTML = "Delete";
        var textNode = document.createTextNode(todoText.value)
        newTodo.appendChild(checkBox)
        newTodo.appendChild(textNode);
        newTodo.appendChild(delButton);
    
        if (todoText.value === "") {
            return false;
        } else {
            document.getElementById("todoList").appendChild(newTodo);
            document.querySelector(".todo-text").value = "";
        }

        delButton.addEventListener("click", function() {
            // setTimeout(() => {
                this.parentNode.parentNode.removeChild(this.parentNode);
            // }, 500);
            // newTodo.style.setProperty('text-decoration', 'line-through');
            console.log("hi")
        })

        checkBox.addEventListener("click", function() {
            // newTodo.style.setProperty('text-decoration', 'line-through');
            newTodo.style.setProperty('background-color', 'green');
            
            
        })
    });

};
todos();




