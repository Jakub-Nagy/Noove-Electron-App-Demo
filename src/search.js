var Fuse = require('fuse.js');
var list = require('./list.json');
var search = function () {
    console.log("hello");
    var options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['author', 'tags']
    };
    var fuse = new Fuse(list, options);
    var result = fuse.search('tion');
    console.log(result);
};
export { search };
