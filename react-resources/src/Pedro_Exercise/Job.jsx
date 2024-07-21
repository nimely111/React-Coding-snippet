import React from 'react'

function Job({salary, position, company}) {
  return (
    <div>
      <h3>Salary: {salary}</h3>
      <h3>Position: {position}</h3>
      <h3>Company: {company}</h3>
      <hr />
    </div>
  )
}


export default Job

