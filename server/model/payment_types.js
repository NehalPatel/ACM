Meteor.publish("payment_types", function(){
	return PaymentTypes.find({
		/*$or : [
		{private: {$ne: true}},
		{owner: this.userId}
		]*/
	});
});


Meteor.methods({
  addPaymentType: function(data){
    PaymentTypes.insert({
		name : data.name,
		created : new Date()
	}, function( error, result) {
	    if ( error ) console.log ( error ); //info about what went wrong
	    if ( result ) console.log ( result ); //the _id of new object if successful
  	});
  }
});