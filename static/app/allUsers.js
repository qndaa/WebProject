Vue.component("all-users", {

    template:'<div>AllUSers </div>',

	beforeMount(){
		axios
		.get('/validationAccesAdmin')
		.then()
		.catch(function(eror){
			if(eror.response.status == 403){
				 window.location.href = "/#/validationAcces"; 
			}
		})
	},


});