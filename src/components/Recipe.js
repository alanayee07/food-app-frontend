import React from 'react'
import '../App.css'

const Recipe = ({title, image, description, lifestyles}) => {
  return (
    <>
      <h1>{title}</h1>
      <img className="recipe-image" src={image} alt="img of recipe"/>
      <ol>
        {lifestyles.map((lifestyle, i) => (
          <li key={i}>{lifestyle}</li>
        ))}
      </ol>
    </>
  )

}

export default Recipe