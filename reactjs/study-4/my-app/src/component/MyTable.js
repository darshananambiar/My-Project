import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Table from'react-bootstrap/Table'

const MyTable = () => {
  return (
    
    <div>
      <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>pin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>xyz</td>
                        <td>009</td>
                        <td>988</td>
                        <td>988</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    {/* <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </Table>
    </div>
  )
}

export default MyTable
