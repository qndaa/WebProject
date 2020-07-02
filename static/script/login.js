var login = new Vue({
	el: '#login',
	data :{
		user : null,
	},
	methods: {
		isvalid : function(){
			let userName = this.name;
			let password = this.password;
			axios.post("/login",{"username": userName, "password": password})
			.then(response=> alert("Vrati nesto"));
		}

	}




})