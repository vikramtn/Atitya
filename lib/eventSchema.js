
Events = new Mongo.Collection('events');

Event = new SimpleSchema({
	eventName:{
		type:String
	},

	eventDescription:{
		type:String
	},
	
	eventLocation:{
		type:Place
	},
	
	eventStartDate:{
		type:Date
	},
	
	eventEndDate:{
		type:Date
	},
	
	eventAdmin:{
		type:String
	},
	
	eventURL:{
		type:SimpleSchema.RegEx.Url
	},
	isFree:{
		type:Boolean
	},
	entranceFee:{
		type:Number
	}
	
})

Events.attachSchema(Event)