import React, { useContext } from 'react'
import { Button, Grid, TextField, makeStyles } from '@material-ui/core'
import firebase from '../../../../config/fbConfig'
import { UserAuthContext } from '../../../../contexts/UserAuthContext'
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
        flexGrow:1,
        height: 883
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
        margin: '50px 150px 50px 150px'
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
    },
    formboxes:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    stepFour_formBox:{
        alignSelf: 'flex-start',
        display:'flex',
        flexDirection: 'column',
        marginRight: 100
    },
    StepFour__FormContent:{
        display:'flex',
        flexDirection:'column'
    },
    stepFour_formBoxTitle:{
        textAlign: 'center',
        font: '600 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    }
})

const StepFour = ({nextStep, prevStep, step, state, handleOnChange, handleDateChange, selectedHour, handleHourChange, selectedDate}) => {

    const { user } = useContext(UserAuthContext)

    const classes = useStyle()

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
                date: state.date,
                time: state.hour,
                addInfo: state.addInfo
                }
                },{merge: true}
            )
            .then(()=>{
                nextStep()
            })
            .catch(()=>{
                console.log('error')
            })
        }
    }

    const prev = (e) =>{
        e.preventDefault();
        prevStep()
    }


 console.log(state, selectedDate, selectedHour)
    return (
        <div>
            <div className={classes.attention}>
                <div className={classes.attention__content}>
                    <h3 className={classes.attention__title}><ErrorOutlineIcon/> Ważne</h3>
                    <p className={classes.attention__description}>Jeżeli wiesz komu chcesz pomóc, możesz wpisać nazwę organizacji w wyszukiwarce. Możesz filtrować organizacje po ich lokalizacji bądź celu ich pomocy</p>
                </div>
            </div>
            <Grid className={classes.StepFour} container direction='column'>
                <Grid item className={classes.StepFour__Form} lg={7}>
                <p className={classes.StepFour__FormStepper}>Krok {step}/4</p>
                <p className={classes.Form__title}>Podaj adres oraz termin odbioru rzecz przez kuriera</p>
                    <form className={classes.StepFour__FormContent}>
                        <div className={classes.formboxes}>
                            <div className={classes.stepFour_formBox}>
                                <h4 className={classes.stepFour_formBoxTitle}>Adres odbioru:</h4>
                                <TextField 
                                label='Ulica'
                                name='street' 
                                value={state.street}
                                onChange={handleOnChange('street')}/>
                                <TextField 
                                label='Miasto'
                                name='city' 
                                value={state.city}
                                onChange={handleOnChange('city')}/>
                                <TextField 
                                label='Kod-pocztowy'
                                name='zipCode' 
                                value={state.zipCode}
                                onChange={handleOnChange('zipCode')}/>
                                <TextField 
                                label='Numer telefonu'
                                name='phoneNumber' 
                                value={state.phoneNumber}
                                onChange={handleOnChange('phoneNumber')}/>
                            </div>
                            <div className={classes.stepFour_formBox}>
                            <h4 className={classes.stepFour_formBoxTitle}>Adres odbioru:</h4>
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
                                <TextField 
                                label='Uwagi dla kuriera' 
                                name='addInfo' 
                                value={state.addInfo}
                                onChange={handleOnChange('addInfo')}
                                multiline />
                            </div>
                        </div>
                        <div>
                            <Button
                            className={classes.StepFour__btn}
                            onClick={prev}
                            >
                                Cofnij
                            </Button>
                            <Button
                            className={classes.StepFour__btn}
                            onClick={sendForm}
                            >
                                Dalej
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default StepFour
