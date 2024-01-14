import React from 'react'

const Button = ({name}) => {
  return (
    <>
      <button className='px-3 py-2 mt-3 mx-2 border bg-gray-200  rounded-xl'>
        {name}
        </button>
    </>
  )
}

export default Button
