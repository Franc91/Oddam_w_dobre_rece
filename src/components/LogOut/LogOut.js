import React from 'react'
import Nav from '../Home/Nav/Nav'
import Menu from '../Home/Menu'
import { Link } from 'react-router-dom'

export const LogOut = () => {
    return (
        <>
            <div>
                <Nav/>
                <Menu/>
            </div>
            <div>
                <h1>Wylogowanie nastąpiło pomyślnie</h1>
                <div>__________________________________________________</div>
                <button><Link to='/'>Strona Główna</Link></button>
            </div>

        </>
    )
}

export default LogOut
