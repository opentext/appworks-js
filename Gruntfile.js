module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // keep the src file intact for development purposes
        //clean: ['src/appworks.js'],
        clean: ['tmp'],

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> copyright OpenText Inc */\n'
            },
            build: {
                src: 'src/appworks.js',
                dest: 'dist/appworks.min.js'
            }
        },

        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: '\n'
            },
            dist: {
                // the files to concatenate
                src: [
                    'src/appworks-core.js',
                    'src/appworks-cache.js',
                    'src/appworks-comms.js',
                    'src/appworks-storage.js',
                    'src/appworks-offline.js',
                    'src/appworks-notifications.js',
                    'src/appworks-global.js'
                ],
                // the location of the resulting JS file
                dest: 'src/appworks.js'
            }
        },
        // this task moves all files that get installed by npm into a local "lib" directory
        copy: {
            blackberry: {
                files: [
                    {
                        expand: false,
                        src: ['src/cordova/cordova-blackberry/cordova.js'],
                        dest: 'lib/cordova/cordova.js'
                    }
                ]
            }
        }
    });

    // external tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-run');

    // Default task.
    // first build all of the cordova js files by running a shell script,
    // then copy all dependencies from node_modules to the "lib" directory",
    // concatenate all of our dependencies from "lib" into a single file in a particular order in "src/appworks.js",
    // compress that concatenated file into a single appworks.min.js distribution in the "dist" directory
    grunt.registerTask('default', ['compress']);
    // clean up task: concatenate assets, compress, then clean project
    grunt.registerTask('compress', ['concat', 'uglify', 'clean']);
};
