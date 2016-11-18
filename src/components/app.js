import React, {Component} from 'react'
import Customer from './customer'
import CustomerActions from '../actions/customerActions'
import LoginActions from '../actions/loginActions'

import styles from '../styles'

class App extends Component {

  login () { 
    LoginActions.login({user: 'whatever', pwd: 'whatever'})
  }

  logout() {
    LoginActions.logout()
  }

  createCustomer() {
    CustomerActions.createCustomer({
      token: this.props.loginState.token,
      customer: {
        id: this.props.loginState.customerId,
        invitationCode: "8bb46c43-c041-4b13-94d5-ed87fdbc2104",
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
      }
    })
  }

  updateCustomer() {
    CustomerActions.saveCustomer({
      token: this.props.loginState.token,
      customer: {
        id: this.props.loginState.customerId,
        invitationCode: "8bb46c43-c041-4b13-94d5-ed87fdbc2104",
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
            { id: "PRD01", quantity: 1},
            { id: "PRD01", quantity: 1},
            { id: "PRD01", quantity: 1}
          ]
        }
      }
    })
  }

  loadCustomer() {
    CustomerActions.loadCustomer({ 
      customerId: this.props.loginState.customerId, 
      token: this.props.loginState.token
    })
  }
  
  render() {
    
    let loginButton = this.props.loginState.token == null ? 
      <button style={styles.buttons} onClick={this.login.bind(this)}>Login</button> : 
      <button style={styles.buttons} onClick={this.logout.bind(this)}>Logout</button>

    let buttonState = this.props.loginState.token == null ? {'disabled' : 'disabled'} : {}

    return (
      
      <div style={styles.base}>
        <Customer customerState={this.props.customerState} />
        <button style={styles.buttons} onClick={this.createCustomer.bind(this)} {...buttonState}>Create</button> &nbsp; 
        <button style={styles.buttons} onClick={this.updateCustomer.bind(this)} {...buttonState}>Update</button> &nbsp; 
        <button style={styles.buttons} onClick={this.loadCustomer.bind(this)} {...buttonState}>Load</button> &nbsp; 
        {loginButton}
      </div>
      
    )
  }
}

export default App