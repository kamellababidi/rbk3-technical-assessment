angular.module('system',[])
.component('app',{
	controller:function(){
		this.users=[{name:'kamel',email:'sdsds'}, {name:'sdsd',email:'sdssssssssds'}];
		var x=this;
		this.showuser=function(){
			alert('waw')
			$.ajax({
				url:'http://127.0.0.1:3000/users',
				success:function(data){
					x.users=data;
				}
			})
		}
	},
	template:`
		<h1>Wellcome to users application</h1>
		<form action='/api/users' method='post'>
		Username:<input name='name' >
		Email:<input name='email' >
		<button>Add User</button>
		</form>
		<br>
		<button ng-click='$ctrl.showuser()'>Show Users</button>
		<br>
		<userslist users='$ctrl.users' />
	`
})