import React from 'react'

const Recipe = ({title, description, lifestyles}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <ol>
        {lifestyles.map((lifestyle, i) => (
          <li key={i}>{lifestyle}</li>
        ))}
      </ol>
    </div>
  )

}

export default Recipe