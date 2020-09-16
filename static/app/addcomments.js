Vue.component("comments", {

    template:`
    	 <div class="container w-50 p-3 border">
		<div class="py-5 text-center">
        	<h2 class="h2 mb-3 text-primary">Ostavite komentar </h2>
    	</div>

    	<div class="form-row">	 				
    		
    		<div class="form-group col-md-3 mb-2" >
				<label for="numberOfGuest" class="text-primary">Ocena</label>
				<input class="form-control"
				v-bind:class="{'form-control' : true, 'is-invalid' : !validnumberOfMark() && Blured.markBlured}"
				v-on:blur="Blured.markBlured = true"

				type="number" v-model="Comments.mark" required/>
				<div id="errorPassword" class="invalid-feedback">
					Ocena mora biti validna!
				</div>
			</div>

			<div class="form-group col-md-9 mb-10" >
				<label for="numberOfGuest" class="text-primary">Komentar</label>
				<textarea  class="form-control"
				v-bind:class="{'form-control' : true, 'is-invalid' : !validText() && Blured.textBlured}"
				v-on:blur="Blured.textBlured = true"

				 v-model="Comments.text" required> </textarea >
				<div id="errorPassword" class="invalid-feedback">
					Morate napisati komentar!
				</div>
			</div>

		</div>

		<button class="btn btn-primary btn-lg btn-block mt-5" v-on:click="addComments" > Ostavi komentar </button>


   		</div>
   		`,
   	data : function() {
      return {
        Comments :{
          idGuest : "",
          idApartment : "",
          text : "",
          mark : ""
        },
        user : "",
        Blured : {
    		textBlured : false,
    		markBlured : false
    	}
      }
    },
    methods : {
    	addComments(){

    		if(this.Comments.text == "" || this.Comments.mark == ""){

    			this.Blured.textBlured = true;
    			
    			this.Blured.markBlured = true;

    			return;
    		}
    		this.Comments.idApartment = this.$route.params.id;
    		this.Comments.idGuest = this.user.username;

    		 axios
          .post('/saveComment',this.Comments)
          .then(function(response){
          		if(response.data == true){
          			alert("uspesno ste ostasvili komentar");
          		}
          }).catch(function(eror){
          	if(eror.response.status == 400){
				alert("Moguce je komentarisati samo jednom apartman");
			}
		});


    	},

    	validnumberOfMark : function() {
    		return (this.Comments.mark > 0 &&  this.Comments.mark <= 5) ? true : false;
    	},
    	validText : function() {
    		return (this.Comments.text != "") ? true : false;
    	},
    },
     beforeCreate(){
        axios
          .get('/sesion')
          .then(response => (this.user = response.data));
 
    },
});