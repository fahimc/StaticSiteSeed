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
					},
					index: {
						files: ['App/index.html'],
						options: {
							livereload: true
						},
						tasks: ['copy:index','inject']
					},
					templates: {
						files: ['App/src/template/**/*.html'],
						options: {
							livereload: true
						},
						tasks: ['bake','inject']
					}
				}
			}
		};
	},
	register: function () {
		
	}
};

module.exports = Task.init.bind(Task);