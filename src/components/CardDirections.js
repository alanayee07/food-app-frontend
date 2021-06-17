import React from 'react'


const CardDirections = ({directions}) => {
  return (
    <div className="recipe-instructions">
      <h4>Instructions: </h4>
      {directions.map(direction =>
        <ul>
          <li>{direction}</li>
        </ul>)}
    </div>
  )
}

export default CardDirections