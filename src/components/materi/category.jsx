import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
  const params = useParams();

  return (
    <div>
        <h3>ini adalah category {params.name}</h3>
    </div>
  )
}

export default Category