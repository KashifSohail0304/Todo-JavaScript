let todo = [];
let req = prompt("Please enter your task");

while(true){
    if(req == "quit"){
        console.log("quitting app")
        break;
    }

    if(req == "list"){
        console.log("------------------------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------------------------------");
    } else if(req == "add"){
        let task = prompt("Enter task");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete"){
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("Wrong Request")
    }
    req = prompt("Please enter your request");
}