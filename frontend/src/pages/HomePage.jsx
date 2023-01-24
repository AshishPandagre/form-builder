import React from 'react'
import dropdown_icon from '../assets/dropdown_icon.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const [options, setOptions] = useState(0)

  return (
    <div className='text-3xl flex flex-col items-center h-screen md:flex-row justify-center gap-40'>
      <div onClick={() => setOptions(!options)}>
        <button className='bg-cyan-500 text-white px-12 py-8 rounded-full flex'>
          Create Form
          <img src={dropdown_icon} />
        </button>
        {
          options ?
            <div className='border w-fit shadow-lg flex flex-col text-2xl z-50 absolute'>
              <Link to='/create-form/choice' className='hover:bg-slate-100 px-12 py-4'>Multiple choice form</Link>
              <Link to='/create-form/text' className='px-12 py-4 hover:bg-slate-100'>Text based form</Link>
            </div>
            :
            ''
        }
      </div>

      <div>
      <Link to='/forms' className='bg-cyan-500 text-white px-12 py-8 rounded-full flex'>View forms</Link>
      </div>
    </div>
  )
}

export default HomePage
