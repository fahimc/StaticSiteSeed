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
			tasks:{
				concurrent: {
					dev: {
						tasks:  ['watch', 'serve']
					},
					options: {
						logConcurrentOutput: true
					}
				},
				inject: {
					livereload: {
						scriptSrc: 'Dev/server/resource/livereload.js',
						files: {
							'Dist/index.html': 'Dist/index.html'
						}
					}
				}
			}
		};
	},
	runServer: function () {
		exec('node Dev\\server\\Server.js');
	},
	register: function () {
		grunt.registerTask('serve',this.runServer.bind(this));
		grunt.registerTask('dev',['copy:index','copy:assets','bake-and-format','inject','concurrent:dev']);
	}
};

module.exports = Task.init.bind(Task);