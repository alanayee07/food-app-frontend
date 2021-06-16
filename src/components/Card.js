import React, {useState} from 'react'
import CardDirections from './CardDirections'
import './Card.css'

const Card = ({ title, image, description}) => {

  const [isActive, setIsActive] = useState(false);

  const handleShowMore = () => {
    setIsActive(!isActive);
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
        {isActive ? <CardDirections /> : null}
        <button
          className="show-button"
          onClick={handleShowMore}
          >Show More
        </button>
      </div>
    </div>
  )
}

export default Card