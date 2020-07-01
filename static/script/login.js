$(document).ready(function(){

	let forma = $("#formaLogin");

	forma.submit(function(event) {
		event.preventDefault();
		var userName = $("input[name=username]").val();
		var pas = $("input[name=password]").val();
		alert(userName + " " + pas);
		
		var dataUser ={
			"username": userName,
			"password" : pas
		};

		$.ajax({
			url: '/login',
			type: "post",
			data: {"username": userName, "password": pas},
			success : function(answers){
				if(answers == true){
					alert("Korisnik ne postoji");
					return;
				}
					alert("Uspesno ste se ulogovali");

			}
		});

	});

});