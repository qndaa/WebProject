Vue.component("changeApartment", {

    template:`

    <div class="container w-50 p-3 border""> 
    <form class="needs-validation"  @submit="change"  method="post" novalidate>
    	<div class="py-5 text-center">
        	<h2 class="h2 mb-3 text-primary">Izmena apartmana</h2>
    	</div>

    	<div class="form-row">	 				

			<div class="form-group col-md-4 mb-3" >
				<label for="numberOfGuest" class="text-primary">Broj gostiju</label>
				<input class="form-control"
					v-bind:class="{'form-control' : true, 'is-invalid' : !validnumberOfGuests() && Blured.numberOfGuestsBlured}"
					v-on:blur="Blured.numberOfGuestsBlured = true" 

					id="numberOfGuest" type="number" v-model="Apartment.numberOfGuests" required/>
				<div id="errorPassword" class="invalid-feedback">
					Morate uneti validan broj gostiju!
				</div>
			</div>



			<div class="form-group  col-md-4 mb-3" >
				<label for="geoWidth" class="text-primary">Cena po nocenju</label>
				<input class="form-control" id="geoWidth" type="number"
					v-bind:class="{'form-control' : true, 'is-invalid' : !validpricePerNight() && Blured.pricePerNightBlured}"
					v-on:blur="Blured.pricePerNightBlured = true"
					v-model="Apartment.pricePerNight"
				required/>
				<div id="errorgeoWidth" class="invalid-feedback">
					Cena mora biti validno uneta!
				</div>
			</div>
		</div>
			<div class="form-row text-primary">	 				
	 				
					<div class="form-group col-md-6 mb-3" >
						<h4>Sadrzaj apartmana </h4>
					</div>


					<div class="form-group col-md-6 mb-3" >
						
					</div>


			</div>

			<div class="form-row" >	 				
	 				
					<div class="form-group col-md-3  mb-3" v-for="c in listaContetn" >
						<input  id="checkbox" v-bind:value="c.id" v-model="Apartment.idContetn" type="checkbox"/>
						<label for="checkbox" class="text-primary">{{c.name}}</label>
					</div>

			</div>

			<div>
				<button	class="btn btn-primary btn-lg btn-block mt-5"  type="submit">Izmeni</button>
			</div>
				
	 	



    </form>
    </div>`,

    data : function (){
    	return {
    		id : this.$route.params.id,
    		listaContetn : [],
    		Apartment : {
    			typeOfApartment : "",
    			numberOfRoom : "",
    			numberOfGuests: "",
    			city : "",
    			street : "",
    			numberHouse : "",
    			postNumber : "",
    			geographicalWidth : "",
    			geographicalLength :"",
    			pricePerNight : "",
    			country : "",

    			content : [],
    			idContetn : []
    		},
    		a : {
    			numberOfGuests: "",
    			pricePerNight : "",
    			id : 0,
    			idContetn : []
    		}
    		,

    		Blured : {
    			numberOfGuestsBlured : false,
    			pricePerNightBlured : false
    		}
    		
    	}
    },
    methods : {
    	change : function(){
    		event.preventDefault();
 
    		if(this.Apartment.numberOfGuests == "" || this.Apartment.pricePerNight == ""){

    			this.Blured.numberOfGuestsBlured = true;
    			
    			this.Blured.pricePerNightBlured = true;



    			return;
    		}

    		this.a.numberOfGuests = this.Apartment.numberOfGuests;
    		this.a.pricePerNight = this.Apartment.pricePerNight;
    		this.a.id = this.Apartment.id;
    		this.a.idContetn = this.Apartment.idContetn;


    		axios.post('/changeApartment', this.a)
			.then(function(response){
				if(response.data == true){

					alert("Uspesno ste izmenili podatke");
				
				}else{
					alert("Doslo je do greske");
				}
			});



    	},
    	validnumberOfGuests : function() {
    		return (this.Apartment.numberOfGuests > 0 &&  this.Apartment.numberOfGuests <= 20) ? true : false;
    	},
    	validpricePerNight: function() {
    		return (this.Apartment.pricePerNight > 0 ) ? true : false;
    	},





   },
   beforeMount(){
		axios
		.get('/validationAcces')
		.then()
		.catch(function(eror){
			if(eror.response.status == 403){
				 window.location.href = "/#/validationAcces"; 
			}
		})
	},
   mounted() {
		axios
        .post("/getApartment", null ,{params : {id : this.id}})
        .then(response => {
            { this.Apartment = response.data;}
        });

        axios
        .post('/getContentsOfApartment')
        .then(response => (this.listaContetn = response.data));
          	

   }


    
});