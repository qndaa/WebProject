Vue.component("apartments", {

    template:`
    <div class="container text-primary">

    	<div class="row">

		    <div class="col-sm-4" v-show="show==='aktivni'">
		    	
		    	<div class="anyUsers card p-3 m-3"> 
		    		<div class=""> 
			    		<h3 class="">Trazi </h3>
			    		<hr>
			    	</div>

					<div class="align-self-start mb-3" >
			    		<p class="mb-1 ">Izaberite datum dolaska:</p>
			    		 <input   type="date" id="datepicker1" name="birthday" v-model="startDate"> 
			    	</div>

					<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Izaberite datum odlaska:</p>
			    		 <input type="date" id="datepicker21" v-model="endDate" > 
			    	</div>

			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite drzavu:</p>
			    		 <input   type="text" v-model="country"> 
			    	</div>

			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite grad:</p>
			    		 <input   type="text" v-model="city" > 
			    	</div>

			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite minimalnu cenu:</p>
			    		 <input   type="number" v-model="minPrice" > 
			    	</div>
			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite maksimalnu cenu:</p>
			    		 <input   type="number" v-model="maxPrice"> 
			    	</div>

			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite minimalnu broj soba:</p>
			    		 <input   type="number" v-model="minRoom" > 
			    	</div>
			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite maksimalnu broj soba:</p>
			    		 <input   type="number" v-model="maxRoom" > 
			    	</div>

			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite minimalnu broj osoba:</p>
			    		 <input   type="number" v-model="minPeople" > 
			    	</div>
			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite maksimalnu broj osoba:</p>
			    		 <input   type="number" v-model="maxPeople" > 
			    	</div>

			    	<button class="btn bg-primary" v-on:click="search"> Pretrazi </button>

		    	</div>



		    	<div class="card  p-3 m-3">
			    	<div class="Guest"> 
			    		<h3 class="">Sortiraj po ceni </h3>
			    		<hr>
			    	</div>
			    	<div class="d-flex justify-content-between" >
			    		<p><input type="radio"  value="growing" v-model="sortingType" v-on:change="sortApartments"> Rastuce </p>
			    	</div>
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="radio"  value="descending" v-model="sortingType" v-on:change="sortApartments"> Opadajuce</p>
			    	</div>

		    	</div>

		    	<div class="card p-3 m-3"> 
		    		<div class="Guest"> 
			    		<h3 class="">Vrsta smestajnog objekta </h3>
			    		<hr>
			    	</div>
			    	<div class="d-flex justify-content-between" >
			    		<p><input type="checkbox"  value="FULL_APARTMENT" v-model="typeOfAccommodation" v-on:change="filters"> Ceo apartman </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox"  value="ROOM" v-model="typeOfAccommodation" v-on:change="filters"> Soba </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>
		    	</div>

		    	<div class="card p-3 m-3"> 
		    		<div class="Guest"> 
			    		<h3 class="">Pogodnosti </h3>
			    		<hr>
			    	</div>
			    	<div class="d-flex justify-content-between" v-for="c in listOfContent" >
			    		<p><input type="checkbox"  v-bind:value="c.id" v-model="listOfEssentials" v-on:change="filters"> {{c.name}} </p>
			    	</div>
			    	

		    	</div>

		    
		    </div>

		    <div class=" col-sm-8">

		    	<div class=" row p-3 m-3 border rounded" v-for="a in appartments" v-if='a.isActive'>
		   			<div class="col">
    					<img class="img-fluid border border-secondary" v-bind:src="a.urlImages[0]"> 
    				</div>

    				<div class="col">
    					<p v-if="a.typeOfApartment == 'ROOM'">
    					<label>Tip apartmana </label>: Soba
    					</p>
    					<p v-else>
    					<label>Tip apartmana </label>: Ceo apartman 
     					</p>
    					<p>
    					<label>Broj soba </label> : {{a.numberOfRoom}}
    					</p>
    					<p>
    					<label>Broj Gostiju </label> : {{a.numberOfGuests}}
    					</p>
    					<p>
    					<label class="" >Lokacija: <p>{{a.location.address.street}} {{a.location.address.numberHouse}}, {{a.location.address.city}} {{a.location.address.postNumber}}   </p></label> 
    				
    					</p>
       				</div>
       				
       				<div class="col">
       					<div><h5 class="font-weight-bold mb-3"> Cena:  {{a.pricePerNight}} &euro;</h5></div>

       					<div><a :href="'#/apartment/' + a.id"><button class="btn bg-primary text-white w-75 mt-3"> Procitaj vise </button></a> </div>

                        <div v-if="mode == 'ADMINISTRATOR' && a.status =='PASSIVE'">
                            <button type="button" class="btn btn-outline-success w-75 mt-3" v-on:click="approveApartment($event, a.id)">Aktiviraj</button>
                        </div>

                        <div v-if="mode == 'ADMINISTRATOR' || mode == 'HOST'">
                             <a :href="'#/changeApartment/' + a.id">   <button type="button" class="btn btn-outline-primary w-75 mt-3">Izmijeni</button> </a>
                        </div>


                        <div v-if="mode == 'ADMINISTRATOR' || mode == 'HOST'">
                            <button type="button" class="btn btn-outline-danger w-75 mt-3" v-on:click="deleteApartment($event, a.id)">Obrisi</button>
                        </div>

                        

       				</div>


    			</div>

    			<div class="d-flex justify-content-end p-3"  v-if="mode=='HOST'" ><button class="btn bg-primary text-white" v-on:click="addApartment"> Dodaj novi apartman </button> </div>
                <div class="d-flex justify-content-end p-3"  v-if="mode=='HOST'" ><button class="btn bg-primary text-white" v-on:click="showApartment"> Prikazi aktivne/neaktivne </button> </div>
		    </div>
  		</div>


    </div>`,

    data : function(){
    	return {
    		appartments : [],
    		mode : 'NO_MODE',
    		withoutFilterApartments : [],
    		sortingType : "",
    		typeOfAccommodation : [],
    		listOfEssentials : [],
    		minPrice : 0,
    		maxPrice : Infinity,
    		minRoom : 0,
    		maxRoom : Infinity,
    		minPeople : 0,
    		maxPeople :Infinity,
    		city : "",
    		country : "",
    		filterList: [],
    		searcList: [],
    		flegFilters : false,
    		flegSearch : false,
            listOfContent : [],
            show : 'aktivni',
            startDate : "",
            endDate : ""

    	
    	}
    },
    beforeMount(){
 		axios
          .get('/sesion')
          .then(response => (this.mode = response.data.typeOfUser))

        
    }
    ,
    mounted() {
    	axios.get('/allAppartmants')
    	.then(response => {this.withoutFilterApartments = response.data; this.appartments = this. withoutFilterApartments;});

        axios
        .post('/getContentsOfApartment')
        .then(response => (this.listOfContent = response.data));



    },
    methods :{
    	addApartment : function(){
    		window.location.href = "/#/createApartment"; 
    	},
    	sortApartments : function(){

    		if(this.sortingType === "") return;


    		if(this.sortingType === 'growing'){
    			for (var i = 0; i < this.appartments.length-1 ; i++) {
    				for (var j = i+1; j < this.appartments.length; j++) {
    					if(this.appartments[i].pricePerNight>this.appartments[j].pricePerNight){
    						let temp = this.appartments[i];
    						this.appartments[i] = this.appartments[j];
    						this.appartments[j] = temp;
    					}
    				}	
    			}
    		}else {
    			
    			for (var i = 0; i < this.appartments.length-1 ; i++) {
    				for (var j = i+1; j < this.appartments.length; j++) {
    					if(this.appartments[i].pricePerNight<this.appartments[j].pricePerNight){
    						let temp = this.appartments[i];
    						this.appartments[i] = this.appartments[j];
    						this.appartments[j] = temp;
    					}
    				}
    			}
    		}
    	},
    	accommodationType : function(){
    		let list = [];

    		if(this.typeOfAccommodation.length == 0 || this.typeOfAccommodation.length == 2) return this.withoutFilterApartments;
    		//ovde ako je prosao prvi uslov znaci ima neki filter

    		this.flegFilters = true;
    		for (apartment of this.withoutFilterApartments) {
    			if(this.typeOfAccommodation[0] == apartment.typeOfApartment){
    		
    				list.push(apartment);
    			}
    			
    		}
			

    		return list;

    	
    	},

    	essentialsFilter : function(listOfApartments){
    		let list = [];
    		let i = 0;
    		
    		if(this.listOfEssentials.length == 0) return listOfApartments;
    		
            this.flegFilters = true;
    		for(apartment of listOfApartments){
    			i=0;
    			if(apartment.idContetn.length >= this.listOfEssentials.length){
    				for(content of apartment.idContetn){
    					for(essentials of this.listOfEssentials){
    						if(content === essentials){
    							i++;
    							if(i == this.listOfEssentials.length){
    								list.push(apartment);
    								i=0;	
    							}
    						}
    					}
    				}
    			}
    		}
    		
    		return list;

    	},

    	filters : function(){	

    		
    		this.filterList = [];
            this.flegFilters = false;

    		this.filterList = this.accommodationType();
    		this.filterList =  this.essentialsFilter(this.filterList);


    		this.filterCrossSearch();
    	},
    	searchPrice : function (){
    		if(this.minPrice == 0 && this.maxPrice == Infinity) return this.withoutFilterApartments;
    		
    		//ako ima pretragu treba da ga stavi na true
    	    this.flegSearch = true;

    		if(this.maxPrice == ""){
    			this.maxPrice = Infinity;
    		}
           
    		let list = [];
    		for(apartment of this.withoutFilterApartments){
    			if(apartment.pricePerNight>= this.minPrice && apartment.pricePerNight <= this.maxPrice){
    				list.push(apartment);
    			}
    		}

    		return list;


    	},
    	searchRoom : function (){
    		if(this.minRoom == 0 && this.maxRoom == Infinity) return this.searcList;

            this.flegSearch = true;
    		if(this.maxRoom == ""){
    			this.maxRoom = Infinity;
    		}

    		let list = [];
    		for(apartment of this.searcList){
    			if(apartment.numberOfRoom>= this.minRoom && apartment.numberOfRoom <= this.maxRoom){
    				list.push(apartment);
    			}
    		}


    		return list;

    	},
    	searchPeople : function (){
    		if(this.minPeople == 0 && this.maxPeople == Infinity) return this.searcList;


            this.flegSearch = true;
    		if(this.maxPeople == ""){
    			this.maxPeople = Infinity;
    		}

    		let list = [];
    		for(apartment of this.searcList){
    			if(apartment.numberOfGuests>= this.minPeople && apartment.numberOfGuests <= this.maxPeople){
    				list.push(apartment);
    			}
    		}


    		return list;


    	},
    	searchCity : function(){

    		if(this.city.trim() == "") return this.searcList;

    		let list = [];
            this.flegSearch = true;
    		
    		for(apartment of this.searcList){
    			if((apartment.location.address.city.toLowerCase() === this.city.trim().toLowerCase())){
    				list.push(apartment);
    			}
    		}

    		return list;


    	},
        searchCountry : function (){
            if(this.country.trim() == "") return this.searcList;

            let list = [];
            this.flegSearch = true;
            
            for(apartment of this.searcList){
                if((apartment.location.address.country.toLowerCase() === this.country.trim().toLowerCase())){
                    list.push(apartment);
                }
            }

            return list;



        },
        searchDate(){

            if(this.startDate == "" || this.endDate == ""){
                alert("Morate unijeti 'od' 'do' datum.")
                return this.searcList;
            }
            var prvi = this.startDate.split("-");
            var drugi = this.endDate.split("-");

            var DatumJedan =  new Date(prvi[0], prvi[1]-1, prvi[2]);
            var DatumDva = new Date(drugi[0], drugi[1]-1, drugi[2]);
            
            var razlika = Math.round((DatumDva-DatumJedan)/(1000*60*60*24));

            var d = new Date();  
            
            var days = [];

            if(razlika <0){
                alert("Mora prvi datum biti manji od drugog");
                return;
             }
             else if(razlika == 0){
         
                    d.setDate( DatumJedan.getDate());
                    var parts = d.toDateString().split(" ");
                    var month = d.getMonth() + 1;

                    var string = parts[2] + "-" + ((month < 10) ? "0" : "") + month + "-" + parts[3]
                    days.push(string);
              
             }else{
                for (var i = 0; i < razlika; i++) {
                    d.setDate( DatumJedan.getDate() + i);
                    var parts = d.toDateString().split(" ");
                    var month = d.getMonth() + 1;

                    var string = parts[2] + "-" + ((month < 10) ? "0" : "") + month + "-" + parts[3]
                    days.push(string);
                }

            }
            var list =[];
            var fleg = true;
            var i = 0;
            this.flegSearch = true;
           for(apartment of this.searcList){
                alert("cao");
                i=0;
                fleg=true;
                if(apartment.busyDays.length == 0){
                    //dodaj u listu apartman
                    list.push(apartment);
                }else{
                    for(day of apartment.busyDays){
                        for(d of days){
                            i++;
                            alert(d);
                            alert(days);
                            if(day == d){
                                
                                fleg = false;
                            }
                            if(i == apartment.busyDays.length && fleg){
                                list.push(apartment);
                            }
                        }//for od do dani
                    }//for zauzeti dani apartmana
                }//else
           }//prvi for


            return list;
        }   
        ,


    	search : function(){
    		
    		this.searcList= [];
            this.flegSearch = false;
    		this.searcList = this.searchPrice();
    		this.searcList = this.searchRoom();
    		this.searcList = this.searchPeople();
    		this.searcList = this.searchCity();
            this.searcList = this.searchCountry();
            this.searcList = this.searchDate();
    		this.filterCrossSearch();

    	},

    	filterCrossSearch : function(){
    		let list = [];
         
            //prvo kada su liste prazne
            if(!this.flegFilters && !this.flegSearch){
                list = this.withoutFilterApartments;
            }
            //nema pretrage samo filter
            if(this.flegFilters && !this.flegSearch){
                list = this.filterList;
            }

            //kada ima pretrage a nema filtera
            if(this.flegSearch && !this.flegFilters){
                list = this.searcList;
            }

            //kada je kombinovano
            if(this.flegSearch && this.flegFilters){
                for(s of this.searcList){
                    for(f of this.filterList){
                        if(s.id === f.id){
                            list.push(s);
                        }
                    }
                }
            }







    		this.appartments = list;
    		this.sortApartments();
    	},
        deleteApartment : function(event, id) {
            
            axios.post('/deleteApartment', null, {params : {'id' : id}})
                .then(response => {
    
                    for(var item of this.appartments) {
                        if(item.id === id) {
                        item.isActive = false;
                    }

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Uspjesno brisanje apartmana!',
                        showConfirmButton: false,
                        timer: 1200
                    })


                }})
                .catch(response =>(alert('Greska prilikom brisanja!'))); 
        },
        approveApartment : function(event, id) {
            axios.post('/approveApartment', null, {params : {'id' : id}})
                .then(response => {
                    for(var item of this.appartments) {
                        if(item.id === id) {
                            item.status = 'ACTIVE';
                        }
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Uspjesno aktiviranje apartmana!',
                          showConfirmButton: false,
                          timer: 1200
                        })


                    }
                })

        },
        showApartment : function(){
            if(this.show == 'aktivni'){
              
                axios.get('/allAppartmantsPassive')
        .then(response => {this.appartments = response.data;   this.show='neaktivni';})
        .catch(function(error){
            if(error.response.status == 403){
                 window.location.href = "/#/validationAcces"; 
            }
        });




            }else{
               axios.get('/allAppartmants')
        .then(response => {this.withoutFilterApartments = response.data; this.appartments = this. withoutFilterApartments; this.show='aktivni';});
                
            }
        }



    }  

 


});
