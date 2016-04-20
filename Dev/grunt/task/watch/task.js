var grunt;
var Task = {
	options:null,
	init: function (_grunt, _options){
		grunt = _grunt;
		this.options = _options;
		this.register();
		return this.getConfig();
	},
	getConfig: function () {
		return {
			tasks:{
				watch: {
					js: {
						files: ['App/src/js/**/*.js'],
						options: {
							livereload: true
						},
						tasks: ['concat:js']
					}
				}
			}
		};
	},
	register: function () {
		
	}
};

module.exports = Task.init.bind(Task);