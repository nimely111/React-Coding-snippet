import React from 'react'

function Emplooyes() {
    const employeesData = [
      {name: 'John Doe', gender: "Male", position: 'Web Developer', isCompleted: true},
      {name: 'Morris Jones', gender: "Male", position: 'Product Manager', isCompleted: false},
      {name: 'Mary Hunter', gender: "Female", position: 'Web Developer', isCompleted: false},
      {name: 'Victoria Johnson', gender: "Female", position: 'Database Eng', isCompleted: true},
      {name: 'James Brown', gender: "Male", position: 'Web Developer', isCompleted: false},
      {name: 'Esther Jones', gender: "Female", position: 'Database Eng', isCompleted: false},
      {name: 'Henry Kettor', gender: "Male", position: 'Database Eng', isCompleted: true},
    ]
 
    return (
      <table style={{
        borderCollapse: 'collapse',
        border: '2px solid black',
        marginBottom: '4rem'
      }}>
        <thead>
          <tr>
            <th 
            style={{
              border: '1px solid black',
              padding: '10px'
              }}>All Task Completed</th>
            <th
            style={{
              border: '1px solid black',
              padding: '10px'
              }}>Get All Female</th>
            <th
            style={{
              border: '1px solid black',
              padding: '10px'
              }}>All Web Developer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* get completed task */}
 <td>
  {employeesData.map((data, key) => {
  return data.isCompleted && <li
                          key={key}
                          style={{
                            border: '1px solid black',
                            padding: '10px',
                            listStyle: 'none'

                            }}>
                              {data.name}
                            </li>
})}
 </td>     
               {/* get all female */}
<td>
{employeesData.map((data, key) => {
  return data.gender === 'Female' && <li 
                  key={key}
                  style={{
                    border: '1px solid black',
                    padding: '10px',
                    listStyle: 'none'
                    }}>
                    {data.name}
                  </li>
})}
</td>

<td>
   {/* get web Dev. */}
   {employeesData.map((data, key) => {
  return data.position === 'Web Developer' && <li
                key={key}
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  listStyle: 'none'
                  }}>
                  {data.name}
                </li>
})}
</td>
          </tr>
        </tbody>
      </table>
    )
}

export default Emplooyes
