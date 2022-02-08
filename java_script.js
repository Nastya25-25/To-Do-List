let inputTask = document.getElementById("input-task");
let addButton = document.getElementById("add-task-button");
let elemUL = document.getElementById('task-list');
let delButton = document.getElementsByClassName("delete-btn");

addButton.addEventListener ("click", addTask);
function addTask() {
    if (inputTask.value != "") {
        let newTask = inputTask.value;
        elemUL.insertAdjacentHTML(
            "beforeend",
            `<li>
                             <input type="checkbox"> <span class = "task">${newTask}</span>
                             <button class="delete-btn">x</button>

                 </li>`

        );

        delParentNode();

        function delParentNode() {
            for (let i = 0; i < delButton.length; i++) {
                delButton[i].addEventListener("click", function () {
                    this.parentNode.remove();
                });
            }

        }
    }
