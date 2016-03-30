
religionSchema = new SimpleSchema({
	religionName:{
		type:String
	},
	
	religionDescription:{
		type:String
	},
	
	subReligionName:{
		type:String
	},
	
	subReligionDescription:{
		type:String
	}
})


Schedule = new SimpleSchema({
	dayOfWeek:{
		type:String

	},
	openingTime:{
		type:Date
	},
	closingTime:{
		type:Date
	}
})


Address = new SimpleSchema ({
	street:{
		type:String

	},
street2:{
	type:String

	},
city:{
	type:String

	},
zip:{
	type:String

	},
state:{
	type:String

	},
country:{
	type:String

	}
})

LatLong = new SimpleSchema ({
latitude:{
		type:Number
	},
	longitude:{
		type:Number
	},
})



Place = new SimpleSchema ({
	name:{
		type:String,
		label:"Name of the Place"
	},
	
	placeType:{
		type:String
	},
	
	subType:{
		type:String

	},
	
	address:{
		type:Address

	},
	
	schedule:{
		type:[Schedule]
	},
	latLong:{
		type:LatLong
	},
   
    addedBy:{
    	type: String
	}
});



Places.attachSchema(Place);
