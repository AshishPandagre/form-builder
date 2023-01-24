import React from 'react'
import Table from './Table'
import { Link } from 'react-router-dom'

const ResponsesTable = (props) => {

  const questions = props.form && Object.entries(props.form.questions).map(([id, ques]) => ques.label)
  console.log(questions)

  if (!questions) return 'Loading data..'

  return (

    <div className='my-6 mx-4'>

      <div className='flex justify-between'>
        <button className='px-4 py-2 bg-gray-800 text-white w-fit hover:text-gray-800 hover:bg-white rounded-xl border-2 border-gray-800'>
          <Link to={`/form/${props.form._id}`}>View form</Link>
        </button>
        <button className='px-4 py-2 bg-white text-gray-800 w-fit hover:text-white hover:bg-gray-800 rounded-xl border-2 border-gray-800'>
          <Link to='/'>Create a new form</Link>
        </button>
      </div>

      <Table columns={['#', ...questions]} text='View form' url={`/form/${props.form._id}`}>
        <tbody>
          {
            props.responses?.map((response, idx) => {
              return (
                <tr className="border-b odd:bg-white even:bg-gray-100" key={response._id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{idx + 1}</td>
                  {
                    Object.entries(response.response).map(([id, val]) => {
                      return <td key={id} className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{val}</td>
                    })
                  }
                  {/* <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  <Link to={`/form/${form._id}`} className='hover:underline'>{form.title}</Link>
                </td> */}
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>

  )
}

export default ResponsesTable