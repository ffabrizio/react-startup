import alt from '../alt'
import Actions from '../actions/customerActions'
import CustomerDataSource from '../sources/customerDataSource'

class CustomerStore {
  
  constructor() {
    
    this.state = { 
      loading: false,
      customer: null
    }

    this.bindActions(Actions)
  }
  
  onCreateCustomer(customer, token) {
    this.setState({loading: true})

    CustomerDataSource.create(customer, token)
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
  
  onSaveCustomer(customer, token) {
    this.setState({loading: true})

    CustomerDataSource.update(customer, token)
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

  onLoadCustomer(id, token) {
    this.setState({loading: true})

    CustomerDataSource.load(id, token)
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