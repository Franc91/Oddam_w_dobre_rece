import React, { Component }from 'react';
import Form from './components/Form'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import LogOut from './components/LogOut'
// import firebase from './config/fbConfig';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


class App extends Component {


// autoryzacja logowanie firebase
//   state = { user: null }

//  componentDidMount() {
//     this.authListener()
//   }
  
//   authListener=()=>{
//     firebase.auth().onAuthStateChanged((user)=>{
//       console.log(user)
//         if(user){
//             this.setState({user})
//         }else{
//           this.setState({user:null})
//         }
//     });
//   }

//   setUser = (user) => {
//     this.setState({ user })
//   }

  render(){
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component ={Home} />
          <Route path='/oddaj-rzeczy' component ={Form} />
          <Route path='/logowanie' component={Login}/>
          <Route path='/rejestracja' component={Register}/>
          <Route path='/wylogowano' component={LogOut}/>
        </Switch>
      </Router>
    </div>
  )};
}

export default App;
