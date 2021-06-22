import React from 'react'


const CardIngredients = ({ingredients}) => {

  return (
    <div className="recipe-ingredients">
      <h4>Ingredients: </h4>
      <ul>
        {ingredients.map((ingredient, i) =>
          <li>{ingredient.quantity} {ingredient.cookingMeasure} {ingredient.item}</li>
        )}
      </ul>
    </div>
  )
}

export default CardIngredients