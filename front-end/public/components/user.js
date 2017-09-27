angular.module('system')
.component('user',{
	controller:function(){

	},
	bindings:{
		user:'<'
	},
	template:`
	    ----------------------------------------------------------------
		<h2>Username: {{$ctrl.user.name}}</h2>
		<h2>Email: {{$ctrl.user.email}}</h2>
		----------------------------------------------------------------
		<br>
	`
})