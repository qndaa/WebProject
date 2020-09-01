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
			    		<p class="mb-1">Unesite grad ili drzavu:</p>
			    		 <input   type="text" > 
			    	</div>

			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite minimalnu cenu:</p>
			    		 <input   type="text" > 
			    	</div>
			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite maksimalnu cenu:</p>
			    		 <input   type="text" > 
			    	</div>

			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite minimalnu broj soba:</p>
			    		 <input   type="text" > 
			    	</div>
			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite maksimalnu broj soba:</p>
			    		 <input   type="text" > 
			    	</div>

			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite minimalnu broj oosba:</p>
			    		 <input   type="text" > 
			    	</div>
			    	<div class="align-self-start mb-3"" >
			    		<p class="mb-1">Unesite maksimalnu broj osoba:</p>
			    		 <input   type="text" > 
			    	</div>

			    	<button class="btn bg-primary"> Pretrazi </button>

		    	</div>



		    	<div class="card  p-3 m-3">
			    	<div class="Guest"> 
			    		<h3 class="">Sortiraj po ceni </h3>
			    		<hr>
			    	</div>
			    	<div class="d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Rastuce </p>
			    	</div>
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Opadajuce</p>
			    	</div>

		    	</div>

		    	<div class="card p-3 m-3"> 
		    		<div class="Guest"> 
			    		<h3 class="">Vrsta smestajnog objekta </h3>
			    		<hr>
			    	</div>
			    	<div class="d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Ceop apartman </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Soba </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>
		    	</div>

		    	<div class="card p-3 m-3"> 
		    		<div class="Guest"> 
			    		<h3 class="">Pogodnosti </h3>
			    		<hr>
			    	</div>
			    	<div class="d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Wifi </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Mesto za rad </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> TV </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Klima </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Besplatan parking </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	  
			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Mikro talasna </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

			    	<div class=" d-flex justify-content-between" >
			    		<p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> Topla voda </p>
			    		<span class="badge text-muted"> 10 </span>
			    	</div>

		    	</div>

		    
		    </div>

		    <div class=" col-sm-8">

		    	<div class=" row p-3 m-3 border rounded">
		   			<div class="col">
    					<img class="img-fluid border border-secondary" src="https://cf.bstatic.com/images/hotel/max1024x768/262/262456256.jpg"> 
    				</div>

    				<div class="col">
    					<p>
    					<label>Tip apartmana </label>: NEKI TIP
    					</p>
    					<p>
    					<label>Broj soba </label> : 10
    					</p>
    					<p>
    					<label>Broj Gostiju </label> : 100
    					</p>
    					<p>
    					<label>Lokacija </label> : Negde tamo daleko
    					</p>
       				</div>
       				
       				<div class="col">
       					<div><label> Cena: </label> 5468e </div>
       					<div><button class="btn bg-primary"> Procitaj vise </button> </div>
       				</div>


    			</div>

    			<div class=" row p-3 m-3 border rounded">
		   			<div class="col">
    					<img class="img-fluid border border-secondary" src="https://cf.bstatic.com/images/hotel/max1024x768/262/262456256.jpg"> 
    				</div>

    				<div class="col">
    					<p>
    					<label>Tip apartmana </label>: NEKI TIP
    					</p>
    					<p>
    					<label>Broj soba </label> : 10
    					</p>
    					<p>
    					<label>Broj Gostiju </label> : 100
    					</p>
    					<p>
    					<label>Lokacija </label> : Negde tamo daleko
    					</p>
       				</div>
       				
       				<div class="col">
       					<div><label> Cena: </label> 5468e </div>
       					<div><button class="btn bg-primary"> Procitaj vise </button> </div>
       				</div>

       				
    			</div>
    			<div class=" row p-3 m-3 border rounded">
		   			<div class="col">
    					<img class="img-fluid border border-secondary" src="https://cf.bstatic.com/images/hotel/max1024x768/262/262456256.jpg"> 
    				</div>

    				<div class="col">
    					<p>
    					<label>Tip apartmana </label>: NEKI TIP
    					</p>
    					<p>
    					<label>Broj soba </label> : 10
    					</p>
    					<p>
    					<label>Broj Gostiju </label> : 100
    					</p>
    					<p>
    					<label>Lokacija </label> : Negde tamo daleko
    					</p>
       				</div>
       				
       				<div class="col">
       					<div><label> Cena: </label> 5468e </div>
       					<div><button class="btn bg-primary"> Procitaj vise </button> </div>
       				</div>

       				
    			</div>
    			<div class=" row p-3 m-3 border rounded">
		   			<div class="col">
    					<img class="img-fluid border border-secondary" src="https://cf.bstatic.com/images/hotel/max1024x768/262/262456256.jpg"> 
    				</div>

    				<div class="col">
    					<p>
    					<label>Tip apartmana </label>: NEKI TIP
    					</p>
    					<p>
    					<label>Broj soba </label> : 10
    					</p>
    					<p>
    					<label>Broj Gostiju </label> : 100
    					</p>
    					<p>
    					<label>Lokacija </label> : Negde tamo daleko
    					</p>
       				</div>
       				
       				<div class="col">
       					<div><label> Cena: </label> 5468e </div>
       					<div><button class="btn bg-primary"> Procitaj vise </button> </div>
       				</div>

       				
    			</div>







		    </div>
  		</div>

    	
    




    </div>`



});