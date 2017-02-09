module.exports = function(grunt) {
    /* Configuring Grunt task options
       ========================================================================== */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Process scss files
        sass: {
            development: {
                options: {},
                files: {
                    "assets/styles/app.css": "assets/styles/app.scss"
                }
            }
        },
        // Watch for file changes
        watch: {
            sass: {
                options: {},
                files: ['assets/styles/themes/**/*.scss'],
                tasks: ['sass']
            }
        }
    });
    /* Loading in Grunt tasks
       ========================================================================== */
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* Registered Grunt tasks
       ========================================================================== */
    grunt.registerTask('default', ['sass'], ['watch']);
};

