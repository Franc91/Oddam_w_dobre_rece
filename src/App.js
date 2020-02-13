import React from 'react';
import Form from './containers/Form';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import LogOut from './components/LogOut'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import UserAuthContextProvider from './contexts/UserAuthContext';


const App = ()=>{


  return (
    <div className="App">
      <Router>
        <Switch>
          <UserAuthContextProvider>
            <Route exact path='/' component={Home} />
            <Route path='/oddaj-rzeczy' component ={Form} />
            <Route path='/logowanie' component={Login}/>
            <Route path='/rejestracja' component={Register}/>
            <Route path='/wylogowano' component={LogOut}/>
          </UserAuthContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
