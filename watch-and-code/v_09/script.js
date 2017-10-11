let todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for(let i = 0; i < this.todos.length; i++) {
        if(this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('()', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    for(let i = 0; i < totalTodos; i++) {
      if(this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if(completedTodos === totalTodos) {
      for(let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for(let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

let handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    if(isEmpty(addTodoTextInput) === true) {
      return;
    } else {
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";
    }
  },
  changeTodo: function() {
    let editTodoPosition = document.getElementById('editTodoPosition');
    let editTodoTextInput = document.getElementById('editTodoTextInput');
    if(isEmpty(editTodoPosition) === true){
      return;
    } else if(isEmpty(editTodoTextInput) === true) {
      return;
    } else {
      todoList.changeTodo(editTodoPosition.valueAsNumber, editTodoTextInput.value);
      editTodoPosition.value = "";
      editTodoTextInput.value = "";
    }
  },
  deleteTodo: function() {
    let deleteTodoPosition = document.getElementById('deleteTodoPosition');
    if(isEmpty(deleteTodoPosition) === true) {
      return;
    } else {
      todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
      deleteTodoPosition.value = "";
    }
  },
  toggleCompleted: function() {
    let toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
    if(isEmpty(toggleCompletedPosition) === true) {
      return;
    } else {
      todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
      toggleCompletedPosition.value = "";
    }
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
}

let view = {
  displayTodos: function() {
    let todosUl = document.querySelector('ul');
    todosUl.innerHTML = "";
    for(let i = 0; i < todoList.todos.length; i++) {
      let todo = todoList.todos[i];
      let todoLi = document.createElement('li');
      let todoTextWithCompletion = "";
      if(todo.completed === true) {
        todoTextWithCompletion = "(x) " + todo.todoText;
         } else {
           todoTextWithCompletion = "() " + todo.todoText;
         }
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
}

function isEmpty(el) {
  let elValue = el.value;
  if(el.value === "" || null) {
    alert("This input can't be empty.");
    return true;
  }
  return false;
}