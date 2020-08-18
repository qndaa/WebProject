Vue.component("log-in", {

    template: `
    	<div class="container w-25 p-3 text-center" id="login">

  			<form class="form-login" id="formaLogin" method="post" >
    
    			<div class="py-5 text-center">
        			<h2 class="h2 mb-3 text-primary text-center">Prijavite se</h2>
    			</div>

    			<div class="mb-3">
       				<label for="inputEmail" class="sr-only">Korisnicko ime</label>
      				<input type="text" name="username" class="form-control" placeholder="Korisnicko ime"  required autofocus/>
   
      				<label for="inputPassword" class="sr-only">Sifra</label>
      				<input type="password"  name="password" class="form-control"  placeholder="Sifra" required/>
    
    			</div>

    			<label for="error" class="sr-only"> </label>
    			<button class="btn btn-lg btn-primary btn-block" type="submit"  id="loginBtn">Prijava</button>
  			</form>
		</div>

    
    `
});