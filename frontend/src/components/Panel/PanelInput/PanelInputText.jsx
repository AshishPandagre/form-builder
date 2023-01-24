import React, { useContext } from 'react'
import { FormContext } from '../../../context/FormContextProvider'
import remove_icon from '../../../assets/remove__icon.png'


const PanelInputText = ({ id }) => {

  const { questions, updateFieldName, updatePlaceholder, deleteField } = useContext(FormContext)

  return (
    <div className='flex border-2 border-l-8 px-2 py-1 rounded-xl items-center'>
      <div className='flex flex-col'>
        <input placeholder='Field name' className='outline-none mx-4 py-1' value={questions[id].label} onChange={(e) => updateFieldName(id, e.target.value)} />
        <input placeholder='Field placeholder' className='outline-none italic mx-4 py-1 text-sm text-gray-700' value={questions[id].placeholder} onChange={(e) => updatePlaceholder(id, e.target.value)} />
      </div>
      <img src={remove_icon} onClick={() => deleteField(id)} className='h-full w-full cursor-pointer' />
    </div>
  )
}

export default PanelInputText
