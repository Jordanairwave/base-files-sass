module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/main.css' : 'css/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		cssmin: {
			options: {
			shorthandCompacting: false,
			roundingPrecision: -1,
			sourceMap: true
			},
			target: {
			files: {
			  'css/main.min.css': ['css/main.css']
			}
			}
		},
		uglify: {
			my_target: {
			  files: {
			    'js/scripts.min.js': ['js/scripts.js']
			  }
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('minify',['cssmin', 'uglify']);
}