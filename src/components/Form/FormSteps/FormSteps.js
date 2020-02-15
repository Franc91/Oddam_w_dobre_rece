import React, { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import Summary from './Summary'
import StepFour from './StepFour'
import ThankYou from './ThankYou/ThankYou'

export const FormSteps = ({items, pending}) => {
    const [step, setStep] = useState (1)
    console.log(step)

    const nextStep = () =>{
        setStep(step + 1)
    }

    const prevStep = ()=>{
        setStep(step-1)
    }

        switch (step){
            case 1:
                return(
                    <StepOne 
                    nextStep={nextStep}
                    item={items}
                    step={step}
                    />
                )
            case 2:
                return(
                    <StepTwo
                    nextStep={nextStep}
                    prevStep={prevStep}
                    item={items}
                    step={step}
                    />
                )
            case 3:
                return(
                    <StepThree 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    item={items}
                    step={step}
                    />
            )
            case 4:
                return(
                    <StepFour 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    item={items}
                    step={step}
                    />
            )
            case 5:
                return(
                    <Summary 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    item={items}
                    />

            )
            case 6:
                return(
                    <ThankYou 
                    prevStep={prevStep}
                    item={items}
                    />
                )
            default: 
            return null
        }
}
export default FormSteps