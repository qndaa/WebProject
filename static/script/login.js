

$(document).ready(function() {
	var btn = $("#loginBtn");
	btn.click(function(event) {
		event.preventDefault();

		let username = $("input[name=username]").val();
		let password = $("input[name=password]").val();


		$.ajax({
			url: '/login',
			type: 'post',
			data: {"username": username ,"password": password},
			success : function(answer){

				if(answer == null){
					alert("Username ili password pogresan");
	
				}else{
					if(answer.typeOfUser === "ADMINISTRATOR"){
						window.location.href = "/users/administrator.html";
					}else if (answer.typeOfUser === "GUEST") {
						window.location.href = "/users/guest.html";
					}else if (answer.typeOfUser === "HOST") {
						window.location.href = "/users/host.html";
					}
				}

			
		}})
		

	});
	
});