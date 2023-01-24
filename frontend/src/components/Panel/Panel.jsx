import React, { useContext } from 'react'

import PanelController from './PanelController'
import FormViewer from '../Form/FormViewer'
import { FormContext } from '../../context/FormContextProvider'

const Panel = () => {

  const {questions} = useContext(FormContext)

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='flex flex-row'>
      <div>
        <PanelController />
      </div>
      <div className='mx-auto max-w-3xl py-16'>
        <FormViewer questions={questions} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Panel