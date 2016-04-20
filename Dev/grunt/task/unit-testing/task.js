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
				jasmine: {
					ut: {
						src: 'App/src/js/**/*.js',
						options: {
							specs: 'Test/component/**/*.spec.js',
							helpers: 'Test/helper/*.helper.js',
							vendor: []
						}
					}
				}
			}
			
		};
	},
	register: function () {
		grunt.registerTask('ut', ['jasmine:ut']);
	}
};

module.exports = Task.init.bind(Task);