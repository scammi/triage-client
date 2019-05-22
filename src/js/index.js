
$(document).ready(function(){

	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function(data) {
			name = data.results[0].name.first + " " + data.results[0].name.second ;
			$("#name").html(name)
			console.log(name);
		}
	});

	$("#name").click(function(){
		$("patient_name").html(name);

	})
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
	// Changing the class of status label to support Bootstrap 4
    var bs = $.fn.tooltip.Constructor.VERSION;
    var str = bs.split(".");
    if(str[0] == 4){
        $(".label").each(function(){
        	var classStr = $(this).attr("class");
            var newClassStr = classStr.replace(/label/g, "badge");
            $(this).removeAttr("class").addClass(newClassStr);
        });
    }
})
