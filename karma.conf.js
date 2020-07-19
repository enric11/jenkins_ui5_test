module.exports = function(config) {
	"use strict";

	var chromeFlags = [
		  "--no-sandbox",
          "--remote-debugging-port=9222",
          "--enable-logging",
          "--user-data-dir=./karma-chrome",
          "--v=1",
          "--disable-background-timer-throttling",
          "--disable-renderer-backgrounding",
          "--proxy-bypass-list=*",
          "--proxy-server=\'direct://\'"
	];

	config.set({

		frameworks: ["ui5"],

		browsers: ['PhantomJS', 'PhantomJS_custom'],

		browserConsoleLogOptions: {
			level: "error"
		},
		
		ui5: {
			url: "https://openui5.hana.ondemand.com",
            type: "application",
                paths: {
                    webapp: "HTML5Module/webapp/"
                }
		},
		
		/********/
		/*basePath : '',
		openui5: {
            path: 'https://sapui5.hana.ondemand.com/1.40.12/resources/sap-ui-core.js',
            useMockServer: false
        },
        
		        // How the client should execute the test, like run in an iframe, capture the console and so on.
        client: {
            captureConsole: true,
            clearContext: true,
            useIframe: false,
            qunit: {
                showUI: false,
                testTimeout: 15000,
                autostart: false,
                autoload: false
            },
            openui5: {
                config: {
                    theme: 'sap_belize',
                    libs: 'sap.m',
                    compatVersion: 'edge',
                    frameOptions: 'deny',
                    preload: 'async',
                    animation: 'false',
                    debug: 'false',
                    resourceroots: {
                        "test": "/test/",
                        "your.app": "/"
                    },
                    'xx-debugModuleLoading': 'true',
                    'xx-showLoadErrors': 'true',
                    'xx-supportedLanguages': ['en']
                }
            }
        },
        
		files: [

  // Detailed pattern to include a file. Similarly other options can be used
  { pattern: 'i18n/i18n_es_ES.properties', watched: false },
],
		*/

    // you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },
     phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }

	});
};
