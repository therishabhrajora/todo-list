const inputField = document.querySelector(".input-field textarea"),
    todoLists = document.querySelector(".todolists "),
    pendingNum = document.querySelector(".pending-num "),
    clearButton = document.querySelector(".clear-button");

    function allTasks(){
        let tasks=document.querySelectorAll(".pending");
            pendingNum.textContent=tasks.length === 0? "no" : tasks.length;

            let  alllists=document.querySelectorAll(".lists");
            if (alllists.length>0){
                todoLists.style.marginTop="20px";
                return
            }
            todoLists.style.marginTop="0px";
    }

inputField.addEventListener("keyup", (e) => {
    let inputValue = inputField.value.trim();

    if (e.key === "Enter" && inputValue.length > 0) {
        let litag =
            `<li class="list pending" onclick="handleStatus(this)">
                <input type="checkbox" />
                <span class="task"> ${inputValue}</span>
                <svg onclick="deletetasks(this)" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                    <path
                        d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z">
                    </path>
                </svg>
            </li>`;

        todoLists.insertAdjacentHTML("beforeend", litag);
        inputField.value="";
        allTasks();
    }
});

console.log("real")
function handleStatus(e) {
    const checkbox=e.querySelector("input");
    checkbox.checked=checkbox.checked?false:true;
    e.classList.toggle("pending");
    allTasks();
}

clearButton.addEventListener("click", () => {
    todoLists.innerHTML="";
    allTasks();
})


function deletetasks(e){
    e.parentElement.remove();
    allTasks();
console.log(e.parentElement);
}