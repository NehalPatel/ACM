Meteor.publish("categories", function(){
	return Categories.find({
		/*$or : [
		{private: {$ne: true}},
		{owner: this.userId}
		]*/
	});
});


Meteor.methods({

	addCategory: function(data){
		Categories.insert({
			name : data.name,
			created : new Date()
		}, function( error, result) {
		    if ( error ) console.log ( error ); //info about what went wrong
		    if ( result ) console.log ( result ); //the _id of new object if successful
		});
	},

	editCategory : function(data){
		Categories.update( data._id, {$set : {name:data.name}} , function( error, result) {
		    if ( error ) console.log ( error ); //info about what went wrong
		    if ( result ) console.log ( result ); //the _id of new object if successful
		});
	},

	deleteCategory : function (id) {
		Categories.remove(id);
	}
});