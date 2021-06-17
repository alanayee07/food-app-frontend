import React, {useState} from 'react'
import CardDirections from './CardDirections'
import CardIngredients from './CardIngredients'
import './Card.css'

const Card = ({ title, image, description, directions, ingredients}) => {

  const [isActive, setIsActive] = useState(false);
  const [toggleIngredients, setToggleIngredients] = useState(false);

  const handleShowMore = () => {
    setIsActive(!isActive);
  }

  const handleShowIngredients = () => {
    setToggleIngredients(!toggleIngredients);
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
        <button
          className="show-button"
          onClick={handleShowMore}
          >Show More
        </button>
        <button
          className="ingredients-button"
          onClick={handleShowIngredients}
          >Show Ingredients
        </button>
      </div>
      {isActive ? <CardDirections directions={directions} /> : null}
      {toggleIngredients ? <CardIngredients ingredients={ingredients} /> : null}
    </div>
  )
}

export default Card