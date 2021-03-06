let todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    this.todos.forEach(function(todo){
      if(todo.completed === true) {
        completedTodos++;
      }
    });
    this.todos.forEach(function(todo){
      if(completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    })
  }
};

let handlers = {
  addTodo: function() {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    if(isEmpty(addTodoTextInput) === true) {
      return;
    } else {
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";
    }
    view.displayTodos();
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
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    let toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
    if(isEmpty(toggleCompletedPosition) === true) {
      return;
    } else {
      todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
      toggleCompletedPosition.value = "";
    }
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
}

let view = {
  displayTodos: function() {
    let todosUl = document.querySelector('ul');
    todosUl.innerHTML = "";
    todoList.todos.forEach(function(todo, position){
      let todoLi = document.createElement('li');
      let todoTextWithCompletion = "";
      if(todo.completed === true) {
        todoTextWithCompletion = "(x) " + todo.todoText;
         } else {
           todoTextWithCompletion = "() " + todo.todoText;
         }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    let todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {
      let elementClicked = event.target;
      if(elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(event.target.parentNode.id));
      }
    });
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

view.setUpEventListeners();