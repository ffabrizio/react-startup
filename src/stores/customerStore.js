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
  
  onCreateCustomer(model) {
    this.setState({loading: true})

    CustomerDataSource.create(model)
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
  
  onSaveCustomer(model) {
    this.setState({loading: true})

    CustomerDataSource.update(model)
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

  onLoadCustomer(model) {
    this.setState({loading: true})

    CustomerDataSource.load(model)
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