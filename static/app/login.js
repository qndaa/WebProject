Vue.component("log-in", {

    template: `
    	<div class="container w-25 p-3 text-center" id="login">

  			<form class="form-login" id="formaLogin" method="post" >
    
    			<div class="py-5 text-center">
        			<h2 class="h2 mb-3 text-primary text-center">Prijavite se</h2>
    			</div>

    			<div class="mb-3">
       				<label for="inputEmail" class="sr-only">Korisnicko ime</label>
      				<input type="text" v-model="users.username" name="username" class="form-control" placeholder="Korisnicko ime"  required autofocus/>
   
      				<label for="inputPassword" class="sr-only">Sifra</label>
      				<input type="password" v-model="users.password" name="password" class="form-control"  placeholder="Sifra" required/>
    
    			</div>

    			<label for="error" class="sr-only"> </label>
    			<button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click.prevent="login" id="loginBtn">Prijava</button>
  			</form>
		</div>

    
    `,
    data : function() {
      return {
        users :{
          username : "",
          password : ""
        }
      }
    },
    methods : {
      login : function() {
        if(this.users.username == '' || this.users.password == ''){
          alert("Morate popuniti sva polja");
          return;
        }

        axios.post('/login', {"username" : this.users.username , "password" : this.users.password})
        .then(function(response){
            alert(response.data.username);
            if (response.data == null) {
              alert("Username ili password pogresan");
            }else{
              if (response.data.typeOfUser === "ADMINISTRATOR") {
                alert("admin");
                //treba da se promeni lokacija samo na koju idu nakon logovanja
                //ja sam stavio da ide na apartmane
                window.location.href = "/#/apartments";
              }else if (response.data.typeOfUser === "GUEST") {
                alert("gost");
                window.location.href = "/#/apartments";
              }else if (response.data.typeOfUser === "HOST") {
                alert("domacin");
                window.location.href = "/#/apartments";
              }
            }

        })
      

      }
    }
});