import alt from '../alt'

class Login {
  
  constructor() {
    
    this.generateActions (
      'login',
      'logout'
    )
        
  }
}

export default alt.createActions(Login)