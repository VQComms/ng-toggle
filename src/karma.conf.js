const reporters = process.env.TRAVIS ? ['dots'] : ['progress'];
const browsers = process.env.TRAVIS ? ['ChromeHeadlessNoSandbox'] : ['Chrome'];
const env = process.env.TRAVIS ? 'prod' : 'dev';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-firefox-launcher'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContent: false
        },
        coverageIstanbulReports: {
            dir: require('path').join(__dirname, '..', 'coverage'),
            reports: ['html', 'json', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        angularCli: {
            environment: env
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers,
        reporters,
        singleRun: false,
        browserDisconnectTimeout: 60000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 60000
    });
};
