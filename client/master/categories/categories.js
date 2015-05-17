Meteor.subscribe("categories");

Template.categories.helpers({
	categories: function () {
		var categories = Categories.find({});

		return categories;
	},

	edit_mode : function(){
		return Session.get('category_edit');
	}
});

Template.categories.events({
	"submit .frm_category": function (event) {

		var data = {
			name 	: $("#name").val()
		};

		Meteor.call("addCategory", data, function(error, result){
			if ( error ) console.log ( error ); //info about what went wrong
	    	if ( result ) console.log ( result ); //the _id of new object if successful
		});

		cleanup();

		return false;
	}	
});

Template.category_list.events({
	"click .remove" : function (event) {
		if(confirm("Are you sure you want to delete this record?")){
			Meteor.call('deleteCategory', this._id, function (error, result) {});			
		}
	},

	"click .edit" : function (event) {
		Session.set('category_edit', true);
		Session.set('category_id', this._id);
	}
});

Template.edit_category.helpers({
	category: function(){
		var cat = Categories.findOne({_id: Session.get('category_id')});
    	return cat;
	}
});

Template.edit_category.events({

	"submit .frm_category_edit": function (event) {

		var data = {
			_id 	: $("#category_id").val(),
			name 	: $("#name").val()
		};

		Meteor.call("editCategory", data, function(error, result){
			if ( error ) console.log ( error ); //info about what went wrong
	    	if ( result ) console.log ( result ); //the _id of new object if successful
		});

		cleanup();

		return false;
	},

	"click .cancel": function (event) {
		cleanup();
		return false;
	}
});

function cleanup(){
	Session.set('category_edit', null);
	Session.set('category_id', null);

	$("#name").val('');
}