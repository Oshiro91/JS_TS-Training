const newChoreInput = document.getElementById("inpt_NewChore");
const bt_addGoal = document.getElementById("bt_addNewChore");
const choreList = document.getElementById("choresList");

bt_addGoal.addEventListener('click', function (oEvent) {
    if (newChoreInput.value) {
        createLiChore(newChoreInput.value);
    } else { alert("Please input a chore") }
});

newChoreInput.addEventListener('keypress', function (oEvent) {
    if (oEvent.key == "Enter" && newChoreInput.value) {
        createLiChore(newChoreInput.value)
    } else if (oEvent.key == "Enter" && !newChoreInput.value) { alert("Please input a chore") }
})

choreList.addEventListener('click', function(oEvent){
    if (oEvent.target.getInnerHTML() == "Delete") {
        oEvent.target.parentElement.remove();
    }
})

function createLiChore(choreText) {
    let newChore = document.createElement('li');
    newChore.innerHTML = choreText;
    newChore.innerHTML += "    "
    newChore.appendChild(createDeleteButton());
    choreList.appendChild(newChore);    
    cleanChoreInput();
};

function cleanChoreInput() {
    newChoreInput.value = ""
};

function createDeleteButton() {
    let delButon = document.createElement('button')
    delButon.innerHTML = "Delete"
    return delButon
};