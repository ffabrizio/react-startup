import React, {Component} from 'react'
import Radium from 'radium'
import styles from '../styles'
import ContentActions from '../actions/contentactions'

@Radium
class App extends Component {
  
  handleRefresh() {
    ContentActions.sync()
  }
  
  render() {

    let button = this.props.Content.loading ? 
      <button style={styles.buttons} disabled>Updating ...</button> : 
      <button style={styles.buttons} onClick={this.handleRefresh}>Update</button>
      
    return (
      
      <div style={styles.base}>
      
        <h1>{this.props.Content.data.title}</h1>
        <p>{this.props.Content.data.body}</p>
        {button}
        
      </div>
      
    )
  }
}

export default App