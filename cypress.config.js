const { defineConfig } = require('cypress')


module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1024,

  env: {
    url: 'https://tst.2.lighting.philips.com',
    urlACC: 'https://acc.2.lighting.philips.com',
    smallMobileViewportWidthBreakpoint: 375,
    mediumTabletViewportWidthBreakpoint: 768,
    largeDesktopViewportWidthBreakpoint: 1440,
    xLargeDesktopViewportWidthBreakpoint: 1920,
    // urlACC:'https://acc.2.lighting.philips.com'  
    // urlPROD:'https://www.2.lighting.philips.com'
  },
  video: false,
  e2e: {
    baseUrl: "https://acc.2.lighting.philips.com",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // on('file:preprocessor', cucumber())
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})


