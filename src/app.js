'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div>
      <input type='search' placeholder='tap here' />
    </div>
    <div className='user-info'>
      <img src='https://avatars.githubusercontent.com/u/487669?v3' />
      <h1>
        <a href='https://github.com/fdaciuk'>USUARIO APELAO</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositorios: 122</li>
        <li>Seguidores: 10</li>
        <li>Seguindo: 10</li>
      </ul>

      <div className='actions'>
        <button> see repos</button>
        <button>to favorites</button>
      </div>
      <div className='repos'>
        <h2>Repos:</h2>
        <ul>
          <li><a href='#'>repo name</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favorites:</h2>
        <ul>
          <li><a href='#'>repo name</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
