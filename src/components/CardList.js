import React from 'react'
import Card from './Card'
import '../App.css'

const CardList = ({recipes}) => {
  return (
    <div className="card-list">
      {recipes.map(recipe => (
        <Card
          title={recipe.name}
          key={recipe.id}
          image={recipe.image}
          description={recipe.description}
        />
      ))}
    </div>
  )
}


export default CardList