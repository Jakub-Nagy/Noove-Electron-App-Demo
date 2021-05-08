var Fuse = require('fuse.js');
var list = require('./list.json');
module.exports = search = function () {
    var options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['author', 'tags']
    };
    var fuse = new Fuse(list, options);
    var result = fuse.search('tion');
    console.log(result);
};
