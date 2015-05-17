Meteor.publish("expenses", function(){
	var expenses =  Expenses.find({
		/*$or : [
		{private: {$ne: true}},
		{owner: this.userId}
		]*/
	});

	return expenses;
});


Meteor.methods({
  addExpense: function(data){
    
    Expenses.insert({
		expense_date : data.expense_date,
		amount : data.amount,
		category : data.category,
		payment_type : data.payment_type,
		description : data.description
	}/*, function( error, result) {
	    if ( error ) console.log ( error ); //info about what went wrong
	    if ( result ) console.log ( result ); //the _id of new object if successful
  	}*/);
  }

});