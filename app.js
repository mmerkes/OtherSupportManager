// MODELS
var Project = Backbone.Model.extend({
	defaults: {
		project_number: 0,
		pi: '',
		start_date: '',
		end_date: '',
		source: '',
		annual_direct_costs: 0,
		project_title: '',
		months: '',
		month_type: '',
		project_description: ''
	}
});

var project = new Project({
	project_number: '2 R01 HL 00000-13',
	pi: 'Anderson',
	start_date: new Date(1997, 3, 1),
	end_date: new Date(2002, 2, 28),
	source: 'NIH',
	annual_direct_costs: 200000,
	project_title: 'Chloride and Sodium Transport in Airway Epithelial Cells ',
	months: '3',
	month_type: 'calendar',
	project_description: 'The major goals of this project are to define the biochemistry ' +
		'of chloride and sodium transport in airway epithelial ' +
		'cells and clone the gene(s) involved in transport.'
});

// COLLECTIONS


// VIEWS
var ProjectView = Backbone.View.extend({
	el: '#project',
	template: _.template(
		'<table class="table table-condensed">' +
		'<tr><td><%= project_number %> (<%= pi %>)</td>' +
		'<td><%= start_date %> - <%= end_date %></td></tr>' +
		'<tr><td><%= source %></td>' +
		'<td><%= annual_direct_costs %></td></tr>' +
		'<tr><td><%= project_title %></td>' +
		'<td><%= months %> <%= month_type %></td></tr>' +
		'<tr></tr>' +
		'<tr><td><%= project_description %></td></tr>' +
		'</table>'
	),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var projectView = new ProjectView({model: project});
projectView.render();

// ROUTER