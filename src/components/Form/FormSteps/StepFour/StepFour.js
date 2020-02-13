import React from 'react'
import { Button } from '@material-ui/core'

const StepFour = ({nextStep, prevStep}) => {

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
            step 4
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

export default StepFour
