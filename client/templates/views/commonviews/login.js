Template.login.events({
	'click button': function(event){
		event.preventDefault();
		
		
		if($(event.target).prop("id")=="login"){
			console.log("login");
			 var username = $('[name=username]').val();
		      var password = $('[name=password]').val();
		        Meteor.loginWithPassword(username, password, function(error){
		            console.log(error);
		        });
		        Router.go('dashboard');


		}
	}
})