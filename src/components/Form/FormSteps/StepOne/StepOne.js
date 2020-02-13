import React from 'react'
import { Button, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'

const StepOne = ({nextStep}) => {
    
    const next = (e) =>{
        e.preventDefault()
        nextStep()
    }

    return (
        <form>
        step 1
            <FormGroup>
                <FormControlLabel control={<Checkbox color='secondary'/>} label='dupa'/>
                <FormControlLabel control={<Checkbox color='secondary'/>} label='dupa'/>
                <FormControlLabel control={<Checkbox color='secondary'/>} label='dupa'/>
                <FormControlLabel control={<Checkbox color='secondary'/>} label='dupa'/>
                <FormControlLabel control={<Checkbox color='secondary'/>} label='dupa'/>
                <FormControlLabel control={<Checkbox color='secondary'/>} label='dupa'/>

            </FormGroup>
            <Button
            onClick={next}
            >
                Dalej
            </Button>

        </form>

    )
}

export default StepOne