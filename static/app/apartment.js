
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

 
                <div id="mapLocation" class="map w-100" style="height: 300px" tabindex="0">

                </div>


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

                          

                                <div class="form-group w-100 m-3">
                                  <label for="startDate" class="col-2 col-form-label">Date:</label>
                                  <div class="col-10">
                                    <input class="form-control"  type="text" placeholder="dd-mm-yy"  id="datepicker3"/>
                                  </div>
                                </div>



                                 <div class="form-group w-100 m-3">
                                  <label for="numberDays" class="col-2 col-form-label">Broj dana:</label>
                                  <div class="col-10">
                                    <input class="form-control" type="number" value="0" id="numberDays" v-model="numberDays"/>
                                  </div>
                                  
                                </div>

                                <div class="form-group w-100 m-3">
                                  <label for="message" class="col-2 col-form-label">Poruka</label>
                                  <div class="col-10">
                                    <input class="form-control" type="text" value="0" id="message" v-model="message"/>
                                  </div>
                                  
                                </div>   
                                      
                                  

                                 <div class="m-3 w-100">
                                        <div class="col-10">
                                            <button class="btn btn-success btn-block" v-on:click="reservation">Rezervisi</button>
                                        </div>
                                

                                    </div>
                            

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
            startDate : "",
            user : "",
            numberDays : 0,
            message : '',
            xCoordinate : 0,
            yCoordinate : 0,
            map : "",
            busyDates : ['30-09-2020'],
            Resevation : {
                idApartment : "",
                idGuest : "",
                numberOfNights :"",
                message : "",
                startTime : "",
                price : "",
                busyDays : [],


            }
    	}
    },
    beforeCreate(){
        axios
          .get('/sesion')
          .then(response => (this.user = response.data));
 
    },
    mounted() {
        axios
            .post("/getApartment", null ,{params : 
                {id : this.id}})

            
            .then(response => {
                this.apartment = response.data;  
                this.xCoordinate = this.apartment.location.geographicalWidth; 
                this.yCoordinate = this.apartment.location.geographicalLength;
                this.$nextTick(function() {
                    this.initMap();
                    this.initDatePicker();
                })
            });

             
    },
    methods : {

        initDatePicker : function() {

            $("#datepicker3").datepicker({
                dateFormat: 'dd-mm-yy',
                minDate: new Date(), 
                maxDate: '+1m',
                beforeShowDay: (day) => {


                    var month = (day.getMonth()+1); 
                    if(day.getMonth()<9) 
                        month="0"+month; 


                    var d = "";

                    if(day.getDate()<10) d+="0"; 

                    d += day.getDate();

                    var date = d + "-" + month + "-" + day.getFullYear(); 


                    if ($.inArray(date, this.apartment.busyDays) != -1) {
                        return [false, "","unAvailable"]; 
                    } else{
                         return [true,"","Available"]; 
                    }
                },

                onSelect : (date) => {
                    this.startDate = date;
                }
            });



        },
        initMap : function(){
    
            var place = [this.xCoordinate,this.yCoordinate];
            this.map = new ol.Map({
                view : new ol.View({
                        center: [this.xCoordinate,this.yCoordinate],
                        zoom : 15
                    }),

                    target : 'mapLocation'
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
            this.map.addLayer(openLayer);

            this.map.addLayer(pointers);

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

            var tokens = this.startDate.split('-');
            var newDate = new Date(tokens[2], tokens[1]-1, tokens[0]);
            var d = new Date();

            var days = [];

            this.Resevation.idApartment = this.apartment.id;
            this.Resevation.idGuest = this.user.username;
            this.Resevation.numberOfNights = this.numberDays;
            this.Resevation.message = this.message;
            this.Resevation.startTime = this.startDate;

            var price = 0;

            for (var i = 0; i < this.numberDays; i++) {
                d.setDate( newDate.getDate() + i);
                var parts = d.toDateString().split(" ");
                var month = d.getMonth() + 1;

            
                if(d.getDay() == 5 || d.getDay() == 6 || d.getDay() == 0){
                    price += this.apartment.pricePerNight - (this.apartment.pricePerNight / 10) ;
                    
                }else {
                     price += this.apartment.pricePerNight
                }

                var string = parts[2] + "-" + ((month < 10) ? "0" : "") + month + "-" + parts[3]
                days.push(string);
            }
            this.Resevation.price = price;

            var daysString = "";

            this.Resevation.busyDays = days;
            for(var day of days){

                daysString += day
                for(var item of this.apartment.busyDays) {
                    if(item == day) {
                        alert("Ne moze!");
                        return;
                    }
                }
            }
             
            

            axios
                .post('/createReservation',this.Resevation)
                .then(response =>{
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Rezervacija uspjesna!',
                        showConfirmButton: false,
                        timer: 1200
                    })
                    this.apartment = response.data;



                })

            

        },

        compareDates(date1, date2){

            if(date1.toDateString() != date2.toDateString()){
                return false;
            }

            return true;
        }
    
    }

});



