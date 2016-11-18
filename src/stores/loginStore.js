import alt from '../alt'
import Actions from '../actions/loginActions'

class LoginStore {
  
  constructor() {
    
    this.state = { 
      customerId: null,
      token: null
    }

    this.bindActions(Actions)
  }
  
  onLogin(email, password) {
    this.setState({
      customerId: 'CUST01', 
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EQkRPVFUxT0Rrd05VSXhOVFk1T0VJek9UWTRNalJFTWpZek5UVkNNa1V5TWtZM04wSTVOZyJ9.eyJlbWFpbCI6ImZmYWJyaXppb0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicm9sZXMiOlsiRmluYW5jZSIsIkNoYW9zIiwiTWVtYmVyT2ZQdWJsaWMiXSwiaXNzIjoiaHR0cHM6Ly9zeXp5Z3lsb25kb24uZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDU3ZjRkZmRhNzQzMWQ0NTIzMGE1ZmY4NiIsImF1ZCI6IjdyOGJTZUhaVnJIOWlCNkhqMFFVZ1lMY1BpWEQwWUhPIiwiZXhwIjoxNDc5NTAyODk5LCJpYXQiOjE0Nzk0NjY4OTl9.gS8YMoUmt63oA9ho_OH_haBlsmPzBtHX7-YdTqK1o20oFgX2aaED785C7g5OZgGhzFo_yXSVt5AP8washL4h5m8ahIHbCO9FTVkbc5CkQTTZEuX8BVD2SvvQuDfbmIQ6UBOPXRmGP88Dd7ccxlRLEIsxs2Lk3KvnjtjWdCmzAV_iSjSzdn3KPKDFr7cqFhWL2K07YYdlW4ySe-EOzuwcsMCxCN6cecGo2gdqeNFAEhjY78yD5mC1dJ6EJofflg54l9ToP7BhTQ-65_Q_1y4pzMyy5DgokC4Jlf6XgBra98C1hrVvUWRHSHbQIzV46YMtiNwjuy1wiYuw0xBlTJAOJw'
    })
  }
  
  onLogout(email, password) {
    this.setState({customerId: null, token: null})
  }
}

export default alt.createStore(LoginStore, 'LoginStore')