import React, { useState } from 'react'
import { Button, Grid, TextField, makeStyles } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { MuiPickersUtilsProvider,DatePicker, TimePicker } from "@material-ui/pickers";
import FormStepImg from '../../../../assets/Background-Form.jpg'


const useStyle=makeStyles({
    stepFour_formBox:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    StepFour:{
        background: `url(${FormStepImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxSizing:'padding-box',
        backgroundPosition:'center',
        flexGrow:1
    },
    attention:{
        backgroundColor: '#FAD648',
        opacity:1,
        display: 'flex',
        alignItems:'center',
        justifyContent:'flex-start',

    },
    attention__content:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start',
        justifyContent:'center',
        margin: '50px 0 50px 150px'
    },
    attention__title:{
        textAlign: 'left',
        font: '600 36px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        margin: 5,
    },
    attention__description:{
        textAlign: 'left',
        font: '400 22px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        margin: 5,
    },
    StepFour__Form:{
        display:'flex',
        flexDirection:'row',

        marginLeft: 150
    },
    StepFour__FormContent:{
        display:'flex',
        flexDirection:'row',

    },
    Form__title:{
        textAlign: 'left',
        font: '600 36px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    StepFour__btn:{
        textAlign: 'center',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        padding: '30px 50px',
        marginTop: 50
    },
    StepFour__FormStepper:{
        textAlign: 'left',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        marginBottom: 50
    }
})

const StepFour = ({nextStep, prevStep, step, item}) => {

    const classes = useStyle()
    const [selectedDate, handleDateChange ] = useState(new Date())
    const [selectedHour, handleHourChange ] = useState(new Date())

    const next = (e) =>{
        e.preventDefault();
        nextStep()
    }

    const prev = (e) =>{
        e.preventDefault();
        prevStep()
    }

    return (
        <div>
            <div className={classes.attention}>
                <div className={classes.attention__content}>
                    <h3 className={classes.attention__title}><ErrorOutlineIcon/> Ważne</h3>
                    <p className={classes.attention__description}>Jeżeli wiesz komu chcesz pomóc, możesz wpisać nazwę organizacji w wyszukiwarce. Możesz filtrować organizacje po ich lokalizacji bądź celu ich pomocy</p>
                </div>
            </div>

            <Grid className={classes.StepFour} container direction='column'>
                <p className={classes.StepFour__FormStepper}>Krok {step}/4</p>
                <p className={classes.Form__title}>Podaj adres oraz termin odbioru rzecz przez kuriera</p>
                <Grid item className={classes.StepFour__Form}>
                    <form className={classes.StepFour__FormContent}>
                        <div className={classes.stepFour_formBox}>
                            <h4>Adres odbioru:</h4>
                            <TextField label='Ulica'/>
                            <TextField label='Miasto'/>
                            <TextField label='Kod-pocztowy'/>
                            <TextField label='Numer telefonu'/>
                        </div>
                        <div className={classes.stepFour_formBox}>
                        <h4>Adres odbioru:</h4>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    label='Data odbioru'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    animateYearScrolling
                                />
                                <TimePicker
                                    clearable
                                    ampm={false}
                                    label="Godzina odbioru"
                                    value={selectedHour}
                                    onChange={handleHourChange}
                                />
                            </MuiPickersUtilsProvider>
                            <TextField label='Uwagi dla kuriera' multiline />
                        </div>
                        <div>
                            <Button
                            className={classes.StepFour__btn}
                            onClick={next}
                            >
                                Dalej
                            </Button>
                            <Button
                            className={classes.StepFour__btn}
                            onClick={prev}
                            >
                                Cofnij
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default StepFour
