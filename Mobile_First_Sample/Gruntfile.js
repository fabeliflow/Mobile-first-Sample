module.exports = function(grunt) {

  grunt.initConfig({

    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Compile Sass
    sass: {
      options: {
        sourceMap: true,
        sourceComments: false
      },
      dist: {
        files: {
          'css/main.css': 'sass/stylesheets/main.scss'
        }
      }
    },

    // Watch and build
    watch: {
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['sass']
      }
    }

  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Run tasks
  grunt.registerTask('default', ['sass']);

};
