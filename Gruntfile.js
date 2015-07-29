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
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'images/svg/',
					src: ['*.svg'],
					dest: 'images/svg/'
				}]
			},
			options: {
				plugins: [
					{ removeViewBox: false },               // don't remove the viewbox attribute from the SVG
					{ removeEmptyAttrs: false }             // don't remove Empty Attributes from the SVG
				]
			}
		},
		imagemin: {
			png: {
				options: {
					optimizationLevel: 3
				},
				files: [
					{
						// Set to true to enable the following options…
						expand: true,
						// cwd is 'current working directory'
						cwd: 'images/png/',
						src: ['*.png'],
						// Could also match cwd line above. i.e. project-directory/img/
						dest: 'images/png/',
						ext: '.png'
					}
				]
			},
			jpg: {
				options: {
					progressive: true
				},
				files: [{
					// Set to true to enable the following options…
					expand: true,
					// cwd is 'current working directory'
					cwd: 'images/jpg/',
					src: ['*.jpg'],
					// Could also match cwd. i.e. project-directory/img/
					dest: 'images/jpg/',
					ext: '.jpg'
				}]
			}	
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('minify',['cssmin', 'uglify']);
	grunt.registerTask('imageopt',['svgmin', 'imagemin']);
	grunt.registerTask('production',['cssmin', 'uglify', 'svgmin', 'imagemin']);
}