Package.describe({
  name: 'wizonesolutions:underscore-string',
  summary: "underscore.string: Additional string functions for Underscore",
  version: "1.0.0",
  git: "https://github.com/wizonesolutions/meteor-underscore-string.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('meteor', {unordered: true});
	api.use('underscore', ['client', 'server']);

  api.add_files(['pre.js','lib/underscore.string/lib/underscore.string.js','post.js']);

	api.export('_s');
});
