import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const Nav = () => {
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
            </div>
        </nav>
    )
}

export default Nav