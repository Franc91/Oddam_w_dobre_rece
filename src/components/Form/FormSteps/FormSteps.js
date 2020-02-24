import React, { useCallback, useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import Summary from './Summary'
import StepFour from './StepFour'
import ThankYou from './ThankYou/ThankYou'
import moment from 'moment';

export const FormSteps = () => {
    const [step, setStep] = useState (1)
    const [state, setState]= useState({
        whatGive:[],
        bags:'',
        localization:'',
        nameOrganization:'',
        street:'',
        city:'',
        zipCode:'',
        phoneNumber:'',
        addInfo:''
    })
    const [selectedDate, handleDateChange ] = useState(null)
    const [selectedHour, handleHourChange ] = useState(null)
    const [whoHelp, setWhoHelp] = useState(() => [])


    const handleWhoHelp = (event, newWhoHelps) => {
      if (newWhoHelps.length) {
        setWhoHelp(newWhoHelps);
      }
    };

    const nextStep = () =>{
        setStep(step + 1)
    }

    const prevStep = ()=>{
        setStep(step-1)
    }

    const handleOnChecked = name => event => {
        setState({ ...state, [name]: [...state.whatGive, event.target.value] });

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
                    handleWhoHelp={handleWhoHelp}
                    handleOnChange={handleOnChange}
                    whoHelp={whoHelp}
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
                    selectedDate={selectedDate}
                    handleDateChange={handleDateChange}
                    selectedHour={selectedHour}
                    handleHourChange={handleHourChange}
                    />
            )
            case 5:
                return(
                    <Summary 
                    state={state}
                    whoHelp={whoHelp}
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