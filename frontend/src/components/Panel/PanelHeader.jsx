import React, { useContext } from 'react'
import { FormContext } from '../../context/FormContextProvider'

const PanelHeader = () => {

  const {title, setTitle, desc, setDesc} = useContext(FormContext)

  return (
    <div>
      <h1 className='text-3xl'>Form introduction</h1>

      <div className='mt-5 flex flex-col'>
        <input placeholder='form title goes here..' value={title} className='outline-none border-2 px-4 py-2 rounded-full' onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className='mt-5'>
        <textarea placeholder='form description goes here..' value={desc} className='outline-none border-2 py-2 px-4 rounded-2xl min-h-fit h-fit w-full' onChange={(e) => setDesc(e.target.value)} />
      </div>
    </div>)
}

export default PanelHeader
