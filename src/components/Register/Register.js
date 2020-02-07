import React, { useState, useContext } from 'react'
import Nav from '../Home/Nav';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Fab } from '@material-ui/core'
import firebase from '../../config/fbConfig'
import { useHistory, Link } from 'react-router-dom'
import { UserAuthContext } from '../../contexts/UserAuthContext'
import CloseIcon from '@material-ui/icons/Close';
import RegDecoration from "../../assets/Decoration.svg"

const useStyles = makeStyles({

    registerContainer:{
        height: '90vh'
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        width:600
    },
    register__form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-around',
        width: '400px',
        padding:  '50px 0',
        background: '#F0F1F1 0% 0% no-repeat padding-box',
        opacity: 1,
    },
    register__control:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    register__title:{
        textAlign: 'center',
        font: '400 40px/55px Open Sans',
        letterSpacing: '-0.8px',
        color: '#3C3C3C',
        opacity: 1,
        margin: '70px 0 0 0'
    
    },
    register:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    register__decoration:{
        background: `url(${RegDecoration})`,
        backgroundRepeat: 'no-repeat',
        height: 40,
        width: 250,
        margin: '25px 0 60px 0'
    },
    Link:{
        textDecoration: 'none',
        font: '300 Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    register__controlBTN:{
        textDecoration: 'none',
        font: '300 Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        '&:hover':{
            background: '#F0F1F1',
            opacity: 1
        },
    },
    Fab:{
        position: 'absolute',
        zIndex: 1000,
        top:40,
        right: 20
    },
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
    const mailErr = (state.email.indexOf('@') > -1 && state.email.length >= 3  ||state.email.length == 0)? false : true;
    const mailAlert = mailErr &&' Email powinien zawierać co najmniej 3 znaki oraz @';

    const passErr = (state.password === state.rePassword && state.password.length > 5 || state.password.length==0 ) ? false : true;
    const passAlert = passErr && 'Hasła nie są   takie same lub hasło zawiera mniej niż 5 znaków'

    const logBtn = (((state.email.indexOf('@') > -1 && state.email.length >= 3) && (state.password === state.rePassword && state.password.length > 5)))? true : false;

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
console.log( passErr, mailErr, logBtn)

    return (
        <Container className={classes.registerContainer}>
            <div>
                <Nav />
                {/* <Menu /> zamienic to na x albo co zeby wraclo do home */}
            </div>
            <Container fixed className={classes.container}>
            <Link to='/'>
                <Fab  className={classes.Fab} size='small'>
                    <CloseIcon/>
                </Fab>
            </Link>
                <div className={classes.register}>
                    <h1 className={classes.register__title}>Załóż konto</h1>
                    <div className={classes.register__decoration}></div>
                    <form 
                    onSubmit={handleOnSubmit}>
                        <div className={classes.register__form}>
                            <TextField 
                            error={mailErr}
                            className='login__form--email' 
                            helperText={mailAlert}
                            type='text'
                            name='email'
                            label='Email'
                            id='email'
                            value={state.email}
                            onChange={handleOnChange} 
                            />
                            <TextField 
                            error={passErr}
                            helperText={passAlert}
                            className='login__form--password' 
                            name='password'
                            label='Hasło'
                            id='password'
                            value={state.password}
                            onChange={handleOnChange}
                            />
                            <TextField 
                            error={passErr}
                            helperText={passAlert}
                            className='login__form--repassword' 
                            name='rePassword'
                            label='Powtórz hasło'
                            id='repassword'
                            value={state.rePassword}
                            onChange={handleOnChange}
                            />
                        </div>

                        <div className={classes.register__control}>
                            <Button className={classes.register__controlBTN}>
                                <Link className={classes.Link} to='/logowanie'>Zaloguj się</Link>
                            </Button>
                            <Button 
                            type='submit'
                            disabled={!logBtn}
                            className={classes.register__controlBTN}
                                >Załóż konto
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </Container>
    )
}

export default Register