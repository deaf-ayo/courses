// BUDGET CONTROLLER
let budgetController = (function() {

  // code

})();

// UI CONTROLLER
let UIController = (function() {

  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();

// GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

  let DOM = UICtrl.getDOMstrings();

  let ctrlAddItem = function() {

    // 1. get the field input data
    let input = UICtrl.getInput();
    console.log(input);
    // 2. add the item to the budget controller
    // 3. add the item to the UI
    // 4. calculate the budget
    // 5. display the budget on the UI

  }

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keyup', function(event) {

    if (event.key === 'Enter' || event.which === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);