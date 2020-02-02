import React from 'react'
import { Link } from 'react-scroll'

export const Nav = () => {
    return (
        <nav>
            <ul style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-around'}}>
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
        </nav>
    )
}

export default Nav
