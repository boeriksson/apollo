const path = require('path');
const fs = require('fs');

const locales = [
    'en_GB',
    'sv_SE'
];

module.exports = locales.map(function(locale) {
   return {
       name: locale,
       entry: path.join(__dirname, './src'),
       output: {
           path: path.join(__dirname, "lib"),
           filename: locale + '.js',
           libraryTarget: 'umd'
       },
       module: {
           rules: [
               {
                   test:  /\.js$/,
                   exclude: /node_modules/,
                   loader: 'babel-loader',
                   options: {
                       presets: [
                           ['es2017'],
                           'stage-0'
                       ]
                   }
               },
               {
                   test: /\.js$/,
                   loader: 'string-replace-loader',
                   exclude: /node_modules/,
                   query: {
                       multiple: [
                           {search: /LOCALE/g, replace: locale}
                       ]
                   }
               }
           ]
       }
   }
});

const lib = path.join(__dirname, 'lib/');
if (!fs.existsSync(lib)) {
    fs.mkdirSync(lib);
}

// copy index file
const readStream = fs.createReadStream(path.join(__dirname, 'src/', 'bundleIndex.js'));
readStream.pipe(fs.createWriteStream(path.join(__dirname, 'lib/', 'index.js')));
