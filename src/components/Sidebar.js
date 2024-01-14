import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  if (!isMenuOpen) return null 
  return (
    <>
      <div className='shadow-lg col-span-1 p-5'>
        <ul>
          <li>Home</li>
          <li>Music</li>
          <li>Shorts</li>
          <li>Music</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Music</li>
          <li>Music</li>
          <li>Music</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch later</h1>
        <ul>
          <li>Music</li>
          <li>Music</li>
          <li>Music</li>
          <li>Music</li>
        </ul>
      </div>


    </>
  )
}

export default Sidebar
