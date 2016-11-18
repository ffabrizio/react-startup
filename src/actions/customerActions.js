import alt from '../alt'

class Customer {
  
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

export default alt.createActions(Customer)