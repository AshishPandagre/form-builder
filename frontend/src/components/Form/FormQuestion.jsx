import React from 'react'
import FormInputText from './FormInput/FormInputText'
import FormInputChoice from './FormInput/FormInputChoice'

const FormQuestion = ({ id, question }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-lg'>{question.label}</label>
      {question.type === 'text' && <FormInputText id={id} placeholder={question.placeholder} />}
      {question.type === 'choice' && <FormInputChoice id={id} options={question.options} />}
    </div>
  )
}

export default FormQuestion
