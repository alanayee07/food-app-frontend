import React, {useState} from 'react'

const SearchForm = () => {

  const [inputText, setInputText] = useState('');

  const handleChange = e => {
    setInputText(e.target.value);
  }

  // const handleSubmit = e => {
  //   e.preventDefault();

  // }


  return (
    <form className="app-searchForm">
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