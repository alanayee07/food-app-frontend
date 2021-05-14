import React, {useState} from 'react'
import axios from 'axios'
import Recipe from './components/Recipe'

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
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe, i) => (
        <Recipe
          key={i}
          title={recipe.name}
          description={recipe.description}
          lifestyles={recipe.lifestyle}
        />
      ))}
    </div>
  );
}

export default App;
