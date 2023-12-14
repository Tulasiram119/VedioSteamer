import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
        <button className='bg-gray-200 hover:bg-gray-400 m-2 rounded-md md:p-1 px-1'>{name}</button>
    </div>
  )
}

export default Button