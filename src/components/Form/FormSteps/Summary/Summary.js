import React from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'
import ShirtIcon from '../../../../assets/Icon-1.svg'
import ArrowIcon from '../../../../assets/Icon-4.svg'
import FormStepImg from '../../../../assets/Background-Form.jpg'

const useStyle = makeStyles({
    summary:{
        background: `url(${FormStepImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxSizing:'padding-box',
        backgroundPosition:'center',
        flexGrow:1,
        height: 883
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
    }




})

const Summary = ({nextStep, prevStep, state}) => {
    const classes = useStyle()
    const next = (e) =>{
        e.preventDefault();
        nextStep()
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
                    <Button
                    className={classes.summary__btn}
                    onClick={next}
                    >
                        Dalej
                    </Button>
                    <Button
                    className={classes.summary__btn}
                    onClick={prev}
                    >
                        Cofnij
                    </Button>
                </div>

            </Grid>
        </Grid>
    )
}

export default Summary
