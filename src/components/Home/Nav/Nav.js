import React, { useContext, useEffect, useState } from 'react'
import { NavLink as Link, useHistory } from 'react-router-dom'
import { UserAuthContext } from '../../../contexts/UserAuthContext'
import firebase from '../../../config/fbConfig'

const Nav = () => {
    const {setUser, user} = useContext(UserAuthContext)
    const [ email, setEmail ] = useState(null)
    const history = useHistory()


    const handleOnClick=()=>{
        firebase.default.auth().signOut()
        .then(()=>{
            setUser(null)
            history.push('/wylogowano')
            console.log('wylogowano')
        })
    }
    useEffect(()=>{
        const db = firebase.firestore()
        if(user != null){
            db.collection('users')
            .doc(user.uid)
            .get()
            .then(doc =>{
                console.log(user.uid)
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    setEmail (doc.data().profileEmail)
                    }
                }
            )
        }
    },[user])

    return (
        <nav>
            {user
            ?<div className='logged' style={{display:"flex", justifyContent:"flex-end"}}>
                <h2> {email}</h2>
               <Link 
                to="/oddaj-rzeczy"
                style={{margin:10 }}
                >Oddaj rzeczy</Link>
                <p onClick={handleOnClick}> Wyloguj </p>
            </div>
            :<div className='unlogged'style={{display:"flex",justifyContent:"flex-end"}}>
                <Link 
                to="/logowanie"
                style={{margin:10 }}
                >Zaloguj</Link>
                <Link 
                to="/rejestracja"
                style={{margin:10 }}
                >Załóż konto</Link>
            </div>}
        </nav>
    )
}

export default Nav