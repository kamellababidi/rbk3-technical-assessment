angular.module('system',[])
.component('app',{
	controller:function(){
		this.users=[];
		var x=this;
		this.showuser=function(){
			$.ajax({
				url:'http://127.0.0.1:3000/users',
				async:false,
				success:function(data){
					var realdata=JSON.parse(data)
					console.log(realdata[0])
					x.users=realdata;
				}
			});
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