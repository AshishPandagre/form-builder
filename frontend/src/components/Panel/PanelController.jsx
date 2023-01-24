import React from 'react'
import PanelHeader from './PanelHeader'
import PanelFields from './PanelFields'

const PanelController = () => {
  return (
    <div className='w-fit h-screen border-r-4 py-20 px-10 overflow-y-scroll'>

      <PanelHeader />

      <PanelFields />

    </div>)
}

export default PanelController