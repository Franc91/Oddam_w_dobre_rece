import React from 'react'
import { Link } from 'react-scroll'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(()=>({
    menu:{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'flex-end',
        marginRight:100,
        flexWrap:'wrap',
    },
    menuButton:{
        '&:hover':{
            background: '#F0F1F1',
            opacity: 1
        }
    }
}))

export const Menu = () => {
    const classes = useStyle()
    return (
        <div>
            <ul className={classes.menu}>
                <Button className={classes.menuButton}>
                    <Link
                    activeClass = 'active'
                    to='header'
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    Start
                    </Link>
                </Button>
                <Button className={classes.menuButton}>
                    <Link
                    activeClass = 'active'
                    to='whatsGoingOn'
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    O co chodzi?
                    </Link>
                </Button>
                <Button className={classes.menuButton}>
                    <Link
                    activeClass = 'active'
                    to='aboutUs'
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    O nas
                    </Link>
                </Button>
                <Button className={classes.menuButton}>
                    <Link
                    activeClass = 'active'
                    to='WhoWeHelp'
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    Fundacje i organizacje
                    </Link>
                </Button>
                <Button className={classes.menuButton}>
                    <Link
                    activeClass = 'active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    Kontakt
                    </Link>
                </Button>
            </ul>            
        </div>
    )
}

export default Menu
