import React, { useEffect, useState } from 'react'
import ResponsesTable from '../components/Table/ResponsesTable'
import { useParams } from 'react-router-dom'
import { getAllResponses, getForm } from '../http'

const Responses = () => {

  const [responses, setResponses] = useState()
  const [form, setForm] = useState()
  const params = useParams()

  useEffect(() => {

    async function getAllFormResponsesData() {
      const form = await getForm(params.form_id)
      const responses = await getAllResponses(params.form_id)
      setResponses(responses.data)
      setForm(form.data)

      console.log(responses.data)
      console.log(form.data);
    }
    getAllFormResponsesData()

  }, [])

  return (
    <ResponsesTable form={form} responses={responses} />
  )
}

export default Responses