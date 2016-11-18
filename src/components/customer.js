import React, {Component} from 'react'
class Customer extends Component {
  
  render() {
    if (this.props.customerState.customer === null) {
      return (<div></div>)
    }
    if (this.props.customerState.loading === true) {
      return (<div>Loading...</div>)
    }
    
    return (

      <div>
        Customer: {this.props.customerState.customer.id} ({this.props.customerState.customer.firstName}, {this.props.customerState.customer.lastName})
      </div>
      
    )
  }
}

export default Customer