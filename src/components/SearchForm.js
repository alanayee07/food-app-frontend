import React, {useState} from 'react'

const SearchForm = ({recipes, getAllRecipes}) => {

  const [inputText, setInputText] = useState('');

  const handleChange = e => {
    setInputText(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    // getAllRecipes();
  }

  // console.log('these are the recipes: ', recipes);


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