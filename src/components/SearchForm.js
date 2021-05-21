import React from 'react'

const SearchForm = () => {
  return (
    <form className="app-searchForm">
      <input
        type="text"
        placeholder="Search Ingredient..."/>
      <input
        type="submit"
        placeholder="Search"/>
    </form>
  )
}

export default SearchForm