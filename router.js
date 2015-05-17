Router.configure({
	layoutTemplate : 'master_layout'	
});

Router.map(function () {
	this.route('home', {path : '/'});
	this.route('login', {path : '/login'});

	this.route('expense/edit', {
		path: '/expance/edit/:_id',
		waitOn:function(){
			Meteor.subscribe('expenses');
			Meteor.subscribe('payment_types');
			return Meteor.subscribe('expenses');
		},
		data: function() {
			console.log(Expense.findOne({_id: this.params._id}));
			return Expense.findOne({_id: this.params._id});
		}
	});

	this.route('expense', {
		path : '/expense',
		waitOn:function(){
			Meteor.subscribe('expenses');
			Meteor.subscribe('payment_types');
			return Meteor.subscribe('expenses');
		},
	});

	this.route('income', {path : '/income'});
	this.route('reminder', {path : '/reminder'});

	this.route('categories', {path : 'master/categories'});
	this.route('payment_types', {path : 'master/payment_types'});
});