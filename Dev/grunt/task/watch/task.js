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
						files: ['App/src/component/**/js/**/*.js'],
						options: {
							livereload: true
						},
						tasks: ['concat:js']
					},
					libs: {
						files: ['App/lib/**/*.js'],
						options: {
							livereload: true
						},
						tasks: ['concat:libs']
					},
					index: {
						files: ['App/index.html'],
						options: {
							livereload: true
						},
						tasks: ['bake-and-format','inject']
					},
					templates: {
						files: ['App/src/component/**/template/**/*.html'],
						options: {
							livereload: true
						},
						tasks: ['bake-and-format','inject']
					},
					style: {
						files: ['App/src/import.scss','App/src/component/**/style/**/*.scss'],
						options: {
							livereload: true
						},
						tasks: ['sass']
					}
				}
			}
		};
	},
	register: function () {
		
	}
};

module.exports = Task.init.bind(Task);