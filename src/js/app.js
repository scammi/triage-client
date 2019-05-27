$(document).ready(function(){

	/*
		Gets ramdom user json data
		Saves name and age into vars
		Finds by id and displys in html
	*/
	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function(data) {
			let name = data.results[0].name.first + " " + data.results[0].name.last;
			let age = (data.results[0].dob.age).toString();
			$('#patientTable tr:last').after('<tr data-status="Wait"><td>6</td><td><a href="#">'+ name +'</a></td></tr>');
			$("#name").html(name);
			$("#patient").html(name);
			$("#age").html(age);
			console.log(age);

		}
	});

//tempusdominus-bootstrap time picker 
$("#transferDateTimeicker").datetimepicker();
$("#triageDateTimeicker").datetimepicker();


//Filter patients by triage
	$("button").click(function(){
		var inputValue = $(this).val();
		console.log(inputValue)
		if(inputValue != 'All'){
			var target = $('table tr[data-status="' + inputValue + '"]');
			$("table tbody tr").not(target).hide();
			target.fadeIn();
		} else {
			$("table tbody tr").fadeIn();
		}
	});

})
