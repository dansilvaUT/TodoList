$(document).ready(function(){
	$("input[type='text']").keypress(function(event){
		if(event.which === 13){
			//grabbing new todo text from input
			const $todoText = $(this).val();
			$(this).val("");
			//create a new li and add to ul
			const $li = $("<li>" + $todoText + "</li>");
			$("ul").append($li);
			$($li).prepend("<span class='complete'><i class='far fa-check-square'></i></span><span class='delete'><i class='fa fa-trash'></i></span>");
		}

	});
	//Hide and show the input field
	const $input = $('#task-input').hide();
	$('#toggle-form').click(function(){
		$($input).fadeToggle();
	});
	//Mark completed tasks
	$('ul').on('click', '.complete',function(){
		$(this).parent().toggleClass('completed');
	});
	//Delete and remove tasks
	$('ul').on('click', '.delete',function(){
		$(this).parent().fadeOut(400, function(){
			$(this).remove();
		});
	}); 
});
