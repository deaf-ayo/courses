// array with commands
var commands = ["new", "list", "quit", "delete"];

// empty array for list
var list = [];

// user input
var input = prompt("What would you like to do?");

// prompt loop until quit
while(input !== commands[2]) {
    if(input === commands[0]) {
        newTodo();
    } else if(input === commands[1]) {
        listTodo();
    } else if(input === commands[3]) {
        deleteTodo();
    } else {
        alert("Error! Please use 1) new or 2) list or 3) delete or 4) quit");
    }
    input = prompt("What would you like to do?");
}

// quit message
if(input === commands[2]) {
    alert("Thank you for using the app!");
}

// function for new
function newTodo() {
    var addTodo = prompt("Enter a new todo"); {
        list.push(addTodo);
        console.log(addTodo + " added to list");
    }
}

// function for list
function listTodo() {
    var stars = "********";
    console.log(stars);
    list.forEach(function(x,index) {
        console.log(index+1 + ": " + x);
    });
    console.log(stars);
}

// function for delete
function deleteTodo() {
    var delTodo = prompt("Enter index of todo to delete"); {
        console.log(list[delTodo-1] + " deleted from list");
        list.splice(delTodo-1, 1);
    }
}