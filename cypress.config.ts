const { defineConfig } = require('cypress');
const { merge } = require('mochawesome-merge');
const { generateReport } = require('cypress-mochawesome-reporter/lib/generateReport');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // Merge Mochawesome reports and generate the final HTML report
      on('after:run', async () => {
        try {
          await merge({ files: ['cypress/reports/mochawesome-report/*.json'] });
          await generateReport();  // Use generateReport if available
        } catch (error) {
          console.error('Error generating report:', error);
        }
      });
    },
    supportFile: 'cypress/support/e2e.ts', // Adjust path if needed
  },
  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    reportFilename: 'report',
    jsonDir: 'cypress/reports/mochawesome-report/json',
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  }
});
