import { saveTask } from "./firebase.js";

const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", async(event) =>{
    event.preventDefault();
    const title = taskForm["task-title"].value;
    const description = taskForm["task-description"].value;
    const quantity = taskForm["task-quantity"].valueAsNumber;

    try{
        await saveTask(title, description, quantity);
        console.log("Tarea guardada compa");
        taskForm.reset()
    }catch(error){
        console.log("error compa", error)
    }
})