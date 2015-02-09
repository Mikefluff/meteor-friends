Package.describe({
  // name: 'azeirah:friends',
  summary: "A friends system for meteor, send friend requests and add and remove friends",
  version: '0.1.0',
  // git: 'github.com/Azeirah/meteor-friends.git'
});

Package.on_test(function (api) {
  api.use('underscore', 'server');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-password', ['client', 'server']);
  api.use('autopublish', ['client', 'server']);
  api.use('insecure', ['client', 'server']);

  api.addFiles('azeirah:validation.js', ['client', 'server']);
  api.addFiles('azeirah:friends.js', ['client', 'server']);
  api.addFiles('azeirah:friends-test.js');
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use('templating', 'client');
  api.use('underscore', 'server');
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-password', ['client', 'server']);
  api.use('templating', 'client')

  api.addFiles('azeirah:friendHelpers.js', ['client']);
  api.addFiles('azeirah:validation.js', ['client', 'server']);
  api.addFiles('azeirah:friends.js', ['client', 'server']);

  api.export('Friends');
});
