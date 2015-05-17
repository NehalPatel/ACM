Meteor.subscribe("payment_types");

Template.PaymentTypes.helpers({
	payment_types: function () {
		var payment_types = PaymentTypes.find({});

		return payment_types;
	}
});

Template.PaymentTypes.events({
	"submit .frm_payment_types": function (event) {

		var data = {
			name 	: $("#name").val()
		};

		console.log(data);

		Meteor.call("addPaymentType", data, function(error, result){
			if ( error ) console.log ( error ); //info about what went wrong
	    	if ( result ) console.log ( result ); //the _id of new object if successful
		});

		cleanup();

		return false;
	}
});

function cleanup(){
	$("#name").val('');
}