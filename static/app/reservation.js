Vue.component("reservation", {

    template:`

    <div class="container mt-5">

    	<div>

	    	<div class="row">

	    		<div class="col-lg-12 mt-2 mb-3">
	    			<h1 class="text-primary d-flex justify-content-left ml-3"> Rezervacije: </h1>
	    		</div>
	    	</div>



	    	<div class="row mt-4"  >
	    		
	      		<div class="col-12 border border-primary rounded m-3" v-for="row in reservations">

	      			<div class="row">


		      			<div class="col-2 m-3">
	    					<div class="d-flex justify-content-center mt-4" >
	    	        			<img :src="row.host.imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150">
	    	        		</div>        		
	    	        		<h3 class="d-flex justify-content-center text-primary mt-3">{{row.host.name}}&nbsp;{{row.host.surname }}</h3>
	    	        		<p class="d-flex justify-content-center text-primary"> Domacin </p>      
	                    </div>


	                    <div class="col-2 m-3">
	    					<div class="d-flex justify-content-center mt-4" >
	    	        			<img :src="row.guest.imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150">
	    	        		</div>        		
	    	        		<h3 class="d-flex justify-content-center text-primary mt-3">{{row.guest.name}}&nbsp;{{row.guest.surname }}</h3>
	    	        		<p class="d-flex justify-content-center text-primary"> Gost </p>      
	                    </div>

	                    <div class="col-2 m-3">


	                    </div>
	                    <div class="col-2 m-3">


	                    </div>
	 
	                    <div class="col-2 m-3	">
	                    	<div v-if="mode == 'ADMINISTRATOR'">
                            	<button type="button" class="btn btn-outline-success w-100 mt-3" >Otkazi</button>
                        	</div>

	                        <div v-if="mode == 'ADMINISTRATOR' || mode == 'HOST'">
                            	<button type="button" class="btn btn-outline-success w-100 mt-3" >Otkazi</button>
	                        </div>


	                        <div v-if="mode == 'ADMINISTRATOR' || mode == 'HOST'">
	                            <button type="button" class="btn btn-outline-danger w-100 mt-3">Obrisi</button>
	                        </div>


	                        <div v-if="mode == 'GUEST'">
	                          <a :href="'#/comments/' + row.idApartment">  <button type="button" class="btn btn-outline-primary w-100 mt-3">Ostavi komentar</button> </a>
	                        </div>




	                    </div>
	      			</div>

                    
	      		</div>


	      		
	        	
	    	</div>


	    </div>

    </div>`,

    data : function(){
    	return {
    		mode : 'NO_LOGIN',
    		reservations : []	
    	}
    },

    beforeMount(){
		axios
		.get('/validationAcces')
		.then()
		.catch(function(error){
			if(error.response.status == 403){
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
    	  	  .post('/getReservation')
          	  .then(response => {
          	  	this.reservations = response.data;
          	  });  
          });
    },
    methods : {
    	
    }
    
});