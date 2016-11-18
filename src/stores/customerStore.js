import alt from '../alt'
import Actions from '../actions'
import CustomerDataSource from '../sources/customerDataSource'

class CustomerStore {
  
  constructor() {
    
    this.state = { 
      loading: false,
      customer: null
    }

    this.bindActions(Actions)
  }
  
  onCreateCustomer(customer) {
    this.setState({loading: true})

    CustomerDataSource.create(customer)
      .then(data => {
        return data.json()
      })
      .then(data => {
        this.setState({customer: data})
        setTimeout(() => this.setState({loading: false}), 300)
      })
      .catch(ex => {
        throw ex
      })    
  }
  
  onSaveCustomer(customer) {
    this.setState({loading: true})

    CustomerDataSource.update(customer)
      .then(data => {
        return data.json()
      })
      .then(data => {
        this.setState({customer: data})
        setTimeout(() => this.setState({loading: false}), 300)
      })
      .catch(ex => {
        throw ex
      })  
  }

  onLoadCustomer(id) {
    this.setState({loading: true})

    CustomerDataSource.load(id)
      .then(data => {
        return data.json()
      })
      .then(data => {
        this.setState({customer: data})
        setTimeout(() => this.setState({loading: false}), 300)
      })
      .catch(ex => {
        throw ex
      })  
  }
}

export default alt.createStore(CustomerStore, 'CustomerStore')