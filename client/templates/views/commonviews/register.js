Template.register.onRendered(function(){

    // Initialize iCheck plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

});


Template.register.events({
	'click button': function(event){
		event.preventDefault();
		if($(event.target).prop("name")=="register"){

			 var username = $('[id=username]').val();
		      var password = $('[id=password]').val();
		      var email = $('[id=useremail]').val();
		      Accounts.createUser({
		    	  username:username,
		            email: email,
		            password: password
		        });
		      
		        Router.go('login');

		}

	}
});