const v = require('./util/validation')

// NOTE:
// If you add/remove/change a config value, make sure to update the following
// - cli/types/index.d.ts (including allowed config options on TestOptions)
// - cypress.schema.json
//
// Add options in alphabetical order

export const options = [
  {
    name: 'animationDistanceThreshold',
    defaultValue: 5,
    validation: v.isNumber,
  }, {
    name: 'autoOpen',
    defaultValue: false,
    isInternal: true,
  }, {
    name: 'baseUrl',
    defaultValue: null,
    validation: v.isFullyQualifiedUrl,
  }, {
    name: 'blockHosts',
    defaultValue: null,
    validation: v.isStringOrArrayOfStrings,
  }, {
    name: 'browsers',
    defaultValue: [],
    validation: v.isValidBrowserList,
  }, {
    name: 'chromeWebSecurity',
    defaultValue: true,
    validation: v.isBoolean,
  }, {
    name: 'clientRoute',
    defaultValue: '/__/',
    isInternal: true,
  }, {
    name: 'component',
    // runner-ct overrides
    defaultValue: {},
    validation: v.isValidConfig,
  }, {
    name: 'componentFolder',
    defaultValue: 'cypress/component',
    validation: v.isStringOrFalse,
    isFolder: true,
  }, {
    name: 'configFile',
    defaultValue: 'cypress.json',
    validation: v.isStringOrFalse,
    // not truly internal, but can only be set via cli,
    // so we don't consider it a "public" option
    isInternal: true,
  }, {
    name: 'defaultCommandTimeout',
    defaultValue: 4000,
    validation: v.isNumber,
  }, {
    name: 'downloadsFolder',
    defaultValue: 'cypress/downloads',
    validation: v.isString,
    isFolder: true,
  }, {
    name: 'e2e',
    // e2e runner overrides
    defaultValue: {},
    validation: v.isValidConfig,
  }, {
    name: 'env',
    validation: v.isPlainObject,
  }, {
    name: 'execTimeout',
    defaultValue: 60000,
    validation: v.isNumber,
  }, {
    name: 'experimentalComponentTesting',
    defaultValue: false,
    validation: v.isBoolean,
    isExperimental: true,
  }, {
    name: 'experimentalFetchPolyfill',
    defaultValue: false,
    validation: v.isBoolean,
    isExperimental: true,
  }, {
    name: 'experimentalSourceRewriting',
    defaultValue: false,
    validation: v.isBoolean,
    isExperimental: true,
  }, {
    name: 'experimentalStudio',
    defaultValue: false,
    validation: v.isBoolean,
    isExperimental: true,
  }, {
    name: 'fileServerFolder',
    defaultValue: '',
    validation: v.isString,
    isFolder: true,
  }, {
    name: 'firefoxGcInterval',
    defaultValue: {
      runMode: 1,
      openMode: null,
    },
    validation: v.isValidFirefoxGcInterval,
  }, {
    name: 'fixturesFolder',
    defaultValue: 'cypress/fixtures',
    validation: v.isStringOrFalse,
    isFolder: true,
  }, {
    name: 'hosts',
    defaultValue: null,
  }, {
    name: 'ignoreTestFiles',
    defaultValue: '*.hot-update.js',
    validation: v.isStringOrArrayOfStrings,
  }, {
    name: 'includeShadowDom',
    defaultValue: false,
    validation: v.isBoolean,
  }, {
    name: 'integrationFolder',
    defaultValue: 'cypress/integration',
    validation: v.isString,
    isFolder: true,
  }, {
    name: 'isTextTerminal',
    defaultValue: false,
    isInternal: true,
  }, {
    name: 'javascripts',
    defaultValue: [],
    isInternal: true,
  }, {
    name: 'morgan',
    defaultValue: true,
    isInternal: true,
  }, {
    name: 'modifyObstructiveCode',
    defaultValue: true,
    validation: v.isBoolean,
  }, {
    name: 'namespace',
    defaultValue: '__cypress',
    isInternal: true,
  }, {
    name: 'nodeVersion',
    defaultValue: 'default',
    validation: v.isOneOf('default', 'bundled', 'system'),
  }, {
    name: 'numTestsKeptInMemory',
    defaultValue: 50,
    validation: v.isNumber,
  }, {
    name: 'pageLoadTimeout',
    defaultValue: 60000,
    validation: v.isNumber,
  }, {
    name: 'pluginsFile',
    defaultValue: 'cypress/plugins',
    validation: v.isStringOrFalse,
    isFolder: true,
  }, {
    name: 'port',
    defaultValue: null,
    validation: v.isNumber,
  }, {
    name: 'projectId',
    defaultValue: null,
    validation: v.isString,
  }, {
    name: 'reporter',
    defaultValue: 'spec',
    validation: v.isString,
  }, {
    name: 'reporterOptions',
    defaultValue: null,
  }, {
    name: 'reporterRoute',
    defaultValue: '/__cypress/reporter',
    isInternal: true,
  }, {
    name: 'requestTimeout',
    defaultValue: 5000,
    validation: v.isNumber,
  }, {
    name: 'resolvedNodePath',
  }, {
    name: 'resolvedNodeVersion',
  }, {
    name: 'responseTimeout',
    defaultValue: 30000,
    validation: v.isNumber,
  }, {
    name: 'retries',
    defaultValue: {
      runMode: 0,
      openMode: 0,
    },
    validation: v.isValidRetriesConfig,
  }, {
    name: 'screenshotOnRunFailure',
    defaultValue: true,
    validation: v.isBoolean,
  }, {
    name: 'screenshotsFolder',
    defaultValue: 'cypress/screenshots',
    validation: v.isStringOrFalse,
    isFolder: true,
  }, {
    name: 'socketId',
    defaultValue: null,
    isInternal: true,
  }, {
    name: 'socketIoRoute',
    defaultValue: '/__socket.io',
    isInternal: true,
  }, {
    name: 'webpackDevServerPublicPathRoute',
    defaultValue: '/__cypress/src',
    isInternal: true,
  }, {
    name: 'socketIoCookie',
    defaultValue: '__socket.io',
    isInternal: true,
  }, {
    name: 'supportFile',
    defaultValue: 'cypress/support',
    validation: v.isStringOrFalse,
    isFolder: true,
  }, {
    name: 'supportFolder',
    isFolder: true,
  }, {
    name: 'taskTimeout',
    defaultValue: 60000,
    validation: v.isNumber,
  }, {
    name: 'testFiles',
    defaultValue: '**/*.*',
    validation: v.isStringOrArrayOfStrings,
  }, {
    name: 'trashAssetsBeforeRuns',
    defaultValue: true,
    validation: v.isBoolean,
  }, {
    name: 'unitFolder',
    isFolder: true,
    isInternal: true,
  }, {
    name: 'userAgent',
    defaultValue: null,
    validation: v.isString,
  }, {
    name: 'video',
    defaultValue: true,
    validation: v.isBoolean,
  }, {
    name: 'videoCompression',
    defaultValue: 32,
    validation: v.isNumberOrFalse,
  }, {
    name: 'videosFolder',
    defaultValue: 'cypress/videos',
    validation: v.isString,
    isFolder: true,
  }, {
    name: 'videoUploadOnPasses',
    defaultValue: true,
    validation: v.isBoolean,
  }, {
    name: 'viewportHeight',
    defaultValue: 660,
    validation: v.isNumber,
  }, {
    name: 'viewportWidth',
    defaultValue: 1000,
    validation: v.isNumber,
  }, {
    name: 'waitForAnimations',
    defaultValue: true,
    validation: v.isBoolean,
  }, {
    name: 'scrollBehavior',
    defaultValue: 'top',
    validation: v.isOneOf('center', 'top', 'bottom', 'nearest', false),
  }, {
    name: 'watchForFileChanges',
    defaultValue: true,
    validation: v.isBoolean,
  }, {
    name: 'xhrRoute',
    defaultValue: '/xhrs/',
    isInternal: true,
  },
]

export const breakingOptions = [
  {
    name: 'blacklistHosts',
    errorKey: 'RENAMED_CONFIG_OPTION',
    newName: 'blockHosts',
  }, {
    name: 'experimentalGetCookiesSameSite',
    errorKey: 'EXPERIMENTAL_SAMESITE_REMOVED',
    isWarning: true,
  }, {
    name: 'experimentalNetworkStubbing',
    errorKey: 'EXPERIMENTAL_NETWORK_STUBBING_REMOVED',
    isWarning: true,
  }, {
    name: 'experimentalRunEvents',
    errorKey: 'EXPERIMENTAL_RUN_EVENTS_REMOVED',
    isWarning: true,
  }, {
    name: 'experimentalShadowDomSupport',
    errorKey: 'EXPERIMENTAL_SHADOW_DOM_REMOVED',
    isWarning: true,
  },
]
