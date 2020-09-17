Vue.component("reservation", {

    template:`

    <div class="container mt-5">

    	<div>

	    	<div class="row">

	    		<div class="col-lg-12 mt-2 mb-3">
	    			<h1 class="text-primary d-flex justify-content-left ml-3"> Rezervacije: </h1>
	    		</div>
	    	</div>

	    	<div class="row mt-4">
	    		<div class="card col-3  p-3 m-3">
			    	<div > 
			    		<h3 class="text-primary">Sortiraj po ceni </h3>
			    		<hr>
			    	</div>
			    	<div class="d-flex justify-content-between" >
			    		<p><input type="radio"  value="growing" v-model="sortingType" v-on:change="sortReservations"> Rastuce </p>
			    	</div>
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="radio"  value="descending" v-model="sortingType" v-on:change="sortReservations"> Opadajuce</p>
			    	</div>

		    	</div>

		    	<div class="card col-5 p-3 m-3 border">
		    		<div > 
			    		<h3 class="text-primary">Filtr po statusu</h3>
			    		<hr>
			    	</div>
			    	<div class="row ">
			    		<div class="col-6 ">
			    		<div  >
			    			<label><input type="checkbox" value="CREATE" v-model="listOfStatusReservation" v-on:change="filter"> Kreirana  </label>
			    		</div>
			    		 </div>
			    		 <div class="col-6 ">
			    			<div  >
			    			<label><input type="checkbox" value="ACCEPTED" v-model="listOfStatusReservation" v-on:change="filter" > Prihvacena  </label>
			    			</div>
			    		 </div>
			    	</div>
			    	<div class="row ">
			    		<div class="col-6 ">
			    		<div  >
			    			<label><input type="checkbox" value="QUITED" v-model="listOfStatusReservation" v-on:change="filter"> Odustanak  </label>
			    		</div>
			    		 </div>
			    		 <div class="col-6 ">
			    			<div  >
			    			<label><input type="checkbox" value="DECLINE" v-model="listOfStatusReservation" v-on:change="filter"> Odbiejena  </label>
			    			</div>
			    		 </div>
			    	</div>
			    	<div class="row ">
			    		<div class="col-6 ">
			    		<div  >
			    			<label><input type="checkbox" value="COMPLETED" v-model="listOfStatusReservation" v-on:change="filter"> Zavrsena  </label>
			    		</div>
			    		 </div>
			    			
			    	</div>


			    	


		    	</div>
		    	<div class="card col p-3 m-3 border"  v-if="mode=='ADMINISTRATOR' || mode == 'GUEST'">
		    		<div > 
			    		<h3  class="text-primary">Pretraga po korisnickom imenu</h3>
			    		<hr>
			    	</div>

		    		<div>
			    		<label>Pretraga: </label>
			    		<input type="text" v-model="usernamaSearch" />
			    	</div>
		    		<div class="d-flex justify-content-end">
		    		<button class="btn bg-primary"  v-on:click="search">Pretrazi </button>
		    		</div>
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
    		reservations : [],
    		sortingType : "",
    		listOfStatusReservation : [],
    		withoutFilterReservation : [],
    		filterList2 : [],
    		searchList2 : [],
    		flegFilter2 : false,
    		flegSearch2 : false,
    		usernamaSearch : ""
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
          	  	this.withoutFilterReservation = this.reservations;
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
    	},

    	sortReservations : function(){
    		
    		if(this.sortingType === "" || this.reservations === undefined) return;

    		if(this.sortingType === 'growing'){
    			for (var i = 0; i < this.reservations.length-1 ; i++) {
    				for (var j = i+1; j < this.reservations.length; j++) {
    					if(this.reservations[i].price>this.reservations[j].price){
    						let temp = this.reservations[i];
    						this.reservations[i] = this.reservations[j];
    						this.reservations[j] = temp;
    					}
    				}	
    			}
    		}else{
    			for (var i = 0; i < this.reservations.length-1 ; i++) {
    				for (var j = i+1; j < this.reservations.length; j++) {
    					if(this.reservations[i].price<	this.reservations[j].price){
    						let temp = this.reservations[i];
    						this.reservations[i] = this.reservations[j];
    						this.reservations[j] = temp;
    					}
    				}	
    			}
    		}

    	},
    	filterByStatusOfReservation : function(){

    		if(this.listOfStatusReservation.length == 0) {

    			return this.withoutFilterReservation;
    		}

    		this.flegFilter2 = true;
    		var list = [];
    		for(res of this.withoutFilterReservation){
    			for(status of this.listOfStatusReservation){
    				if(res.statusReseravation == status){
    					list.push(res);
    				}
    			}
    		}

    		return  list;

    	},
    	filter : function(){
    		this.filterList2 = [];
    		this.flegFilter2 = false;

    		this.filterList2 = this.filterByStatusOfReservation();

    		this.crosSearchFilters();

    	},
    	searchByUsernameOfGuest : function (){

    		if(this.usernamaSearch == "") return this.withoutFilterReservation;

    		this.flegSearch2 = true;  		
    		var list = [];
    		for(res of this.withoutFilterReservation){
    			if(res.guest.username == this.usernamaSearch){	
    				list.push(res);
    				return list;
    			}
    		}

    	},
    	search : function() {
    		this.searchList2 = [];
    		this.flegSearch2 = false;
    		this.searchList2 = this.searchByUsernameOfGuest();

    		this.crosSearchFilters();


    	},
    	crosSearchFilters : function(){

    		let list = [];
    		if(!this.flegSearch2 && !this.flegFilter2){
    			list = this.withoutFilterReservation;
    		}
    		if(this.flegFilter2 && !this.flegSearch2){
                list = this.filterList2;
            }
            if(!this.flegFilter2 && this.flegSearch2){
                list = this.searchList2;
            }


            if(this.flegSearch && this.flegFilter2){
            	for(fi of this.filterList2){
            		for(se of this.searchList2){
            			if(fi.idReservation == se.idReservation){
            				list.push(fi);
            			}
            		}
            	}
            }

            this.reservations = list;
            this.sortReservations();


    	}








    	
    }
    
});