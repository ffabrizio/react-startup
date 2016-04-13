import ContentActions from '../actions/contentactions'

class ContentSource {
  
  constructor() {
    
    this.contents = {}
    this.apiUrl = 'http://jsonplaceholder.typicode.com/posts/'
    
  }
  
  sync() {
    let key = Math.floor(Math.random() * (4 - 1)) + 1
    
    if (this.contents[key]) {
      
      Promise.resolve()
        .then(() => {
          setTimeout(() => ContentActions.receivedResults(this.contents[key]), 500)
          
        })
      
    } else {
    
      fetch(this.apiUrl + key)
        .then(data => {
          return data.json()
        })
        .then(data => {
          this.contents[key] = data
          ContentActions.receivedResults(data)
        })
        .catch(ex => {
          ContentActions.fetchingResultsFailed(ex)
        })
        
      }
      
  }
  
}

export default new ContentSource()
