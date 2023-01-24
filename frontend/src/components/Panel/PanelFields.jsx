import React, { useContext, useEffect } from 'react'
import { FormContext } from '../../context/FormContextProvider'
import PanelInputChoice from './PanelInput/PanelInputChoice'
import PanelInputText from './PanelInput/PanelInputText'
import { useLocation, useNavigate } from 'react-router-dom'
import { createForm } from '../../http'

const PanelFields = () => {

  const { title, desc, questions, addField } = useContext(FormContext)
  const location = useLocation()
  const type = location.pathname == '/create-form/text' ? 'text' : 'choice'
  const navigate = useNavigate()

  const create_form = async () => {
    console.log('creating form with ', questions)
    const form = await createForm({
      title, desc, questions
    })
    navigate(`/form/${form.data._id}`)
  }

  return (
    <div className='mt-10 flex flex-col gap-6'>
      <div className='flex justify-between'>
        <h1 className='text-3xl'>Form fields</h1>
        <button className='text-gray-700 bg-white py-2 rounded-xl px-2 border-gray-700 border-2' onClick={() => addField(type)}>+ Add</button>
      </div>


      {Object.entries(questions).map(([id, ques]) => {
        if (ques.type == 'text') return <PanelInputText key={id} id={id} />
        else return <PanelInputChoice key={id} id={id} />
      })}

      <button className='bg-gray-700 text-white py-2 rounded-xl' onClick={create_form}>Create form</button>
    </div>)
}

export default PanelFields
