/**
 * Created by VikramTN on 10/16/15.
 */
Template.addPlace.onRendered(function(event) {
	 $(".js-source-states").select2();
	 $(".js-source-states-2").select2();
	   
	    var weekDaySchedule = [];
	    var weekEndSchedule = [];
	    var schedule = {};
	    schedule.weekDaySchedule = weekDaySchedule;
	    schedule.weekEndSchedule =weekEndSchedule;

	    Session.set("schedule",schedule);

});

Template.addPlace.helpers({
	
	religions: function(){
	var returnList = [];	
	 Religions.find({religion:'main'}).forEach(function(item){
		 returnList.push(item);
	 })
	 return returnList;
	},
	
	subReligions:function(){
		return Session.get("subReligions");
	},
	
	
	relatedPlaces:function(){
		return Session.get("relatedPlaces");
	},
	
	nearbyPlaces:function(){
		return Session.get("nearbyPlaces");
	}
});



Template.addPlace.events({
	'change #placeType' : function(event){
	event.preventDefault();
	
		
		var religion = Template.instance().$('[name=placeType]').val();

		var subReligions = [];	
		 Religions.find({religion:religion}).forEach(function(item){
			 subReligions.push(item);
			 })
			 Session.set("subReligions",subReligions);	
		 
		 var relatedPlaces = [];
		 Places.find({type:religion}).forEach(function(item){
			 relatedPlaces.push(item);
		 });
		 Session.set("relatedPlaces",relatedPlaces);
	},
	
	
	'change #placeAddressCity' : function(event){
		event.preventDefault();
		
			
			var city = Template.instance().$('[name=placeAddressCity]').val();

			var nearbyPlaces = [];	
			 Places.find({'address.city':city }).forEach(function(item){
				 nearbyPlaces.push(item);
				 });
				 Session.set("nearbyPlaces",nearbyPlaces);	

		},
	
	'click button': function(event){
		event.preventDefault();
		if($(event.target).prop("id")=="addPlaceButton"){
			var placeAddress = {};
			var placeName= Template.instance().$('[name=placeName]').val();
			var placeType= Template.instance().$('[name=placeType]').val();
			var placeSubType= Template.instance().$('[name=placeSubType]').val();
			 placeAddress.street= Template.instance().$('[name=placeAddressStreet]').val();
			 placeAddress.line2= Template.instance().$('[name=placeAddressLine2]').val();
			 placeAddress.city= Template.instance().$('[name=placeAddressCity]').val();
			 placeAddress.state= Template.instance().$('[name=placeAddressState]').val();
			 placeAddress.zip= Template.instance().$('[name=placeAddressZip]').val();
			 placeAddress.country= Template.instance().$('[name=placeAddressCountry]').val();
			 var nearbyPlaces= Template.instance().$('[name=nearbyPlaces]').val();
			var placeMediaUploads= Template.instance().$('[name=placeMediaUploads]').val();
			var relatedPlaces= Template.instance().$('[name=relatedPlaces]').val();
			var place = new Place(placeName, placeType, placeSubType, placeAddress, Session.get("schedule"),null , relatedPlaces, nearbyPlaces, placeMediaUploads,Meteor.user());
			Places.insert(place);


			

		} else if($(event.target).prop("id")=="addWeekdaySchedule"){
			var newSchedule = {};
			newSchedule.openingTime= Template.instance().$('[id=weekDayPlaceOpeningTime]').val();
			newSchedule.closingTime= Template.instance().$('[id=weekDayPlaceClosingTime]').val();
			var schedule =  Session.get("schedule");
			schedule.weekDaySchedule.push(newSchedule);
			Session.set("schedule",schedule);
			var option = new Option(newSchedule.openingTime+" to "+ newSchedule.closingTime, [schedule.weekDaySchedule.length, [true, [true]]]);
			Template.instance().$('[id=weekDaySchedule]')[0].options.add(option);
		}
		
		
		else if($(event.target).prop("id")=="addWeekendSchedule"){
			var newSchedule = {};
			newSchedule.openingTime= Template.instance().$('[name=weekEndPlaceOpeningTime]').val();
			newSchedule.closingTime= Template.instance().$('[name=weekEndPlaceClosingTime]').val();
			var schedule =  Session.get("schedule");
			schedule.weekEndSchedule.push(newSchedule);
			Session.set("schedule",schedule);
			var option = new Option(newSchedule.openingTime+" to "+ newSchedule.closingTime, [schedule.weekEndSchedule.length, [true, [true]]]);
			Template.instance().$('[id=weekEndSchedule]')[0].options.add(option);
		}
	}
})