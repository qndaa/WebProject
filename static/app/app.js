
const Login = { template: '<log-in></log-in>' }
const Registration = { template: '<registration></registration>' }
const Profile = { template: '<profile></profile>' }
const AllUsers = {template : '<all-users> </all-users>'}
const AllReviews = {template : '<all-reviews> </all-reviews>'}
const Apartments = {template : '<apartments> </apartments>'}
const Reservation = {template : '<reservation> </reservation>'}
const ValidationAccess = {template : '<validation-acces> </validation-acces>'}
const Apartment = {template : '<apartment></apartment>'}
const CreateApartment = {template : '<add-apartment> </add-apartment>'}
const ContentOfApartment = {template: '<contents-of-apartment> </contents-of-apartment>'}


const router = new VueRouter({
    mode: 'hash',
    routes: [
        
   	  	{ path: '/', component: Apartments},
        { path: '/login', component: Login},
        { path: '/registration', component: Registration },
        { path: '/profile', component: Profile },
        { path: '/allUsers', component: AllUsers },
        { path: '/allReviews', component: AllReviews},
        { path: '/apartments', component: Apartments},
        { path: '/apartment/:id', component: Apartment},
        { path: '/reservation', component: Reservation},
        { path: '/validationAcces', component: ValidationAccess},
        { path: '/createApartment', component: CreateApartment},
        { path: '/contentsOfApartment', component: ContentOfApartment}
    ]
});

var app = new Vue({
    router,
    el: '#aplication',
    data : function () {
    	return {
     	 mode: 'NO_LOGIN'
    	}
  	},
    beforeMount(){
      axios
          .get('/sesion')
          .then(response => (this.mode = response.data.typeOfUser))
    },
    updated(){
         axios
          .get('/sesion')
          .then(response => (this.mode = response.data.typeOfUser))          
    },

    methods : {
      logout : function(){
        axios.get('/logout')
        .then(function(response){
          if(response.data == true){
            this.mode= 'NO_LOGIN';
            window.location.href = "/#/login"; 
          }
        });
      }
    }

});