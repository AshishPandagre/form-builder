import React, { useState, useEffect, createContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import uuid from 'react-uuid';

export const FormContext = createContext();

const FormContextProvider = (props) => {

  const [title, setTitle] = useState('Your title goes here..')
  const [desc, setDesc] = useState('Your awesome description for this form goes here..;)')
  const [questions, setQuestions] = useState({})
  const [response, setResponse] = useState({})

  const params = useParams()

  useEffect(() => {
    if (params.type == 'text') setQuestions({
      "000": {
        label: "Field name goes here..",
        placeholder: "Field placeholder goes here",
        type: 'text'
      }
    })
    if(params.type == 'choice') setQuestions({
      "000": {
        type: "choice",
        label: "Field name goes here..",
        options: {
          "001": "option - 1",
          "002": "option - 2"
        }
      }
    })
  }, [])

  const updateResponse = (id, val) => {
    setResponse({
      ...response,
      [id]: val
    })
  }


  const updateFieldName = (id, val) => {
    const ques = { ...questions[id] }
    ques.label = val
    setQuestions({
      ...questions,
      [id]: ques
    })
  }

  const updatePlaceholder = (id, val) => {
    const ques = { ...questions[id] }
    ques.placeholder = val
    setQuestions({
      ...questions,
      [id]: ques
    })
  }

  const deleteField = (id) => {
    const _questions = { ...questions }
    delete _questions[id]
    setQuestions(_questions)
  }

  const addField = (type) => {
    if (type === 'text') setQuestions({
      ...questions,
      [uuid()]: {
        label: 'Enter Field name here..',
        placeholder: 'Enter field placeholder here..',
        type: 'text'
      }
    })
    else {
      setQuestions({
        ...questions,
        [uuid()]: {
          type: 'choice',
          label: 'Enter field name here',
          options: {
            [uuid()]: 'enter option title'
          }
        }
      })
    }
  }

  const addOption = (id) => {
    const updatedOptions = {
      ...questions[id].options,
      [uuid()]: 'enter option title'
    }
    setQuestions({
      ...questions,
      [id]: {
        ...questions[id],
        options: updatedOptions
      }
    })
  }

  const updateOption = (ques_id, opt_id, val) => {
    const updatedOptions = {
      ...questions[ques_id].options,
      [opt_id]: val
    }
    setQuestions({
      ...questions,
      [ques_id]: {
        ...questions[ques_id],
        options: updatedOptions
      }
    })
  }

  return (
    <FormContext.Provider value={{
      title,
      setTitle,
      desc,
      setDesc,
      questions,
      setQuestions,
      response,
      updateResponse,
      updateFieldName,
      updatePlaceholder,
      deleteField,
      addField,
      addOption,
      updateOption
    }}>
      {props.children}
    </FormContext.Provider>
  );

}

export default FormContextProvider;