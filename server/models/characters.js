var keystone = require('keystone');
var Types = keystone.Field.Types;

var charImgStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('server/public/img'), // required; path where the files should be stored
		generateFilename: function (file, index) {
			return file.originalname;
		},
		whenExists: 'error',
		publicPath: '/public/img', // path where files will be served
	},
});

var Character = new keystone.List('Character', {
	autokey: { path: 'slug', from: 'name', unique: true },
	defaultSort: '-createdAt',
});

Character.add({
	name: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
	author: { type: Types.Relationship, ref: 'User' },
	createdAt: { type: Date, default: Date.now },
	publishedAt: Date,
	image: {
		type: Types.File,
		storage: charImgStorage,
		mimetype: '.jpeg, .jpg, .gif, .svg',
	},
	bio: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Character.defaultColumns = 'name, state|20%, author, publishedAt|15%';
Character.register();
