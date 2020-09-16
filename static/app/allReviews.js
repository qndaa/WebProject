Vue.component("all-reviews", {

    template:`



    <div class="container mt-5">

    	<div v-if="mode === 'HOST'">

	    	<div class="row">

	    		<div class="col-lg-8 mt-2 mb-3">
	    			<h1 class="text-primary d-flex justify-content-left ml-3"> Korisnici: </h1>

	    		</div>

	    		

	    		<div class="col-lg-4 mt-2 ">
	    			<form class="form-inline d-flex justify-content-center mt-2">
        				<input v-model="searchInput" class="form-control" type="text" placeholder="Search" aria-label="Search" v-on:keyup="search">
      				</form>

	    		</div>
	    		

	    	</div>



	    	<div class="row mt-4"  >
	    		
	      		<div class="col-4 " v-for="row in searchUser">
                    <div class="m-3 border border-primary rounded">
    					<div class="d-flex justify-content-center mt-4" >
    	        			<img :src="row.imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150">
    	        		</div>        		
    	        		<h3 class="d-flex justify-content-center text-primary mt-3">{{row.name}}&nbsp;{{row.surname }}</h3>
    	        		<p class="d-flex justify-content-center text-primary"> Uloga: {{row.typeOfUser}} </p>


                       

                       
                        
                    </div>
	      		</div>


	      		
	        	
	    	</div>


	    </div>

    </div>`,
    data : function(){
    	return {
    		mode : 'NO_LOGIN',
    		user : '',
    		users : [],
    		searchUser : [],
    		searchInput : ""
    	}
    },

    beforeMount(){
		axios
		.get('/validationAccesHost')
		.then()
		.catch(function(eror){
			if(eror.response.status == 403){
				 window.location.href = "/#/validationAcces"; 
			}
		})
	},

    mounted() {
    	axios
          .get('/sesion')
          .then(response => {
          	this.mode = response.data.typeOfUser;
          	this.user = response.data;
          	axios
    	  	  .get('/allUsers')
          	  .then(response => {
          	  	this.users = response.data;
 				this.searchUser = response.data;

          	  });  
          });
    },  	                                                                          
    		
    methods : {
    	search : function(event) {
    		this.searchUser = [];
    		var search = this.searchInput.toLowerCase().trim();

    		if(search.length == 0) {
    			this.searchUser = this.users;
    			
    			return;
    		}
    		if(search.split(" ").length > 2){
    			this.searchUser = [];
    		} else if(search.split(" ").length == 1) {

    			for(var user of this.users){
    				if(user.name.toLowerCase().indexOf(search) !== -1 || user.surname.toLowerCase().indexOf(search) !== -1){
    					this.searchUser.push(user);
    				}
    			}
    		} else if(search.split(" ").length == 2) {
    			var tokens = search.split(" ");

    			for(var user of this.users){
    				if(user.name.toLowerCase().indexOf(tokens[0]) !== -1 && user.surname.toLowerCase().indexOf(tokens[1]) !== -1) {
    					this.searchUser.push(user);
    				} else if(user.name.toLowerCase().indexOf(tokens[1]) !== -1 && user.surname.toLowerCase().indexOf(tokens[0]) !== -1) {
    					this.searchUser.push(user);
    				}
    			}
    		}

    	}

    }
});