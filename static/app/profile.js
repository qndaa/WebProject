Vue.component("profile", {

    template:`
		<div class="container">


				<!-- Nalov -->
				<div class="py-4 text-center">
					<h1 class="text-primary">Profil korisnika</h1>	
				</div>

				<!-- Slika i polje za upload -->
				<div class= "row d-flex justify-content-center">
					<img v-bind:src="user.imagePath" class="rounded-circle " alt="Profile picture" width="150" height="150"> </img>
					
				</div>



				<div class= "row mt-2 d-flex justify-content-center">


    						<div class="btn btn-primary btn-sm  w-25">
      								<input type="file" @change="uploadImage" name="image" id="image" accept="image/*"/>
    						</div>
 					
					
					




				</div> 


				<div class="row mt-5 text-center d-flex justify-content-center text-primary"> 
					<div class="col-lg-3">
						<label class="w-50 font-weight-bold" >Korisniko ime:</label>
					</div>
					<div class="col-lg-3"> 
						<p class="w-50 font-weight-bold"> {{user.username}}</p>
					</div>
				</div>

				<div class="row mt-1 text-center d-flex justify-content-center text-primary"> 
					<div class="col-lg-3">
						<label>Ime:</label>
					</div>
					<div class="col-lg-3"> 
						<input type="text" class="w-50 d-flex justify-content-center text-primary"

						v-bind:class="{'form-control' : true, 'is-invalid' : !validName() && Blured.nameBlured}"
	 					v-on:blur="Blured.nameBlured = true"
						
						 v-model="user.name" v-bind:disabled="mode=='NO_MODE'"> 

						<div class="invalid-feedback">
							Morate isrpravno popuniti polje ime.
						</div>
					</div>
				</div>

				<div class="row mt-1 text-center d-flex justify-content-center text-primary"> 
					<div class="col-lg-3">
						<label>Prezime:</label>
					</div>
					<div class="col-lg-3">
						<input type="text" class="w-50 d-flex justify-content-center text-primary" 

						v-bind:class="{'form-control' : true, 'is-invalid' : !validSurName() && Blured.surnameBlured}" 
						v-on:blur="Blured.surnameBlured = true"


						v-model="user.surname" v-bind:disabled="mode=='NO_MODE'">



						<div class="invalid-feedback">
							Morate isrpravno popuniti polje prezime.
						</div>


					</div>
				</div>
	
				<div class="row mt-1 text-center d-flex justify-content-center text-primary"> 
					<div class="col-lg-3">
						<label>Nova sifra:</label>
					</div>
					<div class="col-lg-3 d-flex justify-content-start "> 
						<input type="password" class="w-50 d-flex justify-content-center"


					v-bind:class="{'form-control' : true, 'is-invalid' : !validPassword() && Blured.passwordBlured}" 
					v-on:blur="Blured.passwordBlured = true"

						 v-model="checkPassword1" v-bind:disabled="mode=='NO_MODE'">
						 <div class="invalid-feedback">
							Nepravilna lozinka.
						</div>
					 </div>
				</div>


				<div class="row mt-1 text-center d-flex justify-content-center text-primary"> 
					<div class="col-lg-3">
						<label>Potvrdi sifru:
					</label></div>
					<div class="col-lg-3 d-flex justify-content-start ">
						<input id="password" type="password" class="w-50 d-flex justify-content-center" 

						v-bind:class="{'form-control':true, 'is-invalid' : !validCheckPassword() && Blured.checkPasswordBlured}" 
						v-on:blur="Blured.checkPasswordBlured = true"


						v-model="checkPassword2"  v-bind:disabled="mode=='NO_MODE'" required/>




						<div id="errorPassword" class="invalid-feedback">
							Lozinke se ne poklapaju.
						</div>
					</div>
				</div>
				<div class="row py-1 text-center  d-flex justify-content-center  text-primary"> 

					<div class="col-lg-3"><label>Pol:</label></div>
					<div class="col-lg-3 "> 
						<select id="grender" class="custom-select d-block w-50 d-flex justify-content-center"
						
						v-bind:class="{'form-control' : true, 'is-invalid' : !validGrender() && Blured.genderBlured}" 
						v-on:blur="Blured.genderBlured = true"


						 v-model="user.gender" v-bind:disabled="mode=='NO_MODE'" required>
									<option value="">Izaberi</option>
									<option>Muski</option>
									<option>Zenski</option>
								</select> 

						<div class="invalid-feedback">
								Izaberite pol!
						</div>

					</div>
				</div>

				<div class="row py-1 text-center  d-flex justify-content-center mt-3"> 
					<div class="col-lg-2"> <button class="btn btn-primary btn-lg btn-block " v-on:click="decline">odustani</button></div>
					<div class="col-lg-2"  v-if="mode!='EDIT'"> <button class="btn btn-primary btn-lg btn-block " v-on:click="saveData"> izmeni</button></div>
					<div class="col-lg-2" v-if="mode==='EDIT'"> <button class="btn btn-primary btn-lg btn-block " v-on:click="confirmChanges">potvrdi</button></div>
				</div>
				
		</div>`
	,data : function(){
		return{
			user : {
				name : "",
				surname : "",
				username : "",
				password : "",
				gender : "",
				imagePath : ""

			},
			checkPassword1 : '',
			checkPassword2 : '',
			backup : null,
			mode:'NO_MODE',

			Blured : {
					nameBlured : false,
					surnameBlured : false,
					passwordBlured : false,
					genderBlured : false,
					checkPasswordBlured : false
				}


		}
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
          .get('/sesion')
          .then(response => (this.user = response.data))
	},
	methods:{
		saveData : function(){
			this.backup = [this.user.name,this.user.surname,this.user.username,this.user.password,this.user.gender];
			this.mode='EDIT';
		},
		decline : function(){
			this.user.name = this.backup[0];
			this.user.surname = this.backup[1];
			this.user.username = this.backup[2];
			this.user.password = this.backup[3];
			this.user.gender = this.backup[4];
			this.checkPassword1 = '';
			this.checkPassword2 = '';
			this.mode='NO_MODE';
		},
		confirmChanges : function(){

			if(this.user.name == "" || this.user.surname == "" || this.user.gender ==""){
    			this.Blured.nameBlured = true;
				this.Blured.surnameBlured = true;			
				this.Blured.genderBlured = true;

				if(this.checkPassword1 != '' && this.checkPassword2 == ''){
					this.Blured.checkPasswordBlured = true;
					this.Blured.passwordBlured = true;
				}

    			return;
    		}


			if (this.checkPassword1 === this.user.password) {
				alert("password ne moze biti isti kao postojeci");
				return;
			}
			

			axios.post('/saveChagesUser', this.user)
			.then(function(response){
				if(response.data == true){

					alert("Uspesno ste izmenili podatke");
				
				}else{
					alert("Doslo je do greske");
				}
			});
				this.mode = "NO_MODE";
				this.checkPassword1 = '';
				this.checkPassword2 = '';
				this.backup= null;			
		},
		validName : function() {
    		return (this.user.name.length > 3) ? true : false;
    	},

    	validSurName : function() {
    		return (this.user.surname.length > 3) ? true : false;
    	},
    	validGrender : function() {
    		return (this.user.gender.length > 0) ? true : false;
    	},
    	validCheckPassword : function() {
    	
    		return (this.checkPassword1 === this.checkPassword2) ? true : false;
    	},
    	validPassword : function() {
    		return (this.checkPassword1.length > 3) ? true : false;
    	},





		uploadImage(event) {
			
			var img = event.target.files[0];

			var formData = new FormData();

			
			formData.append("image", img);


			axios.post('/uploadProfileImage',  formData, {
    			headers: {
      				'Content-Type': 'multipart/form-data'
    			}
			})
			.then(response => {
				window.location.reload(false);
			

		});

	}}

	
});