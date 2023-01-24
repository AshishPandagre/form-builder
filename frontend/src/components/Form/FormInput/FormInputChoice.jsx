import React, { useContext } from 'react'
import { FormContext } from '../../../context/FormContextProvider'

const FormInputChoice = ({ id, options }) => {

  const {updateResponse} = useContext(FormContext)

  return (
    <div className='mt-1 ml-4'>
      {Object.entries(options).map(([opt_id, option]) => (
        <div className='flex items-center' key={opt_id} onChange={(e) => updateResponse(id, option)}>
          <input
            name={id}
            type='radio'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            required
          />
          <label htmlFor={option} className='ml-2 text-slate-700'>{option}</label>
        </div>
      ))}
    </div>
  )
}

export default FormInputChoice