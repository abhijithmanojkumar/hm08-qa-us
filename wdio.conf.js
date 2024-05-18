exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    headless: true,
    capabilities: [
       {
        maxInstances: 10,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        //enable headless mode in firefox
        'moz:firefoxOptions': {
          //  args: ['-headless']
        }
    }
],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://cnt-72af9f73-65b1-47d0-88b8-37b3e201ba56.containerhub.tripleten-services.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['geckodriver', 'intercept'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}