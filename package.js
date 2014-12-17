Package.describe({
  name: 'leesangwon:alerts',
  summary: 'A package for displaying alert message box for Meteor JS',
  version: '0.3.0',
  git: 'https://github.com/miraten/meteor-alerts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'minimongo',
    'mongo-livedata',
    'templating',
    'underscore',
    'leesangwon:i18n@0.8.2'
  ], 'client');

  api.addFiles([
    'client/alerts-model.js',
    'client/alerts.html',
    'client/alerts.js',
    'client/alerts.css'
  ], 'client');

  api.export('Alerts');
});

Package.onTest(function(api) {
  api.use('tinytest', 'client');
  api.use('leesangwon:alerts', 'client');
  api.addFiles('alerts-tests.js', 'client');
});
