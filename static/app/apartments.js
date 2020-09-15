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
			    		 <input   type="text" id="datepicker" name="birthday"> 
			    	</div>

					<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Izaberite datum odlaska:</p>
			    		 <input  id="datepicker2" > 
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
			    	<div class="d-flex justify-content-between" v-for="c in listOfContent" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" v-bind:value="c.id" v-model="listOfEssentials" v-on:change="filters"> {{c.name}} </p>
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
            listOfContent : []

    	
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
    	.then(response => {this.withoutFilterApartments = response.data; this.appartments = this. withoutFilterApartments; this.calendar()});

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
    	       //ovo trebad a se prepravi da pretrazuje po id ako sadrzi id
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


    	search : function(){
    		
    		this.searcList= [];
            this.flegSearch = false;
    		this.searcList = this.searchPrice();
    		this.searcList = this.searchRoom();
    		this.searcList = this.searchPeople();
    		this.searcList = this.searchCity();
            this.searcList = this.searchCountry();

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
  
        calendar : function (){




var array2 = ["2020-09-16","2020-09-23"];
var array = [];
for(a of array2){  
    let deo = a.split("-");
   // alert(++deo[2]);
   for (var i = 0; i < 5; i++) {
       let s= deo[0]+ "-" + deo[1] + "-" +(++deo[2]);
          array.push(s);
   }

}



$('#datepicker').datepicker({
             dateFormat: 'yy-mm-dd',
            minDate: new Date(),
             maxDate: '+1m',
            autoclose: true,
            weekStart: 1,
            calendarWeeks: true,
            todayHighlight: true,
              autoSize: true,
        beforeShowDay: function(date){
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        return [ array.indexOf(string) == -1 ]
    }
});

/*
$('#datepicker2').datepicker({
    format: 'yy-mm-dd',
            startDate: new Date(),
            autoclose: true,
            weekStart: 1,
            calendarWeeks: true,
            todayHighlight: true,
});
*/
availableDates = ['09-30-2020','09-25-2020'];

//
$("#datepicker2").datepicker({
     dateFormat: 'dd-mm-yy',
    minDate: new Date(), 
    maxDate: '+1m',
    beforeShowDay: function(d) {
        var dmy = (d.getMonth()+1); 
        if(d.getMonth()<9) 
            dmy="0"+dmy; 
        dmy+= "-"; 
        
        if(d.getDate()<10) dmy+="0"; 
            dmy+=d.getDate() + "-" + d.getFullYear(); 
        
        if ($.inArray(dmy, availableDates) != -1) {
            return [false, "","unAvailable"]; 
        } else{
             return [true,"","Available"]; 
        }
    }
    });


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

        }   



    }  

 


});
