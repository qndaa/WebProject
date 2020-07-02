const Home = {template : '<home></home>'}
const Login = {template : '<login></login>'}

const router = new VueRouter({
	mode : 'hash',
	routes: [
		{path : '/home', component : Home },
		{path : '/', component : Login }
		
	]
});


var app = new Vue({
	router,
	el: '#ApartmantApp',
	data : {
		MODE : {status :"NO_LOGIN" }
		
		
	}
});

