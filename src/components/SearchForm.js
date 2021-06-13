import React, {useState} from 'react'
import axios from 'axios'

const SearchForm = ({recipes, getAllRecipes, setRecipes}) => {

  const url = 'http://localhost:3000/';

  const [inputText, setInputText] = useState('');


  const handleChange = e => {
    setInputText(e.target.value);
  }


  const onSubmit = e => {
    e.preventDefault();

    axios.get(`${url}recipes`, { params: {searchText: inputText}})
      .then(response => {
        const data = response.data;
        console.log(data);
        setRecipes(data);
      })
      .catch(error => console.error(`Error: ${error}`));

    // axios call with query params

  }

  // send query (string) to server on Submit
  //



  return (
    <form className="app-searchForm" onSubmit={onSubmit}>
      <input
        className="app-input"
        type="text"
        placeholder="Search Ingredient..."
        value={inputText}
        onChange={handleChange}/>
      <input
        className="app-submit"
        type="submit"
        placeholder="Search Ingredient"/>
    </form>
  )
}

export default SearchForm