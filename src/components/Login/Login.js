import React, { useState, useContext } from 'react';
import Nav from '../Home/Nav';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from "../../config/fbConfig";
import LoginDecoration from "../../assets/Decoration.svg"
import { useHistory, Link } from 'react-router-dom'
import { UserAuthContext } from '../../contexts/UserAuthContext';
import { Container, Fab, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
    container:{
        height: '90vh',
    },
    box:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        width: 600,
        margin: '0 auto',
    },

    login__form:{
        width: '100%'
    },
    login__formInputs: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-around',
        width: '400px',
        padding: '50px 0',
        background: '#F0F1F1 0% 0% no-repeat padding-box',
        opacity: 1,
    },
    login:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 400,
        // '&__decoration':{
        //     background:{
        //         image: 'url(../../../../assets/Decoration.svg)'
        //     },
        //     height: 40,
        //     width: '100%'
        // }
    },
    login__decoration:{
        background: `url(${LoginDecoration})`,
        backgroundRepeat: 'no-repeat',
        height: 40,
        width: 250,
        margin: '25px 0 60px 0'
    },
    login__control:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    Fab:{
        position: 'absolute',
        zIndex: 1000,
        top:40,
        right: 20
    },
    login__title:{
        textAlign: 'center',
        font: '400 40px/55px Open Sans',
        letterSpacing: '-0.8px',
        color: '#3C3C3C',
        opacity: 1,
        margin: '70px 0 0 0'
    
    },
    Link:{
        textDecoration: 'none',
        font: '300 Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    login__controlBTN:{
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
    fbErr:{
        fontFamily: 'Open Sans',
        fontSize: 12,
        color:'red',
        opacity: 1
    }
    
})

const Login = () => {
    const classes = useStyles()
    const history = useHistory()
    const [ state, setState ] = useState({
        email: '',
        password: '',
        fireError: '',
        error:{
            email: false,
            password: false
        }
    })

    const emailError= state.error.email&& 'Email powinien zawierać co najmniej 3 znaki oraz @'
    const passwordError = state.error.password && 'Hasło powinno zawierać min 5 znaków'
    const {setUser}  = useContext(UserAuthContext)

    // console.log(setUser)

    const handleOnChange=({target})=>{
        setState(prev=>({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setState(prev => ({
            ...prev,
            error: {
              ...prev.error,
              email: (prev.email.indexOf('@') > -1 && prev.email.length >= 3 )? false : true,
              password: prev.password.length > 5 ? false : true
            } 
        }))
        firebase.auth().signInWithEmailAndPassword(state.email, state.password)
        .then((user)=>{
            setUser(user);
            history.push('/')               //historia do zmiany elementów po zalgowaniu taki redirect
            console.log('zalogowano', firebase.auth().currentUser.uid, firebase.auth().currentUser.email, firebase.auth().currentUser.name)})
        .catch((error)=>{
            setState(prev=>({
                ...prev,
                fireError: error.message
            }))
        })
    }
    return (
        <Container className={classes.container}>
            <div>
                <Nav />
            </div>
            <div className={classes.box}>
            <Link to='/'>
                <Fab  className={classes.Fab} size='small'>
                    <CloseIcon/>
                </Fab>
            </Link>
                <div className={classes.login} >
                    <h1 className={classes.login__title}>Zaloguj się</h1>
                    <div className={classes.login__decoration}></div>
                    <form 
                    className={classes.login__form}
                    onSubmit={handleOnSubmit}
                    noValidate>

                        <div className={classes.login__formInputs}>
                            
                            { state.fireError ? <div className={classes.fbErr}>{state.fireError}</div> : null}
                            <TextField 
                            error={state.error.email}
                            className='login__formEmail' 
                            helperText={emailError}
                            type='text'
                            name='email'
                            label='Email'
                            id='email'
                            value={state.email}
                            onChange={handleOnChange} 
                            />
                            <TextField 
                            error={state.error.password}
                            helperText={passwordError}
                            className='login__formPassword' 
                            name='password'
                            label='Hasło'
                            id='password'
                            value={state.password}
                            onChange={handleOnChange}
                            />
                        </div>
                        <div className={classes.login__control}>
                            <Button className={classes.login__controlBTN}>
                                <Link className={classes.Link} to='/rejestracja'>Załóż konto</Link>
                            </Button>
                            <Button 
                            type='submit'
                            className={classes.login__controlBTN}
                            >
                                Zaloguj się
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Login
