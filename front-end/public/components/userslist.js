angular.module('system')
.component('userslist',{
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