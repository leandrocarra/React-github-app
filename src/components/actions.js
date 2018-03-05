'use strict'

import React, { PropTypes } from 'react'

const Actions = ({getRepos, getStarred}) => (
  <div className='actions'>
    <button onClick={getRepos}> see repos</button>
    <button onClick={getStarred}>to favorites</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
