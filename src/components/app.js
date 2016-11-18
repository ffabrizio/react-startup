import React, {Component} from 'react'
import Customer from './customer'
import Actions from '../actions'

import styles from '../styles'

class App extends Component {
  
  createCustomer() {
    Actions.createCustomer({
      id: "CUST01",
      invitationCode: "5c8d0db5-1b9c-4343-94de-97927e44de52",
      firstName: "Fabio",
      lastName: "Fabrizio",
      emailAddress: "ffabrizio@gmail.com",
      address: {
        postcode: "W4 2PJ",
        addressLines: [
          "65 Prebend Gardens"
        ],
        city: "London"
      },
      deliveryInstructions: "",
      subscription: {
        items: [
          { id: "PRD01", quantity: 1},
          { id: "PRD01", quantity: 1},
          { id: "PRD01", quantity: 1}
        ]
      }
    })
  }

  updateCustomer() {
    Actions.saveCustomer({
      id: "CUST01",
      invitationCode: "5c8d0db5-1b9c-4343-94de-97927e44de52",
      firstName: "John",
      lastName: "Snow",
      emailAddress: "ffabrizio@gmail.com",
      address: {
        postcode: "W4 2PJ",
        addressLines: [
          "65 Prebend Gardens"
        ],
        city: "London"
      },
      deliveryInstructions: "",
      subscription: {
        items: [
          { id: "PRD01", quantity: 2},
          { id: "PRD01", quantity: 2},
          { id: "PRD01", quantity: 2}
        ]
      }
    })
  }

  loadCustomer() {
    Actions.loadCustomer("CUST01")
  }
  
  render() {

    return (
      
      <div style={styles.base}>
        <Customer customerState={this.props.customerState} />
        <button style={styles.buttons} onClick={this.createCustomer}>Create</button> &nbsp; 
        <button style={styles.buttons} onClick={this.updateCustomer}>Update</button> &nbsp; 
        <button style={styles.buttons} onClick={this.loadCustomer}>Load</button> &nbsp; 
      </div>
      
    )
  }
}

export default App