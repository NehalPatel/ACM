Template.expense.rendered=function(){
  this.$('#expense_date').datepicker({
  	'dateFormat' : 'dd/mm/yy'
  });
};

Template.expense.helpers({
	expenses: function () {
		var expenses = Expenses.find({});
		var result = [];
		var total = 0;

		expenses.forEach(function (expense) {
			result.push(expense);
			total += Number(expense.amount);
		});

		result.total = total;
		return result;
	},

	form_mode : function(){
		return false;
	}
});

Template.expense_add.helpers({
	categories: function () {
		var categories = Categories.find({});		
		return categories;
	},

	payment_types: function () {
		var payment_types = PaymentTypes.find({});

		return payment_types;
	}
});

Template.expense_edit.helpers({
	categories: function () {
		var categories = Categories.find({});		
		return categories;
	},

	payment_types: function () {
		var payment_types = PaymentTypes.find({});

		return payment_types;
	}
});

Template.expense_row.helpers({
	category: function(){
		var cat = Categories.findOne({_id: this.category});
    	return cat;
	},

	payment_type: function(){
		var pt = PaymentTypes.findOne({_id: this.payment_type});
    	return pt;
	}
});

Template.expense.events({
	"submit .frm_expense": function (event) {

		var data = {
			expense_date 	: $("#expense_date").datepicker( "getDate" ),
			amount 			: $("#amount").val(),
			category 		: $("#category").val(),
			payment_type 	: $("#payment_type").val(),
			description 	: $("#description").val()
		};

		Meteor.call("addExpense", data, function(error, result){
			if ( error ) console.log ( error ); //info about what went wrong
	    	if ( result ) console.log ( result ); //the _id of new object if successful
		});


		cleanup();

		return false;
	}
});

function cleanup(){
	$("#expense_date").val('');
	$("#amount").val('');
	$("#category").val(0);
	$("#payment_type").val();
	$("#description").val('');

	$("#expense_date").focus();
}