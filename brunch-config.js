// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'},
  templates: {joinTo: 'app.js'}
};

exports.plugins = {
    babel: {
        presets: ['es2015', 'es2017', 'react'],
        plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
    }    
};
