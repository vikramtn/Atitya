Meteor.methods({
	getLatLong: function(placeAddress){
		console.log("Inside getLatLong")
		var geo = new GeoCoder();
		console.log("Address : "+placeAddress.street+" "+placeAddress.line2+" "+placeAddress.city+" "+ placeAddress.state+" "+placeAddress.zip)
		var result = geo.geocode(placeAddress.street+" "+placeAddress.line2+" "+placeAddress.city+" "+ placeAddress.state+" "+placeAddress.zip);
		console.log("result : "+JSON.stringify(result));

		return result;
	}
})