/**
 * 
 */
Session.set("isEventPaid",true);
Template.addEvent.onRendered(function(){
    // Initialize the datepicker

    this.$('#startTime').datetimepicker();
    
    this.$('#endTime').datetimepicker();
    

    
});

Template.addEvent.helpers({
	getPlaces: function(){
		var places= [];
		Places.find({}).forEach(function(item){
			places.push(item);
		})
		
		return places;
	},
	
	paid:function(){
		return Session.get("isEventPaid");
	}
});



Template.addEvent.events({
	'click #eventFree':function(event){
		var free =$(event.target).context.checked;
		Session.set("isEventPaid",!free);

	},
	
	'click button':function(event){
		event.preventDefault();
		if($(event.target).prop("id")=="addEventButton"){
			var eventName= Template.instance().$('[name=eventName]').val();
			var eventLocation =  Template.instance().$('[name=eventLocation]').val();
			var eventDesc= Template.instance().$('[name=eventDescription]').val();
			var eventStartTime= Template.instance().$('[name=eventStartTime]').val();
			var eventEndTime= Template.instance().$('[name=eventEndTime]').val();
			var eventAdmin= Template.instance().$('[name=eventAdmin]').val();
			var eventURL= Template.instance().$('[name=eventURL]').val();
			var eventContactPhone= Template.instance().$('[name=eventContactPhone]').val();
			var eventFree= Template.instance().$('[name=eventFree]').val();
			var eventEntranceFee = 0;
			if(!eventFree){
				eventEntranceFee= Template.instance().$('[name=eventEntranceFee]').val();
			}
			 
			
			var event = new Event(eventName, eventDesc, eventLocation, eventStartTime, eventEndTime, eventEntranceFee, eventAdmin, eventURL, eventContactPhone, Meteor.user());
			
			Events.insert(event);
}
	}
	
})