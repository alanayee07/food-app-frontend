import React, {useState} from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
// import Recipe from './components/Recipe'

function App() {

  const [recipes, setRecipes] = useState([]);


  React.useEffect(() => {
    axios.get('http://localhost:3000/recipes')
      .then(response => {
        const data = response.data;
        console.log(data);
        setRecipes(data);
      })
  }, [])


  return (
    <div className="App">
      <Header />
        {recipes.map(recipe => (
          <Card
            title={recipe.name}
            image={recipe.image}
            description={recipe.description}
          />
        ))}
      {/* <h1 className="title">Recipes 🌮🍝</h1>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <input className="search-button" type="submit" value='Search' />
      </form>
      <div className="recipe-container">
        {recipes.map((recipe, i) => (
          <Recipe
            key={i}
            title={recipe.name}
            image={recipe.image}
            description={recipe.description}
            lifestyles={recipe.lifestyle}
          />
        ))}
      </div> */}
    </div>
  );
}

export default App;
