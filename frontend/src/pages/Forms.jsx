import React, { useEffect, useState } from 'react'
import FormsTable from '../components/Table/FormsTable'
import { getAllForms } from '../http'

const Forms = () => {

  const [data, setData] = useState()

  useEffect(() => {

    async function getAllFormsData() {
      const res = await getAllForms()
      setData(res.data)
    }
    getAllFormsData()

  },[])

  return (
    <FormsTable data={data} />
  )
}

export default Forms