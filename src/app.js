'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />
    <Repos
      className='repos'
      title='respositorios'
      repos={[{
        name: 'Repos Name',
        link: '#'
      }]}
    />
    <Repos
      className='starred'
      title='Favories'
      repos={[{
        name: 'Favorite name',
        link: '#'
      }]}
    />
  </div>
)

export default App
