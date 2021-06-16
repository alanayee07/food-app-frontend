import React, {useState} from 'react'
import './Card.css'

const Card = ({ title, image, description}) => {

  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsActive(true);
  }

  const handleHide = () => {
    setIsActive(false);
  }

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
      <div className="card-buttons">
        {isActive ? <h1>Hello!</h1> : null}
        <button
          className="show-button"
          onClick={handleShow}>Show More
        </button>
        <button
          className="hide-button"
          onClick={handleHide}>Hide</button>
      </div>
    </div>
  )
}

export default Card