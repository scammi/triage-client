let datas;

async function getData(){
	await $.ajax({
			 url: 'https://randomuser.me/api/',
			 dataType: 'json',
			 success: function(data) {
				 	datas = data;


				 //let name = data.results[0].name.first + " " + data.results[0].name.last;
				 //age = (data.results[0].dob.age).toString();
			 //	$("#name").html(name);
				 //$("#patient").html(name);
					//$("#age").html(age);
			 }
		 });

	}



$(document).ready(function(){
	/*
		Gets ramdom user json data
		Saves name and age into vars
		Finds by id and displys in html
	*/

async function getAge(){
await getData()
console.log(datas)
}

getAge();

//Filter patients by triage
	$("button").click(function(){
		var inputValue = $(this).val();
		console.log(age);
		if(inputValue != 'All'){
			var target = $('table tr[data-status="' + inputValue + '"]');
			$("table tbody tr").not(target).hide();
			target.fadeIn();
		} else {
			$("table tbody tr").fadeIn();
		}
	});

})
