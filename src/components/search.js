'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='tap here'
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
)

Search.PropTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
