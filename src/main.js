"use strict";

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault;
    checkLocalStorage();
    console.log("CONTENT LOADED!");
});

function checkLocalStorage() {
    if(localStorage.getItem('taskItems') == null){
        var arrayOfTasks =[];
    }else{
        arrayOfTasks =  JSON.parse(localStorage.getItem('taskItems'));
        console.log(arrayOfTasks);
        loadData();
    //-----------^parse the item by getting---^--stored item
    }
}

// function addItemToArray(){
//     arrayOfTasks.push(document.getElementById("txtMyText").value);
//     localStorage.setItem('textValues', JSON.stringify(myArray));
//     //------------^store the item by stringify--^
// }

function loadData() {
    var arrayOfTasks =  JSON.parse(localStorage.getItem('taskItems'));
    let ul = document.getElementById('tasks');
  for (let i = 0; i < arrayOfTasks.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = arrayOfTasks[i].description;
    ul.appendChild(li);
}
  return arrayOfTasks;
}

function parseData(data) {
    console.log("reached parsing data")
    console.log(data);

    let newTask = document.getElementById("new-task-description").value;
    
    if (newTask != "") {
        if (data != undefined) {
            // let newDescription = new Task(newTask);
            
            data.push(
                {'description': newTask}
                );
            } 
        }
    localStorage.setItem('taskItems', JSON.stringify(data));

    console.log(data);
    return loadData();
}

let submit = document.getElementById("create-task-form");

submit.addEventListener('submit', event => {
    console.log("I'm ALIVE!!!");
    console.log(document.getElementById("new-task-description").value);
    var arrayOfTasks =  JSON.parse(localStorage.getItem('taskItems'));
    parseData(arrayOfTasks);
    console.log("Inside click after parsing data is called");
    
    event.preventDefault;
});



//   //FROM LECTURE
//   let ul = document.getElementById('tasks');
// //   for (let i = 0; i < arrayOfTasks.length; i++) {
//   for (let i = 0; i < 10; i++) {
//     let li = document.createElement('li');
//     li.textContent = "something that I want to append = " + i;
//     ul.appendChild(li);
//   }