 let input = document.getElementById("taskInput")

let mission = document.getElementById("taskList")

function toAddList() {

  let value = input.value.trim()

  if (value == "") {
    alert("Please enter a mission?")
    return;
  }


  let list = document.createElement("li")
  list.textContent = value
  
  let singleDelete = document.createElement("span")
  singleDelete.textContent = "X"
  singleDelete.classList.add("btn_delete_single")

  singleDelete.addEventListener("click", () => {
    list.remove();
  })

  list.appendChild(singleDelete)
  mission.appendChild(list)

  input.value = ""

}

function toDeleteLists (){
   mission.innerText = ""

}