import alt from '../alt'

class Actions {
  
  constructor() {
    
    this.generateActions (
      'createCustomer',
      'selectSubscription',
      'addProduct',
      'saveCustomer',
      'loadCustomer'
    )
        
  }
}

export default alt.createActions(Actions)