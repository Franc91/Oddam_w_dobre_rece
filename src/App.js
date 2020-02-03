import React, { Component }from 'react';
import Form from './components/Form'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import LogOut from './components/LogOut'
import firebase from './config/fbConfig';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
// import UserAuthContextProvider from './contexts/UserAuthContext';


class App extends Component {
  state = { user: null }

  componentDidMount() {
     this.authListener()
   }
   
   authListener=()=>{
     firebase.auth().onAuthStateChanged((user)=>{
       console.log(user)
         if(user){
             this.setState({user})
         }else{
           this.setState({user:null})
         }
     });
   }
 
   setUser = (user) => {
     this.setState({ user })
   }

  render(){
    const { user } = this.state
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <UserAuthContextProvider> */}
            <Route exact path='/' render={props => <Home setUser={this.setUser}  {...props}/>} />
            <Route path='/oddaj-rzeczy' component ={Form} />
            <Route path='/logowanie' render={props => <Login setUser={this.setUser} {...props}/>}/>
            <Route path='/rejestracja' component={Register}/>
            <Route path='/wylogowano' component={LogOut}/>
          {/* </UserAuthContextProvider> */}
        </Switch>
      </Router>
    </div>
  )};
}

export default App;
