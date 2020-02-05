import React from 'react'
import { Link } from 'react-scroll'

export const Menu = () => {
    return (
        <div>
            <ul style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                <Link
                activeClass = 'active'
                to='header'
                spy={true}
                smooth={true}
                duration={500}
                >
                Start
                </Link>
                <Link
                activeClass = 'active'
                to='whatsGoingOn'
                spy={true}
                smooth={true}
                duration={500}
                >
                O co chodzi?
                </Link>
                <Link
                activeClass = 'active'
                to='aboutUs'
                spy={true}
                smooth={true}
                duration={500}
                >
                O nas
                </Link>
                <Link
                activeClass = 'active'
                to='WhoWeHelp'
                spy={true}
                smooth={true}
                duration={500}
                >
                Fundacje i organizacje
                </Link>
                <Link
                activeClass = 'active'
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
                >
                Kontakt
                </Link>
            </ul>            
        </div>
    )
}

export default Menu
