import React, { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import Summary from './Summary'
import StepFour from './StepFour'
import ThankYou from './ThankYou/ThankYou'

export const FormSteps = () => {
    const [step, setStep] = useState (1)
    const [state, setState]= useState({
        clothesGood: false,
        clothesBad: false,
        books: false,
        toys: false,
        other: false,
        bags:'',
        localization:'',
        nameOrganization:'',
        street:'',
        city:'',
        zipCode:'',
        phoneNumber:'',
        date:''
    })

    const nextStep = () =>{
        setStep(step + 1)
    }

    const prevStep = ()=>{
        setStep(step-1)
    }

    const handleOnChecked = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

    const handleOnChange = name => event => {
    setState({ ...state, [name]: event.target.value });
    };

        switch (step){
            case 1:
                return(
                    <StepOne 
                    nextStep={nextStep}
                    step={step}
                    handleOnChecked={handleOnChecked}
                    state={state}
                    />
                )
            case 2:
                return(
                    <StepTwo
                    nextStep={nextStep}
                    prevStep={prevStep}
                    step={step}
                    handleOnChange={handleOnChange}
                    state={state}
                    />
                )
            case 3:
                return(
                    <StepThree 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    step={step}
                    handleOnChange={handleOnChange}
                    state={state}
                    />
            )
            case 4:
                return(
                    <StepFour 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    step={step}
                    handleOnChange={handleOnChange}
                    state={state}
                    />
            )
            case 5:
                return(
                    <Summary 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    />

            )
            case 6:
                return(
                    <ThankYou 
                    prevStep={prevStep}
                    />
                )
            default: 
            return null
        }
}
export default FormSteps