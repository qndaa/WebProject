var x=2192888.870569583;
var y= 5580331.9034303995;
var CITY= "";
var ROAD = "";
var COUNTRY="";
var NUMBERHOUSE="";
var POSTECODE="";
Vue.component("add-apartment", {

    template:`

    <div  class="container w-50 p-3 border">
    	<form class="needs-validation" @submit="createApartment" method="post" novalidate>

    			<div class="py-5 text-center">
        			<h2 class="h2 mb-3 text-primary">Dodavanje apartmana</h2>
    			</div>

    			<div class="form-row">	 				
	 				<div class="form-group col-md-4 mb-3">
	 					<label for="typeOfApartment" class="text-primary">Tip apartmana</label>
						<select id="typeOfApartment" class="custom-select"
						v-bind:class="{'form-control' : true, 'is-invalid' : !validTypeOfApartment() && Blured.typeOfApartmentBlured}"

						 v-on:blur="Blured.typeOfApartmentBlured = true" 

						  v-model="Apartment.typeOfApartment" required>
							<option value="">Izaberi</option>
							<option>Ceo apartman</option>
							<option>Soba</option>
						</select> 
						<div class="invalid-feedback">
								Izaberite tip apartmana!
						</div>

	 				</div>

					<div class="form-group col-md-4 mb-3" >
						<label for="numberOfRoom" class="text-primary">Broj soba</label>
						<input class="form-control"
						 v-bind:class="{'form-control' : true, 'is-invalid' : !validNumberOfRoom() && Blured.numberOfRoomBlured}"
						 v-on:blur="Blured.numberOfRoomBlured = true" 

					    id="numberOfRoom" type="number" v-model="Apartment.numberOfRoom" required/>
						<div id="errorPassword" class="invalid-feedback">
							Morate uneti validan broj soba!
						</div>
					</div>

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

				</div>


				<div class="form-row">	 				
	 				
					<div class="form-group col-md-3 mb-3" >
						<label for="city" class="text-primary">Grad</label>
						<input class="form-control" 

						v-bind:class="{'form-control' : true, 'is-invalid' : !validCity() && Blured.cityBlured}"
						v-on:blur="Blured.cityBlured = true"

						v-model="Apartment.city"
						id="city" type="text" required/>
						<div id="errorCity" class="invalid-feedback">
							Morate uneti grad!
						</div>
					</div>

					<div class="form-group col-md-3 mb-3" >
						<label for="street" class="text-primary">Ulica</label>
						<input class="form-control" id="street" type="text" 

						v-bind:class="{'form-control' : true, 'is-invalid' : !validStreet() && Blured.streetBlured}"
						v-on:blur="Blured.streetBlured = true"

						v-model="Apartment.street"



						required/>
						<div id="errorStreet" class="invalid-feedback">
							Morate uneti ime ulice!
						</div>
					</div>

					<div class="form-group col-md-3 mb-3" >
						<label for="numberOfstreet" class="text-primary">Broj ulice</label>
						<input class="form-control" id="numberOfstreet" type="number" 

						v-bind:class="{'form-control' : true, 'is-invalid' : !validNumberHouse() && Blured.numberHouseBlured}"
						v-on:blur="Blured.numberHouseBlured = true"

						v-model="Apartment.numberHouse"


						required/>
						<div id="errorPassword" class="invalid-feedback">
							Morate uneti validan broj ulice!
						</div>
					</div>

					<div class="form-group col-md-3 mb-3" >
						<label for="postNumber" class="text-primary">Postanski broj</label>
						<input class="form-control" id="postNumber" type="number" 

						v-bind:class="{'form-control' : true, 'is-invalid' : !validPostNumber() && Blured.postNumberBlured}"
						v-on:blur="Blured.postNumberBlured = true"

						v-model="Apartment.postNumber"

						required/>
						<div id="errorPassword" class="invalid-feedback">
							Morate uneti validan postnaski broj!
						</div>
					</div>

					
				</div>

				<div class="form-row">	 				
	 				
					<div class="form-group col-md-6 mb-3" >
						<label for="geoHeight" class="text-primary">Geografska duzina</label>
						<input class="form-control" id="geoHeight" type="text" 

						v-bind:class="{'form-control' : true, 'is-invalid' : !validGeographicalLength() && Blured.geographicalLengthBlured}"
						v-on:blur="Blured.geographicalLengthBlured = true"

						v-model="Apartment.geographicalLength"
					

						required/>
						<div id="errorgeoHeight" class="invalid-feedback">
							Geografska duzina mora biti validno unesena!
						</div>
					</div>


					<div class="form-group col-md-6 mb-3" >
						<label for="geoWidth" class="text-primary">Geografska sirina</label>
						<input class="form-control" id="geoWidth" type="text"

						v-bind:class="{'form-control' : true, 'is-invalid' : !validGeographicalWidth() && Blured.geographicalWidthBlured}"
						v-on:blur="Blured.geographicalWidthBlured = true"

						v-model="Apartment.geographicalWidth"

						 required/>
						<div id="errorgeoWidth" class="invalid-feedback">
							Geografska sirina mora biti validno unesena!
						</div>
					</div>


				</div>

				<div class="form-row text-primary">	 				
	 				
					<div class="form-group col-md-6 mb-3" >
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


					<div class="form-group col-md-6 mb-3" >
					
					</div>


				</div>

				<div class="form-row text-primary">	 				
	 			

					<div class="form-group col-md-12 mb-6" >
					<div id="js-map" class="map w-100" style="height: 300px" tabindex="0" v-on:click="takeCoordinate">

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
						<input  id="checkbox" v-bind:value="c.id" v-model="Apartment.content" type="checkbox"/>
						<label for="checkbox" class="text-primary">{{c.name}}</label>
					</div>

				</div>

			

				<div class="form-row text-primary">	 				
	 				
					<div class="form-group col-md-6 mb-3" >
						<h4>Slike </h4>
					</div>


					<div class="form-group col-md-6 mb-3" >
					</div>


				</div>


				<div class="form-row text-primary">	 				
	 				
					<div class="form-group  col-md-4 mb-3" v-for="url in urlImage" >
    					<div v-if="urlImage.length > 0">
    					  <img class="preview" :src="url" height="200" width="200">
    					</div>
    					<div class="d-flex"> 
    					  <button class="btn border bg-primary " v-on:click.prevent="deleteImage(url)">Izbrisi</button>
    					</div>
					</div>



					<div class="form-group border col-md-4 mb-3" v-if="urlImage.length < 5"  >
						<div class="btn  btn-sm  w-25">
      						<input type="file" @change="uploadImage" name="image" id="image" accept="image/*"/>
    					</div>
					</div>

				</div>
			
				<div>
				<button	class="btn btn-primary btn-lg btn-block mt-5"  type="submit">Dodaj</button>
				</div>



    	</form>
    </div>`,
    data : function (){
    	return {
    		urlImage: [],
    		lista : [],
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

    			content : []
    		},

    		Blured : {
    			typeOfApartmentBlured : false,
    			numberOfRoomBlured : false,
    			numberOfGuestsBlured : false,
    			cityBlured : false,
    			streetBlured : false,
    			numberHouseBlured : false,
    			postNumberBlured : false,
    			geographicalWidthBlured : false,
    			geographicalLengthBlured : false,
    			pricePerNightBlured : false
    		}
    		
    	}
    },
    methods : {
    	createApartment : function(){
    		event.preventDefault();
 
    		if(this.Apartment.typeOfApartment == "" || this.Apartment.numberOfRoom == ""  || this.Apartment.numberOfGuests == "" 
    			|| this.Apartment.city == ""  || this.Apartment.street == "" || this.Apartment.numberHouse == ""
    			|| this.Apartment.postNumber == "" || this.Apartment.geographicalWidth == "" || this.Apartment.geographicalLength == ""
    			|| this.Apartment.pricePerNight == ""){


    			this.Blured.typeOfApartmentBlured = true;
    			this.Blured.numberOfRoomBlured = true;
    			this.Blured.numberOfGuestsBlured = true;
    			this.Blured.cityBlured = true;
    			this.Blured.streetBlured = true;
    			this.Blured.numberHouseBlured = true;
    			this.Blured.postNumberBlured = true;
    			this.Blured.geographicalWidthBlured = true;
    			this.Blured.geographicalLengthBlured = true;
    			this.Blured.pricePerNightBlured = true;



    			return;
    		}


    		alert(this.Apartment.typeOfApartment);

    	axios.post('/addApartment',this.Apartment )
        .then(function(response){
             alert("Uspesno ste dodali apartman")            
        }).catch(function(eror){
            if(eror.response.status == 400){
               alert("zahtev odbijen");
            }
        });








    	},
    	validTypeOfApartment : function() {
    		return (this.Apartment.typeOfApartment.length > 0) ? true : false;
    	},
    	validNumberOfRoom : function() {
    		return (this.Apartment.numberOfRoom > 0 &&  this.Apartment.numberOfRoom <= 10) ? true : false;
    	},
    	validnumberOfGuests : function() {
    		return (this.Apartment.numberOfGuests > 0 &&  this.Apartment.numberOfGuests <= 20) ? true : false;
    	},
    	validCity : function() {
    		return (this.Apartment.city.length > 1 ) ? true : false;
    	},
    	validStreet : function() {
    		return (this.Apartment.street.length > 2 ) ? true : false;
    	},
    	validNumberHouse : function() {
    		return (this.Apartment.numberHouse > 0 && this.Apartment.numberHouse <= 100 ) ? true : false;
    	},
    	validPostNumber: function() {
    		return (this.Apartment.postNumber >= 11000 ) ? true : false;
    	},
    	validPostNumber: function() {
    		return (this.Apartment.postNumber >= 11000 ) ? true : false;
    	},
    	validGeographicalWidth: function() {
    		return (this.Apartment.geographicalWidth > 0 ) ? true : false;
    	},
    	validGeographicalLength: function() {
    		return (this.Apartment.geographicalLength > 0 ) ? true : false;
    	},
    	validpricePerNight: function() {
    		return (this.Apartment.pricePerNight > 0 ) ? true : false;
    	},




  		uploadImage(event) {	

			var img = event.target.files[0];	
			var formData = new FormData();
			formData.append("image", img);
			this.lista.push(img);
			
			var reader = new FileReader();

			reader.onload= (e) =>{
				this.urlImage.push(e.target.result);
			}

			reader.readAsDataURL(img);

			  $('input#image').val("");
		},
		deleteImage(images){

			let index = this.urlImage.indexOf(images);

			this.lista.splice(index,1);

			this.urlImage = this.urlImage.filter(url => url !== images);
			
		},
		takeCoordinate : function(){
			this.Apartment.geographicalWidth = x;
			this.Apartment.geographicalLength = y;
			this.Apartment.city = CITY;
			this.Apartment.street = ROAD;
			this.Apartment.postNumber = POSTECODE;
			this.Apartment.numberHouse = NUMBERHOUSE;
			this.Apartment.country = COUNTRY;
			
		}


    }

    ,
    beforeMount(){
		axios
		.get('/validationAccesHost')
		.then()
		.catch(function(eror){
			if(eror.response.status == 403){
				 window.location.href = "/#/validationAcces"; 
			}
		})
	},
	mounted() {
		axios
        .post('/getContentsOfApartment')
        .then(response => (this.listaContetn = response.data));
          	

	}



});


window.onload = init;

function init(){
    //alert(x + " " + y);
    var place = [x,y];
   // alert(place);
    const map = new ol.Map({
        view : new ol.View({
                center: [x,y],
                zoom : 5
            }),
           
            target : 'js-map'
            })
        
    const openLayer = new ol.layer.Tile({
          source : new ol.source.OSM(),
          visible : true,
          title : "OSM"

    })

    const fillStyle = new ol.style.Fill({
        color : 'blue'
    })

    const strokeStyle = new ol.style.Stroke({
        color : 'black',
        width : 1.2
    })

    const circleStyle = new ol.style.Circle({
        fill : new ol.style.Fill({
            color :'red'
        }),
        radius : 7,
        stroke : strokeStyle
    })

    const pointers = new ol.layer.Vector({
        source : new ol.source.Vector({
           features : [new ol.Feature(new ol.geom.Point(place))] 
        }),
        visible: true,
        style : new ol.style.Style({
            fill : fillStyle,
            stroke : strokeStyle,
            image : circleStyle
        })
    })




    map.addLayer(openLayer);

      map.addLayer(pointers);



	var geocoder = new Geocoder('nominatim', {
	  provider: 'osm',
	  lang: 'en',
	  placeholder: 'Search for ...',
	  limit: 5,
	  debug: false,
	  autoComplete: true,
	  keepOpen: true
	});
	map.addControl(geocoder);

	geocoder.on('addresschosen', function (evt) {
	console.info(evt.address.details);
	CITY = evt.address.details.city;
	COUNTRY = evt.address.details.country;
	NUMBERHOUSE = evt.address.details.houseNumber;
	POSTECODE =  evt.address.details.postcode;
	ROAD = evt.address.details.road


	});


	map.on('click', function(e){
           // console.log(e.coordinate);
          	 console.log(e);
             console.log(x=e.coordinate[0]);
             console.log(y=e.coordinate[1]);
            

        })



}