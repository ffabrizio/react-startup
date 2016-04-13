import alt from '../alt'

class ContentActions {
  
  constructor() {
    
    this.generateActions (
      'sync',
      'receivedResults',
      'fetchingResultsFailed'
    )
        
  }
}

export default alt.createActions(ContentActions)