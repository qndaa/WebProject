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
					  <input type="checkbox" class="custom-control-input" checked id="defaultInline1">
					  <label class="custom-control-label text-primary" for="defaultInline1">Administratori</label>
					</div>

					
					<div class="custom-control custom-checkbox custom-control-inline">
					  <input type="checkbox" class="custom-control-input" checked id="defaultInline2">
					  <label class="custom-control-label text-primary" for="defaultInline2">Domacini</label>
					</div>

					<div class="custom-control custom-checkbox custom-control-inline">
					  <input type="checkbox" class="custom-control-input" checked id="defaultInline3">
					  <label class="custom-control-label text-primary" for="defaultInline3">Gosti</label>
					</div>
	    		</div>

	    		<div class="col-lg-4 mt-2 ">
	    			<form class="form-inline d-flex justify-content-center mt-2">
        				<input class="form-control" type="text" placeholder="Search" aria-label="Search">
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
    		rowUsers : []
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
          	  	this.users = response.data
          	  	this.getRowUsers();
          	  });  
          });
    },   	                                                                          
    		
    methods : {
    	getRowUsers : function() {
    		var partsUsers = [];
    		var i,j,temparray,chunk = 3;

			for (i=0,j=this.users.length; i<j; i+=chunk) {
    			temparray = this.users.slice(i,i+chunk);
    			partsUsers.push(temparray);
			}		
			this.rowUsers = partsUsers;
    	}


    }

});