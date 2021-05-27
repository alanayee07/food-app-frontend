import React, {useState} from 'react'
import './App.css'
import axios from 'axios'
import CardList from './components/CardList'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
// import {nanoid} from 'nanoid'
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
      <SearchForm recipes={recipes}/>
      <CardList recipes={recipes}/>
    </div>
  );
}

export default App;
