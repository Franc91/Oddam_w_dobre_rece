import React from 'react'
import { Button } from '@material-ui/core'

const StepThree = ({nextStep, prevStep}) => {

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
            step 3
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

export default StepThree
