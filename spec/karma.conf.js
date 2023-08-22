// Karma configuration
// Generated on Wed May 15 2013 11:59:59 GMT+0200 (CEST)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '.',

        frameworks: ['mocha'],

        // list of files / patterns to load in the browser
        files: [].concat([
            "../node_modules/mocha/mocha.js",
            "../node_modules/chai/chai.js",
            '../node_modules/leaflet/dist/leaflet.js',
            '../Leaflet.i18n.js',
            'specs.js']),


        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit'
        reporters: ['dots'],


        // web server port
        port: 9876,


        // cli runner port
        runnerPort: 9100,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        // logLevel = LOG_INFO;


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Firefox'],

        plugins: [
            'karma-mocha',
            'karma-firefox-launcher'
        ],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true

    })
};
