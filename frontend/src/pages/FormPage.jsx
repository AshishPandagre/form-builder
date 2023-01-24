import React from 'react'
import FormContextProvider from '../context/FormContextProvider'
import Form from '../components/Form/Form'

const FormPage = () => {
  return (
    <FormContextProvider>
      <Form />
    </FormContextProvider>
  )
}

export default FormPage
