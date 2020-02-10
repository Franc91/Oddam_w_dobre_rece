import React, { useState } from 'react'
import { makeStyles, Grid, TextField, Button } from '@material-ui/core';
import ContactImg from '../../../assets/Background-Contact-Form.jpg'
import ContactDecoration from '../../../assets/Decoration.svg'

const useStyle= makeStyles(()=>({
    contact:{
        flexGrow: 1,
    },
    contact__img:{
        background: `url(${ContactImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'left',
        backgroundSize: 'cover',
        height: '100%',
        boxSizing:'padding-box',
        opacity: 1, 
    },
    lefSideBlur:{
        background: '#FFFFFFC9',
        opacity: 0.9,
        height:'100%'
    },
    decoration:{
        background: `url(${ContactDecoration})`,
        backgroundRepeat: 'no-repeat',
        height: 40,
        width: 250,
        margin: '25px 0 25px 0'
    },
    rightSide:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contact__title:{
        marginTop: 150,
        textAlign: 'center',
        font: '400 38px Open Sans',
        letterSpacing:' -0.76px',
        color: '#3C3C3C',
        opacity: 1,
    },
    contact__Inputs: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contact__InputName:{
        marginRight: 20
    },
    contact__InputEmail:{
        marginLeft: 20
    },
    contact__button:{
        marginTop: 20,
        alignSelf: 'flex-end',
        width: 150,
        textAlign: 'left',
        font: '300 18px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        '&:hover':{
            background: '#F0F1F1',
            opacity: 1
        }
    },
    contact__Form:{
        marginBottom: 150,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    success:{
        textAlign: 'center',
        font: '400 20px Open Sans',
        letterSpacing:' -0.76px',
        color: 'green',
        opacity: 1,
    }
    


}))
 const Contact = () => {
    const classes = useStyle()
    const [state, setState] = useState({
        name:'',
        email:'',
        result: '',
        message: '',
        success:''
    })

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        return re.test(email);
    }
    const validateName = (name)=>{
        const reg = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
        return reg.test(name)
    }
    const emailErr =  state.email.length > 0 ? !validateEmail(state.email): null
    const errorEmail = emailErr? 'Podany mail jest nieprawidłowy': null
    const nameErr = state.name.length > 0 ? !validateName(state.name) : null
    const errorName = nameErr ? 'Podane imię jest nieprawidłowe': null 
    const messageErr = state.message.length > 120 || state.message.length === 0 ? false: true
    const errorMessage = messageErr ? 'Wiadomość musi mieć conajmniej 120 znaków' : null
    const messageERRBTN = state.message.length > 120 ? true: false
    const buttonDisable = validateEmail(state.email) && validateName(state.name) && messageERRBTN

    const handleOnChange=({target})=>{
        setState(prev=>({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleOnSubmit= (e)=>{
        e.preventDefault()
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({
            name: state.name,
            email: state.email,
            message: state.message
            })
        })
        .then(()=>{
            setState(prev=>({
                ...prev,
                success: 'Wiadomość została wysłana! Wkrótce się skontaktujemy.'
            }))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <Grid container direction='row' spacing={0} className={classes.contact}>
            <Grid className={classes.leftSide} item lg={6}>
                <div className={classes.contact__img}>
                    <div className={classes.lefSideBlur}/>
                </div>
            </Grid>
            <Grid className={classes.rightSide} item sm={12} lg={6}>
                <div>
                    <h2 className={classes.contact__title}>
                        Skontaktuj się z nami
                    </h2>
                </div>
                <div className={classes.decoration}/>
                <p className={classes.success}>{state.success}</p>
                <form onSubmit={handleOnSubmit} className={classes.contact__Form}>
                    <div className={classes.contact__Inputs}>
                        <TextField
                            error={nameErr}
                            className={classes.contact__InputName} 
                            helperText={errorName}
                            type='text'
                            name='name'
                            label='Wpisz swoje imię'
                            id='name'
                            value={state.name}
                            onChange={handleOnChange} 
                            required
                        />

                        <TextField
                            // error={state.error.email}
                            className={classes.contact__InputEmail} 
                            helperText={errorEmail}
                            type='text'
                            name='email'
                            label='Wpisz swój email'
                            id='email'
                            value={state.email}
                            onChange={handleOnChange} 
                            error={emailErr}
                            // required
                        />
                    </div>
                    <TextField
                            label='Wpisz swoją wiadomość'
                            name='message'
                            id='message'
                            error={messageErr}
                            helperText={errorMessage}
                            multiline
                            rowsMax={4}
                            value={state.message}
                            onChange={handleOnChange}
                            width='100%'
                            // required
                            fullWidth
                        />
                    <Button
                        className={classes.contact__button}
                        type='submit'
                        name='contactBTN'
                        id='contactBTN'
                        size='large'
                        disabled={!buttonDisable}
                    >
                        Wyślij
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Contact