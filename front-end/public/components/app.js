angular.module('system',[])
.component('app',{
	controller:function(){
		//create array of users
		this.users=[];
		var x=this;
		//create function to handle show users button 
		this.showuser=function(){
			//ajax request to fetch data from server and server fetch it from database
			$.ajax({
				url:'http://127.0.0.1:3000/users',
				async:false,
				success:function(data){
					var realdata=JSON.parse(data)
					x.users=realdata;
				}
			});
		}
	},
	template:`
		<h1>Wellcome to users application</h1>
		<form action='/users' method='post'>
		ID:<input name='id'>
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