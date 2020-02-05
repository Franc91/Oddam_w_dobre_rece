import React from 'react';
import Form from './components/Form'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import LogOut from './components/LogOut'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import UserAuthContextProvider from './contexts/UserAuthContext';

const App = ()=>{
  const theme = createMuiTheme({
    typography:{
      fontFamily:[
        'Open Sans', 
        'sans-serif',
        'Merriweather',  
        'serif'
      ].join(',')
    }
  })
  console.log(theme.typography.fontFamily)

  return (
    <div className="App">
      <Router>
        <Switch>
          <UserAuthContextProvider>
          <ThemeProvider theme={theme}>
            <Route exact path='/' component={Home} />
            <Route path='/oddaj-rzeczy' component ={Form} />
            <Route path='/logowanie' component={Login}/>
            <Route path='/rejestracja' component={Register}/>
            <Route path='/wylogowano' component={LogOut}/>
          </ThemeProvider>
          </UserAuthContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
