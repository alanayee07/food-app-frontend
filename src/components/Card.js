import React from 'react'
import './Card.css'

const Card = ({title, image, description}) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt='' />
      </div>
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card