import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
    
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body
