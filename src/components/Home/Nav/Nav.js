import React, { useContext } from 'react'
import firebase from '../../../config/fbConfig'
import { NavLink as Link, useHistory } from 'react-router-dom'
import { UserAuthContext } from '../../../contexts/UserAuthContext'

const Nav = () => {
    const {setUser} = useContext(UserAuthContext)
    const history = useHistory()
    const handleOnClick=()=>{
        firebase.default.auth().signOut()
        .then(()=>{
            setUser(null)
            history.push('/')
            console.log('wylogowano')
        })
    }
    return (
        <nav>
            <div style={{display:"flex", justifyContent:"flex-end"}}>
                <Link 
                to="/logowanie"
                style={{margin:10 }}
                >Zaloguj</Link>
                <Link 
                to="/rejestracja"
                style={{margin:10 }}
                >Załóż konto</Link>
                <p onClick={handleOnClick}> Wyloguj </p>
            </div>
        </nav>
    )
}

export default Nav