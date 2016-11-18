import React from 'react';
import ReactDOM from 'react-dom';
import AltContainer from 'alt-container'
import App from './components/app'
import CustomerStore from './stores/customerStore'

let customerState = CustomerStore.getState()

ReactDOM.render(
  <AltContainer 
    stores={[CustomerStore]}
    inject={{
      customerState: () => CustomerStore.getState()
    }}>
    <App/>
  </AltContainer>
  , document.getElementById('root'));