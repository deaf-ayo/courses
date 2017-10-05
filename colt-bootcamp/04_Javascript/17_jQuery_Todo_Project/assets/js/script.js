// check off specific Todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

  $("input[type='text']").keypress(function(event){
  if(event.which === 13) {
    // prevent empty todos
    if($(this).val() !== "") {
      // grabbing new todo text from input
      let todoText = $(this).val();
      $(this).val("");
      // create a new li and add to ul
      $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
    }
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});