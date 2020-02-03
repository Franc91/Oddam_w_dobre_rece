import React, { createContext, Component } from 'react';
import firebase from '../config/fbConfig';

export const UserAuthContext = createContext();

export class UserAuthContextProvider extends Component {
// autoryzacja logowanie firebase
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
      return(
          <UserAuthContext.Provider value={{...this.state}, this.setUser}> 
            {this.props.children}
          </UserAuthContext.Provider>
      );
  }
}

export default UserAuthContextProvider;
