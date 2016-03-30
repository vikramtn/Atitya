/**
 * Created by VikramTN on 10/15/15.
 */

var Schemas = {};
var Collections = {};


/*Vik Add User page / schema?*/

History = new Mongo.Collection('history');
Places = new Mongo.Collection('places');
Religions= new Mongo.Collection('religions');

 Religion = function(subReligion, religion, details){
     this.subReligion = subReligion;
     this.religion = religion;
     this.details = details;
     
 }
 
 
 Event = function(name, description, location, startTime, endTime, entranceFee, adminEmail, website, phone, addedBy){
	 this.name=name;
	 this.description= description;
	 this.location = location;
	 this.startTime = startTime;
	 this.endTime = endTime;
	 this.entranceFee = entranceFee;
	 this.adminEmail = adminEmail;
	 this.website = website;
	 this.phone = phone;
	 this.addedBy =addedBy;
 }
 Place= function(name, type, subtype, address,schedule, historyId,relatedPlaces, nearbyPlaces, media,addedBy,latLong){
	    this.name=name;
	    this.type=type;
	    this.subtype=subtype;
	    this.address=address;
	    this.historyId=historyId;
	    this.relatedPlaces=relatedPlaces;
	    this.nearbyPlaces = nearbyPlaces;
	    //this is an array of media Ids
	    this.media=media;

	    this.schedule =schedule;
	    this.latLong = latLong;
	    this.addedBy = addedBy;
	}

 Media = function(resourceType, resourceLocation){
    this.resourceType=resourceType;
    this.resourceLocation=resourceLocation;
}

 History = function(built, architecture, story, thingsOfInterest ){
    this.built=built;
    this.architecture=architecture;
    this.story=story;
    this.thingsOfInterest = thingsOfInterest;
}





 addReligionDetails = function(id,name,value){
     var rel = Religions.find({id:id});
     console.log(JSON.stringify(rel));
     rel.details.push({
         name:name,
         value:value
     });
     
     Religions.update(rel);
     
 }
 
 
addRelatedPlace=function(place, relatedPlace){
    var myPlace = Places.find({id:place.id})
    var related = Places.find({id:relatedPlace.id});
    if(related){
        myPlace.relatedPlaces.push(relatedPlace.id);
        Places.update(myPlace);
    }else{
        console.log("adding related Place in the db first");
        var id = Places.insert(relatedPlace);
        myPlace.relatedPlaces.push(relatedPlace.id);
        Places.update(myPlace);    }
}

addNearbyPlace = function(place, nearbyPlace){
    var myPlace = Places.find({id:place.id});
    var nearby = Places.find({id:nearbyPlace.id});
    if(nearby){
        myPlace.nearbyPlaces.push(nearbyPlace.id);
        Places.update(myPlace);
    }else{
        console.log("adding nearby Place in the db first");
        var id = Places.insert(nearbyPlace);
        var id = Places.insert(relatedPlace);
        addRelatedPlace(place,relatedPlace);    }

}


addMedia =function(place,media){
    var id = Media.insert(media);
    var myPlace = Places.find({id:place.id})

    myPlace.media.push(id);
    Places.update(myPlace);
}



/*
userLikesPlace =  function(place){
    var myPlace = Places.find({id:place.id});

    Meteor.user().profile.likedPlaces.push(myPlace);
}*/
