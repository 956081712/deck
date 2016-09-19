'use strict';

let job = require('./job.js'),
  { cloudProvider, account, email } = require('../../config.json');

function createAppJob (appName) {
  let task = {
    application: appName,
    description: `Create Application: ${appName}`,
    job: [job({
      appName,
      cloudProvider,
      account,
      email
    })]
  };

  return task;
}

module.exports = createAppJob;
