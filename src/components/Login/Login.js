import React, { useState, useContext } from 'react';
import Nav from '../Home/Nav';
import Menu from '../Home/Menu';
import TextField from '@material-ui/core/TextField';
import firebase from "../../config/fbConfig";
import { createUseStyles } from 'react-jss';
import { useHistory, Link } from 'react-router-dom'
import { UserAuthContext } from '../../contexts/UserAuthContext';

const useStyles = createUseStyles({
    login__form: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        height: 250
    },
    login:{
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justfiyContent: 'center'
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
        <>
            <div>
                <Nav />
                <Menu />
            </div>
            <div className={classes.login} >
                <h1>Zaloguj się</h1>
                <div className="decoration"></div>
                <form 
                className={classes.login__form}
                onSubmit={handleOnSubmit}>
                    <div>
                        { state.fireError ? <div>{state.fireError}</div> : null}
                        <TextField 
                        className='login__form--email' 
                        type='text'
                        name='email'
                        label='Email'
                        id='email'
                        value={state.email}
                        onChange={handleOnChange} 
                        />
                        <p>{state.error.email && "Email powinien zawierać co najmniej 3 znaki oraz @"}</p>
                        <TextField 
                        className='login__form--password' 
                        name='password'
                        label='Hasło'
                        id='password'
                        value={state.password}
                        onChange={handleOnChange}
                        />
                        <p>{state.error.password && "Hasło powinno zawierać min 5 znaków "}</p>
                    </div>

                    <div>
                        <Link to='/rejestracja'>Załóż konto</Link>
                        <button 
                        type='submit'
                        className='login__btn'
                        >Zaloguj się</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
