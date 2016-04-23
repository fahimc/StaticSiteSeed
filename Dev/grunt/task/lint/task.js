require('shelljs/global');
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
		};
	},
	lint: function () {
		exec('npm run lint --silent');
	},
	register: function () {
		grunt.registerTask('lint',this.lint.bind(this));
	}
};

module.exports = Task.init.bind(Task);