import React, { createContext, useEffect, useState } from 'react';
import firebase from '../config/fbConfig';

export const UserAuthContext = createContext();

const UserAuthContextProvider = (props) =>{
// autoryzacja logowanie firebase
  const [user, setUsers]  = useState(null)

  useEffect(() => {
    authListener()
  },[])
  
  const authListener=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user)
        if(user){
            setUsers(user)
        }else{
            setUsers(null)
        }
    });
  }

  const setUser = (user) => {
    setUsers( user )
  }
  return(
      <UserAuthContext.Provider value={{...user, setUser:setUser}}> 
        {props.children}
      </UserAuthContext.Provider>
  );
}

export default UserAuthContextProvider;
