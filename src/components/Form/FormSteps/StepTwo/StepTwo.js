import React from 'react'
import { Button, Select, MenuItem } from '@material-ui/core'

const StepTwo = ({nextStep, prevStep}) => {

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
            step 2
            <Select>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Button
            onClick={next}
            >
                Dalej
            </Button>
            <Button
            onClick={prev}
            >
                Cofnij
            </Button>
        </div>
    )
}

export default StepTwo
