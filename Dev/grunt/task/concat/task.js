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
						src: ['App/src/component/core/js/main.js','App/src/component/**/js/**/*.js'],
						dest: 'Dist/js/main.js'
					},
					libs: {
						src: ['App/lib/**/*.js'],
						dest: 'Dist/js/libs.js'
					}

				}
			}
		};
	},
	register: function () {
		
	}
};

module.exports = Task.init.bind(Task);