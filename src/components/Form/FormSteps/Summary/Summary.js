import React, { useContext, useState } from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'
import ShirtIcon from '../../../../assets/Icon-1.svg'
import ArrowIcon from '../../../../assets/Icon-4.svg'
import FormStepImg from '../../../../assets/Background-Form.jpg'
import firebase from '../../../../config/fbConfig'
import { UserAuthContext } from '../../../../contexts/UserAuthContext'
import ErrorIcon from '@material-ui/icons/Error';

const useStyle = makeStyles({
    summary:{
        background: `url(${FormStepImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxSizing:'padding-box',
        backgroundPosition:'center',
        flexGrow:1,
        height: 883,
        // position: 'relative'
    },
    iconShirt:{
        width: 50,
        height: 50,
        background: `url(${ShirtIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxSizing:'padding-box',
        backgroundPosition:'center',
    },
    iconArrows:{
        width: 50,
        height: 50,
        background: `url(${ArrowIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxSizing:'padding-box',
        backgroundPosition:'center',
    },
    summary__content:{
        margin: '50px 142px' 
    },
    summary__contentTitle:{
        textAlign: 'left',
        font: '600 36px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    summary__contentSubtitle:{
        textAlign: 'left',
        font: '600 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    stuff:{
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',


    },
    stuffDescription:{
        textAlign: 'center',
        font: '400 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    summary__stuff:{

    },
    summary__address:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    pickUpElement:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alingItem: 'center',
        justifyContent:'space-between',
        '& span':{
            textAlign: 'left',
            font: '300 24px Open Sans',
            letterSpacing: 0,
            color: '#000000',
            opacity: 1,
            margin: '10px 20px'
        }
    },
    summary__control:{
        // position:'absolute',
    },
    summary__btn:{
        textAlign: 'center',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        padding: '30px 50px',
        marginTop: 50
    },
    pickUpTitle:{
        textAlign: 'left',
        font: '600 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
    },
    error:{
        font: '400 16px Open Sans',
        letterSpacing: 0,
        color: 'red',
        opacity: 1,
    },
    errorText:{
        margin: 0
    }
})

const Summary = ({nextStep, prevStep, state, selectedHour, selectedDate}) => {
    const classes = useStyle()
    const { user } = useContext(UserAuthContext)
    const [ err,setErr ] = useState(null)

    const sendForm = (e)=>{
        e.preventDefault()
        if(user !== undefined){
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({formData:{
                clothesGood: state.clothesGood,
                clothesBad: state.clothesBad,
                books: state.books,
                toys: state.toys,
                other: state.other,
                bags: state.bags,
                localization: state.localization,
                nameOrganization: state.nameOrganization,
                street: state.street,
                city: state.city,
                zipCode: state.zipCode,
                phoneNumber: state.phoneNumber,
                date: selectedDate,
                time: selectedHour,
                addInfo: state.addInfo
                // whoHelp: 
                }
                },{merge: true}
            )
            .then(()=>{
                nextStep()
                console.log('wyslane')
            })
            .catch(()=>{
                console.log('error')
            })
        }else{
            setErr('Musisz być zalogowany, aby wysłać zgłoszenie')
        }
    }

    const prev = (e) =>{
        e.preventDefault();
        prevStep()
    }

    return (
        <Grid container className={classes.summary}>
            <Grid item className={classes.summary__content}>
                <h3 className={classes.summary__contentTitle}>Podsumowanie Twojej darowizny</h3>
                <p className={classes.summary__contentSubtitle}>Oddajesz</p>
                <div className={classes.summary__stuff}>
                    <div className={classes.stuff} >
                        <div className={classes.iconShirt}></div> 
                        <p className={classes.stuffDescription}>{state.bags} worki,</p>
                    </div>
                    <div className={classes.stuff}>
                        <div className={classes.iconArrows}></div>
                        <p className={classes.stuffDescription}>dla lokalizacji: {state.localization}</p>
                    </div>
                </div>
                <div className={classes.summary__address}>
                    <div className={classes.pickUp}>
                        <h3 className={classes.pickUpTitle}>Adres odbioru:</h3>
                        <div className={classes.pickUpElement}>
                            <span>Ulica</span><span>{state.street}</span>
                        </div>  
                        <div className={classes.pickUpElement}>
                            <span>Miasto</span><span>{state.city}</span>
                        </div>
                        <div className={classes.pickUpElement}>
                            <span>Kod pocztowy</span><span>{state.zipCode}</span>
                        </div>
                        <div className={classes.pickUpElement}>
                            <span>Numer telefonu</span><span>{state.phoneNumber}</span>
                        </div>
                    </div>
                    <div className={classes.pickUp}>
                        <h3 className={classes.pickUpTitle}>Termin odbioru:</h3>
                        <div className={classes.pickUpElement}>
                            <span>Data</span><span>{state.date}</span>
                        </div>
                        <div className={classes.pickUpElement}>
                            <span>Godzina</span><span>{state.hour}</span>
                        </div>
                        <div className={classes.pickUpElement}>
                            <span>Uwagi dla Kuriera</span><span>{state.addInfo}</span>
                        </div>
                    </div>
                </div>
                <div className={classes.summary__control}>
                    {
                        err?
                        <div className={classes.error}>
                            <ErrorIcon large/> 
                            <p className={classes.errorText}>{err}</p></div>
                        : null
                    }
                    <Button
                    className={classes.summary__btn}
                    onClick={prev}
                    >
                        Cofnij
                    </Button>
                    <Button
                    className={classes.summary__btn}
                    onClick={sendForm}
                    >
                        Wyślij
                    </Button>
                </div>

            </Grid>
        </Grid>
    )
}

export default Summary
