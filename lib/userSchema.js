
User = new SimpleSchema({
	userName:{
		type:String
	},
	
	firstName:{
		type:String
	},
	
	lastName:{
		type:String
	},
	
	eMail:{
		type:SimpleSchema.RegEx.Email
	},
	
	phoneNumber:{
		type:Number
	},
	
	favouriteLocations:{
		type:[Place]
	},
	
	followingEvents:{
		type:[Event]
	},
	
	attendedEvents:{
		type:[Event]
	},
	
	visitedLocations:{
		type:[Place]
	}
})