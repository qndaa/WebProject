Vue.component("apartments", {

    template:`
    <div class="container text-primary">

    	<div class="row">

		    <div class="col-sm-4">
		    	
		    	<div class="anyUsers card p-3 m-3"> 
		    		<div class=""> 
			    		<h3 class="">Trazi </h3>
			    		<hr>
			    	</div>

					<div class="align-self-start mb-3" >
			    		<p class="mb-1 ">Izaberite datum dolaska:</p>
			    		 <input  type="date" id="birthday" name="birthday"> 
			    	</div>

					<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Izaberite datum odlaska:</p>
			    		 <input  type="date" id="birthday" name="birthday"> 
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
			    		<p><input type="radio" id="vehicle1" name="vehicle1" value="growing" v-model="sortingType" v-on:change="sortApartments"> Rastuce </p>
			    	</div>
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="radio" id="vehicle1" name="vehicle1" value="descending" v-model="sortingType" v-on:change="sortApartments"> Opadajuce</p>
			    	</div>

		    	</div>

		    	<div class="card p-3 m-3"> 
		    		<div class="Guest"> 
			    		<h3 class="">Vrsta smestajnog objekta </h3>
			    		<hr>
			    	</div>
			    	<div class="d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="FULL_APARTMENT" v-model="typeOfAccommodation" v-on:change="filters"> Ceo apartman </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="ROOM" v-model="typeOfAccommodation" v-on:change="filters"> Soba </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>
		    	</div>

		    	<div class="card p-3 m-3"> 
		    		<div class="Guest"> 
			    		<h3 class="">Pogodnosti </h3>
			    		<hr>
			    	</div>
			    	<div class="d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Wifi" v-model="listOfEssentials" v-on:change="filters"> Wifi </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Mesto za rad" v-model="listOfEssentials" v-on:change="filters"> Mesto za rad </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="TV" v-model="listOfEssentials" v-on:change="filters"> TV </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Klima" v-model="listOfEssentials" v-on:change="filters"> Klima </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Besplatan parking" v-model="listOfEssentials" v-on:change="filters"> Besplatan parking </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	  
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Mikro talasna" v-model="listOfEssentials" v-on:change="filters"> Mikro talasna </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Topla voda" v-model="listOfEssentials" v-on:change="filters"> Topla voda </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Osnovne stvari" v-model="listOfEssentials" v-on:change="filters"> Osnovne stvari </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

		    	</div>

		    
		    </div>

		    <div class=" col-sm-8">

		    	<div class=" row p-3 m-3 border rounded" v-for="a in appartments">
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
       					<div><label> Cena: </label> {{a.pricePerNight}} </div>

       					<div><a :href="'#/apartment/' + a.id"><button class="btn bg-primary text-white"> Procitaj vise </button></a> </div>
       				</div>


    			</div>

    			<div class="d-flex justify-content-end p-3"  v-if="mode=='HOST'" ><button class="btn bg-primary text-white" v-on:click="addApartment"> Dodaj novi apartman </button> </div>
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
    		flegSearch : false

    	
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
    	.then(response => {this.withoutFilterApartments = response.data; this.appartments = this. withoutFilterApartments; });
    	

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
    		//ovde mi treba neki fleg da znam da i ako je lista prazna da je filter postavljen
    		//postavim ga na true
    		this.flegFilters = true;
    		for(apartment of listOfApartments){
    			i=0;
    			if(apartment.content.length >= this.listOfEssentials.length){
    				for(content of apartment.content){
    					for(essentials of this.listOfEssentials){
    						if(content.name === essentials){
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
    	search : function(){
    		
    		this.searcList= [];

    		this.searcList = this.searchPrice();
    		this.searcList = this.searchRoom();
    		this.searcList = this.searchPeople();
    		this.searcList = this.searchCity();

    		this.filterCrossSearch();

    	},

    	filterCrossSearch : function(){
    		let list = [];
    

    		if(this.filterList.length == 0 && this.searcList.length == 0 && !this.flegSearch && !this.flegFilters){
    			list = this.withoutFilterApartments;
    		}else if ( this.flegFilters  &&  this.searcList.length == 0 && !this.flegSearch) {
    			list = this.filterList;
    		}else if (this.filterList.length == 0 && !this.flegFilters  && this.flegSearch) {
    			
    			list= this.searcList;
    		}else {
    			for(filterApartment of this.filterList){
    				for(searchApartment of this.searcList){
    					if(filterApartment.id === searchApartment.id){
    						list.push(filterApartment);
    					}
    				}
    			}
    		}
    		this.flegFilters = false;
    		//this.flegSearch  = false;
    		this.appartments = list;
    		this.sortApartments();
    	}



    }  

 


});