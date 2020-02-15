import React, { useContext, useEffect, useState } from 'react'
import { NavLink as Link, useHistory } from 'react-router-dom'
import { UserAuthContext } from '../../../contexts/UserAuthContext'
import firebase from '../../../config/fbConfig'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(()=>({
    nav:{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'flex-end',
        marginTop: 30,
        flexWrap:'wrap',
    },
    navButton:{
        '&:hover':{
            background: '#FAD648'
        }
    },
    navLink:{
        textDecoration: 'none',
        textAlign: 'right',
        font: '400 14px Open Sans',
        letterSpacing: 0,
        color: '#737373',
        opacity: 1
    },
    unlogged:{
        display:"flex",
        justifyContent:"flex-end"
    },
    logged:{
        '& span':{
            textAlign: 'right',
            font: '400 14px Open Sans',
            letterSpacing: 0,
            color: '#000000',
            opacity: 1,
            marginRight:5
        }
    }

}))

const Nav = () => {
    const {setUser, user} = useContext(UserAuthContext)
    const [ email, setEmail ] = useState(null)
    const history = useHistory()
    const classes = useStyle()

    const handleOnClick=()=>{
        firebase.default.auth().signOut()
        .then(()=>{
            setUser(null)
            history.push('/wylogowano')
            console.log('wylogowano')
        })
    }
    useEffect(()=>{
        // const db = firebase.firestore()
        if(user){
            firebase.firestore().collection('users')
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
    console.log(user)

    return (
        <nav className={classes.nav} >
            {user
            ?<div className={classes.logged} >
                <span>Cześć {email}</span>
                <Button className={classes.navButton}>
                    <Link className={classes.navLink} 
                    to="/oddaj-rzeczy"
                    >Oddaj rzeczy</Link>
                </Button>
                <Button className={classes.navButton} onClick={handleOnClick}> 
                    Wyloguj
                </Button>
            </div>
            :<div className={classes.unlogged} >
                <Button className={classes.navButton}>
                    <Link className={classes.navLink} 
                    to="/logowanie"
                    >Zaloguj</Link>
                </Button>
                <Button className={classes.navButton}>
                    <Link className={classes.navLink} 
                    to="/rejestracja"
                    >Załóż konto</Link>
                </Button>
            </div>}
        </nav>
    )
}

export default Nav