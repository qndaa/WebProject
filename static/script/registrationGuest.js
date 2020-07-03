$(document).ready(function() {
	
	var btn = $("#btnSubmit");

	btn.click(function(event) {
		event.preventDefault();

		let name = $("#name").val();
		let surname = $("#surname").val();
		let username = $("#username").val();
		let password = $("#password").val();
		let gender= $("#grender").val();

		var dataGuest = {
			"name" : name,
			"surname" : surname,
			"username" : username,
			"password" : password,
			"gender" : gender
		};

		$.ajax({
			url: '/registrationGuest',
			type: 'post',
			contentType : "application/json",
			data: JSON.stringify(dataGuest),
		success: function(answer){
				if(answer == true){
					alert("svaka cast");
				}else{

					alert("Korisnik postoji sa tim korisnickim imenom");
				}

		}});
		
		
	});


});