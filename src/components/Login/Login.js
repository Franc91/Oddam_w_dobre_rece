import React, { useState, useContext } from 'react';
import Nav from '../Home/Nav';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from "../../config/fbConfig";
import { useHistory, Link } from 'react-router-dom'
import { UserAuthContext } from '../../contexts/UserAuthContext';


const useStyles = makeStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },

    login__form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        width: '400px'
    },
    login:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        background:{
            image: 'url(../../../../assets/Decoration.svg)'
        },
        height: 40,
        width: 250
    },
    login__control:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop: 10
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
                {/* <Menu />  zamienic na x albo cos do powrotu do homepage*/}

            </div>
            <div className={classes.container}>
                <div className={classes.login} >
                    <h1>Zaloguj się</h1>
                    <div className={classes.login__decoration}></div>
                    <form 
                    onSubmit={handleOnSubmit}>
                        <div className={classes.login__form}>
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
                            {(state.error.email)?
                            <p>Email powinien zawierać co najmniej 3 znaki oraz @</p>
                            : null}
                            <TextField 
                            className='login__form--password' 
                            name='password'
                            label='Hasło'
                            id='password'
                            value={state.password}
                            onChange={handleOnChange}
                            />
                            {
                            (state.error.password) &&<p>Hasło powinno zawierać min 5 znaków</p>
                            }
                        </div>
                        <div className={classes.login__control}>
                            <button>
                                <Link to='/rejestracja'>Załóż konto</Link>
                            </button>
                            <button 
                            type='submit'
                            className='login__btn'
                            >Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
