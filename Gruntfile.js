module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: ['lib', 'src/appworks.js'],

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
                    'lib/requirejs/require.js',
                    'lib/cordova/cordova.js',
                    'src/cordova/cordova_plugins.js',
                    'src/appworks-core.js',
                    'src/appworks-cache.js',
                    'src/appworks-comms.js',
                    'src/appworks-storage.js',
                    'src/appworks-global.js'
                ],
                // the location of the resulting JS file
                dest: 'src/appworks.js'
            }
        },

        run: {
            build_ios: {
                exec: 'cd node_modules/cordova-js && ' + 'npm install && grunt compile:ios --platformVersion=4.0.0'
            },
            build_android: {
                exec: 'cd node_modules/cordova-js && grunt compile:android --platformVersion=4.0.0'
            }
        },
        // this task moves all files that get installed by npm into a local "lib" directory
        copy: {
            android: {
                files: [
                    {
                        expand: false,
                        src: ['node_modules/cordova-js/pkg/cordova.android.js'],
                        dest: 'lib/cordova/cordova.js'
                    }
                ]
            },
            ios: {
                files: [
                    {
                        expand: false,
                        src: ['node_modules/cordova-js/pkg/cordova.ios.js'],
                        dest: 'lib/cordova/cordova.js'
                    }
                ]
            },
            blackberry: {
                files: [
                    {
                        expand: false,
                        src: ['src/cordova/cordova-blackberry/cordova.js'],
                        dest: 'lib/cordova/cordova.js'
                    }
                ]
            },
            main: {
                files: [
                    // add requirejs in order to use cordova and build appworks-js in a modular fashion
                    {
                        expand: false,
                        src: ['node_modules/requirejs/require.js'],
                        dest: 'lib/requirejs/require.js'
                    },
                    // include cordova_plugins.js to let cordova.js know which plugins are being used (all)
                    {
                        expand: false,
                        src: ['src/cordova_plugins.js'],
                        dest: 'lib/cordova/cordova_plugins.js'
                    },
                    // copy every available plugin to our "lib" directory
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-device/www/device.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-device/www/device.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-network-information/www/network.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-network-information/www/network.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-network-information/www/Connection.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-network-information/www/Connection.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-battery-status/www/battery.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-battery-status/www/battery.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-device-motion/www/Acceleration.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-device-motion/www/Acceleration.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-device-motion/www/accelerometer.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-device-motion/www/accelerometer.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-device-orientation/www/CompassError.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-device-orientation/www/CompassError.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-device-orientation/www/CompassHeading.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-device-orientation/www/CompassHeading.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-device-orientation/www/compass.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-device-orientation/www/compass.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-geolocation/www/Coordinates.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-geolocation/www/Coordinates.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-geolocation/www/PositionError.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-geolocation/www/PositionError.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-geolocation/www/Position.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-geolocation/www/Position.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-geolocation/www/geolocation.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-geolocation/www/geolocation.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-camera/www/CameraConstants.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-camera/www/CameraConstants.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-camera/www/CameraPopoverOptions.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-camera/www/CameraPopoverOptions.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-camera/www/Camera.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-camera/www/Camera.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-camera/www/ios/CameraPopoverHandle.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/DirectoryEntry.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/DirectoryEntry.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/DirectoryReader.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/DirectoryReader.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/Entry.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/Entry.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/File.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/File.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/FileEntry.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/FileEntry.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/FileError.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/FileError.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/FileReader.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/FileReader.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/FileSystem.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/FileSystem.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/FileUploadOptions.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/FileUploadOptions.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/FileUploadResult.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/FileUploadResult.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/FileWriter.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/FileWriter.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/Flags.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/Flags.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/LocalFileSystem.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/LocalFileSystem.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/Metadata.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/Metadata.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/ProgressEvent.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/ProgressEvent.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/fileSystems.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/fileSystems.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/requestFileSystem.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/requestFileSystem.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/resolveLocalFileSystemURI.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/ios/FileSystem.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/ios/FileSystem.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/fileSystems-roots.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/fileSystems-roots.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file/www/FileSystemPaths.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file/www/FileSystemPaths.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file-transfer/www/FileTransferError.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file-transfer/www/FileTransferError.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-file-transfer/www/FileTransfer.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-file-transfer/www/FileTransfer.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-media-capture/www/CaptureAudioOptions.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-media-capture/www/CaptureAudioOptions.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-media-capture/www/CaptureImageOptions.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-media-capture/www/CaptureImageOptions.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-media-capture/www/CaptureVideoOptions.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-media-capture/www/CaptureVideoOptions.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-media-capture/www/CaptureError.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-media-capture/www/CaptureError.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-media-capture/www/MediaFileData.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-media-capture/www/MediaFileData.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-media-capture/www/MediaFile.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-media-capture/www/MediaFile.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-media-capture/www/capture.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-media-capture/www/capture.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-media/www/MediaError.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-media/www/MediaError.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-media/www/Media.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-media/www/Media.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-dialogs/www/notification.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-dialogs/www/notification.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-vibration/www/vibration.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-vibration/www/vibration.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/contacts.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/contacts.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/Contact.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/Contact.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/ContactAddress.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/ContactAddress.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/ContactError.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/ContactError.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/ContactField.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/ContactField.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/ContactFindOptions.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/ContactFindOptions.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/ContactName.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/ContactName.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/ContactOrganization.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/ContactOrganization.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/ContactFieldType.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/ContactFieldType.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/ios/contacts.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/ios/contacts.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-contacts/www/ios/Contact.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-contacts/www/ios/Contact.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-globalization/www/GlobalizationError.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-globalization/www/GlobalizationError.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-globalization/www/globalization.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-globalization/www/globalization.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-splashscreen/www/splashscreen.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-splashscreen/www/splashscreen.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-inappbrowser/www/inappbrowser.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-inappbrowser/www/inappbrowser.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-console/www/console-via-logger.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-console/www/console-via-logger.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/cordova-plugin-console/www/logger.js'],
                        dest: 'lib/cordova/plugins/cordova-plugin-console/www/logger.js'
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
    grunt.registerTask('default', ['ios']);
    // clean up task: concatenate assets, compress, then clean project
    grunt.registerTask('compress', ['concat', 'uglify', 'clean']);
    // task to build for individual platforms. default is ios
    grunt.registerTask('ios', ['run:build_ios', 'copy:ios', 'copy:main', 'compress']);
    grunt.registerTask('android', ['run:build_android', 'copy:android', 'copy:main', 'compress']);
    grunt.registerTask('blackberry', ['copy:blackberry', 'copy:main', 'compress']);

};