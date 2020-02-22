import React from 'react'
import { Button, NativeSelect, Grid, TextField, makeStyles } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import FormStepImg from '../../../../assets/Background-Form.jpg'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyle=makeStyles({
    StepThree:{
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
    StepThree__Form:{
        marginLeft: 150
    },
    StepThree__btn:{
        textAlign: 'center',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        padding: '30px 50px',
        marginTop: 50
    },
    StepThree__FormStepper:{
        textAlign: 'left',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        marginBottom: 50
    },
    Form__title:{
        textAlign: 'left',
        font: '650 36px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    WhoYouHelp:{
        textAlign: 'left',
        font: '650 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    StepThree__ToggleButtons:{
        backgroundColor: 'transparent'
    },


})

const StepThree = ({nextStep, prevStep, step, state, handleOnChange, handleWhoHelp, whoHelp}) => {
    const classes = useStyle()

    const next = (e) =>{
        e.preventDefault();
        nextStep()
    }

    const prev = (e) =>{
        e.preventDefault();
        prevStep()
    }

    console.log(state, whoHelp)
    return (
        <div>
            <div className={classes.attention}>
                <div className={classes.attention__content}>
                    <h3 className={classes.attention__title}><ErrorOutlineIcon/> Ważne</h3>
                    <p className={classes.attention__description}>Jeżeli wiesz komu chcesz pomóc, możesz wpisać nazwę organizacji w wyszukiwarce. Możesz filtrować organizacje po ich lokalizacji bądź celu ich pomocy</p>
                </div>
            </div>

            <Grid container direction='column' className={classes.StepThree}>
                <Grid lg={5} item className={classes.StepThree__Form}>
                    <p className={classes.StepThree__FormStepper}>Krok {step}/4</p>
                    <p className={classes.Form__title}>Lokalizacja:</p>
                    <form>
                        <NativeSelect name='localization' value={state.localization} onChange={handleOnChange('localization')}>
                            <option value=''>
                                --Wybierz--
                            </option>
                            <option value='Warszawa'>Warszawa</option>
                            <option value='Poznań'>Poznań</option>
                            <option value='Kraków'>Kraków</option>
                            <option value='Gdańsk'>Gdańsk</option>
                            <option value='Rzeszów'>Rzeszów</option>
                        </NativeSelect>
                        <p className={classes.WhoYouHelp}>
                            Komu chcesz pomóc
                        </p>   
                        <ToggleButtonGroup
                            classes={{
                            root: classes.StepThree__ToggleButtons
                            }}
                        name='whoHelp'
                        value={whoHelp}
                        onChange={handleWhoHelp}>
                            <ToggleButton
                            className={classes.selected
                            }value='dzieciom'>
                                dzieciom
                            </ToggleButton>
                            <ToggleButton 
                            className={classes.ToggleButton}
                            value='samotnym matkom'>
                                samotnym matkom
                            </ToggleButton>
                            <ToggleButton 
                            className={classes.ToggleButton}
                            value = 'bezdomnym'>
                                bezdomnym
                            </ToggleButton>
                            <ToggleButton 
                            className={classes.ToggleButton}
                            value='niepełnosprawnym'>
                                niepełnosprawnym
                            </ToggleButton>
                            <ToggleButton 
                            className={classes.ToggleButton}
                            value='osobom starszym'>
                                osobom starszym
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <p className={classes.WhoYouHelp}>
                            Wpisz nazwę konkretnej organizacji (opcjonalnie)
                        </p>            
                            <TextField 
                            name='nameOrganization' 
                            multiline
                            fullWidth
                            value={state.nameOrganization}
                            onChange={handleOnChange('nameOrganization')}/>

                        <Button
                        className={classes.StepThree__btn}
                        onClick={prev}
                        >
                            Cofnij
                        </Button>
                    
                        <Button
                        className={classes.StepThree__btn}
                        onClick={next}
                        >
                            Dalej
                        </Button>
                    </form>
                </Grid>
                <Grid item lg={5} className={classes.FormStepImg}></Grid>
            </Grid>
        </div>
    )
}

export default StepThree
