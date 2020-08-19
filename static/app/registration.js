Vue.component("registration", {

    template: `
    	<div class="container">
			<div class="py-5 text-center">
				<h2 class="text-primary">Registracija korisnika</h2>
			</div>

			<div class="d-flex justify-content-center">

				<form id="form" class="needs-validation" novalidate style="width: 500px;" >


					<div class="mb-3">
						<label for="name">Ime</label>
						<input id="name" type="text" class="form-control" placeholder="" v-model="User.name" value="" required/>
						<div class="invalid-feedback">
							Nepravilno uneseno ime.
						</div>
					</div>

					<div class="mb-3">
						<label for="surname">Prezime</label>
						<input id="surname" type="text" class="form-control" placeholder="" value="" v-model="User.surname" required/>
						<div class="invalid-feedback">
							Nepravilno uneseno prezime.
						</div>
					</div>

					<div class="row">

						<div class="col-md-6 mb-3">
							<label for="username">Korisnicko ime</label>
							<input id="username" type="text" class="form-control" placeholder="" value="" v-model="User.username" required/>
							<div class="invalid-feedback">
								Nepravilno korisnicko ime.
							</div>
						</div>

						<div class="col-md-6 mb-3">
							<label for="password">Sifra</label>
							<input id="password" type="password" class="form-control" placeholder="" value="" v-model="User.password" required/>
							<div class="invalid-feedback">
								Nepravilna lozinka.
							</div>
						</div>
	 				</div>




					<div class="mb-3">
						<label for="grender">Pol</label>
						<select id="grender" class="custom-select d-block w-100" v-model="User.gender" required>
							<option value="">Izaberi</option>
							<option>Muski</option>
							<option>Zenski</option>
						</select> 
						<div class="invalid-feedback">
								Izaberite pol!
						</div>
					</div>

						

	 				<button id="btnSubmit" class="btn btn-primary btn-lg btn-block mt-5"   v-on:click.prevent="registration" type="submit">Registruj</button>
	 				


	 			</form>
 			</div>


		</div>



    `,
    data : function () {
		return {
			User : {
				name : "",
				surname : "",
				username : "",
				password : "",
				gender : ""

			}
		}
    },

    methods : {
    	registration : function (){
    		if(this.User.name == ""  || this.User.surName == "" || this.User.username == "" || this.User.password =="" || this.User.gender ==""){
    			alert("Morate popuniti sva polja");
    			return;
    		}
    		axios.post('/registrationGuest',this.User)
        	.then( function (response) {
        		if(response.data === true){
        			alert("Uspesno ste registrovali korisnika");
        			window.location.href = "/#/apartments";
        			return;
        		}
        		
        		alert("Korisnik sa vec postoji sa tim korisnickim imenom");
        		
        	})  

    	}
    }
});