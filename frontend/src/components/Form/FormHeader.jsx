import React, { useContext } from 'react'
import { FormContext } from '../../context/FormContextProvider'

const FormHeader = () => {

  const {title, desc} = useContext(FormContext)

  return (
    <div> 
      <h1 className='text-4xl'>{title}</h1>
      <p className='text-gray-700'>{desc}</p>
    </div>
  )
}

export default FormHeader
