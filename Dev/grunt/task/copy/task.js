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
				copy: {
					options: {
					},
					index: {
						src: ['App/index.html'],
						dest: 'Dist/index.html'
					},
					assets: {
						src: ['App/assets/**'],
						dest: 'Dist/assets/**'
					}
				}
			}
		};
	},
	register: function () {
	}
};

module.exports = Task.init.bind(Task);