import React from 'react'
import { Button } from '@material-ui/core'

const ThankYou = ({prevStep}) => {


    const prev = (e) =>{
        e.preventDefault();
        prevStep()
    }

    return (
        <div>
            Thank you
            <Button
            onClick={prev}
            >
                Cofnij
            </Button>
        </div>
    )
}

export default ThankYou
