import React from 'react'


const CardIngredients = ({ingredients}) => {
  return (
    <div className="recipe-ingredients">
      <h4>Ingredients: </h4>
      {ingredients.map(ingredient =>
        <ul>
          <li>{ingredient.item}</li>
        </ul>)}
    </div>
  )
}

export default CardIngredients