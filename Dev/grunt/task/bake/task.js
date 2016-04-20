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
				bake: {
					index: {
						options: {
						},
						files: {
							"Dist/index.html": "App/index.html"
						}
					},
				},
			}
		};
	},
	register: function () {

	}
};

module.exports = Task.init.bind(Task);