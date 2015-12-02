module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // keep the src file intact for development purposes
        //clean: ['src/appworks.js'],
        clean: ['tmp'],

        jshint: {
            files: ['Gruntfile.js', 'test/**/*.js'],
            options: {
                globals: {
                    angular: true
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> copyright Jason Ibrahim */\n'
            },
            build: {
                src: 'dist/appworks.js',
                dest: 'dist/appworks.min.js'
            }
        },

        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';\n'
            },
            dist: {
                // the files to concatenate
                src: [
                    'src/appworks.js'
                ],
                // the location of the resulting JS file
                dest: 'dist/appworks.js'
            }
        },
        // this task moves all files that get installed by npm into a local "lib" directory
        copy: {
            map: {
                files: [
                    {
                        expand: false,
                        src: 'src/appworks.js.map',
                        dest: 'dist/appworks.js.map'
                    }
                ]
            }
        },
        typescript: {
            base: {
                src: ['src/*.ts', 'src/*.d.ts', 'typings/**/*.d.ts', 'typings/**/**/*.d.ts'],
                dest: 'dist',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    sourceMap: true,
                    declaration: true
                }
            }
        }
    });

    // external tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-typescript');

    // Default task.
    // first build all of the cordova js files by running a shell script,
    // then copy all dependencies from node_modules to the "lib" directory",
    // concatenate all of our dependencies from "lib" into a single file in a particular order in "src/appworks.js",
    // compress that concatenated file into a single appworks.min.js distribution in the "dist" directory
    grunt.registerTask('default', ['jshint', 'copy', 'compress']);
    // clean up task: concatenate assets, compress, then clean project
    grunt.registerTask('compress', ['concat', 'uglify', 'clean']);
};
