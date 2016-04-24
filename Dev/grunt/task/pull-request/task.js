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
			tasks: {
				shell: {
					getCurrentBranch: {
					}
					getDevelopBranch: {
						command: 'git checkout develop',
						options: {
							execOptions: {
							}
						}
					},
					pullDevelopBranch: {
						command: 'git pull origin develop',
						options: {
							execOptions: {
							}
						}
					}
					
				}
			}
		};
	},
	force: function (set) {
		if (set === "on") {
			grunt.option("force", true);
		} else if (set === "off") {
			grunt.option("force", false);
		}
	},
	register: function () {
		grunt.registerTask('getCurrentBranch', ['shell:getCurrentBranch']);
		grunt.registerTask('pullMergeDevelop', ['getCurrentBranch','shell:getDevelopBranch', 'shell:pullDevelopBranch', ]);
		grunt.registerTask('release', ['lint','ut','pullMergeDevelop']);
	}
};

module.exports = Task.init.bind(Task);