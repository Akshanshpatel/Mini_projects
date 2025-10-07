//adding new todo

function addTodo(){
        const text=$('#todo-input').val().trim();
        if(text==='')return;
        $('#todo-input').val('');
        $('#todo-list').append(`<li>${text} <button class="done">done</button><button class="del">delete</button></li>`)
}

//on add button or enter add the item(li)
  $('#add-btn').on('click', addTodo);
$('#todo-input').on('keydown', function(e) {
    if (e.key === 'Enter' || e.which === 13) {
      addTodo();
    }
  });

//removing todo
$('#todo-list').on('click', '.del', function() {
  $(this).parent().remove();
});

//marking as completed
$('#todo-list').on('click', '.done', function() {
    $(this).parent().css('background-color', 'lightgreen');
    $(this).remove();
});
