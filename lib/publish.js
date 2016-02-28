/**
 * 
 */

if(Meteor.isServer){
	Meteor.publish("Religions", function() {
		return Religions.find();
	})
}


if(Meteor.isClient){
	Meteor.subscribe("Religions");
}