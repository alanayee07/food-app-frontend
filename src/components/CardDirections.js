import React from 'react'


const CardDirections = ({directions}) => {
  return (
    <div className="recipe-instructions">
      <h4>Instructions: </h4>
      <ol>
        {directions.map((direction, i) =>
          <li key={i}>{direction}</li>
        )}
      </ol>
    </div>
  )
}

export default CardDirections