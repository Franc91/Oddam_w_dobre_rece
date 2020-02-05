import React, { useState, useContext } from 'react'
import Nav from '../Home/Nav';
import Menu from '../Home/Menu';
import TextField from '@material-ui/core/TextField';
import firebase from '../../config/fbConfig'
import { useHistory, Link } from 'react-router-dom'
import { UserAuthContext } from '../../contexts/UserAuthContext'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },
    register__form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400
    },
    register__control:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    register:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    alert:{
        color:'red'
    }
})


const Register = () => {
    const classes = useStyles()
    const {setUser, user} = useContext(UserAuthContext)
    const history = useHistory();
    const [state, setState]= useState({
        email:'',
        password:'',
        rePassword:'', 
        fireError: '',
    })
    const mailErr = (state.email.indexOf('@') > -1 && state.email.length >= 3 )? true : false;
    const passErr = (state.password === state.rePassword && state.password.length > 5 ) ? true : false;
    const logBtn = (mailErr & passErr)? false : true;

    const handleOnChange=({target})=>{
        setState(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(state)

        firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
        .then((resp) => {
            const db = firebase.firestore();
            return db.collection('users').doc(resp.user.uid).set({
            profileEmail: state.email,
            profilePassword: state.password
            })    
        })
        .then(()=>{
            setUser(null);
            history.push('/')               //historia do zmiany elementów po zalgowaniu taki redirect
            // console.log('zalogowano', firebase.auth().currentUser.uid, firebase.auth().currentUser.email, firebase.auth().currentUser.name)
        })
        .then(()=>{console.log('zarejstrowano nowego uzytkownika', user)})    
        .catch((error)=>{
            setState(prev=>({
                ...prev,
                fireError: error.message
            })
        )
    })
    } 


    return (
        <>
            <div>
                <Nav />
                <Menu />
            </div>
            <div className={classes.container}>
                <div className={classes.register}>
                    <h1>Załóż konto</h1>
                    <div className="decoration"></div>
                    <form 
                    onSubmit={handleOnSubmit}>
                        <div className={classes.register__form}>
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
                            {
                                (!mailErr && state.email.length)? <p className={classes.alert}>Email powinien zawierać co najmniej 3 znaki oraz @</p>: null
                            }
                            <TextField 
                            className='login__form--password' 
                            name='password'
                            label='Hasło'
                            id='password'
                            value={state.password}
                            onChange={handleOnChange}
                            />
                            <TextField 
                            className='login__form--repassword' 
                            name='rePassword'
                            label='Powtórz hasło'
                            id='repassword'
                            value={state.rePassword}
                            onChange={handleOnChange}
                            />
                            {
                                (!passErr && state.password.length)? <p className={classes.alert}>Hasła nie są   takie same lub hasło zawiera mniej niż 5 znaków</p>: null
                            }
                        </div>

                        <div className={classes.register__control}>
                            <button>
                                <Link to='/logowanie'>Zaloguj się</Link>
                            </button>
                            <button 
                            type='submit'
                            disabled={logBtn}
                            className='login__btn'
                            >Załóż konto</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register