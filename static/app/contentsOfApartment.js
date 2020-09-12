Vue.component("contents-of-apartment", {
	template : `
		<div class="container text-primary">

			

			<div class="row">




				<div class="col-3  mt-3">

					<div class="border border-info p-2">
						<h5 class="m-2">Dodaj novi sadrzaj:</h5>


						<div class= "row d-flex justify-content-center" v-if="url != ''">
							<img v-bind:src="url" class="rounded-circle " alt="" width="150" height="150"> </img>
						
						</div>

						<div class="btn btn-primary btn-sm w-100">
	      					<input type="file" name="image" id="image" @change="uploadImage" accept="image/*"/>
	    				</div>

						<div class="form-group">
							<label for="nameItem" class="text-primary mt-4">Naziv: </label>
	              			<input v-bind:class="{'form-control':true, 'is-invalid' : error}" type="text" class="form-control d-flex justify-content-center" id="nameItem" v-model="newItemName" required />
	              			<div class="invalid-feedback">
	               				Greska!
	              			</div>
						</div>

						<div class= "d-flex justify-content-center w-100 mt-3 mb-2">
							<button type="button" class="btn btn-outline-success" v-on:click="addItem">Dodaj</button>
						</div>
						
					</div>


				</div>


				<div class="col-9 border-left">

					<h2 class="mt-3"> Sadrzaj apartmana: </h2>


					<div class="row">
						<div class="col-3 m-3" v-for="item in data" v-if="item.imagePath !== false">
							<div class= "d-flex justify-content-center">
                                <img v-bind:src="item.imagePath"  alt="Logo" width="120" height="120"> </img>
							</div>

							<div class= "d-flex justify-content-center">
								<h5>{{item.name}}</h5>
							</div>

							<div class= "d-flex justify-content-center w-100">
								<button type="button" class="btn btn-outline-danger" v-on:click="deleteItem($event, item.id)">Obrisi</button>
							</div>

						</div>

					</div>
				</div>


			</div>
			


		</div>

	`,
	data : function() {
		return {
			data : null,
			mode : '',
			newItemName : '',
			img : null,
			url : '',
			error : false

		}
	},
	mounted() {

		axios
          .get('/sesion')
          .then(response => {
          		if(response.data.typeOfUser != "ADMINISTRATOR"){
          			window.location.href = "/#/validationAcces"; 
          		} else {
          			axios
          				.post('/getContentsOfApartment')
          				.then(response => (this.data = response.data));
          		}
          });   
	},

	methods : {
		deleteItem : function(event, id) {

			axios
				.post("/deleteContentsOfApartment", null, {'params' : {'id' : id}})
				.then(response => (this.data = response.data));
		},

		addItem : function(event) {
			if(this.img === null || this.newItemName.trim() === ""){
				this.error = true;
				return;
			}

			var formData = new FormData();

			formData.append("image", this.img);
			
			axios
				.post("/addContentsOfApartment", formData, {
    				headers: {
      					'Content-Type': 'multipart/form-data'
    				}, params: {
    					newItemName : this.newItemName

    				}
				})
				.then(response => {
					this.data = response.data
					this.img = null;
					this.newItemName = '';
					this.url = '';
					this.error = false;
				});
		},

		uploadImage : function(event) {
			this.img = event.target.files[0];
			this.url = URL.createObjectURL(this.img);
			this.error = false;
		}

	}
















});