import Fuse from 'fuse.js'
import list from './list.json'

function search() {

  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['author', 'tags']
  }

  const fuse = new Fuse(list, options)
  const result = fuse.search('tion')

  console.log(result)
}

export default search