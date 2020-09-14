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



	    	<div class="row mt-4"  >
	    		
	      		<div class="col-4 " v-for="row in getSearchAndFilterUsers()">
                    <div class="m-3 border border-primary rounded">
    					<div class="d-flex justify-content-center mt-4" >
    	        			<img :src="row.imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150">
    	        		</div>        		
    	        		<h3 class="d-flex justify-content-center text-primary mt-3">{{row.name}}&nbsp;{{row.surname }}</h3>
    	        		<p class="d-flex justify-content-center text-primary"> Uloga: {{row.typeOfUser}} </p>


                        <div v-if="row.typeOfUser != 'ADMINISTRATOR' && row.isBlocked === false " class="d-flex justify-content-center mt-2">
                            <button type="button" class="btn btn-outline-danger mb-2 w-75" v-on:click="blockUser($event, row)">Blokiraj</button>
                        </div>

                        <div v-if="row.typeOfUser != 'ADMINISTRATOR' && row.isBlocked === true " class="d-flex justify-content-center">
                            <button type="button" class="btn btn-outline-success mb-2 w-75" v-on:click="unblockUser($event, row)">Odblokiraj</button>
                        </div>

                        <div v-if="row.typeOfUser == 'GUEST'" class="d-flex justify-content-center">
                            <button type="button" class="btn btn-outline-success mb-1 w-75" v-on:click="createHost($event, row)">Kreiraj domacina</button>
                        </div>

                        
                    </div>
	      		</div>


	      		
	        	
	    	</div>


	    </div>

    </div>`

    ,
    data : function(){
    	return {
    		mode : 'NO_LOGIN',
    		users : [],
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

          	  });  
          });
    },  	                                                                          
    		
    methods : {
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
    	},
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

    	},
    	getSearchAndFilterUsers : function(){
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
    	},

        createHost : function(event, user) {

            axios
                .post('/createHost', user)
                .then(response => {
                    this.users = response.data
                    user.typeOfUser = 'HOST';
                });
        }, 
        blockUser : function(event, user) {
            axios.post("/blockUser", null, {params : {'username' : user.username}})
                .then(response => {
                    this.users = response.data;

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Korisnik uspjesno blokiran!',
                        showConfirmButton: false,
                        timer: 1200
                    })

                    user.isBlocked = true;

                });

        },
        unblockUser : function(event, user) {
            axios.post("/unblockUser", null, {params : {'username' : user.username}})
                .then(response => {
                    this.users = response.data;
                        Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Korisnik uspjesno odblokiran!',
                        showConfirmButton: false,
                        timer: 1200
                    })

                    user.isBlocked = false;

                });
        }




    }

});