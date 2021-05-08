const Fuse = require('fuse.js')
const list = require('./list.json')

module.exports = search = () => {
  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['author', 'tags']
  }

  const fuse = new Fuse(list, options)
  const result = fuse.search('tion')

  console.log(result)
}