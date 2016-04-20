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
				sass: {
					options: {
						sourceMap: true
					},
					dist: {
						files: {
							'Dist/css/main.css': 'App/src/style/main.scss'
						}
					}
				}
			}
			
		};
	},
	register: function () {
	}
};

module.exports = Task.init.bind(Task);