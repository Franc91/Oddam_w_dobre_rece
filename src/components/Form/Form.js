import React from 'react'
import FormSteps from './FormSteps'
import Contact from '../Home/Contact'
import FormHeader from './FormHeader'

export const Form = ({items, pending, add}) => {
    
    return(
        <>
        <FormHeader />
        <FormSteps items={items} pending={pending}/>
        <Contact />
        </>
    )
}

export default Form
