import React from 'react'
import { Link } from 'react-router-dom'

const Table = (props) => {
  return (
    <div className="flex flex-col">
      <div>
        <div className="inline-block min-w-full py-2">
          <div>
            <table className="min-w-full">

              <thead className="border-b bg-gray-800">
                <tr>
                  {
                    props.columns?.map(column =>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white" key={column}>{column}</th>
                    )
                  }
                </tr>
              </thead>

              {props.children}

            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Table