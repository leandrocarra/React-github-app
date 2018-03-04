'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='tap here'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.PropTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
