import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'

export const Header = () => {
    return (
        <div id='header' style={{height:'100vh'}}>
            <Menu/>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{width: "50vw"}}>
                Header
                </div>
                <div style={{width: "50vw"}}>
                    <button>
                        <Link to='/logowanie'>Oddaj rzeczy</Link>
                    </button>
                    <button>
                        <Link to='/logowanie'>Zorganizuj zbiórke</Link>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Header
