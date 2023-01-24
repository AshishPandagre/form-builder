import React from 'react'
import { Link } from 'react-router-dom'
import Table from './Table'

const FormsTable = ({ data }) => {

  console.log(data)

  return (
    <div className='my-6 mx-4'>

      <button className='px-4 py-2 bg-gray-800 text-white w-fit hover:text-gray-800 hover:bg-white rounded-xl border-2 border-gray-800'>
        <Link to='/'>Create a new form</Link>
      </button>

      <Table columns={['#', 'Form Title']} text='Create a form' url={`/`}>
        <tbody>
          {
            data?.map((form, idx) => {
              return (
                <tr className="border-b odd:bg-white even:bg-gray-100" key={form._id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{idx + 1}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    <Link to={`/form/${form._id}`} className='hover:underline'>{form.title}</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>

  )
}

export default FormsTable
