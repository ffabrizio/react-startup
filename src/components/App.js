import React, {Component} from 'react'
import ContentActions from '../actions/contentactions'

class App extends Component {
  
  handleRefresh() {
    ContentActions.sync()
  }
  
  render() {
    let button = this.props.Content.loading ? 
      <button disabled>Updating ...</button> : 
      <button onClick={this.handleRefresh}>Update</button>
      
    return (
      
      <main>
      
        <h1>{this.props.Content.data.title}</h1>
        <p>{this.props.Content.data.body}</p>
        {button}
        
      </main>
      
    )
  }
}

export default App