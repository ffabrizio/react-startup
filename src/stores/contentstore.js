import alt from '../alt'
import ContentActions from '../actions/contentactions'
import ContentSource from '../sources/contentsource'

class ContentStore {
  
  constructor() {
    
    this.state = { 
      loading: false, 
      data: { 
        title: 'Hello', 
        body: 'Something' 
      }
    }

    this.bindActions(ContentActions)
  }
  
  onSync() {
    this.setState({loading: true})
    ContentSource.sync()
  }
  
  onReceivedResults(data) {
    this.setState({loading: false, data})
  }
  
  onFetchingResultsFailed(err) {
    this.setState({loading: false})
    console.log('Fetch error', err)
  }
}

export default alt.createStore(ContentStore, 'ContentStore')