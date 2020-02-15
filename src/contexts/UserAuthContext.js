import React, { createContext, useEffect, useState } from 'react';
import firebase from '../config/fbConfig';

export const UserAuthContext = createContext();

const UserAuthContextProvider = ({children}) =>{
// autoryzacja logowanie firebase
  const [user, setUsers]  = useState(null)

  useEffect(() => {
    authListener()
  },[])
  
  const authListener=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            setUsers(user)
        }else{
            setUsers(null)
        }
    });
  }

  const setUser= (user) => {
    setUsers( user )
  }
  return(
      <UserAuthContext.Provider value={{...user, setUser}}> 
        {children}
      </UserAuthContext.Provider>
  );
}

export default UserAuthContextProvider;
