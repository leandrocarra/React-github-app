'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (
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

export default AppContent
