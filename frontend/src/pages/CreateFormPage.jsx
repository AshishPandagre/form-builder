import React, { useEffect } from 'react'
import FormContextProvider from '../context/FormContextProvider'
import Panel from '../components/Panel/Panel'
import FormViewer from '../components/Form/FormViewer'
import { useLocation, useNavigate } from 'react-router-dom'

const CreateFormPage = () => {

  const location = useLocation()
  const navigate = useNavigate()

  console.log(location.pathname)

  useEffect(() => {
    if (location.pathname != '/create-form/choice' || location.pathname != '/create-form/text') console.warn('navigating// not working..');
  })

  return (
    <FormContextProvider>
      <Panel />
    </FormContextProvider>
  )
}

export default CreateFormPage
