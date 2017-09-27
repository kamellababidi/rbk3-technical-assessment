angular.module('system')
.component('userslist',{
	controller:function(){

	},
	bindings:{
		users:'<'
	},
	template:`
		<user
		ng-repeat="user in $ctrl.users" 
		user=user
		 />
	`
})