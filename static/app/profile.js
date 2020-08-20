Vue.component("profile", {

    template:`
		    <div class="container">
				<div class="py-5 text-center">
					<h2 class="text-primary">Uvid u podatke korisnika</h2>	
				</div>

				<div class="row py-1 text-center  d-flex justify-content-center"> 
					<div class="col-lg-4   "><label>Ime:</label></div>
					<div class="col-lg-4 d-flex justify-content-start "> 
					<input type="text" class="w-50" v-model="user.name" v-bind:disabled="mode=='NO_MODE'"> 
					</div>
				</div>
				<div class="row py-1 text-center  d-flex justify-content-center"> 
					<div class="col-lg-4"><label>Prezime:</label></div>
					<div class="col-lg-4 d-flex justify-content-start ">
					 <input type="text" class="w-50" v-model="user.surname" v-bind:disabled="mode=='NO_MODE'">
					 </div>
				</div>
				<div class="row py-1 text-center  d-flex justify-content-center"> 
					<div class="col-lg-4   "><label>Korisniko ime:</label></div>
					<div class="col-lg-4 d-flex justify-content-start "> <p class="w-50"> {{user.username}}</p></div>
				</div>
				<div class="row py-1 text-center  d-flex justify-content-center"> 
					<div class="col-lg-4   "><label>Sifra:</label></div>
					<div class="col-lg-4 d-flex justify-content-start "> 
					<input type="password" class=" w-50" v-model="checkPassword1" v-bind:disabled="mode=='NO_MODE'">

					 </div>
				</div>
				<div class="row py-1 text-center  d-flex justify-content-center"> 
					<div class="col-lg-4   "><label>Potvrdi sifru:</label></div>
					<div class="col-lg-4 d-flex justify-content-start ">
						<input id="password" type="password" class="w-50" placeholder="" value="" v-model="checkPassword2"  v-bind:disabled="mode=='NO_MODE'" required/>
					
					</div>
				</div>
				<div class="row py-1 text-center  d-flex justify-content-center"> 

					<div class="col-lg-4   "><label>Pol:</label></div>
					<div class="col-lg-4 d-flex justify-content-start "> 
						<select id="grender" class="custom-select d-block w-50" v-model="user.gender" v-bind:disabled="mode=='NO_MODE'" required>
									<option value="">Izaberi</option>
									<option>Muski</option>
									<option>Zenski</option>
								</select> 
					</div>
				</div>
				<div class="row py-1 text-center  d-flex justify-content-center mt-3"> 
					<div class="col-lg-2"> <button class="btn btn-primary btn-lg btn-block " v-on:click="decline">odustani</button></div>
					<div class="col-lg-2"  v-if="mode!='EDIT'"> <button class="btn btn-primary btn-lg btn-block " v-on:click="saveData"> izmeni</button></div>
					<div class="col-lg-2" v-if="mode==='EDIT'"> <button class="btn btn-primary btn-lg btn-block " v-on:click="confirmChanges">potvrdi</button></div>
				</div>
				
			</div>
	`,
	data : function(){
		return{
			user : {
				name : "",
				surname : "",
				username : "",
				password : "",
				gender : ""

			},
			checkPassword1 : '',
			checkPassword2 : '',
			backup : null,
			mode:'NO_MODE'


		}
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
			if(this.user.name == '' || this.user.surname == ''){
				alert("Polja ime i prezime ne smeju biti prazna");
				return;
			} 

			if(this.checkPassword1 != '' && this.checkPassword2 == ''){
				alert("Morate potvrdii sifru kada je menjate");
				return;
			}

			if(this.checkPassword1 != this.checkPassword2){
				alert("Sifre se razlikuju");
				return;
			}
			if (this.checkPassword1 === this.user.password) {
				alert("password ne moze biti isti kao postojeci");
				return;
			}
			
			if(this.checkPassword1 === this.checkPassword2 && this.checkPassword1 != ''){
				this.user.password = this.checkPassword1;
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


		}
	}
	
});