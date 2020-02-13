import React from 'react'
import { Button } from '@material-ui/core'

const Summary = ({nextStep, prevStep}) => {

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
            summary
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

export default Summary
