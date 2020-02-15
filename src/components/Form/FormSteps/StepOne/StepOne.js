import React from 'react'
import { Button, Checkbox, FormGroup, FormControlLabel, makeStyles, Grid } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import FormStepImg from '../../../../assets/Background-Form.jpg'



const useStyle=makeStyles({

    StepOne:{
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
    StepOne__Form:{
        marginLeft: 150
    },
    Form__title:{
        textAlign: 'left',
        font: '600 36px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    StepOne__CheckboxLabel:{
        textAlign: 'left',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1
    },
    StepOne__btn:{
        textAlign: 'center',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,
        padding: '30px 50px',
        marginTop: 50
    },
    StepOne__FormStepper:{
        textAlign: 'left',
        font: '300 24px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        marginBottom: 50
    }


})

const StepOne = ({nextStep, step, add, handleOnChecked, state}) => {
    
    const classes=useStyle()

    const next = (e) =>{
        e.preventDefault()
        nextStep()
    }

    // const handleOnSubmit=(e)=>{
    //     e.preventDefault();
    //     add(state)
        
    // }
    console.log(state)

    return (
        <div>
            <div className={classes.attention}>
                <div className={classes.attention__content}>
                    <h3 className={classes.attention__title}><ErrorOutlineIcon/> Ważne</h3>
                    <p className={classes.attention__description}>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temy będziemy wiedzieć komu najlepiej je przekazać</p>
                </div>
            </div>
            <Grid container direction='column' className={classes.StepOne}>
                <Grid item className={classes.StepOne__Form} >
                <p className={classes.StepOne__FormStepper}>Krok {step}/4</p>
                <p className={classes.Form__title}>Zaznacz co chcesz oddać</p>
                    <form 
                    // onSubmit={handleOnSubmit}
                    >
                        <FormGroup >
                            <FormControlLabel 
                            className={classes.StepOne__CheckboxLabel} 
                            control={<Checkbox 
                                onChange={handleOnChecked('clothesGood')}
                                checked={state.clothesGood}
                                value='clothesGood'
                                color='secondary'
                                // name='clothesGood'
                                />} 
                            label={<p className={classes.StepOne__CheckboxLabel}>ubrania, które nadają sie do ponownego użycia</p>}/>
                            <FormControlLabel 
                            className={classes.StepOne__CheckboxLabel} 
                            control={<Checkbox 
                                onChange={handleOnChecked('clothesBad')}
                                checked={state.clothesBad}
                                color='secondary'
                                value='clothesBad'
                                />} 
                            label={<p className={classes.StepOne__CheckboxLabel}>ubrania do wyrzucenia</p>}/>
                            <FormControlLabel 
                            className={classes.StepOne__CheckboxLabel} 
                            control={<Checkbox 
                                onChange={handleOnChecked('toys')}
                                color='secondary'
                                checked={state.toys}
                                value='toys'
                                />} 
                            label={<p className={classes.StepOne__CheckboxLabel}>zabawki</p>}/>
                            <FormControlLabel 
                            className={classes.StepOne__CheckboxLabel} 
                            control={<Checkbox 
                                onChange={handleOnChecked('books')}
                                color='secondary'
                                checked={state.books}
                                value='books'
                                />} 
                            label={<p className={classes.StepOne__CheckboxLabel}>książki</p>}/>
                            <FormControlLabel 
                            className={classes.StepOne__CheckboxLabel} 
                            control={<Checkbox 
                                onChange={handleOnChecked('other')}
                                color='secondary'
                                checked={state.other}
                                value='other'
                                />} 
                            label={<p className={classes.StepOne__CheckboxLabel}>inne</p>}/>
                        </FormGroup>
                        <Button
                        type='submit'
                        className={classes.StepOne__btn}
                        onClick={next}
                        >
                            Dalej
                        </Button>
                    </form>
                </Grid>
                <Grid item className={classes.FormStepImg} ></Grid>
            </Grid>

        </div>

    )
}

export default StepOne