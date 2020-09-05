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
                        <p class="font-weight-bold"> 3 </p>

                    </div>

                </div>


                <div class="d-flex justify-content-center mt-3">
                    <h2>Lokacija na mapi:</h2>
                </div>

                <div id="map-container-google-1" class="z-depth-1-half map-container d-flex justify-content-center w-100" style="height: 300px">
                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                     style="border:0" allowfullscreen></iframe>
                </div>

            </div>



            <div class=" col-sm-8 mt-3">

                <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel" >
                  
                  <ol class="carousel-indicators">
                    <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                  </ol>
                  
                  <div class="carousel-inner" role="listbox">
                    
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="data/apartments/1/a1.jpg"
                        alt="First slide">
                    </div>
                    
                    <div class="carousel-item">
                      <img class="d-block w-100" src="data/apartments/1/a2.jpg"
                        alt="Second slide">
                    </div>
                    
                    <div class="carousel-item">
                      <img class="d-block w-100" src="data/apartments/1/a3.jpg"
                        alt="Third slide">
                    </div>
                    <!--/Third slide-->
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

                <div  v-if="apartment.content != null">

                    <div class="row mt-2 ml-1">
                        <h2>Sadrzaj apartmana:</h2>
                    </div>

                    <div class="row mt-3">
                        <div v-for="item of apartment.content" class="col-sm-3 d-flex justify-content-center w-25">

                            
                                <div v-if="item.name == 'TV'"  >
                                      <div class="d-flex justify-content-center w-100">
                                        <img src="data/sadrzaj_apartmana/tv_logo.jpg"  alt="" width="120" height="120"> </img>
                                      </div>

                                      <div class="d-flex justify-content-center mt-2 w-100">
                                        <h5> {{item.name}} </h5>
                                      </div>
                                </div>

                                <div  v-if="item.name == 'Wifi'" >
                                      <div class="d-flex justify-content-center">
                                        <img src="data/sadrzaj_apartmana/wifi_logo.jpg"  alt="" width="120" height="120"> </img>
                                      </div>

                                      <div class="d-flex justify-content-center mt-2">
                                        <h5> {{item.name}} </h5>
                                      </div>
                                </div>


                                <div v-if="item.name == 'Topla voda'"  >
                                      <div class="d-flex justify-content-center">
                                        <img src="data/sadrzaj_apartmana/water_logo.jpg "  alt="" width="120" height="120"> </img>
                                      </div>

                                      <div class="d-flex justify-content-center mt-2">
                                        <h5> {{item.name}} </h5>
                                      </div>
                                </div>

                                <div  v-if="item.name == 'Osnovne stvari'" >
                                      <div class="d-flex justify-content-center w-100">
                                        <img src="data/sadrzaj_apartmana/things_logo.jpg"  alt="" width="120" height="120"> </img>
                                      </div>

                                      <div class="d-flex justify-content-center w-100 mt-2">
                                        <h5> {{item.name}} </h5>
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
            id : this.$route.params.id
    	
    	}
    }
    , mounted() {
        axios
            .post("/getApartment", null ,{params : 
                {id : this.id}})

            
            .then(response => {
                this.apartment = response.data;
            });
    }

});