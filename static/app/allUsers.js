Vue.component("all-users", {
	
    template:`

    <div class="container mt-5">

    	<div v-if="mode === 'ADMINISTRATOR'">

	    	
	    	<div class="row">

	    		<div class="col-lg-4 mt-2 mb-3">
	    			<h1 class="text-primary d-flex justify-content-center"> Korisnici: </h1>

	    		</div>

	    		<div class="col-lg-4 mt-4 d-flex justify-content-center">

	    			<div class="custom-control custom-checkbox custom-control-inline">
					  <input v-model="administratorsCheckBox" type="checkbox" class="custom-control-input" checked id="administrators" @change="refreshUsers">
					  <label class="custom-control-label text-primary" for="administrators">Administratori</label>
					</div>
					
					<div class="custom-control custom-checkbox custom-control-inline">
					  <input v-model="hostsCheckBox" type="checkbox" class="custom-control-input" checked id="hosts" @change="refreshUsers">
					  <label class="custom-control-label text-primary" for="hosts">Domacini</label>
					</div>


					<div class="custom-control custom-checkbox custom-control-inline">
					  <input v-model="guestsCheckBox" type="checkbox" class="custom-control-input" checked id="guests" @change="refreshUsers">
					  <label class="custom-control-label text-primary" for="guests">Gosti</label>
					</div>
	    		</div>

	    		<div class="col-lg-4 mt-2 ">
	    			<form class="form-inline d-flex justify-content-center mt-2">
        				<input v-model="searchInput" class="form-control" type="text" placeholder="Search" aria-label="Search" v-on:keyup="search">
      				</form>

	    		</div>
	    		

	    	</div>



	    	<div class="row" v-for="row in rowUsers" >

	    		
	      		<div class="col-lg-4 mt-4" v-if="row[0]">
					<div class="d-flex justify-content-center" >
	        			<img :src="row[0].imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150">
	        		</div>        		
	        		<h3 class="d-flex justify-content-center text-primary mt-3">{{row[0].name}}&nbsp;{{row[0].surname }}</h3>
	        		<p class="d-flex justify-content-center text-primary"> Uloga: {{row[0].typeOfUser}} </p>
	      		</div>


	      		<div class="col-lg-4 mt-4" v-if="row[1]">
	      			<div class="d-flex justify-content-center" >
	        			<img :src="row[1].imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150">
	        		</div>
	        		<h3 class="d-flex justify-content-center text-primary mt-3">{{row[1].name}} &nbsp; {{row[1].surname }}</h3>
	        		<p class="d-flex justify-content-center text-primary"> Uloga: {{row[1].typeOfUser}} </p>
	        	</div>


	        	
	      		<div class="col-lg-4 mt-4" v-if="row[2]" >
					<div class="d-flex justify-content-center" >
	        			<img :src="row[2].imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150">
	        		</div>        		
	        		<h3  class="d-flex justify-content-center text-primary mt-3">{{row[2].name}} &nbsp; {{row[2].surname }}</h3>
	        		<p class="d-flex justify-content-center text-primary"> Uloga: {{row[2].typeOfUser}} </p>
	        	</div>
	        	
	    	</div>


	    </div>

    </div>`

    ,
    data : function(){
    	return {
    		mode : 'NO_LOGIN',
    		users : [],
    		rowUsers : [],
    		filteredUsers : [],
    		searchUser : [],
    		administratorsCheckBox : true,
    		hostsCheckBox : true,
    		guestsCheckBox : true,
    		searchInput : ""
    	}
    },

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

    mounted() {
    	axios
          .get('/sesion')
          .then(response => {
          	this.mode = response.data.typeOfUser
          	axios
    	  	  .get('/allUsers')
          	  .then(response => {
          	  	this.users = response.data;
 				this.filteredUsers = response.data;
 				this.searchUser = response.data;
          	  	this.getRowUsers(this.getSearchAndFilterUsers());
          	  });  
          });
    },  	                                                                          
    		
    methods : {
    	getRowUsers : function(users) {
    		var partsUsers = [];
    		var i,j,temparray,chunk = 3;

			for (i=0,j=users.length; i<j; i+=chunk) {
    			temparray = users.slice(i,i+chunk);
    			partsUsers.push(temparray);
			}		
			this.rowUsers = partsUsers;
    	},
    	refreshUsers : function() {

    		this.filteredUsers = [];
    		
    		
    		for(var user of this.users) {

 
    			if(user.typeOfUser === "ADMINISTRATOR" && this.administratorsCheckBox === true) {
    				this.filteredUsers.push(user);
    			}

    			if(user.typeOfUser === "HOST" && this.hostsCheckBox === true) {
    				this.filteredUsers.push(user);
    			}

    			if(user.typeOfUser === "GUEST" && this.guestsCheckBox === true) {
    				this.filteredUsers.push(user);
    			}
    		}
    		this.getRowUsers(this.getSearchAndFilterUsers());
    	},
    	search : function(event) {
    		this.searchUser = [];
    		var search = this.searchInput.toLowerCase().trim();

    		if(search.length == 0) {
    			this.searchUser = this.users;
    			this.getRowUsers(this.getSearchAndFilterUsers());
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

    		this.getRowUsers(this.getSearchAndFilterUsers());

    	},
    	getSearchAndFilterUsers(){
    		if(this.searchUser.length === 0 || this.filteredUsers.length === 0) return [];

    		var searchAndFilteredUsers = [];

    		for(var fUser of this.filteredUsers) {
    			for(var sUser of this.searchUser) {
    				if(fUser.username === sUser.username) {
    					searchAndFilteredUsers.push(fUser);
    				}
    			}
    		}

    		return searchAndFilteredUsers;
    	}


    }

});