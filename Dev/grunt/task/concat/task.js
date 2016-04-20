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
				concat: {
					options: {
						separator: ';',
						stripBanners: 'line'
					},
					js: {
						src: ['App/src/js/**'],
						dest: 'Dist/js/main.js'
					}
				}
			}
		};
	},
	register: function () {
		
	}
};

module.exports = Task.init.bind(Task);