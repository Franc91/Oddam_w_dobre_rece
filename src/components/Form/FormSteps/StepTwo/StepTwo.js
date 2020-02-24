import React from 'react'
import { Button, NativeSelect, Grid, makeStyles, FormLabel } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import FormStepImg from '../../../../assets/Background-Form.jpg'

const useStyle = makeStyles({
    StepTwo:{
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
    StepTwo__Form:{
        marginLeft: 150
    },
    Form__title:{
        textAlign: 'left',
        font: '600 36px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    StepTwo__btn:{
        textAlign: 'center',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        padding: '30px 50px',
        marginTop: 50
    },
    StepTwo__FormStepper:{
        textAlign: 'left',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        marginBottom: 50
    },
    form:{
        display:'flex',
        flexDirection: 'column',

    },
    formControl:{
        justifyContent:'flex-start',
        marginTop: 150
    },
    formContent:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    formTitle:{
        textAlign: 'left',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        marginRight: 50
    },
    Select:{
        margin:0
    }
})

const StepTwo = ({nextStep, prevStep, step, state, handleOnChange}) => {

    const classes=useStyle()

    const next = (e) =>{
        e.preventDefault();
        nextStep()
    }

    const prev = (e) =>{
        e.preventDefault();
        prevStep()
    }
    console.log(state)
    return (
        <div>
            <div className={classes.attention}>
                <div className={classes.attention__content}>
                    <h3 className={classes.attention__title}><ErrorOutlineIcon/> Ważne</h3>
                    <p className={classes.attention__description}>Wszystkie rzeczy do oddania zapkuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>
            </div>
            
            <Grid container direction='column' className={classes.StepTwo}>
                <Grid item className={classes.StepTwo__Form} lg={6}>
                <p className={classes.StepTwo__FormStepper}>Krok {step}/4</p>
                <p className={classes.Form__title}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
                    <form className={classes.form}>
                        <div className={classes.formContent}>
                            <FormLabel className={classes.formTitle}>Liczba 60l worków:</FormLabel>
                            <NativeSelect name='bags' value={state.bags} onChange={handleOnChange('bags')} classes={{
                                root:classes.Select
                            }}>
                                <option value=''>--Wybierz--</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </NativeSelect>
                        </div>

                        <div className={classes.formControl}>
                            <Button
                            onClick={prev}
                            className={classes.StepTwo__btn}
                            >
                                Cofnij
                            </Button>
                            <Button
                            onClick={next}
                            className={classes.StepTwo__btn}
                            >
                                Dalej
                            </Button>

                        </div>
                    </form>
                </Grid>
                <Grid item className={classes.FormStepImg}></Grid>
            </Grid>
        </div>
    )
}

export default StepTwo
