const newChoreInput = document.getElementById("inpt_NewChore");
const bt_addGoal = document.getElementById("bt_addNewChore");
const choreList = document.getElementById("choresList");
onInit();

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
        saveChoreList();
    }
})

function onInit () {
   const localChore = onGetLocalChores();
   if (!localChore) { return }
   onPopulateChoreList(localChore);
};

function onGetLocalChores () {
    if(localStorage.getItem("ChoresList")){
        let aChores =[]
        const aReturnedChores = JSON.parse(localStorage.getItem("ChoresList"))
        for (let i = 0; i < aReturnedChores.length; i++) {
            let tChore = aReturnedChores[i].split(":")[1]
            let oChore = {Chore:tChore}
            aChores.push(oChore)
        }
        return aChores
    }
    return ""
};

function onPopulateChoreList(localChore) {
    localChore.forEach(element => {
        createLiChore(element.Chore)
    });
};

function createLiChore(choreText) {
    let newChore = document.createElement('li');
    newChore.innerHTML = choreText;
    newChore.innerHTML += "    "
    newChore.appendChild(createDeleteButton());
    choreList.appendChild(newChore);
    saveChoreList();
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

function saveChoreList(){
    const choreNum = choreList.querySelectorAll('li');
    let aListChore = [];
    for (let i = 0; i < choreNum.length; i++) {
        const chore = choreNum[i].firstChild.textContent.trim()
        aListChore.push(`Chore:${chore}`)        
    }
    aListChore = JSON.stringify(aListChore)
    localStorage.setItem("ChoresList",aListChore)
};
