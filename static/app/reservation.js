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


		      			<div class="col-2 m-3" v-if="mode=='ADMINISTRATOR' || mode == 'GUEST'">
	    					<div class="d-flex justify-content-center mt-4" >
	    	        			<img :src="row.host.imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150">
	    	        		</div>        		
	    	        		<h3 class="d-flex justify-content-center text-primary mt-3">{{row.host.name}}&nbsp;{{row.host.surname }}</h3>
	    	        		<p class="d-flex justify-content-center text-primary"> Domacin </p>      
	                    </div>


	                    <div class="col-2 m-3" v-if="mode=='ADMINISTRATOR' || mode == 'HOST'">
	    					<div class="d-flex justify-content-center mt-4" >
	    	        			<img :src="row.guest.imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150">
	    	        		</div>        		
	    	        		<h3 class="d-flex justify-content-center text-primary mt-3">{{row.guest.name}}&nbsp;{{row.guest.surname }}</h3>
	    	        		<p class="d-flex justify-content-center text-primary"> Gost </p>      
	                    </div>

	                    <div class="col-2 m-3 text-primary">
	                    	<p>
	    					<label class="font-weight-bold">Tip apartmana:  </label>{{row.reservedApartment.typeOfApartment}}
	    					</p>
	    					
	    					<p>
	    					<label class="font-weight-bold">Broj soba </label> : {{row.reservedApartment.numberOfRoom}}
	    					</p>
	    					<p>
	    					<label class="font-weight-bold">Broj Gostiju </label> : {{row.reservedApartment.numberOfGuests}}
	    					</p>
	    					<p>
	    					<label class="font-weight-bold" >Lokacija: </label> <p>{{row.reservedApartment.location.address.street}} {{row.reservedApartment.location.address.numberHouse}}, {{row.reservedApartment.location.address.city}} {{row.reservedApartment.location.address.postNumber}}   </p> 
	    				
	    					</p>



	                    </div>
	                    <div class="col-2 m-3 text-primary">
	                    	<p class="text-danger">
	    					<label class="font-weight-bold text-primary">Cena:&nbsp;  </label>{{row.price}}
	    					</p>

	    					<p>
	    					<label class="font-weight-bold ">Pocetak rezervacije:&nbsp;  </label>{{row.startTime}}
	    					</p>

	    					<p>
	    					<label class="font-weight-bold ">Broj nocenja:&nbsp;  </label>{{row.numberOfNights}}
	    					</p>

	    					<p>
	    					<label class="font-weight-bold ">Status rezervacije:&nbsp;  </label>{{row.statusReseravation}}
	    					</p>


	                    </div>

	                    <div class="col-2 m-3">

	                    </div>
	 
	                    <div class="col-2 m-3	">
	                    	<div v-if="mode == 'HOST' && row.statusReseravation=='CREATE'">
                            	<button type="button" class="btn btn-outline-success w-100 mt-3" v-on:click="changeStatus($event, row, 'ACCEPTED')" >Prihvati</button>
                        	</div>

	                        <div v-if="mode == 'HOST' && (row.statusReseravation=='ACCEPTED' || row.statusReseravation=='CREATE')">
                            	<button type="button" class="btn btn-outline-danger w-100 mt-3" v-on:click="changeStatus($event, row, 'DECLINE')">Odbiti</button>
	                        </div>

	                        <div v-if="mode == 'HOST' && checkDate() && row.statusReseravation == 'ACCEPTED'">
                            	<button type="button" class="btn btn-outline-success w-100 mt-3" v-on:click="changeStatus($event, row, 'COMPLETED')">Zavrsena</button>
                        	</div>

                        	<div v-if="mode =='GUEST' && (row.statusReseravation=='ACCEPTED' || row.statusReseravation=='CREATE')">
                        		<button type="button" class="btn btn-outline-danger w-100 mt-3" v-on:click="changeStatus($event, row, 'QUITED')">Otkazi</button>


                        	</div>


	                        <div v-if="mode == 'GUEST' && (row.statusReseravation=='DECLINE' || row.statusReseravation=='COMPLETED')">
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

    	checkDate : function() {
    		return true;
    	},

    	changeStatus : function(event, item, status) {
    		
    		axios.post("/changeReservationStatus", null, {params : {'id' : item.idReservation, 'status' : status}})
    			.then(response => {
    				

    				if(response.data == true) {
    					Swal.fire({
			              position: 'center',
			              icon: 'success',
			              title: 'Uspjesno menjanje statusa!',
			              showConfirmButton: false,
			              timer: 1000

            			})
            			item.statusReseravation = status;
    				} else {
    					Swal.fire({
			              position: 'center',
			              icon: 'error',
			              title: 'Greska!',
			              showConfirmButton: false,
			              timer: 1000
			            })

    				}


    			});
    	}
    	
    }
    
});