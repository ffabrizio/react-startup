import React, {Component} from 'react'
import styles from '../styles'
import ContentActions from '../actions/contentactions'

class App extends Component {

  componentDidMount() {
    ContentActions.sync()
  }
  
  render() {
    let button = this.props.content.loading ? 
      <button style={styles.buttons} disabled>Updating ...</button> : 
      <button style={styles.buttons} onClick={this.handleRefresh}>Update</button>
      
    return (
      
      <div style={styles.base}>
      
        <h1>{this.props.content.data.title}</h1>
        <h2>{this.props.content.data.id}</h2>
        <p>{this.props.content.data.body}</p>
        {button}
        
      </div>
    )
  }

  handleRefresh() {
    ContentActions.sync()
  }

}

export default App