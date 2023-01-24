import React, { useContext } from 'react'
import { FormContext } from '../../../context/FormContextProvider'

const FormInputText = ({ id, placeholder }) => {

  const {updateResponse} = useContext(FormContext)

  return (
    <input className='mt-1 h-10 rounded-xl shadow-sm px-4 text-slate-700' onChange={(e) => updateResponse(id, e.target.value)} placeholder={placeholder || ''} required />
  )
}

export default FormInputText
