import React from 'react'

const Comment = ({data}) => {
    if(data == null)
        return;
    const{name,text,replies} = data
  return (
    <div>
        <h2>{name}</h2>
        <h3>{text}</h3>
        {replies?.map((comment,index)=> <div className='px-4 bg-gray-200 m-3 border border-black' key={index}><Comment data={comment}/></div>)}
    </div>
  )
}

export default Comment