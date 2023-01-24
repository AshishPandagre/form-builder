import React, { useEffect } from 'react'
import FormHeader from './FormHeader'
import FormQuestion from './FormQuestion'

const FormViewer = ({ onSubmit, title, desc, questions }) => {

  return (

    <div className='flex-col mt-20'>
      <FormHeader title={title} description={desc} />

      <div className='bg-gray-100 mt-10 md:px-10 px-4 rounded-xl py-6'>
        <form className='flex flex-col gap-6' onSubmit={onSubmit}>

          {
            Object.entries(questions).map(([id, question]) => (
              <FormQuestion key={id} id={id} question={question} />
            ))
          }
          <button className='bg-slate-700 text-white px-8 w-fit mx-auto py-2 rounded-xl mt-4 border-slate-700 border-2 hover:bg-white hover:text-slate-700'>Submit & view responses</button>

        </form>

      </div>
    </div>
  )
}

export default FormViewer
