import React from 'react'
import Nav from '../Home/Nav/Nav'
import { Link } from 'react-router-dom'
import { makeStyles, Button, Container } from '@material-ui/core'
import LogOutDecoration from "../../assets/Decoration.svg"

const useStyle=makeStyles(()=>({
    logOut__decoration:{
        background: `url(${LogOutDecoration})`,
        backgroundRepeat: 'no-repeat',
        height: 40,
        width: 250,
        margin: '25px 0 45px 0'
    },
    Link:{
        textDecoration: 'none',
        font: '300 Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    logout__title:{
        textAlign: 'center',
        font: '400 40px/55px Open Sans',
        letterSpacing: '-0.8px',
        color: '#3C3C3C',
        opacity: 1,
        margin: '70px 0 0 0'
    
    },
    logout__content:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        margin: '0 auto',
        height:'90%'
    },
    logout__controlBTN:{
        textDecoration: 'none',
        font: '300 Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        '&:hover':{
            background: '#F0F1F1',
            opacity: 1
        }
    },
    logout:{
        height: '90vh'
    }
}))

export const LogOut = () => {
    const classes=useStyle()
    return (
        <Container className={classes.logout} maxWidth='lg'>
            <div>
                <Nav/>
            </div>
            <div className={classes.logout__content}>
                <h1 className={classes.logout__title}>Wylogowanie nastąpiło pomyślnie</h1>
                <div className={classes.logOut__decoration}></div>
                <Button className={classes.logout__controlBTN}>
                    <Link className={classes.Link} to='/'>Strona Główna</Link>
                </Button>
            </div>
        </Container>
    )
}

export default LogOut
