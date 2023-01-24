import React, { useContext } from 'react'
import { FormContext } from '../../../context/FormContextProvider'
import remove_icon from '../../../assets/remove__icon.png'


const PanelInputChoice = ({ id }) => {

  const { questions, addOption, updateFieldName, updateOption, deleteField } = useContext(FormContext)
  console.log(questions[id].label);

  return (
    <div className='flex border-2 border-l-8 px-2 py-1 rounded-xl items-center mb-2'>
      <div className='flex flex-col'>
        <input placeholder='Field name' className='outline-none mx-4 py-1' value={questions[id].label} onChange={(e) => updateFieldName(id, e.target.value)} />
        {
          Object.entries(questions[id].options).map(([_id, option]) => (
            <div className='flex flex-row group gap-2 px-4' key={_id}>
              <input type='radio' name={id} />
              <input value={option} className='italic font-light outline-none' onChange={(e) => updateOption(id, _id, e.target.value)} />
            </div>
          )
          )
        }
        <button className='bg-gray-400 text-left w-fit px-2 py-1 text-white rounded-xl ml-7 mt-2 text-sm' onClick={() => addOption(id, 'enter option here..')}>add option</button>
      </div>
      <img src={remove_icon} onClick={() => deleteField(id)} className='h-full w-full cursor-pointer' />
    </div>
  )

}

export default PanelInputChoice
