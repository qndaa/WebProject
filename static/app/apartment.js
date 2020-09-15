var x=2192888.870569583;
var y= 5580331.9034303995;

Vue.component("apartment", {
	template : `
		
    <div v-if="apartment != null" class="container text-primary ">

        <div class="row ">

            <div class="col-sm-4 mt-3 ">

                <div class="d-flex justify-content-center">
                    <h2>O domacinu:</h2>
                </div>


                <div class="d-flex justify-content-center mt-2">
                    <img v-bind:src="apartment.host.imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150"> </img>
                </div>

                <div class="row mt-4" >
                    <div class="col w-50 d-flex justify-content-center">
                        <p>Ime:</p>

                    </div>

                    <div class="col w-50 d-flex justify-content-center">
                        <p class="font-weight-bold"> {{apartment.host.name}}</p>

                    </div>


                </div>

                <div class="row mt-2" >
                    <div class="col w-50 d-flex justify-content-center">
                        <p>Prezime:</p>

                    </div>

                    <div class="col w-50 d-flex justify-content-center">
                        <p class="font-weight-bold"> {{apartment.host.surname}}</p>

                    </div>


                </div>

                 <div class="row mt-2" >
                    <div class="col w-50 d-flex justify-content-center">
                        <p>Pol:</p>

                    </div>

                    <div class="col w-50 d-flex justify-content-center">
                        <p class="font-weight-bold"> {{apartment.host.gender}} </p>

                    </div>


                </div>


                 <div class="row mt-2" >
                    <div class="col w-50 d-flex justify-content-center">
                        <p>Ukupno apatmana: </p>

                    </div>

                    <div class="col w-50 d-flex justify-content-center">
                        <p class="font-weight-bold"> {{apartment.host.idApartment.length}} </p>

                    </div>

                </div>


                <div class="d-flex justify-content-center mt-3">
                    <h2>Lokacija na mapi:</h2>
                </div>

                <div id="map-container-google-1" class="z-depth-1-half map-container d-flex justify-content-center w-100" style="height: 300px">
                    <!-- 
                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                     style="border:0" allowfullscreen></iframe>
                    -->

                 
                    <div id="js-map" class="map w-100" style="height: 300px" tabindex="0" >

                    </div>


                </div>
                <!--Ovde ide mapa -->
                    
             
            </div>



            <div class=" col-sm-8 mt-3">



                <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel" >
                  
                  <ol class="carousel-indicators">
                        <li data-target="#carousel-example-1z" v-bind="{'data-slide-to' : index}" :class="{'active' : index === 0, }" v-for="(item, index) in apartment.urlImages"></li>

                  </ol>
                  
                  <div class="carousel-inner" role="listbox">

                    <div class="carousel-item" :class="{'active' : index === 0}" v-for="(item,index) in apartment.urlImages">
                      <img class="d-block w-100" :src="item"
                        alt="First slide">
                    </div>
                    
                
                  <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                  
                </div>



                <div class="row mt-3">
                    <div class="col-sm-3 w-25 d-flex justify-content-center">
                        <p>Tip apartmana:</p>
                    </div>

                        
                    <div class="col-sm-3 w-25 d-flex justify-content-left">

                        <p>{{apartment.typeOfApartment}}</p>
                    </div>

                    <div class="col-sm-3 w-25 d-flex justify-content-right">

                        <p>Cijena nocenja:</p>
                    </div>

                     <div class="col-sm-3 w-25 d-flex justify-content-left">

                        <p>{{apartment.pricePerNight}}</p>
                    </div>


                    <div class="col-sm-3 w-25 d-flex justify-content-center">
                        <p>Broj soba:</p>
                    </div>

                        
                    <div class="col-sm-3 w-25 d-flex justify-content-left">

                        <p>{{apartment.numberOfRoom}}</p>
                    </div>

                    <div class="col-sm-3 w-25 d-flex justify-content-right">

                        <p>Broj gosti:</p>
                    </div>

                     <div class="col-sm-3 w-25 d-flex justify-content-left">

                        <p>{{apartment.numberOfGuests}}</p>
                    </div>

                </div>



                <div class = "row">

                    <div class="col-6">

                        <div  v-if="apartment.content != null">

                            <div class="row mt-2 ml-1">
                                <h3>Sadrzaj apartmana:</h3>
                            </div>

                            <div class="row mt-3">
                                <div v-for="item of apartment.content" class="col-6 w-25 mb-3">
                                    <div class= "d-flex justify-content-center">
                                        <img v-bind:src="item.imagePath"  alt="Logo" width="80" height="80"> </img>
                                    </div>

                                    <div class= "d-flex justify-content-center">
                                        <h5>{{item.name}}</h5>
                                    </div>                            
                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="col-6">

                        <div class="m-3 border border-primary rounded" v-if="user.typeOfUser == 'GUEST'">

                            <h3 class=" mt-3 d-flex justify-content-center">Rezervacija: </h3>

                            <form class="needs-validation"  novalidate>

                                <div class="form-group w-100 m-3">
                                  <label for="startDate" class="col-2 col-form-label">Date</label>
                                  <div class="col-10">
                                    <input class="form-control datepicker"  type="date" value="" id="startDate" v-model="startDate">
                                  </div>
                                </div>



                                 <div class="form-group w-100 m-3">
                                  <label for="numberDays" class="col-2 col-form-label">Number</label>
                                  <div class="col-10">
                                    <input class="form-control" type="number" value="0" id="numberDays" v-model="numberDays">
                                  </div>
                                  
                                </div>

                                <div class="form-group w-100 m-3">
                                  <label for="message" class="col-2 col-form-label">Poruka</label>
                                  <div class="col-10">
                                    <input class="form-control" type="text" value="0" id="message" v-model="message">
                                  </div>
                                  
                                </div>   
                                      
                                  

                                 <div class="m-3 w-100">
                                        <div class="col-10">
                                            <button class="btn btn-success btn-block" v-on:click="reservation">Rezervisi</button>
                                        </div>
                                

                                    </div>
                            </form>

                        </div>
                    </div>

                </div>

            </div>   
           

        </div>








        </div>



    </div>







	`,
    data : function(){
    	return {
    		apartment : null,
            id : this.$route.params.id,
            startDate : null,
            user : null,
            numberDays : 0,
            message : ''
    	}
    }
    , mounted() {

         axios
          .get('/sesion')
          .then(response => (this.user = response.data))



        axios
            .post("/getApartment", null ,{params : 
                {id : this.id}})

            
            .then(response => {
               { this.apartment = response.data;  x=this.apartment.location.geographicalWidth; y=this.apartment.location.geographicalLength; this.init2(); }
            });
    },
    methods : {
          init2 : function(){
    
          init();


          },

          reservation : function() {

            if(this.startDate == null || this.numberDays < 1){
                Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Nepravilno popunjena forma!',
                        showConfirmButton: false,
                        timer: 1200
                    })


                return;
            }

            axios
                .post('/createReservation', null, {params : {
                                                        'idApartment' : this.id, 
                                                        'startDate' : this.startDate,
                                                        'numberDays' : this.numberDays, 
                                                        'message' : this.message, 
                                                        'idGuest' : this.user.username}})
                .then(response =>{
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Rezervacija uspjesna!',
                        showConfirmButton: false,
                        timer: 1200
                    })



                });

          }
    
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
                zoom : 15
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


}


