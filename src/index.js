import React from 'react';
import ReactDOM from 'react-dom';
import AltContainer from 'alt-container'
import App from './components/app'
import ContentStore from './stores/contentstore'

ReactDOM.render(
  <AltContainer 
    stores={[ContentStore]}
    inject={{
      content: () => ContentStore.getState()
    }}>
    <App/>
  </AltContainer>
  , document.getElementById('root'));