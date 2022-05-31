import React from 'react'

const Customer = ({customer}) => {
  return (
    <div>
        <h1>
            {customer.name}
        </h1>
    </div>
  )
}

export default Customer