import React from 'react'
import './Card.css'

const Card = ({ title, image, description}) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt='' />
      </div>
      <div className="card-contents">
        <div className="card-title">
          <h1>{title}</h1>
        </div>
        <span className="card-description">{description}</span>
      </div>
    </div>
  )
}

export default Card