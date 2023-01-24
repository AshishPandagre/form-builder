import React, { useContext, useEffect } from 'react'
import { FormContext } from '../../context/FormContextProvider'
import FormViewer from './FormViewer'
import { addResponse, getForm } from '../../http'
import { useNavigate, useParams } from 'react-router-dom'

const Form = () => {

  const { setTitle, setDesc, setQuestions, title, desc, questions, response } = useContext(FormContext)

  const params = useParams()
  const form_id = params.id

  const navigate = useNavigate()

  useEffect(() => {

    const fetchFormData = async (form_id) => {
      const { data } = await getForm(form_id)
      setTitle(data.title)
      setDesc(data.desc)
      setQuestions(data.questions)
    }

    fetchFormData(form_id)

  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    await addResponse(params.id, response)
    navigate(`/responses/${form_id}`)
  }

  return (
    <div className='lg:w-2/4 md:w-3/4 mx-3 flex md:mx-auto flex-col'>
      <FormViewer onSubmit={onSubmit} title={title} desc={desc} questions={questions} />
    </div>
  )
}

export default Form
