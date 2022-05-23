$(document).on('submit', '#clbattle_form', function form_post(event) {
	event.preventDefault();
	var form = $('#clbattle_form');
	var form_url = form.prop('action')
	var req_type = form.prop('method')
	cl_data={
			username: $("#username").val(),
			email:$("#email").val(),
			key:$("#key").val()
		};
	$.ajax({
		url: form_url,
		'contentType': 'application/json',
		data:JSON.stringify(cl_data),
		type: req_type,
		success: function (data) {
			console.log(data);
			if(data=="Key correct"){
				$("#error").css('visibility', 'hidden');
				window.location.replace("https://ieeesbgeci.github.io/cl-battle-lvl15/winner")
			}else{
				$("#error").css('visibility', 'visible');
			}

		}
	})
});