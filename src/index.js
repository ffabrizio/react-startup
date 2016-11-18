import React from 'react';
import ReactDOM from 'react-dom';
import AltContainer from 'alt-container'
import App from './components/app'
import CustomerStore from './stores/customerStore'
import LoginStore from './stores/loginStore'

ReactDOM.render(
  <AltContainer 
    stores={[CustomerStore, LoginStore]}
    inject={{
      loginState: () => LoginStore.getState(),
      customerState: () => CustomerStore.getState()
    }}>
    <App/>
  </AltContainer>
  , document.getElementById('root'));