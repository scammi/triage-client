let name;
$(document).ready(function(){

	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function(data) {
			name = data.results[0].name.first + " " + data.results[0].name.last;
			age = (data.results[0].dob.age).toString();
			$("#name").html(name);
			$("#patient").html(name);
			$("#age").html(age);
			console.log(age);

		}
	});

//Filter patients by triage
	$(".btn-group .btn").click(function(){
		var inputValue = $(this).find("input").val();
		if(inputValue != 'all'){
			var target = $('table tr[data-status="' + inputValue + '"]');
			$("table tbody tr").not(target).hide();
			target.fadeIn();
		} else {
			$("table tbody tr").fadeIn();
		}
	});

})
